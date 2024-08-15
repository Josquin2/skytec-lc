<script setup lang="ts">
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import type { Ref } from 'vue'
import type { News } from '@/types/news/News'
import type { User as UserInterface } from '@/types/User'

import { computed, watch, ref, onMounted } from 'vue'
import { Api } from '@/api/api'

import EmojiBlock from '@/components/home/EmojiBlock.vue'
import { onUserClick } from '@/components/routing-functions'

let ApiClass = new Api()

const route = useRoute()

const currentComment = ref('')

const sendButton = ref(false)

const emoji = ref([])

let data: Ref<News | null> = ref(null)
let userData: Ref<UserInterface | null> = ref(null)

async function loadComments() {
  const commentsResponse = await ApiClass.getObjects('news/' + route.params.id)
  if (data.value) {
    data.value.comments = commentsResponse.comments
  }
  currentComment.value = ''
}

onMounted(async function () {
  const response = await ApiClass.getObjects('news/' + route?.params?.id)
  data.value = response
  console.log(data.value)

  const userDataResponse = await ApiClass.getObjects('user')
  userData.value = userDataResponse.data.user
  console.log(userData)

  emoji.value = await ApiClass.getObjects('emojis')

  ViewsTimeout()
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
  } else return 'Н/Д'
})

// views count things

let viewTimeout: ReturnType<typeof setTimeout> | null = null

async function ViewsTimeout() {
  viewTimeout = setTimeout(async () => {
    if (data.value) {
      try {
        await ApiClass.put(`news/${data.value.id}`, {
          views_count: data.value.views_count + 1
        })
        // updating views
        data.value.views_count += 1
      } catch (error) {
        console.error('Ошибка при увеличении просмотров:', error)
      }
    }
  }, 5000)
}

onBeforeRouteLeave(() => {
  // Отменяем таймер при уходе с страницы
  if (viewTimeout !== null) {
    clearTimeout(viewTimeout)
  }
})

async function setNewsReaction(id: number, news: News) {
  const setReaction = await ApiClass.post('news/reactions', {
    news_id: news.id,
    emoji_id: id
  })

  news.user_reaction = setReaction.user_reaction
  news.users_reactions = setReaction.users_reactions

  document.getElementById(`extended-icons-${news.id}`)?.classList.add('closed')
}
</script>

<template>
  <div class="news-common">
    <div class="news-header">
      <div class="about-news">
        <h4 class="hashtag">#{{ data?.category?.title }}</h4>
        <p class="time">{{ data?.created_at }}</p>
      </div>
      <div class="views"><img src="/icons/eye.svg" alt="" />{{ data?.views_count }}</div>
    </div>
    <div class="news-body">
      <h1 class="news-title">{{ data?.title }}</h1>
      <p class="regular-text">
        {{ data?.content }}
      </p>
    </div>
    <div class="likes">
      <EmojiBlock
        :emoji="emoji"
        :id="data?.id"
        @emoji-click="(id) => data && setNewsReaction(id, data)"
      />
      <hr class="horisontal-line" />

      <button class="see-more">
        <img src="/icons/see-more-emoji.svg" alt="" />
      </button>
      <div
        v-for="(reaction, index) in data?.users_reactions"
        :key="index"
        :class="'reaction-block user-reacted-' + (data?.user_reaction === reaction.emoji_id)"
      >
        <img :src="reaction.image" width="20px" height="20px" alt="Эмоджи" />
        <b>{{ reaction.count }}</b>
      </div>
    </div>
    <hr />
    <div class="comments">
      <div class="count">
        <h2>{{ commentCountText }}</h2>
      </div>
      <div class="write">
        <img :src="userData?.avatar" alt="" />
        <input
          name=""
          id=""
          placeholder="Введите комментарий"
          v-model="currentComment"
          @keydown.enter="sendComment"
        />
      </div>
      <div class="send-comment-button" @click="sendComment" v-if="sendButton">
        <button>Оставить комментарий</button>
      </div>
      <div class="comments-common">
        <!-- v-for in one-comment -->
        <div class="one-comment" v-for="(comment, index) in data?.comments" :key="index">
          <img :src="comment?.user?.avatar" alt="" />
          <div>
            <p @click="onUserClick(comment?.user?.id)">
              {{ comment?.user?.surname + ' ' + comment?.user?.firstname }}
            </p>
            <h4>{{ comment?.comment }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
