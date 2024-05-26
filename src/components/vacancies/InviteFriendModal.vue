<script setup lang="ts">
function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="invite-modal modal-hidden" id="invite-modal">
    <div class="invite-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <h2>Привести друга!</h2>
            <p>Укажите контактные данные вашего друга</p>
          </div>

          <div class="text">
            <input type="text" name="" id="" placeholder="Имя:" />
            <input type="text" name="" id="" placeholder="Телефон/E-mail:" />
            <input type="text" name="" id="" placeholder="Вакансия:" />
          </div>

          <div class="resume">
            <p>Прикрепить резюме</p>
            <img src="/img/cabinet/icons/file-blue.svg" alt="" />
          </div>

          <div class="my-name">
            <p>Укажите ваши данные</p>
            <input type="text" name="" id="" placeholder="Имя:" />
            <input type="text" name="" id="" placeholder="Фамилия:" />
          </div>

          <button>Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onInviteFriendModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>
