<script setup lang="ts">
import StandardServices from '@/components/about-company/StandardServices.vue'
import AdditionalServices from '@/components/about-company/AdditionalServices.vue'
import OneWorker from '@/components/about-company/Worker.vue'

import { ref } from 'vue'

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
</script>

<template>
  <div class="about-company-block">
    <div class="navigation">
      <div class="one-nav">Кто мы?</div>
      <div class="one-nav">Ключевые лица компании</div>
      <div class="one-nav">Структура компании</div>
    </div>
    <div class="advantages">
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
    <div class="team">
      <div class="team-header">
        <div class="gradient-line"></div>
        <h1>Ключевые лица компании</h1>
      </div>
      <div class="team-common">
        <div class="boss">
          <img src="/public/img/about-company/boss-main.png" alt="" />
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
    <div class="structure">
      <div class="structure-header">
        <div class="gradient-line"></div>
        <h1>Структура</h1>
      </div>
      <div class="control">
        <h2>Управление</h2>
        <hr />
        <div>
          <!-- two workers here -->
        </div>
      </div>
      <div class="departments">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-company-block {
  padding: 0 15.63vw;
  .navigation {
    display: flex;
    padding-top: 139px;

    .one-nav {
      cursor: pointer;
      background-color: #fff;
      color: #474747;
      font-size: 16px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding: 8px 16px;
      font-weight: 400;
      margin-right: 16px;
    }
  }
  .advantages {
    margin-top: 56px;
    display: flex;

    .one-adv {
      background-color: #f6f6f6;
      width: 22.08vw;
      height: 229px;
      border-radius: 10px;
      margin-right: 24px;
      padding: 24px;

      .gradient-line {
        width: 88px;
        height: 4px;
        margin-top: 16px;
      }

      .text-block {
        margin-top: 16px;
        display: flex;

        h2 {
          font-size: 16px;
          font-weight: 400;
        }
        h3 {
          font-size: 16px;
          margin-left: 8px;
          font-weight: 400;
          text-transform: uppercase;
          width: 12.6vw;
        }
      }
    }
  }
  .services {
    margin-top: 64px;
    .nav-services {
      .regular {
        border: 1px solid #9a9a9a;
        border-radius: 10px;
        padding: 8px 16px;
        color: #474747;
        margin-right: 16px;
      }
      .clicked {
        border: none;
        background-color: #4766af;
        color: #fff;
      }
    }
  }
  .team {
    margin-top: 64px;

    .team-header {
      .gradient-line {
        width: 88px;
        height: 4px;
      }
      h1 {
        color: #474747;
        font-size: 20px;
        text-transform: uppercase;
      }
    }

    .team-common {
      margin-top: 48px;
      display: flex;
      .boss {
        h2 {
          font-size: 24px;
          font-weight: 400;
          color: #4766af;
          margin: 0;
          margin-top: 16px;
        }
        h3 {
          font-size: 20px;
          font-weight: 400;
          color: #4766af;
          margin: 0;
          margin-top: 8px;
        }

        .boss-info {
          margin-top: 24px;

          p {
            font-size: 16px;
            color: #474747;
            margin: 0;
            margin-bottom: 16px;
            width: 22.1vw;
          }
        }
      }
      .workers {
        margin-left: 7.14vw;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
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
    }
  }
}
</style>
