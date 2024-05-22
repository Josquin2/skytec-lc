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

<style lang="scss">
.main-page-block {
  .middle-block {
    .news {
      .idea {
        width: 36.2vw;
        height: 272px;
        background: linear-gradient(to bottom right, #4768b0, #46bed6);
        display: flex;
        padding: 40px;
        justify-content: space-between;
        border-radius: 19px;
        h2 {
          color: #fff;
          text-transform: uppercase;
          font-size: 24px;
          width: 15.16vw;
          align-self: flex-start;
        }
        button {
          align-self: flex-end;
          height: 56px;
          width: 9.22vw;
          background-color: #fff;
          border: none;
          border-radius: 200px;
          font-size: 16px;
          color: #4766af;
        }
      }
      .hidden {
        display: none !important;
      }
      .idea-message {
        margin-top: 4px;
        width: 36.2vw;
        height: 410px;
        background: linear-gradient(to bottom right, #4768b0, #46bed6);
        display: flex;
        flex-direction: column;
        padding: 40px 3.13vw;
        border-radius: 19px;

        .name {
          height: 56px;
          border-radius: 200px;
          padding-left: 16px;
          border: none;
        }
        .your-idea {
          height: 138px;
          margin-top: 16px;
          padding: 16px;
          border-radius: 27px;
          border: none;
          resize: none;
        }
        .checkbox {
          margin-top: 16px;
          display: flex;
          align-items: center;
          .checkbox-common {
            width: 32px;
            height: 32px;
            border: 1px solid #fff;
            border-radius: 7px;
            cursor: pointer;
          }
          .clicked {
            background: url(/public/icons/Approve.svg) no-repeat;
            background-position: 8px;
            padding: 8px;
          }
          p {
            margin: 0;
            color: #fff;
            margin-left: 8px;
            font-size: 16px;
          }
        }
        button {
          margin-top: 16px;
          height: 56px;
          border: none;
          border-radius: 200px;
          background-color: #fff;
          color: #4766af;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
