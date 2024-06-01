<script setup lang="ts">
import { defineEmits, defineProps, ref, computed } from 'vue'

function onCalendarImageClick() {
  if (props.idCalendar) {
    document.getElementById(props.idCalendar)?.classList.toggle('cal-closed')
  }
}

const props = defineProps({
  idCalendar: String,
  idInput: String,
  placeholder: {
    type: String,
    required: false
  }
})

const allMonths = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
const date = new Date()
const currentDay = date.getDate()
const currentMonth = date.getMonth()
const chosedMonth = ref(currentMonth)
const currentYear = date.getFullYear()
const chosedYear = ref(currentYear)
const lastDayOfMonth = computed(() =>
  ref(new Date(chosedYear.value, chosedMonth.value + 1, 0).getDate())
)

const firstFewDaysOfMonth = computed(() =>
  ref(new Date(chosedYear.value, chosedMonth.value, 0).getDay())
)

const a = ref(
  new Date(chosedYear.value, chosedMonth.value - 1, 0).getDate() - Number(firstFewDaysOfMonth.value)
)

function onNextMonthClick() {
  if (chosedMonth.value == 11) {
    chosedMonth.value = 0
    chosedYear.value += 1
  }
  chosedMonth.value += 1
}
function onPreviousMonthClick() {
  if (chosedMonth.value == 0) {
    chosedMonth.value = 11
    chosedYear.value -= 1
  }
  chosedMonth.value -= 1
}

function onOneDateClick(date: number) {
  if (props.idInput && props.idCalendar) {
    const calendarInput = document.getElementById(props.idInput) as HTMLInputElement
    if (calendarInput) {
      calendarInput.value = `${date.toString().padStart(2, '0')}/${(chosedMonth.value + 1).toString().padStart(2, '0')}/${chosedYear.value}`
      emit(
        'chosedDate',
        `${chosedYear.value}-${(chosedMonth.value + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`
      )
      document.getElementById(props.idCalendar)?.classList.toggle('cal-closed')
    }
  }
}

const emit = defineEmits(['chosedDate'])
</script>

<template>
  <div class="calendar">
    <div class="closed" @click="onCalendarImageClick()">
      <input readonly type="text" :id="props.idInput" :placeholder="props.placeholder" />
      <img src="/img/cabinet/icons/calendar-blue.svg" alt="" />
    </div>
    <div class="pop-up-cal cal-closed" :id="props.idCalendar">
      <div class="upper">
        <span class="calendar-arrow" @click="onPreviousMonthClick()"></span>
        <div class="year-month">
          <p>{{ allMonths[chosedMonth] }}</p>
          <p>{{ chosedYear }}</p>
        </div>
        <span class="calendar-arrow arrow-right" @click="onNextMonthClick()"></span>
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
          <p class="one-num" v-for="firstFew in firstFewDaysOfMonth.value"></p>
          <p
            :class="
              a == currentDay && currentMonth === chosedMonth && currentYear == chosedYear
                ? 'one-num today'
                : 'one-num'
            "
            @click="onOneDateClick(a)"
            v-for="a in lastDayOfMonth.value"
          >
            {{ a }}
          </p>
          <!-- create class today with color: blue -->
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
      cursor: default;
      width: 14.79vw;
      height: 56px;
      border-radius: 10px;
      border: 1px solid #d6d6d6;
      color: #4766af;
      padding-left: 16px;
      background-color: #ffffff;
    }
    input:focus {
      outline-width: 0;
    }
    img {
      position: absolute;
      margin-left: 12.71vw;
    }
  }

  .pop-up-cal {
    border: 1px solid #cccccc;
    border-radius: 10px;
    z-index: 20;
    position: absolute;
    background-color: #ffffff;
    width: max-content;
    height: max-content;
    padding: 24px;
    margin-top: 10px;
    margin-left: -16px;

    .upper {
      display: flex;
      justify-content: space-between;

      .year-month {
        display: flex;
        gap: 6px;
      }

      .calendar-arrow {
        width: 24px;
        height: 24px;
        cursor: pointer;
        background: url(/img/cabinet/icons/calendar-arrow-black.svg) no-repeat;
      }
      .arrow-right {
        transform: rotate(180deg);
      }
      .calendar-arrow:hover {
        background: url(/img/cabinet/icons/calendar-arrow-blue.svg) no-repeat;
      }
    }
    .cal-body {
      .day-of-the-week {
        display: flex;
        justify-content: space-between;
        gap: 8px;

        p {
          width: 32px;
          height: 32px;
          color: #4766af;
          margin: 0;
        }
      }

      .numbers {
        margin-top: 16px;

        display: grid;

        grid-template-columns: repeat(7, minmax(0, 1fr));

        .one-num {
          cursor: pointer;
          width: 32px;
          height: 32px;
          margin: 0;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        .one-num:hover {
          color: #4766af;
        }

        .today {
          background-color: #4766af;
          color: #fff !important;
        }
      }
    }
  }

  .cal-closed {
    display: none;
  }
}
</style>
