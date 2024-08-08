<script setup lang="ts">
import StandardServices from './StandardServices.vue'
import AdditionalServices from './AdditionalServices.vue'
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
</template>
<style lang="scss">
.services {
  margin-top: 64px;
  .nav-services {
    .regular {
      background-color: #fff;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding: 8px 16px;
      color: #474747;
      margin-right: 16px;
    }
    .clicked {
      background-color: #4766af;
      color: #fff;
      border: 1px solid #4766af;
    }
  }
}
</style>
