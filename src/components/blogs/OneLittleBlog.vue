<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const props = defineProps({
  date: String,
  author: String,
  title: String,
  text: String
})

const route = useRoute()

function onOneBlogClick(blog: string) {
  const login = route.params.login
  router.push({ name: 'one-blog', params: { login: login, blog: blog } })
}
</script>

<template lang="">
  <div class="one-little-blog">
    <img src="" alt="" />
    <div class="blog-common">
      <div class="blog-header">
        <p>{{ props.date }}</p>
      </div>
      <div class="name">
        <h4>{{ props.author }}</h4>
      </div>
      <div class="blog-info-common" @click="onOneBlogClick(props.title)">
        <div class="blog-title">
          <h2>{{ props.title }}</h2>
        </div>
        <div class="blog-text">
          <p>
            {{ props.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.one-little-blog {
  width: 22.03vw;
  height: 271px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
  transition: 0.2s;
  display: flex;
  padding: 24px;

  img {
    width: 56px;
    height: 56px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }

  .blog-common {
    width: 15.78vw;
    margin-left: 16px;

    .blog-header {
      p {
        font-size: 14px;
        color: #c2c2c2;
        margin: 0;
      }
    }
    .name {
      margin-top: 4px;

      h4 {
        font-size: 16px;
        font-weight: 400;
        color: #9a9a9a;
        margin: 0;
      }
    }

    .blog-info-common {
      cursor: pointer;
      .blog-title {
        margin-top: 8px;
        h2 {
          font-size: 16px;
          color: #4766af;
          margin: 0;
        }
      }
      .blog-text {
        margin-top: 8px;
        p {
          font-size: 16px;
          color: #474747;
          margin: 0;
          line-height: 22px;
        }
      }
    }
  }
}
.one-little-blog:hover {
  border: 1px solid #4766af;
}

@media only screen and (max-width: 1800px) {
  .one-little-blog {
    width: 31.03vw;
    padding: 16px;

    .blog-common {
      width: 21.78vw;
    }
  }
}
</style>
