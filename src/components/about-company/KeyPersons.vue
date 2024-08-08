<script setup lang="ts">
import OneWorker from '@/components/about-company/Worker.vue'
</script>
<template>
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
</template>

<style lang="scss">
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
</style>
