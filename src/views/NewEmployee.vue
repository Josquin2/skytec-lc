<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

function onCreateNewEmployeeClick() {
  const login = route.params.login
  router.push({ name: 'create-new-employee', params: { login: login } })
}
</script>

<template>
  <div class="new-employee-block">
    <DownloadBlock title="Welcome-book" type="PDF" icon="/icons/file-white.svg" />
    <div class="create">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <h1>Создать учетную запись для сотрудника</h1>
          </div>

          <div class="buttons">
            <button @click="onCreateNewEmployeeClick()">
              Создать учетную запись для нового сотрудника
            </button>
          </div>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button">
            <img src="/icons/people-white.svg" alt="" />
          </span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.new-employee-block {
  padding: 137px 15.63vw 0 15.63vw;
  height: 90vh;
  display: flex;
  gap: 24px;

  .create {
    width: 33.75vw;
    .background {
      position: absolute;

      .h-white {
        position: absolute;
        display: flex;
        width: 25.31vw;
        height: 248px;
        background-color: #46bed6;
        z-index: 3;
        border-radius: 20px 50px 20px 20px;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px 0 24px 40px;

        .title {
          h1 {
            font-size: 24px;
            color: #fff;
            text-transform: uppercase;
            margin: 0;
            width: 16.9vw;
          }
        }

        .buttons {
          margin-top: 16px;
          button {
            width: 24.06vw;
            height: 56px;
            background-color: #fff;
            border: none;
            border-radius: 10px;
            margin-right: 8px;
            color: #4766af;
          }
          a {
            width: 20.05vw;
            text-decoration: none;
            font-size: 16px;
            border: 1px solid #fff;
            border-radius: 10px;
            color: #fff;
            margin: 0;
            padding: 8px 20px;
            margin-top: 16px;
          }
        }
      }
      .w-white {
        margin-top: 134px;
        position: absolute;
        display: flex;
        width: 33.75vw;
        height: 114px;
        background-color: #46bed6;
        z-index: 2;
        border-radius: 20px 50px 20px 20px;
      }
      .full-bg {
        overflow: hidden;
        width: 33.75vw;
        height: 248px;
        display: flex;
        position: absolute;
        background-color: #46bed6;
        z-index: 1;
        border-radius: 50px;
        align-items: flex-start;
        justify-content: flex-end;

        .close-button {
          cursor: pointer;
          width: 107px;
          height: 107px;
          background-color: #46bed6;
          margin-right: 16px;
          margin-top: 0px;
          border-radius: 50%;
          display: flex;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-button {
          width: 207px;
          height: 179px;
          background-color: #fff;
          position: absolute;
          z-index: 0;
          border-radius: 58px;
          margin-top: -45px;
          margin-right: -45px;
        }
        .bg-w {
          width: 150px;
          height: 55px;
          background-color: #fff;
          position: absolute;
          margin-right: 100px;
        }
        .bg-h {
          margin-top: 100px;
          width: 55px;
          height: 150px;
          background-color: #fff;
          position: absolute;
        }
      }
    }
  }
}
</style>
