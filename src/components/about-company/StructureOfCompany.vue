<script setup lang="ts">
import StructureWorker from '@/components/about-company/StructureWorker.vue'
</script>

<template>
  <div class="department-main">
    <div class="dep-worker">
      <div class="upper">
        <h2>Отдел досуга</h2>
        <hr />
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
      </div>

      <div class="dep-footer">
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
        <hr class="empty" />
        <StructureWorker
          name="Василий Туровец"
          job="Управляющий партнер SkyAlliance"
          image="/img/about-company/worker-2.png"
        />
      </div>
    </div>
    <div class="dep-worker">
      <div class="upper">
        <h2>Отдел маркетинга</h2>
        <hr />
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
      </div>

      <div class="dep-footer">
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
        <hr class="empty" />
        <StructureWorker
          name="Василий Туровец"
          job="Управляющий партнер SkyAlliance"
          image="/img/about-company/worker-2.png"
        />
      </div>
    </div>
    <div class="dep-worker">
      <div class="upper">
        <h2>Отдел рекламы</h2>
        <hr />
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
      </div>

      <div class="dep-footer">
        <StructureWorker
          name="Мария Ельчинова"
          job="Генеральный директор SkyAlliance"
          image="/img/about-company/worker-1.png"
        />
        <hr class="empty" />
        <StructureWorker
          name="Василий Туровец"
          job="Управляющий партнер SkyAlliance"
          image="/img/about-company/worker-2.png"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.department-main {
  margin-top: 22px;
  display: flex;
  gap: 24px;

  .dep-worker {
    width: 22.14vw;
    background-color: #f6f6f6;
    border-radius: 27px;
    .upper {
      border: 1px solid #cccccc;

      border-radius: 27px 27px 0 0;
      padding: 40px 24px;

      hr {
        margin: 0;
        margin-top: 16px;
        margin-bottom: 32px;
      }

      h2 {
        font-size: 20px;
        color: #474747;
        text-transform: uppercase;
      }
    }
    .dep-footer {
      border: 1px solid #cccccc;
      border-radius: 0 0 27px 27px;
      padding: 32px 24px;

      .empty {
        opacity: 0;
        margin: 0;
        width: 17.71vw;
        height: 32px;
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .department-main {
    .dep-worker {
      width: 24vw;
    }
  }
}
</style>
