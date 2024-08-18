<script setup lang="ts">
import { type Documents } from '@/types/Documents'
import { Api } from '@/api/api'
import { type Ref, ref, onMounted, watch } from 'vue'

const ApiClass = new Api()

const leftArr: Ref<Documents[]> = ref([])
const rightArr: Ref<Documents[]> = ref([])

const data: Ref<Documents[]> = ref([])
const image: Ref<string> = ref('')

const props = defineProps({
  title: String,
  endpoint: String,
  params: String
})

function onDocumentClick(document: string) {
  window.open(document)
}

onMounted(() => {
  getData()
})

watch(
  () => props.params,
  () => {
    getData()
  }
)
async function getData() {
  resetObjects()
  let resp: any
  if (props?.params && props?.params?.length > 0) {
    resp = await ApiClass.getObjects(`${props?.endpoint}/${props?.params}`)
  } else {
    resp = await ApiClass.getObjects(`${props?.endpoint}`)
  }

  console.log(resp)
  data.value = resp

  sliceArray(resp)
}

function selectDocument(url: string) {
  image.value = url
}

function sliceArray(arr: Array<any>) {
  rightArr.value = arr.slice(0, Math.floor(arr.length / 2))
  leftArr.value = arr.slice(Math.floor(arr.length / 2), arr.length)
}

function resetObjects() {
  leftArr.value = []
  rightArr.value = []
  data.value = []
}
</script>

<template>
  <div class="documents-block">
    <div class="documents-header">
      <div class="gradient-line"></div>
      <h1>{{ props?.title }}</h1>
    </div>
    <div class="documents-common">
      <div class="documents-mini-block" v-if="leftArr.length > 0">
        <div
          class="one-document-common"
          v-for="(doc, index) in leftArr"
          :key="index"
          @click="selectDocument(doc?.document)"
        >
          <span></span>
          <p>{{ doc?.title }}</p>
        </div>
      </div>
      <div class="documents-mini-block" v-if="rightArr.length > 0">
        <div
          class="one-document-common"
          v-for="(doc, index) in rightArr"
          :key="index"
          @click="selectDocument(doc?.document)"
        >
          <span></span>
          <p>{{ doc?.title }}</p>
        </div>
      </div>

      <div class="documents-mini-block" v-if="data.length < 1">Не найдено!</div>
    </div>
  </div>
</template>

<style lang="scss">
.documents-block {
  display: flex;
  flex-direction: column;
  min-height: 85vh;

  .documents-header {
    display: flex;
    flex-direction: column;

    .gradient-line {
      width: 32px;
      height: 4px;
    }
    h1 {
      font-size: 20px;
      text-transform: uppercase;
      color: #474747;
      margin: 0;
      margin-top: 4px;
    }
  }

  .documents-common {
    display: flex;
    margin-top: 24px;
    gap: 24px;
    .huge-document {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 312px;
      height: 444px;
      border: 1px solid #474747;
      border-radius: 10px;
      overflow: hidden;

      .open-full {
        width: 30px;
        height: 36px;
        position: absolute;
        margin-top: 392px;
        margin-left: 266px;
        background: url(/img/documents/open-icon-black.svg);
      }
    }
    .huge-document:hover {
      .open-full {
        background: url(/img/documents/open-icon-blue.svg);
      }
    }

    .documents-mini-block {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 16.67vw;
      height: min-content;
    }
  }

  .one-document-common {
    cursor: pointer;
    height: max-content;
    padding: 8px 16px;
    border: 1.5px solid #9a9a9a;
    border-radius: 10px;
    display: flex;
    align-items: center;
    span {
      display: flex;
      width: 24px;
      height: 24px;
      background: url(/img/documents/document-black.svg) no-repeat;
    }
    p {
      width: 13.28vw;
      font-size: 16px;
      color: #474747;
      margin: 0;
      margin-left: 8px;
      text-wrap: wrap;
    }
  }
  .one-document-common:hover {
    border: 1.5px solid #4766af;
    span {
      background: url(/img/documents/document-blue.svg) no-repeat;
    }
    p {
      color: #4766af;
    }
  }
}
</style>
