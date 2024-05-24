<script setup lang="ts">
function onCalendarImageClick() {
  document.getElementById('calendar')?.classList.toggle('cal-closed')
}
</script>

<template>
  <div class="calendar">
    <div class="closed">
      <input type="text" disabled />
      <img src="/img/cabinet/icons/calendar-blue.svg" alt="" @click="onCalendarImageClick()" />
      <div class="pop-up-cal cal-closed" id="calendar">
        <div class="upper">
          <span> '<-'</span>
          <div class="year-month">
            <p>Декабрь</p>
            <p>2024</p>
          </div>
          <span> '->'</span>
        </div>
        <div class="cal-body">
          <div class="day-of-the-week">
            <p>Пн</p>
            <p>Вт</p>
            <p>Ср</p>
            <p>Чт</p>
            <p>Пт</p>
            <p>Сб</p>
            <p>Вс</p>
          </div>
          <div class="numbers">
            <p class="one-num"></p>
            <!-- create class today with color: blue -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.calendar {
  .closed {
    display: flex;
    align-items: center;
    input {
      width: 14.79vw;
      height: 56px;
      border-radius: 10px;
      border: 1px solid #d6d6d6;
      color: #4766af;
      padding-left: 16px;
      background-color: #ffffff;
    }
    img {
      cursor: pointer;
      position: absolute;
      margin-left: 12.71vw;
    }

    .pop-up-cal {
      position: absolute;
      background-color: #ffffff;
      width: 16.72vw;
      height: 336px;
    }

    .cal-closed {
      display: none;
    }
  }
}
</style>
