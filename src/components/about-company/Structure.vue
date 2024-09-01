<script setup lang="ts">
import StructureWorker from '@/components/about-company/StructureWorker.vue'
import StructureOfCompany from '@/components/about-company/StructureOfCompany.vue'
import { ref, onMounted, type Ref, watch } from 'vue'
import type { Structure } from '@/types/Structure'
import { Api } from '@/api/api'
import type { User } from '@/types/User'
import { onUserClick } from '../routing-functions'

const props = defineProps({
  name: String,
  boss: Object
})

const ApiClass = new Api()
const cutted: Ref<Structure[][]> = ref([])
const bosses: Ref<User[]> = ref([])

const currentPage = ref(0)

onMounted(() => {
  fetchData()
  getBosses()
})

watch(
  () => props?.name,
  () => {
    fetchData()
    getBosses()
  }
)

async function fetchData() {
  try {
    if (props?.name) {
      cutted.value = []
      console.log(props.name)
      const response = await ApiClass.getObjects(`departments/${props.name}`)
      const array = response
      cutForPages(array)
      console.log(array)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

async function getBosses() {
  try {
    if (props?.name) {
      bosses.value = []
      const response = await ApiClass.getObjects(`key-persons/${props?.name}`)
      console.log(response)
      bosses.value = response
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function cutForPages(allBlogs: Array<any>) {
  let n = 3
  for (let i = 0; i < allBlogs.length; i += n) {
    cutted.value.push(allBlogs.slice(i, i + n))
  }
}

function nextPage() {
  if (cutted.value.length > currentPage.value + 1) {
    onPageClick(currentPage.value + 1)
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    onPageClick(currentPage.value - 1)
  }
}

function onPageClick(index: number) {
  currentPage.value = index
}

// checks if department head is in users array
function usersFilter(arr: Array<Structure>): Array<Structure> {
  for (let i = 0; i < arr?.length; i++) {
    for (let j = 0; j < arr[i]?.users?.length; j++) {
      if (arr[i]?.users[j]?.id == arr[i]?.department_head?.id) {
        arr[i]?.users?.splice(j, 1)
      }
    }
  }
  return arr
}
</script>

<template>
  <div class="structure" id="company-structure">
    <div class="structure-header">
      <div class="gradient-line"></div>
      <h1>Структура</h1>
    </div>
    <div class="control">
      <h2>Управление</h2>
      <hr />
      <div class="control-workers" v-if="bosses && bosses?.length > 0">
        <StructureWorker
          v-for="(boss, index) in bosses"
          :key="index"
          :name="boss?.name"
          :job="boss?.position"
          :image="boss?.avatar"
          @click="onUserClick(boss?.id)"
        />
      </div>
      <div class="control-workers" v-else>
        <h4 style="color: #474747">Управляющие не указаны</h4>
      </div>
    </div>
    <div class="divider-arrow">
      <div class="up">
        <span></span>
      </div>
      <div class="down">
        <span></span>
      </div>
    </div>
    <div class="page-arrows">
      <div
        class="one-page-arrow"
        @click="prevPage()"
        :class="{ 'cannot-click': currentPage - 1 < 0 }"
      ></div>

      <span
        class="default"
        :class="{ 'active-stucture-page': index == currentPage }"
        @click="onPageClick(index)"
        v-for="(page, index) in cutted.length"
        :key="index"
      ></span>

      <div
        class="right one-page-arrow"
        :class="{ 'cannot-click': currentPage + 2 > cutted.length }"
        @click="nextPage()"
      ></div>
    </div>
    <StructureOfCompany :data="usersFilter(cutted[currentPage])" />
  </div>
</template>
<style lang="scss">
.structure {
  margin-top: 64px;
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  .structure-header {
    .gradient-line {
      width: 88px;
      height: 4px;
    }
    h1 {
      font-size: 20px;
      color: #474747;
    }
  }
  .control {
    align-self: center;
    width: min-content;
    height: 308px;
    padding: 48px 28px;
    background-color: #f6f6f6;
    border-radius: 27px;
    h2 {
      font-size: 20px;
      color: #474747;
      text-transform: uppercase;
    }

    .control-workers {
      padding: 48px 56px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
    }
  }
  .divider-arrow {
    margin-top: 16px;
    .up {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        height: 48px;
        width: 1px;
        background-color: #cccccc;
      }
    }
    .down {
      display: flex;
      span {
        height: 36px;
        width: 68.75vw;
        border: 1px solid #cccccc;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
      }
    }
  }

  .page-arrows {
    margin-top: 40px;
    margin-bottom: 72px;
    align-self: center;
    display: flex;
    align-items: center;

    .one-page-arrow {
      margin-left: 24px;
      margin-right: 24px;
      cursor: pointer;
      width: 32px;
      height: 26px;
      background: url(/img/about-company/arrow-blue.svg) no-repeat;
    }

    .cannot-click {
      cursor: default;
      background: url(/img/about-company/arrow-gray.svg) no-repeat;
    }

    .right {
      rotate: 180deg;
    }

    span {
      width: 8px;
      height: 8px;
      background-color: #dfdfdf;
      border-radius: 50%;
      margin-left: 8px;
      margin-right: 8px;
    }

    .active-stucture-page {
      cursor: default;
      background-color: #a9a9a9;
    }
    .default {
      cursor: pointer;
    }
  }
}
</style>
