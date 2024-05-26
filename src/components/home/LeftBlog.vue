<script setup lang="ts">
const blogInfo = [
  {
    blogName: 'Цифровые технологии',
    author: 'Иванов Иван',
    authorImage: 'image'
  },
  {
    blogName: 'Маркетинг в 2023 году',
    author: 'Смирнов Анатолий',
    authorImage: 'image'
  },
  {
    blogName: 'Социальные сети в маркетинге: инструм...',
    author: 'Садова Анастасия',
    authorImage: 'image'
  },
  {
    blogName: 'Влияние видео-контента: как создать...',
    author: 'Федов Владимир',
    authorImage: 'image'
  },
  {
    blogName: 'Социальные сети в маркетинге: инструм...',
    author: 'Садова Анастасия',
    authorImage: 'image'
  }
]
</script>

<template>
  <div class="our-blog">
    <div class="our-blog-header">Наш Блог</div>
    <div class="blog-common">
      <div class="one-blog" v-for="blog in blogInfo">
        <img src="" alt="" class="blog-author-image" />
        <div class="blog-info">
          <h2 class="blog-name">{{ blog.blogName }}</h2>
          <p class="blog-author">{{ blog.author }}</p>
        </div>
      </div>
    </div>
    <div class="all-blogs-link">Все блоги</div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  .left-block {
    .our-blog {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      .our-blog-header {
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
      .blog-common {
        .one-blog {
          margin-top: 8px;
          width: 14.17vw;
          height: 72px;
          border: 1px solid #9a9a9a;
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;

          .blog-author-image {
            width: 2.9vw;
            height: 2.9vw;
            border: 0.5px solid #9a9a9a;
            border-radius: 50%;
          }
          .blog-info {
            width: 9.58vw;
            margin-left: 8px;
            .blog-name {
              font-size: 16px;
              margin: 0;
            }
            .blog-author {
              font-size: 16px;
              margin: 0;
              color: #9a9a9a;
            }
          }
        }
      }
      .all-blogs-link {
        align-self: flex-end;
        color: #4766af;
        font-weight: 500;
        cursor: pointer;
        margin-top: 16px;
        border-bottom: 1px solid rgba(#4766af, 0%);
      }
      .all-blogs-link:hover {
        border-bottom: 1px solid #4766af;
      }
    }
  }
}
</style>
