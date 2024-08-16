<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
</script>

<template>
  <div class="remote-access-block additional">
    <div class="left-instruction">
      <DownloadBlock
        title="Инструкция по настройке удаленного доступа"
        type="Для iOS"
        icon="/icons/apple-white.svg"
        url="instructions-ios"
      />
    </div>
    <div class="right-instruction">
      <DownloadBlock
        title="Инструкция по настройке удаленного доступа"
        type="Для Android"
        icon="/icons/android-white.svg"
        url="instructions-android"
      />
    </div>
  </div>
</template>

<style lang="scss">
.remote-access-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 524px;
  .left-instruction {
    height: 250px;
  }

  .right-instruction {
    .download-block {
      .background {
        .h-white {
          background-color: #46bed6;
        }
        .w-white {
          background-color: #46bed6;
        }
        .full-bg {
          background-color: #46bed6;

          .close-button {
            background-color: #46bed6;
          }
        }
      }
    }
  }
}
</style>
