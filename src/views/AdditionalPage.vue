<script setup lang="ts">
import { type Ref, onMounted, ref, watch } from 'vue'
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
import Privilege from '@/components/privilege/Privilege.vue'
import NewEmployee from '@/components/new-employee/NewEmployee.vue'
import Vacancies from '@/components/vacancies/Vacancies.vue'
import TextBlock from '@/components/blocks/TextBlock.vue'
import LeftMain from '@/components/home/LeftMain.vue'
import News from '@/components/home/News.vue'
import MainCarousel from '@/components/home/MainCarousel.vue'
import MainIdea from '@/components/home/MainIdea.vue'
import Advantages from '@/components/about-company/Advantages.vue'
import Services from '@/components/about-company/Services.vue'
import KeyPersons from '@/components/about-company/KeyPersons.vue'
import Structure from '@/components/about-company/Structure.vue'
import CreateNewEmployee from './CreateNewEmployee.vue'
import RegulatoryDocuments from './RegulatoryDocuments.vue'
import Instructions from './Instructions.vue'
import VacationPage from './VacationPage.vue'
import AhoRequest from './AhoRequest.vue'

const route = useRoute()

const ApiClass = new Api()

const leftComponents = ref<Array<{ component: any; content: string }>>([])
const centerComponents = ref<Array<{ component: any; content: string }>>([])
const rightComponents = ref<Array<{ component: any; content: string }>>([])
const leftMenu = ref(false)

const page: Ref<Page | null> = ref(null)

async function fetchData() {
  resetObjects()
  const resp = await ApiClass.getObjects(`pages/${route?.params?.url}`)
  console.log(resp)
  page.value = resp.data

  // left menu
  if (page?.value?.left_menu) {
    leftMenu.value = page?.value?.left_menu
  }

  // components
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
}

onMounted(async () => {
  fetchData()
})

watch(
  () => route.params.url,
  () => {
    fetchData()
  }
)

function resetObjects() {
  leftComponents.value = []
  centerComponents.value = []
  rightComponents.value = []
  leftMenu.value = false
  page.value = null
}

const allPages: { [key: string]: any } = {
  ourBlog: OurBlog,
  myBlog: MyBlog,
  download: TwoDownloads,
  birthdays: RightBlock,
  request: HelpDeskRequest,
  requestAxo: AhoRequest,
  fastNavigation: MeetingRoom,
  documents: DocumentsPage,
  mainPage: MainPage,
  cabinet: Cabinet,
  aboutCompany: AboutCompany,
  newEmployee: NewEmployee,
  createNewEmployee: CreateNewEmployee,
  vacancies: Vacancies,
  text: TextBlock,
  news: News,
  carousel: MainCarousel,
  idea: MainIdea,
  advantages: Advantages,
  services: Services,
  keyPersons: KeyPersons,
  structure: Structure,
  privilege: Privilege,
  regulatoryDocuments: RegulatoryDocuments,
  instructions: Instructions,
  vacation: VacationPage
}
</script>

<template>
  <div class="additional-page">
    <div class="side" v-if="leftComponents && rightComponents">
      <LeftMain v-if="leftMenu" />
      <component
        v-for="(item, index) in leftComponents"
        :is="item.component"
        :key="index"
        :content="item.content"
      ></component>
    </div>
    <div
      class="center"
      :class="{ full: !leftComponents.length && !rightComponents.length && leftMenu == false }"
    >
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

    .create-new-employee-block {
      padding: 0;
    }
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

    .documents-full {
      width: fit-content;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .additional-page {
    .center {
      width: 49vw;
    }
    .side {
      width: 19.5vw;
      .additional-text-block {
        width: 19vw;
      }
    }
  }
}

@media only screen and (max-width: 1380px) {
  .additional-page {
    .center {
      width: 65vw;
      zoom: 0.7;
    }
    .side {
      width: 21vw;
    }
    .full {
      zoom: 0.9;
    }
  }
}
</style>
