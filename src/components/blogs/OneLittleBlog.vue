<script setup lang="ts">
import { defineProps } from 'vue'
import router from '@/router'

const props = defineProps({
  avatar: String,
  date: String,
  author: String,
  title: String,
  text: String,
  blogId: Number
})

function onOneBlogClick(blog: number | undefined) {
  router.push({ name: 'one-blog', params: { blog: blog } })
}
</script>

<template>
  <div class="one-little-blog" @click="onOneBlogClick(props.blogId)">
    <img :src="props?.avatar" alt="" />
    <div class="blog-common">
      <div class="blog-header">
        <p>{{ props?.date }}</p>
      </div>
      <div class="name">
        <h4>{{ props?.author }}</h4>
      </div>
      <div class="blog-info-common">
        <div class="blog-title">
          <h2 v-if="props?.title && props?.title.length < 60">{{ props?.title }}</h2>
          <h2 v-else-if="props?.title && props?.title.length > 60">
            {{ props?.title.slice(0, 60) + '...' }}
          </h2>
        </div>
        <div class="blog-text">
          <div v-if="props.text && props.text.length < 200" v-html="props.text"></div>
          <div
            v-else-if="props.text && props.text.length > 200"
            class="blog-text-common"
            v-html="props.text?.slice(0, 200) + '...'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.one-little-blog {
  cursor: pointer;
  width: 22.03vw;
  height: 271px;
  overflow: hidden;
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
        .blog-text-common {
          font-size: 16px;
          color: #474747;
          margin: 0;
          line-height: 22px;
          * {
            border: 0;
            overflow-wrap: break-word;
            text-wrap: wrap;
            padding: 0;
            font-size: 16px;
            color: #474747;
            text-decoration: none;
            margin: 0;
            font-weight: 400;
          }
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
    width: 30.03vw;
    padding: 16px;

    .blog-common {
      width: 21.78vw;
    }
  }
}
</style>
