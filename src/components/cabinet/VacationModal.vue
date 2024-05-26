<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

// here should be ref check

function onVacationModalClick() {
  document.getElementById('vacation-modal')?.classList.toggle('modal-hidden')
}

function onCheckBoxClick(e: number) {
  if (e == 1 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-2')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    // check = 1
  } else if (e == 2 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-1')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    // check = 2
  }
}
</script>

<template>
  <div class="vacation-modal modal-hidden" id="vacation-modal">
    <div class="vacation-common">
      <div class="background">
        <div class="h-white">
          <div class="left-text">
            <div class="title">
              <img src="/img/cabinet/icons/vacation-blue.svg" alt="" />
              <p>Заявка на отпуск</p>
            </div>
            <div class="cause-of-vacation">
              <div class="checkbox-button" @click="onCheckBoxClick(1)">
                <span class="clicked" id="checkbox-1"></span>
              </div>
              Отпуск за свой счет
            </div>
            <div class="cause-of-vacation">
              <div class="checkbox-button" @click="onCheckBoxClick(2)">
                <span class="" id="checkbox-2"></span>
              </div>
              Ежегодный оплачиваемый отпуск
            </div>
          </div>
          <div class="right-text">
            <div class="title-cal">
              <h4>Начало отпуска:</h4>
              <Calendar />
            </div>
            <div class="title-cal">
              <h4>Окончание отпуска:</h4>
              <Calendar />
            </div>
            <div class="cause">
              <h4>Причина:</h4>
              <input type="text" name="" id="" />
            </div>
            <button>Отправить</button>
          </div>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onVacationModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
