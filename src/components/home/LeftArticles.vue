<script setup lang="ts">
const articleInfo = [
  {
    articleName: 'Интернет магазины: секреты эффективног...',
    author: 'Савина Алина',
    authorImage: 'image'
  },
  {
    articleName: 'Мобильные игры и их влияние на рекламу в...',
    author: 'Савина Алина',
    authorImage: 'image'
  }
]
</script>

<template>
  <div class="my-articles">
    <div class="my-articles-header">Мои статьи</div>
    <div class="common-articles">
      <div class="one-article" v-for="article in articleInfo">
        <img src="" alt="" class="article-author-image" />
        <div class="article-info">
          <h2 class="article-name">{{ article.articleName }}</h2>
          <p class="article-author">{{ article.author }}</p>
        </div>
      </div>
    </div>
    <div class="add-article">
      <img src="/icons/plus.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss"></style>
