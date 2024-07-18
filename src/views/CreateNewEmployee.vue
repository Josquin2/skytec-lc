<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'
import { ref } from 'vue'

import { FileApi } from '@/api/files'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const name = ref('')
const date = ref('')
const subdivision = ref('')
const entity = ref('')
const jobTitle = ref('')
const supervisor = ref('')
const workstationRequirements = ref('')

let ApiClass = new FileApi()

const formData = new FormData()

async function onSendButtonClick() {
  const token = localStorage.getItem('user') || ''
  const permissions = JSON.parse(localStorage.getItem('permissions') || '')

  if (token && permissions['users.create']) {
    formData.append('data[ФИО]', name.value)
    formData.append('data[Дата выхода сотрудника]', date.value)
    formData.append('data[Подразделение]', subdivision.value)
    formData.append('data[Юр. Лицо]', entity.value)
    formData.append('data[Должность]', jobTitle.value)
    formData.append('data[Руководитель]', supervisor.value)
    formData.append('data[Требования к компьютеру и рабочему месту]', workstationRequirements.value)

    try {
      await ApiClass.post('user-create', formData)
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
    } catch (error) {
      toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
      console.error(error)
    }
  } else {
    toast('Вы не можете создать пользователя!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
}
</script>

<template>
  <div class="create-new-employee-block">
    <div class="create-header">
      <h1>Создать учетную запись для нового сотрудника</h1>
      <h2>Укажите данные сотрудника</h2>
    </div>
    <div class="create-body">
      <input type="text" v-model="name" placeholder="ФИО:" />

      <Calendar
        @chosedDate="(dateToSend) => (date = dateToSend)"
        id-calendar="new-employee-calendar"
        id-input="new-employee-input"
        placeholder="Дата выхода сотрудника:"
      />
      <input type="text" v-model="subdivision" placeholder="Подразделение:" />
      <input type="text" v-model="entity" placeholder="Юр. Лицо:" />
      <input type="text" v-model="jobTitle" placeholder="Должность:" />
      <input type="text" v-model="supervisor" placeholder="Руководитель:" />
      <textarea
        v-model="workstationRequirements"
        placeholder="Требования к компьютеру и рабочему месту:"
      ></textarea>
    </div>
    <div class="create-button">
      <button @click="onSendButtonClick()">Отправить</button>
    </div>
  </div>
</template>

<style lang="scss">
.create-new-employee-block {
  padding: 121px 33.18vw 131px 33.18vw;

  .create-header {
    h1 {
      font-size: 20px;
      color: #4766af;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      margin: 0;
    }
  }
  .create-body {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    .calendar {
      .closed {
        input {
          width: 33.59vw;
        }
        img {
          margin-left: 31.5vw;
          margin-top: -12px;
        }
      }

      .pop-up-cal {
        width: max-content;
        margin-left: 0;
        margin-top: 0;
      }
    }

    input {
      height: 56px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding-left: 16px;
      margin-bottom: 16px;
    }
    input:focus {
      outline-width: 0;
    }

    textarea {
      resize: none;
      height: 98px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding: 16px;
    }
    textarea:focus {
      outline-width: 0;
    }
  }
  .create-button {
    button {
      margin-top: 16px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border: none;
      border-radius: 10px;
      height: 56px;
      width: 33.59vw;
      color: #fff;
    }
  }
}
</style>
