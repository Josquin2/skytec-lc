<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Ref } from 'vue'
import type { News } from '@/types/news'

import { watch, ref, onMounted } from 'vue'
import { Api } from '@/api/api'
let ApiClass = new Api()
const data: Ref<News[]> = ref([])

// // Поиск новости по названию (title)
// onMounted(async () => {
//   data.value = await ApiClass.getObjects(`news?title=${route.params.title}`)
//   console.log(data.value)
// })

const route = useRoute()

// title новости, по которому поиск конкретной новости, взял из url
const title = route.params.title

// Комментарий

const currentComment = ref('')

const sendButton = ref(false)

// watch на кнопку отправки сообщения
watch(
  () => currentComment.value,
  (newCommentValue: string) => {
    if (newCommentValue.length > 0) {
      sendButton.value = true
      console.log(sendButton.value)
    }
  }
)
</script>

<template>
  <div class="news-common">
    <div class="news-header">
      <div class="about-news">
        <h4 class="hashtag">#Новости SKY</h4>
        <p class="time">21.09.2023</p>
      </div>
      <div class="views"><img src="/icons/eye.svg" alt="" />200</div>
    </div>
    <div class="news-body">
      <h1 class="news-title">Запуск портала</h1>
      <p class="regular-text">
        "Инновационные маркетинговые стратегии подтверждают свою эффективность! Исследования
        показывают, что акцент на социальных сетях увеличивает вовлеченность
        аудитории.Персонализация рекламы на основе данных покупателей — главный тренд в современном
        маркетинге, обеспечивая более тесное взаимодействие между брендами и потребителями." В
        условиях быстро меняющегося мира маркетинг и реклама продолжают эволюционировать,
        адаптируясь к требованиям современных рыночных условий. Сегодняшние потребители стали более
        осведомленными, требовательными и ориентированными на ценности. В ответ на эти изменения
        компании пересматривают свои стратегии и тактики маркетинга. Одним из ключевых направлений
        становится переход от традиционной рекламы к контент-маркетингу, где акцент делается на
        создании ценного и информативного контента для аудитории.
      </p>
    </div>
    <div class="likes">
      <button class="like-button">
        <img src="/icons/like-button.svg" alt="" />
      </button>
      <hr class="horisontal-line" />

      <button class="see-more">
        <img src="/icons/see-more-emoji.svg" alt="" />
      </button>
    </div>
    <hr />
    <div class="comments">
      <div class="count">
        <h2>23 Комментария</h2>
      </div>
      <div class="write">
        <img src="" alt="" />
        <input name="" id="" placeholder="Введите комментарий" v-model="currentComment" />
      </div>
      <div class="send-comment-button" v-if="sendButton">
        <button>Оставить комментарий</button>
      </div>
      <div class="comments-common">
        <!-- v-for on one-comment -->
        <div class="one-comment">
          <img src="" alt="" />
          <div>
            <p>Савина Алина</p>
            <h4>Супер! Поздравляю! 🙌</h4>
          </div>
        </div>
        <div class="one-comment">
          <img src="" alt="" />
          <div>
            <p>Иванов Иван</p>
            <h4>
              Это чудесная новость! Я очень рад, что теперь у нас есть своя платформа, где мы можем
              общаться и делится новостями!
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.news-common {
  padding: 123px 33.13vw 72px 27.29vw;

  .news-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .about-news {
      display: flex;
      align-items: center;

      .hashtag {
        font-size: 16px;
        color: #9a9a9a;
        border: 1px solid #9a9a9a;
        border-radius: 10px;
        margin: 0;
        padding: 4px 4px;
      }
      .time {
        margin: 0;
        margin-left: 8px;
        font-size: 16px;
        color: #9a9a9a;
      }
    }
    .views {
      display: flex;
      align-items: center;
      color: #9a9a9a;
      font-size: 16px;

      img {
        margin-right: 4px;
      }
    }
  }

  .news-body {
    margin-top: 16px;
    .news-title {
      font-size: 20px;
      color: #4766af;
      margin: 0;
    }

    .regular-text {
      margin: 0;
      margin-top: 16px;
      font-size: 16px;
      color: #474747;
    }
  }
  .likes {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 16px;
    margin-bottom: 8px;

    .like-button {
      background-color: #fff;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      height: 36px;
    }
    .horisontal-line {
      width: 1px;
      height: 36px;
      margin: 0 15px;
      background-color: #9a9a9a;
    }
    .see-more {
      height: 36px;
      background-color: #fff;
      border: none;
      display: flex;
      align-items: flex-end;
      opacity: 50%;
    }
  }
  .comments {
    display: flex;
    flex-direction: column;
    .count {
      h2 {
        font-size: 16px;
        color: #474747;
      }
    }
    .write {
      margin-top: 24px;
      display: flex;
      img {
        width: 40px;
        height: 40px;
        border: 1px solid #cccccc;
        border-radius: 50%;
      }

      input {
        margin-left: 8px;
        resize: none;
        height: 40px;
        width: 37.08vw;
        border: none;
        border-bottom: 1px solid #e1e1e1;
        padding: 8px 0px;
      }
      input:focus {
        outline-width: 0;
      }
    }
    .send-comment-button {
      align-self: flex-end;

      button {
        margin-top: 8px;
        border: 0;
        border-radius: 10px;
        width: 10.83vw;
        height: 40px;
        background: linear-gradient(to right, #4766af, #46bed6);
        color: #fff;
        font-size: 16px;
      }
    }
    .comments-common {
      margin-top: 24px;
      .one-comment {
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        img {
          width: 40px;
          height: 40px;
          border: 1px solid #cccccc;
          border-radius: 50%;
        }
        div {
          margin-left: 8px;
          width: 37.08vw;

          p {
            margin: 0;
            font-size: 13px;
            color: #9a9a9a;
          }

          h4 {
            font-size: 16px;
            font-weight: 400;
            height: max-content;
            color: #474747;
          }
        }
      }
    }
  }
}
</style>
