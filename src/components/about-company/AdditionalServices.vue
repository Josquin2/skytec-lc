<script setup lang="ts">
import oneService from '@/components/about-company/OneAdditionalService.vue'
</script>

<template>
  <div class="services-page-2">
    <oneService
      title="Эконометрическое моделирование:"
      text="Анализ влияния медиа размещения на маркетинговые, коммуникационные и бизнес-задачи"
      image="/img/about-company/additional-1.svg"
    />
    <hr class="divider" />
    <oneService
      title="Спонсорство и нестандартные проекты:"
      text="Всеобъемлющая экспертиза позволяет реализовывать проекты любого масштаба и получать оптимальные ценовые условия"
      image="/img/about-company/additional-2.svg"
    />
    <hr class="divider" />
    <oneService
      title="SKY OOH:"
      text="Экспертиза в планировании и закупке инвентаря наружной рекламы и любых индор каналов, а также системы для удобства взаимодействия с отчетностью"
      image="/img/about-company/additional-3.svg"
    />
    <oneService
      title="SKY E-COM:"
      text="Экспертиза в планировании и закупке инвентаря на ключевых маркетплейсах, оценка ROI"
      image="/img/about-company/additional-4.svg"
    />
    <hr class="divider" />
    <oneService
      title="SKY Attribution:"
      text="Приоритезация digital инвентаря на основании многофакторной модели оценки трафика. Оценка влияния digital каналов на конечный результат"
      image="/img/about-company/additional-5.svg"
    />
    <hr class="divider" />
    <oneService
      title="SKY MarCom:"
      text="Консультация клиентов для выработки эффективных маркетинговых стратегий и бизнес-решений"
      image="/img/about-company/additional-6.svg"
    />
  </div>
</template>

<style lang="scss">
.services-page-2 {
  display: flex;
  flex-wrap: wrap;
  gap: 4.17vw;

  .divider {
    height: 94px;
    width: 1px;
    margin: 0;
    margin-top: 112px;
    opacity: 60%;
    background-color: #cccccc;
  }
}
</style>
