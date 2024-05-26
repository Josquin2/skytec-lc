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
