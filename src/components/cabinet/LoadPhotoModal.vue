<script setup lang="ts">
import { ref } from 'vue'
import { Api } from '@/api/api'
import { CircleStencil, Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}

const imageSrc = ref('')
const cropperValue = ref()

const handleFile = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    imageSrc.value = URL.createObjectURL(target.files[0])
  }
}

// uploading to server

let ApiClass = new Api()
const token = localStorage.getItem('token')
const userLocal = JSON.parse(localStorage.getItem('user') || '')

async function uploadImage() {
  const { canvas } = cropperValue.value.getResult()
  const croppedImageSrc = canvas.toDataURL()

  try {
    if (token) {
      await ApiClass.put(`user?id=${userLocal.id}`, {
        avatar: croppedImageSrc
      })
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      onPhotoChangeModal()
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
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
            <div class="cropper empty-image" v-if="imageSrc.length == 0">Выберите изображение</div>
            <cropper
              v-else
              ref="cropperValue"
              :stencil-component="CircleStencil"
              image-restriction="stencil"
              class="cropper"
              :src="imageSrc"
              :stencil-size="{
                width: 220,
                height: 220
              }"
              :stencil-props="{
                handlers: {},
                movable: false,
                resizable: false,
                aspectRatio: 1
              }"
            />
          </div>
          <div class="buttons-save-choose">
            <label class="choose">
              Выбрать файл <img src="/img/cabinet/icons/file-blue.svg" />
              <input type="file" @change="handleFile" style="display: none" />
            </label>
            <button class="save" @click="uploadImage">Сохранить</button>
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
