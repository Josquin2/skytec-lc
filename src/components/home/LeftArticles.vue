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

<style lang="scss">
.main-page-block {
  .left-block {
    .my-articles {
      margin-top: 48px;
      .my-articles-header {
        height: 40px;
        width: 14.17vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4766af;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        margin-bottom: 16px;
      }
      .common-articles {
        .one-article {
          margin-top: 8px;
          width: 14.17vw;
          height: 72px;
          border: 1px solid #9a9a9a;
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;

          .article-author-image {
            width: 2.9vw;
            height: 2.9vw;
            border: 0.5px solid #9a9a9a;
            border-radius: 50%;
          }
          .article-info {
            width: 9.58vw;
            margin-left: 8px;
            .article-name {
              font-size: 16px;
              margin: 0;
            }
            .article-author {
              font-size: 16px;
              margin: 0;
              color: #9a9a9a;
            }
          }
        }
      }
      .add-article {
        width: 14.17vw;
        height: 81px;
        border: 1px solid #9a9a9a;
        border-radius: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 8px;
      }
    }
  }
}
</style>
