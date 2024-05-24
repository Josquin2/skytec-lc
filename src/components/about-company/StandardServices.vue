<script setup lang="ts">
import oneService from '@/components/about-company/OneStandardService.vue'
</script>

<template>
  <div class="services-page-1">
    <oneService
      title="Маркетинговые и медиаисследования:"
      text="Результат — аналитические данные, являющиеся базой для процесса планирования"
      image="/img/about-company/standard-1.svg"
    />
    <hr class="divider" />
    <oneService
      title="Стратегическое и коммуникационное планирование:"
      text="Результат — рекомендации и принципы распределения маркетинговых бюджетов между медиа инструментами"
      image="/img/about-company/standard-2.svg"
    />
    <hr class="divider" />
    <oneService
      title="Переговоры с медиапартнерами:"
      text="Результат- получение оптимальных ценовых условий, ответственности сторон в исполнении сделки"
      image="/img/about-company/standard-3.svg"
    />
    <oneService
      title="Закупка медиа инвентаря:"
      text="Результат — резервирование рекламных мест и объемов, размещение заказа в носителях, подтверждение размещения, контроль размещения, график выходов, подтверждение факта аудита независимыми измерителями"
      image="/img/about-company/standard-4.svg"
    />
    <hr class="divider" />
    <oneService
      title="Администрирование и отчетность: "
      text="Результат — контракт, закрывающие документы, акты по проведенным кампаниям, отчет с анализом и определением следующих шагов"
      image="/img/about-company/standard-5.svg"
    />
    <hr class="divider" />
    <oneService
      title="Клиентский сервис:"
      text="Результат — полная осведомленность клиента по процессу размещения и по медиа проектам, обеспечение новостям медиаиндустрии, годовыми презентациями по ситуации на рынке"
      image="/img/about-company/standard-6.svg"
    />
  </div>
</template>

<style lang="scss">
.services-page-1 {
  display: flex;
  flex-wrap: wrap;

  .divider {
    height: 94px;
    width: 1px;
    margin: 0;
    margin-right: 69px;
    margin-top: 112px;
    opacity: 60%;
    background-color: #cccccc;
  }
}
</style>
