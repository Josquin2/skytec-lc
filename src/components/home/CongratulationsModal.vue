<script setup lang="ts">
function onCongratulationsModalClick() {
  document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
}

function onCheckboxAnonClick() {
  document.getElementById('checkbox-anon')?.classList.toggle('clicked')
}
</script>

<template>
  <div class="congratulations-modal modal-hidden" id="congratulations-modal">
    <div class="congratulations-common">
      <div class="background">
        <div class="h-white">
          <div class="title">Поздравить! 🥳</div>

          <div class="text">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
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
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-3.png" alt="" />
              </div>
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-2.png" alt="" />
              </div>
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-1.png" alt="" />
              </div>
              <div class="gift last">
                <input type="checkbox" />
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
