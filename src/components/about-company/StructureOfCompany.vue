<script setup lang="ts">
import type { Structure } from '@/types/Structure'
import StructureWorker from '@/components/about-company/StructureWorker.vue'

const props = defineProps({
  data: Array<Structure>
})

console.log(props.data)
</script>

<template>
  <div class="department-main" id="departments">
    <div class="dep-worker" v-for="one in props.data">
      <div class="upper">
        <h2>{{ one?.title }}</h2>
        <hr />
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
      </div>

      <div class="dep-footer">
        <StructureWorker
          :name="user.firstname + ' ' + user.surname"
          :job="user.position"
          :image="user.avatar"
          v-for="user in one.users"
        />
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
