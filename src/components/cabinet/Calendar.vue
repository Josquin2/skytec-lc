<template>
  <div class="calendar">
    <div class="closed">
      <input type="text" disabled />
      <img src="/img/cabinet/icons/calendar-blue.svg" alt="" />
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
  }
}
</style>
