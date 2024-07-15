<script setup lang="ts">
import LeftMain from '@/components/home/LeftMain.vue'
import LeftBlog from '@/components/home/LeftBlog.vue'
import LeftArticles from '@/components/home/LeftArticles.vue'
import RightBlock from '@/components/home/RightBlock.vue'
import MainIdea from '@/components/home/MainIdea.vue'
import MainCarousel from '@/components/home/MainCarousel.vue'
import EmojiBlock from '@/components/home/EmojiBlock.vue'

import { useRoute } from 'vue-router'
import router from '@/router'
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { News } from '@/types/news/News'

import { Api } from '@/api/api'
let ApiClass = new Api()

const data: Ref<News[]> = ref([])
const emoji = ref([])

onMounted(async () => {
  data.value = await ApiClass.getObjects('news')
  // console.log(data.value)
  emoji.value = await ApiClass.getObjects('emojis')
  // console.log(emoji.value)
})

const route = useRoute()

function onNewsClick(id: number) {
  // console.log(slug)
  router.push({ name: 'one-news', params: { id: id } })
}

async function setNewsReaction(id: number, news: News) {
  const setReaction = await ApiClass.post('news/reactions', {
    news_id: news.id,
    emoji_id: id,
  })

  news.user_reaction = setReaction.user_reaction
  news.users_reactions = setReaction.users_reactions
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
      <LeftBlog />
      <LeftArticles />
    </div>

    <!-- middle block -->

    <div class="middle-block">
      <MainCarousel />

      <div class="news">
        <div class="gradient-line"></div>
        <h1>Новости</h1>
        <div class="one-news" v-for="(news, index) in data.slice(0, 5)" :key="index">
          <div class="news-header">
            <div class="about-news">
              <h4 class="hashtag">#{{ news.category.title }}</h4>
              <p class="time">{{ news.created_at }}</p>
            </div>
            <div class="views"><img src="/icons/eye.svg" alt="" /> {{ news.views_count }}</div>
          </div>
          <div class="news-body" @click="onNewsClick(news.id)">
            <div class="news-title">
              <h2>{{ news.title }}</h2>
            </div>
            <div class="news-info">
              <p>{{ news.content }}</p>
            </div>
          </div>

          <div class="likes">
            <EmojiBlock :emoji="emoji" :id="index" @emoji-click="(id) => setNewsReaction(id, news)" />

            <hr class="horisontal-line" />

            <button class="see-more">
              <img src="/icons/see-more-emoji.svg" alt="" />
            </button>

            <div v-for="reaction in news?.users_reactions" :class="'reaction-block user-reacted-' + (news.user_reaction === reaction.emoji_id)">
              <img
                :src="reaction.image"
                width="20px"
                height="20px"
                alt="Эмоджи" />
              <b>{{ reaction.count }}</b>
            </div>
          </div>
        </div>
        <MainIdea />
      </div>
    </div>

    <!-- end of middle block -->

    <RightBlock />

    <!-- modals goes here! -->
  </div>
</template>
