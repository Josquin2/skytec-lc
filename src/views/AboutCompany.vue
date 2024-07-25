<script setup lang="ts">
import StandardServices from '@/components/about-company/StandardServices.vue'
import AdditionalServices from '@/components/about-company/AdditionalServices.vue'
import OneWorker from '@/components/about-company/Worker.vue'
import StructureWorker from '@/components/about-company/StructureWorker.vue'
import StructureOfCompany from '@/components/about-company/StructureOfCompany.vue'
import { Api } from '@/api/api'
import { ref, onMounted, type Ref } from 'vue'
import type { Structure } from '@/types/Structure'

const services = ref('standard')

function onServicesChangeClick(value: string) {
  if (services.value == 'standard' && value == 'additional') {
    services.value = 'additional'
    document.getElementById('additional')?.classList.add('clicked')
    document.getElementById('standard')?.classList.remove('clicked')
  } else if (services.value == 'additional' && value == 'standard') {
    services.value = 'standard'
    document.getElementById('standard')?.classList.add('clicked')
    document.getElementById('additional')?.classList.remove('clicked')
  }
}

function onNavigationClick(to: string) {
  document.getElementById(to)?.scrollIntoView()
}

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
  <div class="about-company-block">
    <div class="navigation">
      <div class="one-nav" @click="onNavigationClick('who-are-we')">Кто мы?</div>
      <div class="one-nav" @click="onNavigationClick('key-persons')">Ключевые лица компании</div>
      <div class="one-nav" @click="onNavigationClick('company-structure')">Структура компании</div>
    </div>
    <div class="advantages" id="who-are-we">
      <div class="one-adv">
        <img src="/img/about-company/logo-1.png" alt="" />
        <div class="gradient-line"></div>
        <div class="text-block">
          <h2>0.1/</h2>
          <h3>Лучший клиентский сервис</h3>
        </div>
        <div class="text-block">
          <h2>0.2/</h2>
          <h3>Передовые технологии</h3>
        </div>
        <div class="text-block">
          <h2>0.3/</h2>
          <h3>Экспертиза</h3>
        </div>
      </div>
      <div class="one-adv">
        <img src="/img/about-company/logo-2.png" alt="" />
        <div class="gradient-line"></div>
        <div class="text-block">
          <h2>0.4/</h2>
          <h3>Лучшие баинговые условия</h3>
        </div>
      </div>
      <div class="one-adv">
        <img src="/img/about-company/logo-3.png" alt="" />
        <div class="gradient-line"></div>
        <div class="text-block">
          <h2>0.5/</h2>
          <h3>Лидерские позиции в спонсорстве</h3>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="nav-services">
        <button class="regular clicked" id="standard" @click="onServicesChangeClick('standard')">
          Стандартные услуги агентства
        </button>
        <button class="regular" id="additional" @click="onServicesChangeClick('additional')">
          Дополнительные услуги агентства
        </button>
      </div>
      <StandardServices v-if="services == 'standard'" />
      <AdditionalServices v-else-if="services == 'additional'" />
    </div>
    <div class="team" id="key-persons">
      <div class="team-header">
        <div class="gradient-line"></div>
        <h1>Ключевые лица компании</h1>
      </div>
      <div class="team-common">
        <div class="boss">
          <img src="/img/about-company/boss-main.png" alt="" />
          <h2>Мария Ельчинова</h2>
          <h3>Генеральный директор SkyAlliance</h3>
          <div class="boss-info">
            <p>В рекламном бизнесе с 1994 года.</p>

            <p>
              Начинала свою карьеру в агентстве Ogilvy&Mather. Затем работала на разных должностях в
              агентствах РАВИ, Мега Медиа (ГКВИ, Vi).
            </p>

            <p>С 2005 по 2017 год занимала руководящие позиции в агентстве Maxus (GroupM).</p>
          </div>
        </div>
        <div class="workers">
          <!-- components here -->
          <OneWorker
            name="Мария Ельчинова"
            job="Генеральный директор SkyAlliance"
            image="/img/about-company/worker-1.png"
          />
          <OneWorker
            name="Василий Туровец"
            job="Управляющий партнер SkyAlliance"
            image="/img/about-company/worker-2.png"
          />
          <OneWorker
            name="Лилия Гаджиева"
            job="Генеральный директор Pinpai"
            image="/img/about-company/worker-3.png"
          />
          <OneWorker
            name="Вишняков Алексей"
            job="Генеральный директор BuyTecKnowlogy"
            image="/img/about-company/worker-4.png"
          />
          <OneWorker
            name="Александр Луданный"
            job="New Business директор SkyAlliance"
            image="/img/about-company/worker-5.png"
          />
        </div>
      </div>
    </div>
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
  </div>
</template>
