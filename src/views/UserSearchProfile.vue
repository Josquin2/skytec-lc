<script setup lang="ts">
import LeftMain from '@/components/home/LeftMain.vue'
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>

    <div class="user-search-profile-block">
      <div class="about-user-profile-main-block">
        <div class="photo">
          <span class="bg-circle"></span>
          <img src="" alt="" class="user-image rounded-circle" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>user.name</h1>
          </div>
          <div class="job-info">
            <h2>Отдел досуга</h2>
            <hr />
            <h2>Менеджер по креативу</h2>
          </div>
          <div class="boss">
            <h3>Непосредственный руководитель:</h3>
            <h4>Корнеева Наталья</h4>
          </div>
          <div class="contact">
            <div class="phone-number">
              <img src="/icons/phone-blue.svg" alt="" />
              <p>user.phone</p>
              <img src="/icons/eye.svg" alt="" />
            </div>
            <div class="email">
              <img src="/icons/email-blue.svg" alt="" />
              <p>user.email</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="user-search-articles">
      <div class="my-articles">
        <div class="my-articles-header">Статьи</div>
        <div class="common-articles">
          <!-- v-for down here -->
          <div class="one-article">
            <img src="" alt="" class="article-author-image" />
            <div class="article-info">
              <h2 class="article-name">article.articleName</h2>
              <p class="article-author">article.author</p>
            </div>
          </div>
          <div class="one-article">
            <img src="" alt="" class="article-author-image" />
            <div class="article-info">
              <h2 class="article-name">article.articleName</h2>
              <p class="article-author">article.author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-search-profile-block {
  margin-left: 64px;
}

.user-search-articles {
  margin-left: 24px;

  padding: 24px 20px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  height: max-content;

  .my-articles {
    margin-top: 0;

    .my-articles-header {
      cursor: pointer;
    }
    .common-articles {
      .one-article {
        .article-info {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
