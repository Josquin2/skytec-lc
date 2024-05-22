<script setup lang="ts">
const birthDays = [
  {
    day: '01.11.',
    name: 'Корнеева Наталья',
    job: 'Директор по персоналу'
  },
  {
    day: '02.11.',
    name: 'Смирнов Анатолий',
    job: 'Генеральный директор'
  },
  {
    day: '03.11.',
    name: 'Корнеева Наталья',
    job: 'Директор по персоналу'
  }
]
</script>

<template>
  <div class="right-block">
    <div class="today">
      <div class="congrats">
        <h3>Поздравляем! 🥳</h3>
        <div class="todays-date">
          <h4>Наши именинники сегодня</h4>
          <p>21.09.2023</p>
        </div>
        <div class="who">
          <!-- here should be v-for -->
          <div class="happy-bd-to">
            <img src="" alt="" class="image-of-hbd" />
            <h2 class="name-of-hbd">Иванов Иван</h2>
            <p class="job-title-of-hbd">Менеджер по креативу</p>
          </div>
        </div>
        <button class="congratulations-button">
          <img src="/icons/gift.svg" alt="" /> Поздравить!
        </button>
      </div>
    </div>
    <hr class="border" />
    <div class="next-week">
      <h2 class="other-hbd">Наши именинники на следующей неделе</h2>
      <div class="other-hbd-common" v-for="day in birthDays">
        <p class="date">{{ day.day }}</p>
        <h3 class="name-of-other-hbd">{{ day.name }}</h3>
        <h4 class="job-title-of-other-hbd">{{ day.job }}</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  .right-block {
    width: 13.33vw;
    border: 1px solid #9a9a9a;
    border-radius: 19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.87vw;
    height: max-content;
    .today {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
      .congrats {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 20px;
          width: 9.4vw;
        }
        .todays-date {
          width: 9.4vw;
          h4 {
            font-size: 20px;
            color: #4766af;
          }
          p {
            position: absolute;
            margin-top: -32px;
            margin-left: 80px;
            padding: 0 10px;
            border: 1px solid #46bed6;
            border-radius: 22px;
            color: #4766af;
          }
        }
        .who {
          .happy-bd-to {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .image-of-hbd {
              width: 2.9vw;
              height: 2.9vw;
              border: 1px solid #9a9a9a;
              border-radius: 50%;
            }
            .name-of-hbd {
              font-size: 16px;
              margin-bottom: 0;
              margin-top: 8px;
            }
            .job-title-of-hbd {
              font-size: 16px;
              margin-top: 0;
            }
          }
        }
        .congratulations-button {
          height: 35px;
          width: 8.44vw;
          background-color: #4766af;
          color: #fff;
          border: none;
          border-radius: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          img {
            margin-right: 8px;
          }
        }
      }
    }
    .border {
      background-color: #9a9a9a;
      width: 13.34vw;
      height: 2px;
      opacity: 100%;
      margin-top: 32px;
      margin-bottom: 24px;
    }
    .next-week {
      .other-hbd {
        font-size: 20px;
        color: #4766af;
        margin-top: 0;
        margin-bottom: 24px;
      }
      .other-hbd-common {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 32px;
        .date {
          border-radius: 22px;
          background-color: #dfdfdf;
          color: #fff;
          font-size: 16px;
          padding: 0 8px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .name-of-other-hbd {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .job-title-of-other-hbd {
          font-size: 16px;
          font-weight: 300;
          width: 9.8vw;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
