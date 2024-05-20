import { RouterLink } from 'vue-router';
<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <img src="/src/assets/img/logo-white.png" alt="" />
        <div class="links d-flex">
          <p class="footer-sections" style="font-weight: 500">Разделы</p>
          <div class="line"></div>
          <div class="common-links">
            <router-link to="/" @click="scrollToTop">Главная</router-link>
            <a href="">Команда</a>
            <a href="">Направления</a>
            <router-link to="/about" @click="scrollToTop">Кто мы</router-link>
            <router-link to="/contacts" @click="scrollToTop">Контакты</router-link>
            <a href="">Обсудить проект</a>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="d-flex justify-content-between footer-other-info" style="margin-left: 6px">
        <div class="copyright">© 2018-2023 SkyTeck Media</div>

        <div>
          <div class="d-flex footer-mobile-email">
            <div class="d-flex align-items-center">
              <img src="/src/assets/icons/phone-footer.svg" alt="" />
              <p>8 495 660-47-47</p>
            </div>
            <div class="d-flex justify-content-around">
              <div class="emails">
                <div class="d-flex align-items-center">
                  <img src="/src/assets/icons/email-footer.svg" alt="" />
                  <p>alexander.ludanniy@skytecmedia.ru</p>
                </div>
                <div class="d-flex align-items-center">
                  <img src="/src/assets/icons/email-footer.svg" alt="" />
                  <p>reception@skytecmedia.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo(0, 0)
}
</script>
