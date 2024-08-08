<script setup lang="ts">
import StructureWorker from '@/components/about-company/StructureWorker.vue'
import StructureOfCompany from '@/components/about-company/StructureOfCompany.vue'
import { ref, onMounted, type Ref } from 'vue'
import type { Structure } from '@/types/Structure'
import { Api } from '@/api/api'

const ApiClass = new Api()
const cutted: Ref<Structure[][]> = ref([])

const currentPage = ref(0)

onMounted(async () => {
  const response = await ApiClass.getObjects('departments')
  const array = response
  cutForPages(array)
  console.log(array)
})

function cutForPages(allBlogs: Array<any>) {
  let n = 3
  for (let i = 0; i < allBlogs.length; i += n) {
    cutted.value.push(allBlogs.slice(i, i + n))
  }
}

function nextPage() {
  if (cutted.value.length > currentPage.value + 1) {
    onPageClick(currentPage.value + 1)
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    onPageClick(currentPage.value - 1)
  }
}

function onPageClick(index: number) {
  currentPage.value = index
  document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="structure" id="company-structure">
    <div class="structure-header">
      <div class="gradient-line"></div>
      <h1>Структура</h1>
    </div>
    <div class="control">
      <h2>Управление</h2>
      <hr />
      <div class="control-workers">
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />

        <hr />

        <StructureWorker
          name="Василий Туровец"
          job="Управляющий партнер SkyAlliance"
          image="/img/about-company/worker-2.png"
        />
      </div>
    </div>
    <div class="divider-arrow">
      <div class="up">
        <span></span>
      </div>
      <div class="down">
        <span></span>
      </div>
    </div>
    <StructureOfCompany :data="cutted[currentPage]" />

    <div class="page-arrows">
      <div
        class="one-page-arrow"
        @click="prevPage()"
        :class="{ 'cannot-click': currentPage - 1 < 0 }"
      ></div>

      <span
        class="default"
        :class="{ 'active-stucture-page': index == currentPage }"
        @click="onPageClick(index)"
        v-for="(page, index) in cutted.length"
        :key="index"
      ></span>

      <div
        class="right one-page-arrow"
        :class="{ 'cannot-click': currentPage + 2 > cutted.length }"
        @click="nextPage()"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.structure {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  .structure-header {
    .gradient-line {
      width: 88px;
      height: 4px;
    }
    h1 {
      font-size: 20px;
      color: #474747;
    }
  }
  .control {
    align-self: center;
    width: 45.42vw;
    height: 308px;
    padding: 48px 28px;
    background-color: #f6f6f6;
    border-radius: 27px;
    h2 {
      font-size: 20px;
      color: #474747;
      text-transform: uppercase;
    }

    .control-workers {
      padding: 48px 56px;
      display: flex;

      hr {
        width: 16px;
        height: 124px;
        opacity: 0;
      }
    }
  }
  .divider-arrow {
    margin-top: 16px;
    .up {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        height: 48px;
        width: 1px;
        background-color: #cccccc;
      }
    }
    .down {
      display: flex;
      span {
        height: 36px;
        width: 68.75vw;
        border: 1px solid #cccccc;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
      }
    }
  }

  .page-arrows {
    margin-top: 40px;
    margin-bottom: 72px;
    align-self: center;
    display: flex;
    align-items: center;

    .one-page-arrow {
      margin-left: 24px;
      margin-right: 24px;
      cursor: pointer;
      width: 32px;
      height: 26px;
      background: url(/img/about-company/arrow-blue.svg) no-repeat;
    }

    .cannot-click {
      cursor: default;
      background: url(/img/about-company/arrow-gray.svg) no-repeat;
    }

    .right {
      rotate: 180deg;
    }

    span {
      width: 8px;
      height: 8px;
      background-color: #dfdfdf;
      border-radius: 50%;
      margin-left: 8px;
      margin-right: 8px;
    }

    .active-stucture-page {
      cursor: default;
      background-color: #a9a9a9;
    }
    .default {
      cursor: pointer;
    }
  }
}
</style>
