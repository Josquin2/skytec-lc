<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import type { User as UserInterface } from '@/types/User'

let userData: Ref<UserInterface[]> = ref([])

onMounted(() => {
  userData.value = JSON.parse(localStorage.getItem('user'));
})

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="load-photo-modal modal-hidden" id="photo-modal">
    <div class="modal-common">
      <div class="background">
        <span class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/user-gray.svg" alt="" />
            Изменить фото профиля
          </div>
          <div class="photo-change">
            <span class="photo-squad">
              <span class="photo-circle"></span>
            </span>
            <img style="width:240px;" :src="userData?.avatar" alt="" />
          </div>
          <div class="buttons-save-choose">
            <button class="choose">
              Выбрать файл <img src="/img/cabinet/icons/file-blue.svg" />
            </button>
            <button class="save">Сохранить</button>
          </div>
        </span>
        <span class="w-white"></span>
        <span class="full-bg">
          <span class="close-button" @click="onPhotoChangeModal()"> </span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </span>
      </div>
    </div>
  </div>
</template>
