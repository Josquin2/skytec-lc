<script setup lang="ts">
function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}

function onDropdownTitleClick() {
  document.getElementById('dropdown')?.classList.toggle('closed')
}
</script>

<template>
  <div class="education-modal modal-hidden" id="education-modal">
    <div class="education-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/education-blue.svg" alt="" />
            Заявка на обучение
          </div>

          <div class="choose-dropdown">
            <div class="dropdown-title" @click="onDropdownTitleClick()">
              <h2>Текущие обучения</h2>
              <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
            </div>
            <div class="dropdown-common closed" id="dropdown">
              <p>Современный маркетинг</p>
              <p>Реклама в 2024 году</p>
              <p>Ораторское искусство</p>
              <p>Английский язык для начинающих</p>
              <p>Рисование</p>
              <p>Английский язык для продвинутых</p>
              <p>Старый маркетинг</p>
              <p>Реклама в 2032 году</p>
            </div>
          </div>

          <div class="chosen"></div>

          <div class="text">
            <textarea placeholder="Какое обучение хотите пройти?"></textarea>
          </div>
          <button>Отправить</button>
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
