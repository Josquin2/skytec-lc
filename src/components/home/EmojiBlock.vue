<script setup lang="ts">
import { defineProps } from 'vue'
import type { Emoji } from '@/types/news/News'

function onAllEmojisClick() {
  document.getElementById(`extended-icons-${props.id}`)?.classList.toggle('closed')
}

const props = defineProps({
  emoji: Array<Emoji>,
  id: Number
})
</script>

<template>
  <div class="emoji-block">
    <div class="heart-icon">
      <button class="like-button" @click="onAllEmojisClick">
        <img src="/icons/like-button.svg" alt="" />
      </button>
    </div>
    <div class="extended-icons closed" :id="'extended-icons-' + props.id">
      <div
        class="one-icon"
        v-for="(icon, index) in props.emoji"
        :key="index"
        @click="$emit('emojiClick', icon.id)"
      >
        <img :src="icon?.image" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.emoji-block {
  .closed {
    display: none !important;
  }
  .extended-icons {
    position: absolute;
    width: max-content;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 16px 8px;
    position: absolute;
    margin-top: -192px;
    margin-left: -96px;
    background-color: #ffffff;
    z-index: 20;
    border: 1px solid #e1e1e1;
    border-radius: 19px;
    padding: 16px;

    .one-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(1.25);
      }
    }
  }
  .extended-icons:before,
  .extended-icons:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 17px solid #ffffff;
    margin-left: -7px;
    margin-bottom: -16px;
    z-index: 11;
  }

  .extended-icons:before {
    border-top-color: #e1e1e1;
    margin-left: -7px;
    margin-bottom: -18px;
    z-index: 10;
  }
}
</style>
