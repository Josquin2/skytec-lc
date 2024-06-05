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
      <div class="page-count">
        <div class="one-page current-page">1</div>
        <div class="one-page">2</div>
        <div class="one-page">3</div>
        <div class="one-page">4</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.all-blogs-block {
  .center {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    .blogs {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
    .page-count {
      align-self: center;
      display: flex;

      .one-page {
        cursor: pointer;
        width: 24px;
        height: 24px;
        color: #999999;
        font-size: 16px;
        margin: 0;
        margin-left: 8px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .current-page {
        cursor: default;
        background-color: #4766af;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
