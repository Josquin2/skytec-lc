<script setup lang="ts">
import { ref, watch, onMounted, type Ref } from 'vue'
import { Api } from '@/api/api'
import router from '@/router'
import type { Page } from '@/types/AdditionalPage'
import { useRoute } from 'vue-router'

const route = useRoute()

const linksApi: Ref<Page[]> = ref([])

const ApiClass = new Api()

function onPageClick(url: string) {
  if (url.startsWith('http')) {
    window.open(url, '_self')
  } else {
    router.push(url)
  }
}
const currentPath = ref(route.name)

function isLogged() {
  if (currentPath.value != 'home') {
    return true
  } else {
    return false
  }
}

watch(
  () => route.name,
  (newPath) => {
    currentPath.value = newPath
    console.log(route.fullPath)
  }
)

onMounted(async () => {
  const resp = await ApiClass.getObjects('links/top')
  console.log(resp)
  linksApi.value = resp.data
})
</script>

<template>
  <footer class="footer">
    <img src="/icons/logo-white.svg" alt="" />
    <div class="links" v-if="isLogged()">
      <a
        class="one-link"
        v-for="(link, index) in linksApi"
        :key="index"
        @click="onPageClick(link?.url)"
        >{{ link?.title }}</a
      >
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 0 15.63vw;
  height: 150px;
  width: 100vw;
  background-color: #212121;
  display: flex;
  align-items: center;

  .links {
    margin-left: 5.21vw;
    display: flex;
    align-items: center;
    .one-link {
      text-decoration: none;
      color: #fff;
      margin-right: 24px;
      font-size: 16px;
      cursor: pointer;
      width: max-content;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .footer {
    padding: 0 9vw;
    align-self: flex-end;
  }
}
</style>
