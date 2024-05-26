<script setup lang="ts">
import OneLittleBlog from '@/components/blogs/OneLittleBlog.vue'
</script>

<template>
  <div class="all-blogs-block">
    <div class="center">
      <div class="blogs">
        <!-- v-for down here -->
        <!-- and here should be blog__id in props, I guess. For better url name -->
        <OneLittleBlog
          date="21.09.2023 14:33"
          author="Смирнов Анатолий"
          title="Маркетинг в 2023 году. Трансформация в эпоху цифровой реальности"
          text="В 2023 году маркетинг становится неотъемлемой частью цифровой реальности, которая
            продолжает преображать способы, которыми компании привлекают, вовлекают и удерживают
            своих клиентов."
        />
        <OneLittleBlog
          date="21.09.2023 14:33"
          author="Смирнов Анатолий"
          title="Маркетинг в 2023 году. Трансформация в эпоху цифровой реальности"
          text="В 2023 году маркетинг становится неотъемлемой частью цифровой реальности, которая
            продолжает преображать способы, которыми компании привлекают, вовлекают и удерживают
            своих клиентов."
        />
        <OneLittleBlog
          date="21.09.2023 14:33"
          author="Смирнов Анатолий"
          title="Маркетинг в 2023 году. Трансформация в эпоху цифровой реальности"
          text="В 2023 году маркетинг становится неотъемлемой частью цифровой реальности, которая
            продолжает преображать способы, которыми компании привлекают, вовлекают и удерживают
            своих клиентов."
        />
      </div>
      <div class="page-count"></div>
    </div>
  </div>
</template>

<style lang="scss">
.all-blogs-block {
  .center {
    margin-left: 24px;
    .blogs {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  }
}
</style>
