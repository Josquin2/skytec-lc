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
import MainPage from './MainPage.vue'
import Cabinet from './Cabinet.vue'
import AboutCompany from './AboutCompany.vue'
import PrivilegePage from './PrivilegePage.vue'
import NewEmployee from './NewEmployee.vue'
import Vacancies from './Vacancies.vue'
import TextBlock from '@/components/blocks/TextBlock.vue'

const route = useRoute()

const ApiClass = new Api()

const leftComponents = ref<Array<{ component: any; content: string }>>([])
const centerComponents = ref<Array<{ component: any; content: string }>>([])
const rightComponents = ref<Array<{ component: any; content: string }>>([])
const page: Ref<Page | null> = ref(null)
onMounted(async () => {
  const resp = await ApiClass.getObjects(`pages/${route?.params?.url}`)
  console.log(resp)
  page.value = resp.data
  leftComponents.value =
    page.value?.left?.map((block) => ({
      component: allPages[block?.type],
      content: block.content
    })) ?? []
  centerComponents.value =
    page.value?.center?.map((block) => ({
      component: allPages[block?.type],
      content: block.content
    })) ?? []
  rightComponents.value =
    page.value?.right?.map((block) => ({
      component: allPages[block?.type],
      content: block.content
    })) ?? []
})

const allPages: { [key: string]: any } = {
  ourBlog: OurBlog,
  myBlog: MyBlog,
  download: TwoDownloads,
  birthdays: RightBlock,
  request: HelpDeskRequest,
  fastNavigation: MeetingRoom,
  documents: DocumentsPage,
  MainPage: MainPage,
  Cabinet: Cabinet,
  AboutCompany: AboutCompany,
  PrivilegePage: PrivilegePage,
  NewEmployee: NewEmployee,
  Vacancies: Vacancies,
  text: TextBlock
}
</script>

<template>
  <div class="additional-page">
    <div class="side" v-if="leftComponents && rightComponents">
      <component
        v-for="(item, index) in leftComponents"
        :is="item.component"
        :key="index"
        :content="item.content"
      ></component>
    </div>
    <div class="center" :class="{ full: !leftComponents.length && !rightComponents.length }">
      <component
        v-for="(item, index) in centerComponents"
        :is="item.component"
        :key="index"
        :content="item.content"
      ></component>
    </div>
    <div class="side" v-if="leftComponents && rightComponents">
      <component
        v-for="(item, index) in rightComponents"
        :is="item.component"
        :key="index"
        :content="item.content"
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
    .additional-text-block {
      width: 14vw;
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
    width: 68.75vw;
    .additional {
      flex-direction: row !important;
      height: 250px;
    }
    .additional-text-block {
      p {
        max-width: 68.75vw;
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .additional-page {
    .side {
      width: 22vw;
      .additional-text-block {
        width: 19vw;
      }
    }
  }
}
</style>
