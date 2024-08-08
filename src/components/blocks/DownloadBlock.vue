<script setup lang="ts">
import { defineProps } from 'vue'
import { Api } from '@/api/api'

const ApiClass = new Api()

const props = defineProps({
  title: String,
  type: String,
  icon: String,
  url: String
})

async function onDownloadButtonClick() {
  const resp = await ApiClass.getObjects(`download/${props.url}`)
  const link = document.createElement('a')
  link.href = resp?.download
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="download-block">
    <div class="background">
      <div class="h-white">
        <!--  -->

        <div class="title">
          <h1>{{ props.title }} <img src="/icons/download-white.svg" alt="" /></h1>
        </div>

        <div class="buttons">
          <button @click="onDownloadButtonClick()">Скачать</button>
          <a>{{ props.type }}</a>
        </div>
      </div>
      <div class="w-white"></div>
      <div class="full-bg">
        <span class="close-button">
          <img :src="props.icon" alt="" />
        </span>
        <span class="bg-button"></span>
        <span class="bg-w"></span>
        <span class="bg-h"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.download-block {
  width: 33.75vw;
  .background {
    position: absolute;

    .h-white {
      position: absolute;
      display: flex;
      width: 25.31vw;
      height: 248px;
      background-color: #4766af;
      z-index: 3;
      border-radius: 20px 50px 20px 20px;
      flex-direction: column;
      padding: 40px;

      .title {
        display: flex;
        align-items: center;
        h1 {
          font-size: 24px;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
        }

        img {
          margin-left: 8px;
        }
      }

      .buttons {
        margin-top: 16px;
        button {
          width: 5.78vw;
          height: 40px;
          background-color: #fff;
          border: none;
          border-radius: 7px;
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
      background-color: #4766af;
      z-index: 2;
      border-radius: 20px 50px 20px 20px;
    }
    .full-bg {
      overflow: hidden;
      width: 33.75vw;
      height: 248px;
      display: flex;
      position: absolute;
      background-color: #4766af;
      z-index: 1;
      border-radius: 50px;
      align-items: flex-start;
      justify-content: flex-end;

      .close-button {
        cursor: pointer;
        width: 5.57vw;
        height: 5.57vw;
        background-color: #4766af;
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
        width: 10.78vw;
        height: 179px;
        background-color: #fff;
        position: absolute;
        z-index: 0;
        border-radius: 58px;
        margin-top: -45px;
        margin-right: -2.34vw;
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

@media only screen and (max-width: 1700px) {
  .download-block {
    .background {
      .w-white {
        margin-top: 100.5px;
        height: 147.75px;
      }
      .full-bg {
        .bg-button {
          height: 145.25px;
          border-radius: 40px;
        }
      }
    }
  }
}
</style>
