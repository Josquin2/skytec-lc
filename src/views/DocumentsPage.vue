<script setup lang="ts">
import { type Documents } from '@/types/Documents'
import { Api } from '@/api/api'
import { type Ref, ref, onMounted, onUnmounted } from 'vue'

const ApiClass = new Api()

const leftArr: Ref<Documents[]> = ref([])
const rightArr: Ref<Documents[]> = ref([])

const data: Ref<Documents[]> = ref([])
const image: Ref<string> = ref('')

function onDocumentClick(event: any) {
  event.stopPropagation()
  document.getElementById('full-huge-document')?.classList.toggle('closed')
}

onMounted(() => {
  getData()

  document.addEventListener('click', () => {
    const fullHugeDocument = document.getElementById('full-huge-document')
    if (fullHugeDocument && !fullHugeDocument.classList.contains('closed')) {
      fullHugeDocument.classList.add('closed')
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', () => {
    const fullHugeDocument = document.getElementById('full-huge-document')
    if (fullHugeDocument && !fullHugeDocument.classList.contains('closed')) {
      fullHugeDocument.classList.add('closed')
    }
  })
})

async function getData() {
  const resp = await ApiClass.getObjects('documents')
  console.log(resp)
  data.value = resp
  image.value = resp[0].document
  sliceArray(resp)
}

function selectDocument(url: string) {
  image.value = url
}

function sliceArray(arr: Array<any>) {
  rightArr.value = arr.slice(0, Math.floor(arr.length / 2))
  leftArr.value = arr.slice(Math.floor(arr.length / 2), arr.length)
  console.log(leftArr)
  console.log(rightArr)
}
</script>

<template>
  <div class="documents-block">
    <div class="documents-header">
      <div class="gradient-line"></div>
      <h1>Нормативные документы</h1>
    </div>
    <div class="documents-common">
      <div class="huge-document" @click="onDocumentClick">
        <iframe
          :src="image + '#toolbar=0&scrollbar=0&view=FitV'"
          allowtransparency="true"
          height="100%"
          width="100%"
          style="border: 1px solid #474747; border-radius: 10px; background: #ffffff"
          type="application/pdf"
        ></iframe>
        <span class="open-full"></span>
      </div>
      <!-- left -->
      <div class="documents-mini-block">
        <div
          class="one-document-common"
          v-for="doc in leftArr"
          @click="selectDocument(doc.document)"
        >
          <span></span>
          <p>{{ doc.title }}</p>
        </div>
      </div>
      <!-- right -->
      <div class="documents-mini-block">
        <div
          class="one-document-common"
          v-for="doc in rightArr"
          @click="selectDocument(doc.document)"
        >
          <span></span>
          <p>{{ doc.title }}</p>
        </div>
      </div>
    </div>
    <div class="full-huge-document noselect closed" id="full-huge-document">
      <img src="/img/documents/first-document-full.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.documents-block {
  padding: 137px 15.63vw;
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
  .full-huge-document {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition:
      opacity 0.15s ease-in-out,
      visibility 0.15s ease-in-out;
    opacity: 0;
    visibility: hidden;
    &.closed {
      opacity: 0;
      visibility: hidden;
    }
    &:not(.closed) {
      opacity: 1;
      visibility: visible;
    }
    img {
      position: absolute;
      top: 2.5%;
      left: 34%;
      height: 95vh;
    }
  }
}
</style>
