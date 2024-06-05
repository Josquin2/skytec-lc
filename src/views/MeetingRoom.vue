<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'

import { onMainPageClick } from '@/components/routing-functions'

const route = useRoute()

function onBlogClick() {
  const login = route.params.login
  router.push({ name: 'all-blogs', params: { login: login } })
}
</script>

<template>
  <div class="meeting-room-block">
    <div class="left-block">
      <DownloadBlock
        title="Инструкция по настройке бронирования переговорных комнат"
        type="PDF"
        icon="/img/instructions/settings-white.svg"
      />
    </div>
    <div class="right-block">
      <div class="building-photo">
        <img src="/img/instructions/building.png" alt="" />
      </div>
      <div class="other-buttons">
        <div class="blog" @click="onBlogClick()">
          <span></span>
          <h2>Блог</h2>
        </div>
        <div class="main-page-and-photo">
          <div class="main-common" @click="onMainPageClick()">
            <span></span>
            <h2>на главную</h2>
          </div>
          <div class="image-second">
            <img src="/img/instructions/people-working.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.meeting-room-block {
  padding: 137px 15.63vw;
  height: 90vh;

  display: flex;
  gap: 24px;

  .right-block {
    display: flex;
    border: none;
    gap: 24px;

    .building-photo {
      border: none;
      border-radius: 10px;
      height: 248px;
    }
    .other-buttons {
      display: flex;
      flex-direction: column;
      width: 16.25vw;
      height: 248px;
      gap: 16px;

      .blog {
        cursor: pointer;
        height: 116px;
        background-color: #f6f6f6;
        border: none;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 16px;

        h2 {
          color: #474747;
          font-size: 14px;
          text-transform: uppercase;
          margin: 0;
          align-self: flex-start;
          transition: 0.2s;
        }

        span {
          width: 24px;
          height: 24px;
          align-self: flex-end;
          background: url(/img/instructions/arrow-black.svg) no-repeat;
          transition: 0.3s;
        }
      }

      .blog:hover {
        h2 {
          color: #4766af;
        }
        span {
          transform: rotate(45deg);
          background: url(/img/instructions/arrow-blue.svg);
        }
      }
      .main-page-and-photo {
        display: flex;
        gap: 16px;
        height: 116px;
        .main-common {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 7.71vw;
          background-color: #f6f6f6;
          border: none;
          border-radius: 10px;
          padding: 16px;

          h2 {
            color: #474747;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0;
            align-self: flex-start;
            transition: 0.2s;
          }

          span {
            width: 24px;
            height: 24px;
            align-self: flex-end;
            background: url(/img/instructions/arrow-black.svg) no-repeat;
            transition: 0.3s;
          }
        }
        .image-second {
          width: 7.71vw;
          overflow: hidden;
          border-radius: 10px;
        }
        .main-common:hover {
          h2 {
            color: #4766af;
          }
          span {
            transform: rotate(45deg);
            background: url(/img/instructions/arrow-blue.svg);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .meeting-room-block {
    padding: 137px 12vw;
    .left-block {
      .download-block {
        .background {
          .h-white {
            .title {
              h1 {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
