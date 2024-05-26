<script setup lang="ts">
function onCheckBoxClick() {
  document.getElementById('idea-checkbox')?.classList.toggle('clicked')
}

function onIdeaClick() {
  document.getElementById('idea')?.classList.toggle('hidden')
}
</script>

<template>
  <div class="idea">
    <h2>У меня есть идея для бизнеса</h2>
    <button @click="onIdeaClick()">Предложить</button>
  </div>
  <div class="idea-message hidden" id="idea">
    <input type="text" placeholder="Имя и Фамилия" class="name" />
    <textarea placeholder="Ваша идея" class="your-idea"></textarea>
    <div class="checkbox">
      <span class="checkbox-common" id="idea-checkbox" @click="onCheckBoxClick()"></span>
      <p>Предложить анонимно</p>
    </div>
    <button>Отправить</button>
  </div>
</template>

<style lang="scss"></style>
