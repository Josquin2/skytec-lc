<script setup lang="ts">
import { ref } from 'vue'
import { CircleStencil, Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

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
async function uploadImage() {
  const { canvas } = cropperValue.value.getResult()
  const croppedImageSrc = canvas.toDataURL()

  // here should be post things

  // delete this
  const link = document.createElement('a')
  link.href = croppedImageSrc
  link.download = 'cropped-image.png'
  link.click()
  //
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
