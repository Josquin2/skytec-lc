<script setup lang="ts">
import type { User } from '@/types/User'
import { ref, defineProps } from 'vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { Api } from '@/api/api'

const props = defineProps({
  toWho: String,
  id: Number
})

function onCongratulationsModalClick() {
  document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
}

function onCheckboxAnonClick() {
  const checkbox = document.getElementById('checkbox-anon')?.classList
  if (checkbox) {
    if (checkbox.contains('clicked')) {
      checkbox.remove('clicked')
      anon.value = false
    } else {
      checkbox.add('clicked')
      anon.value = true
    }
  }
}

const allSurprises = ['cake', 'cap', 'badge', 'nothing']

const previousGift = ref(4)

function onGiftClick(value: number) {
  const previousElement = document.getElementById(`gift-check${previousGift.value}`)
  const currentElement = document.getElementById(`gift-check${value}`)

  if (previousElement instanceof HTMLInputElement) {
    previousElement.checked = false
  }

  if (currentElement instanceof HTMLInputElement) {
    currentElement.checked = true
  }

  previousGift.value = value
}

let user = ref<User | null>(null)

const toWho = ref('')
const wish = ref('')
const anon = ref(false)

// API

const token = localStorage.getItem('token')

let ApiClass = new Api()

async function sendPresent() {
  try {
    if (token) {
      await ApiClass.post(`birthdays/send`, {
        user_id: props.id,
        message: wish.value,
        anonymous: anon.value,
        surprise: allSurprises[previousGift.value - 1]
      })
      toast('Поздравление отправлено!', { position: toast.POSITION.BOTTOM_RIGHT })
      onCongratulationsModalClick()
    }
  } catch (error) {
    toast('Ошибка при отправке поздравления!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="congratulations-modal modal-hidden" id="congratulations-modal">
    <div class="congratulations-common">
      <div class="background">
        <div class="h-white">
          <div class="title">Поздравить! 🥳</div>

          <div class="text">
            <div>
              <span>От кого:</span>
              <input type="text" name="" id="" v-if="user" :value="user.name" />
            </div>
            <div>
              <span>Кому:</span>
              <input type="text" class="to" :value="props.toWho" />
            </div>
            <div>
              <textarea placeholder="Желаю..." v-model="wish"></textarea>
            </div>
          </div>

          <div class="check" @click="onCheckboxAnonClick()">
            <div class="checkbox-button">
              <span id="checkbox-anon"></span>
            </div>
            Поздравить анонимно
          </div>
          <div class="present">
            <h4>Выбрать подарок:</h4>
            <div class="presents-common">
              <div class="gift" @click="onGiftClick(1)">
                <input type="checkbox" id="gift-check1" />
                <img src="/img/main-page/gift-3.png" alt="" />
              </div>
              <div class="gift" @click="onGiftClick(2)">
                <input type="checkbox" id="gift-check2" />
                <img src="/img/main-page/gift-2.png" alt="" />
              </div>
              <div class="gift" @click="onGiftClick(3)">
                <input type="checkbox" id="gift-check3" />
                <img src="/img/main-page/gift-1.png" alt="" />
              </div>
              <div class="gift last" @click="onGiftClick(4)">
                <input type="checkbox" checked id="gift-check4" />
                <p>Без подарка</p>
              </div>
            </div>
          </div>

          <button @click="sendPresent"><img src="/icons/gift.svg" alt="" />Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onCongratulationsModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>
