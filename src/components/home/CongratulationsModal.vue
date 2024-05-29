<script setup lang="ts">
import type { User } from '@/api/user'
import { ref } from 'vue'

function onCongratulationsModalClick() {
  document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
}

function onCheckboxAnonClick() {
  document.getElementById('checkbox-anon')?.classList.toggle('clicked')
}

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

const userItem = localStorage.getItem('user')
if (userItem !== null) {
  user.value = JSON.parse(userItem) as User
} else {
  console.log('Пользователь не найден в localStorage')
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
              <input type="text" name="" id="" />
            </div>
            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Желаю..."></textarea>
            </div>
          </div>

          <div class="check">
            <div class="checkbox-button" @click="onCheckboxAnonClick()">
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

          <button><img src="/icons/gift.svg" alt="" />Отправить</button>
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
