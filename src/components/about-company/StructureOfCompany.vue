<script setup lang="ts">
import { ref } from 'vue'
import type { Structure } from '@/types/Structure'
import StructureWorker from '@/components/about-company/StructureWorker.vue'

const props = defineProps({
  data: Array<Structure>
})

const showAll = ref<Record<number, boolean>>({})

function toggleShowAll(departmentId: number) {
  showAll.value[departmentId] = !showAll.value[departmentId]
}
</script>

<template>
  <div class="department-main" id="departments">
    <div class="dep-worker" v-for="(one, index) in props.data" :key="index">
      <div class="upper">
        <h2>{{ one?.title }}</h2>
        <hr />
        <StructureWorker
          v-if="one?.department_head != null"
          :name="
            one?.department_head?.name ||
            one?.department_head?.firstname + ' ' + one?.department_head?.surname
          "
          :job="one?.department_head?.position"
          :image="one?.department_head?.avatar"
        />
        <StructureWorker v-else name="не назначен" />
      </div>

      <div class="dep-footer">
        <StructureWorker
          :name="user?.name || user?.firstname + ' ' + user?.surname"
          :job="user?.position"
          :image="user?.avatar"
          v-for="(user, index) in showAll[one.id] ? one.users : one.users.slice(0, 4)"
          :key="index"
        />
      </div>

      <div class="show-more-button" v-show="one?.users?.length > 4">
        <button @click="toggleShowAll(one?.id)">
          {{ showAll[one?.id] ? 'Показать меньше' : 'Показать все' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.department-main {
  margin-top: 22px;
  display: flex;
  gap: 24px;

  .dep-worker {
    width: 22.14vw;
    background-color: #f6f6f6;
    border-radius: 27px;
    .upper {
      border: 1px solid #cccccc;
      border-radius: 27px 27px 0 0;
      padding: 40px 24px;

      hr {
        margin: 0;
        margin-top: 16px;
        margin-bottom: 32px;
      }

      h2 {
        font-size: 20px;
        color: #474747;
        text-transform: uppercase;
      }
    }
    .dep-footer {
      border: 1px solid #cccccc;
      border-radius: 0 0 27px 27px;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .show-more-button {
      display: flex;
      justify-content: center;
      padding: 24px 0px;

      button {
        padding: 8px 16px;
        border: 1px solid #474747;
        border-radius: 12px;
        background-color: transparent;
        color: #474747;
        font-weight: 500;
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .department-main {
    .dep-worker {
      width: 24vw;
    }
  }
}
</style>
