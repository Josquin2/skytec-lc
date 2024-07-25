<script setup lang="ts">
import { Api } from '@/api/api'
import { type Ref, defineEmits, ref, onMounted, computed, nextTick, watch } from 'vue'
import type { Blog } from '@/types/Blog'

let ApiClass = new Api()

const props = defineProps({
  category: {
    type: Number,
    required: false
  }
})

const allCategories: Ref<Blog[]> = ref([])
const chosedCategory = ref('Выберите категорию')
const searchTerm = ref('')
const emit = defineEmits(['chosedCategory'])

onMounted(async () => {
  const response = await ApiClass.getObjects(`articles/categories`)
  console.log(response)
  allCategories.value = response
  //   console.log(allBlogs.value)
})

watch(
  props,
  (newProps) => {
    if (newProps.category) {
      chosedCategory.value = allCategories.value[newProps.category - 1].title
    }
  },
  { immediate: true }
)

function onDropdownClick() {
  document.getElementById('dd-extended')?.classList.toggle('closed')
  nextTick(() => {
    const input = document.getElementById('search-input')
    if (input) input.focus()
  })
}

function onCategoryClick(title: string, id: number) {
  chosedCategory.value = title
  emit('chosedCategory', id)
  onDropdownClick()
}

const filteredCategories = computed(() => {
  if (searchTerm.value) {
    return allCategories.value.filter((category: any) =>
      category.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  } else {
    return allCategories.value
  }
})
</script>

<template>
  <div class="categories-dropdown">
    <div class="dd-regular" @click="onDropdownClick">
      <p>{{ chosedCategory }}</p>
    </div>
    <div id="dd-extended" class="dd-extended closed">
      <input
        id="search-input"
        v-model="searchTerm"
        type="text"
        placeholder="Поиск по категориям..."
        class="dd-search"
      />
      <p
        v-for="(category, index) in filteredCategories"
        :key="index"
        @click="onCategoryClick(category?.title, category.id)"
      >
        {{ category?.title }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.categories-dropdown {
  display: flex;
  flex-direction: column;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  .dd-regular {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 56px;
    padding-left: 16px;
    p {
      margin: 0;
      color: #474747;
    }
  }
  .closed {
    display: none;
  }
  .dd-extended {
    height: max-content;
    max-height: 50vh;
    position: absolute;
    z-index: 50;
    background-color: #ffffff;
    width: 45.16vw;
    padding: 16px;
    border: 1px solid #9a9a9a;
    border-radius: 10px;
    overflow-y: scroll;

    .dd-search {
      width: 43.49vw;
      padding-left: 0;
      border: none;
      margin-top: 0;
    }

    p {
      cursor: pointer;
      color: #474747;
      font-size: 16px;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .categories-dropdown {
    .dd-extended {
      width: 60vw;
    }
  }
}
</style>
