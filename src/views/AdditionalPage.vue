<script setup lang="ts">
import { type Ref, onMounted, ref } from 'vue'
import { Api } from '@/api/api'
import { useRoute } from 'vue-router'
import type { Page } from '@/types/AdditionalPage'
import OurBlog from '@/components/home/LeftBlog.vue'
import MyBlog from '@/components/home/LeftArticles.vue'
import TwoDownloads from '@/components/blocks/TwoDownloads.vue'
import RightBlock from '@/components/home/RightBlock.vue'
import HelpDeskRequest from './HelpDeskRequest.vue'
import MeetingRoom from './MeetingRoom.vue'
import DocumentsPage from './DocumentsPage.vue'

const route = useRoute()

const ApiClass = new Api()

const leftComponents = ref<Array<typeof OurBlog>>([])
const centerComponents = ref<Array<typeof OurBlog>>([])
const rightComponents = ref<Array<typeof OurBlog>>([])
const page: Ref<Page | null> = ref(null)
onMounted(async () => {
  const resp = await ApiClass.getObjects(`pages/${route?.params?.url}`)
  console.log(resp)
  page.value = resp.data
  leftComponents.value = page.value?.left?.map((pageName) => allPages[pageName]) ?? []
  centerComponents.value = page.value?.center?.map((pageName) => allPages[pageName]) ?? []
  rightComponents.value = page.value?.right?.map((pageName) => allPages[pageName]) ?? []
})

const allPages: { [key: string]: typeof OurBlog } = {
  ourBlog: OurBlog,
  myBlog: MyBlog,
  download: TwoDownloads,
  birthdays: RightBlock,
  request: HelpDeskRequest,
  fastNavigation: MeetingRoom,
  documents: DocumentsPage
}
</script>

<template>
  <div class="additional-page">
    <div class="side" v-if="leftComponents && rightComponents">
      <component
        v-for="(component, index) in leftComponents"
        :is="component"
        :key="index"
      ></component>
    </div>
    <div class="center" :class="{ full: !leftComponents.length && !rightComponents.length }">
      <component
        v-for="(component, index) in centerComponents"
        :is="component"
        :key="index"
      ></component>
    </div>
    <div class="side" v-if="leftComponents && rightComponents">
      <component
        v-for="(component, index) in rightComponents"
        :is="component"
        :key="index"
      ></component>
    </div>
  </div>
</template>

<style lang="scss">
.additional-page {
  min-height: 88vh;
  color: #474747;
  width: 100vw;
  padding: 100px 0px 50px 0px;
  justify-content: center;
  display: flex;
  gap: 16px;

  .side {
    width: 14vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .our-blog {
      margin-top: 0;
    }
  }

  .center {
    padding-top: 32px;
    width: 39vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .full {
    .additional {
      flex-direction: row !important;
      height: 250px;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .additional-page {
    .side {
      width: 22vw;
    }
  }
}
</style>
