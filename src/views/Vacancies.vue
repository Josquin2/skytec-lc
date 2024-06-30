<script setup lang="ts">
import Arrow from '@/components/icons/Arrow.vue'
import InviteFriendModal from '@/components/vacancies/InviteFriendModal.vue'

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="vacancies-block">
    <div class="left-side">
      <div class="background">
        <div class="h-white">
          <!--  -->

          <h1>Вакансии SKY</h1>
          <a href="">Смотреть актуальные вакансии на сайте hh.ru</a>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
    <div class="right-side">
      <img src="/img/vacancies/photo.png" alt="" />
      <h3 @click="onInviteFriendModalClick()">
        Приведи друга в SkyAlliance и получи бонусы <Arrow />
      </h3>
    </div>

    <!-- modals -->

    <InviteFriendModal />
  </div>
</template>
