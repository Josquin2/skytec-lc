<script setup lang="ts">
import CongratulationsModal from '@/components/home/CongratulationsModal.vue'
import LeftMain from '@/components/home/LeftMain.vue'
import LeftBlog from '@/components/home/LeftBlog.vue'
import LeftArticles from '@/components/home/LeftArticles.vue'
import RightBlock from '@/components/home/RightBlock.vue'
import MainIdea from '@/components/home/MainIdea.vue'
import MainCarousel from '@/components/home/MainCarousel.vue'

import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
// const allNews = [
//   {
//     about: {
//       tag: '#Новости SKY',
//       date: '21.09.2023',
//       time: '14:33',
//       views: 200
//     },
//     theme: {
//       title: 'Запуск портала ',
//       mainText:
//         '"Инновационные маркетинговые стратегии подтверждают свою эффективность! Исследования показывают, что акцент на социальных сетях увеличивает вовлеченность аудитории.Персонализация рекламы на основе данных покупателей — главный тренд в современном маркетинге, обеспечивая более тесное взаимодействие между брендами и потребителями."'
//     },
//     likes: {}
//   },
//   {
//     about: {
//       tag: '#Глобальные новости',
//       date: '21.09.2023',
//       time: '14:33',
//       views: 130
//     },
//     theme: {
//       title: 'Продвижение в мире медиа',
//       mainText:
//         '"Исследование показало: креативные маркетинговые стратегии привлекают внимание потребителей! Эксперты утверждают, что персонализированный контент - ключ к успешной рекламе. Новейшие технологии улучшают взаимодействие между брендами и клиентами, смягчая границы между виртуальным и реальным миром."'
//     },
//     likes: {}
//   }
// ]

interface Category {
  id: number
  slug: string
  title: string
}

interface User {
  avatar: string
  id: number
  name: string
}

interface Data {
  category: Category
  content: string
  created_at: string
  news_category_id: number
  title: string
  user: User
  user_id: number
}

const data: Ref<Data[]> = ref([])

onMounted(async () => {
  const resp = await fetch('http://xn--h1acxew1a3a.xn--p1ai/api/news', {
    headers: {
      Authorization: 'Bearer TESTTOKEN123'
    }
  })
  data.value = await resp.json()
  console.log(data.value[0])
})
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
              <h4 class="hashtag">{{ news.news_category_id }}</h4>
              <p class="time">{{ news.created_at }}</p>
              <p class="time">{{ news.created_at }}</p>
            </div>
            <div class="views"><img src="/icons/eye.svg" alt="" /> {{}}</div>
          </div>
          <div class="news-title">
            <h2>{{ news.title }}</h2>
          </div>
          <div class="news-info">
            <p>{{ news.content }}</p>
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
        </div>
        <MainIdea />
      </div>
    </div>

    <!-- end of middle block -->

    <RightBlock />

    <!-- modals goes here! -->

    <CongratulationsModal />
  </div>
</template>

<style lang="scss">
.main-page-block {
  padding: 100px 15.6vw 50px 15.6vw;
  display: flex;

  .left-block {
    width: 14.17vw;
    display: flex;
    flex-direction: column;
  }

  // middle block

  .middle-block {
    width: 39.58vw;
    margin-left: 15px;
    margin-right: 15px;
    .news {
      margin-left: 26px;
      margin-top: 25px;

      .gradient-line {
        width: 88px;
        height: 8px;
        display: flex;
        flex-direction: column;
      }
      h1 {
        font-size: 24px;
        text-transform: uppercase;
        margin-top: 8px;
        margin-bottom: 30px;
      }
      .one-news {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        border-bottom: 1px solid #9a9a9a;
        width: 36.2vw;

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
        .news-title {
          margin-top: 16px;

          h2 {
            color: #4766af;
            font-size: 24px;
            margin-bottom: 0;
          }
        }
        .news-info {
          margin-top: 16px;
          p {
            color: #474747;
            font-size: 16px;
            width: 34.7vw;
            margin-bottom: 0;
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
      }
    }
  }

  // right block
}
</style>
