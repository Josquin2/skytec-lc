<script setup lang="ts">
import { defineEmits, ref } from 'vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import DocumentsDropDown from './DocumentsDropDown.vue'
import { FileApi } from '@/api/files'

function onEducationModalClick() {
  document.getElementById('documents-modal')?.classList.toggle('modal-hidden')
}

const textarea = ref('')
const chosenLesson = ref('')
const formData = new FormData()

function chosedDocument(lesson: string) {
  document.getElementById('documents-modal-common')?.classList.add('extended')

  document.getElementById('chosen-info')?.classList.remove('empty')

  chosenLesson.value = lesson
}

// API

const emit = defineEmits(['checkAllRequests'])

let ApiClass = new FileApi()

const token = localStorage.getItem('user')

async function onEducationSendButtonClick() {
  console.log(formData)
  formData.append('Справка', chosenLesson.value)
  formData.append('Комментарий', textarea.value)
  console.log(formData)
  try {
    if (token) {
      await ApiClass.post('application/certificate', formData)
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      emit('checkAllRequests')
      onEducationModalClick()
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="education-modal modal-hidden" id="documents-modal">
    <div class="education-common" id="documents-modal-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/document-blue.svg" alt="" />
            Заказать справку
          </div>

          <DocumentsDropDown @chosedDocument="chosedDocument" />

          <div class="chosen" id="chosen-info">
            <div class="chosen-lesson-title">
              <p>Выбрано:</p>
              <p class="lesson-title">{{ chosenLesson }}</p>
            </div>
          </div>

          <div class="text">
            <textarea
              v-model="textarea"
              :placeholder="
                chosenLesson != ''
                  ? 'Не нашли подходящую справку? Напишите здесь...'
                  : 'Выберите справку!'
              "
            ></textarea>
          </div>
          <button @click="onEducationSendButtonClick()">Заказать</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onEducationModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.education-modal {
  .education-common {
    height: 373px;
  }
  .extended {
    height: 378px;
    .background {
      .h-white {
        height: 433px;
      }
      .w-white {
        height: 378px;
      }
    }
  }
}
</style>
