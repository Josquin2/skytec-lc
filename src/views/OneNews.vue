<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Ref } from 'vue'
import type { News } from '@/types/news/News'
import type { Comment } from '@/types/Comment'
import type { User as UserInterface } from '@/types/User'

import { computed, watch, ref, onMounted } from 'vue'
import { Api } from '@/api/api'
import { User } from '@/api/user'

let ApiClass = new Api()
let UserClass = new User()

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

let data: Ref<News | null> = ref(null)
let comments: Ref<Comment[]> = ref([])
let userData: Ref<UserInterface | null> = ref(null)

async function loadComments() {
  const commentsResponse = await ApiClass.getObjects('news/' + route.params.slug)
  if (data.value) {
    data.value.comments = commentsResponse.comments
  }
  currentComment.value = ''
}

onMounted(async function () {
  const response = await ApiClass.getObjects('news/' + route.params.slug)
  data.value = response
  console.log(data.value)

  const userDataResponse = await ApiClass.getObjects('user')
  userData.value = userDataResponse
  console.log(userData)
})

async function sendComment() {
  if (data.value && userData.value) {
    try {
      await ApiClass.post('news/comments', {
        news_id: data.value.id,
        user_id: userData.value.id,
        comment: currentComment.value
      })
      await loadComments()
    } catch (error) {
      console.error('Ошибка при отправке комментария:', error)
    }
  } else {
    console.log('Данные пользователя или новости отсутствуют')
  }
}

// watch на кнопку отправки сообщения
watch(
  () => currentComment.value,
  (newCommentValue: string) => {
    if (newCommentValue.length > 0) {
      sendButton.value = true
    } else {
      sendButton.value = false
    }
  }
)

let commentCountText = computed(() => {
  if (data.value) {
    const count = data.value.comments.length
    let text = ''

    if (count % 10 === 1 && count % 100 !== 11) {
      text = `${count} Комментарий`
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
      text = `${count} Комментария`
    } else {
      text = `${count} Комментариев`
    }

    return text
  }
})
</script>

<template>
  <div class="news-common">
    <div class="news-header">
      <div class="about-news">
        <h4 class="hashtag">#{{ data?.category?.title }}</h4>
        <p class="time">{{ data?.created_at }}</p>
      </div>
      <div class="views"><img src="/icons/eye.svg" alt="" />200</div>
    </div>
    <div class="news-body">
      <h1 class="news-title">{{ data?.title }}</h1>
      <p class="regular-text">
        {{ data?.content }}
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
        <h2>{{ commentCountText }}</h2>
      </div>
      <div class="write">
        <img :src="userData?.avatar" alt="" />
        <input name="" id="" placeholder="Введите комментарий" v-model="currentComment" />
      </div>
      <div class="send-comment-button" @click="sendComment" v-if="sendButton">
        <button>Оставить комментарий</button>
      </div>
      <div class="comments-common">
        <!-- v-for on one-comment -->
        <div class="one-comment" v-for="(comment, index) in data?.comments" :key="index">
          <img :src="comment.user.avatar" alt="" />
          <div>
            <p>{{ comment.user.name }}</p>
            <h4>{{ comment.comment }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
