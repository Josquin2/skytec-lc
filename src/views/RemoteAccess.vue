<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
</script>

<template>
  <div class="remote-access-block">
    <div class="left-instruction">
      <DownloadBlock
        title="Инструкция по настройке удаленного доступа"
        type="Для iOS"
        icon="/icons/apple-white.svg"
      />
    </div>
    <div class="right-instruction">
      <DownloadBlock
        title="Инструкция по настройке удаленного доступа"
        type="Для Android"
        icon="/icons/android-white.svg"
      />
    </div>
  </div>
</template>

<style lang="scss">
.remote-access-block {
  padding: 139px 15.63vw;
  height: 90vh;
  display: flex;
  gap: 24px;

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
