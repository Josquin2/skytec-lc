<script setup lang="ts">
import InviteFriendModal from '@/components/vacancies/InviteFriendModal.vue'

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList?.toggle('modal-hidden')
}
</script>

<template>
  <div class="referal-program-block">
    <div class="referal-title">
      <h2>Реферальная программа</h2>
      <p>
        В нашей компании периодически возникает потребность в новых сотрудниках. Будем признательны,
        если вы порекомендуете своих кандидатов на открытые позиции, С условиями реферальной
        программы можно ознакомиться ниже:
      </p>
    </div>
    <div class="conditions">
      <div class="one-condition">
        <div class="photo-title">
          <img src="/img/referal/check.png" alt="" />
          <h4>Условия:</h4>
        </div>
        <div class="text">
          <p>Участником может стать любой сотрудник агентства</p>
          <p>
            Основное требование: рекомендуемое лицо (кандидат на вакансию) до вашей рекомендации сам
            не выходил на связь с агентством/не был заявлен рекрутинговым агентством
          </p>
        </div>
      </div>
      <div class="one-condition">
        <div class="photo-title">
          <img src="/img/referal/coins.png" alt="" />
          <h4>Размеры вознаграждения:</h4>
        </div>
        <div class="text">
          <p>Руководители групп, сложные технические позиции - 50 net</p>
          <p>Остальные позиции - 30 net</p>
        </div>
      </div>
      <div class="one-condition">
        <div class="photo-title">
          <img src="/img/referal/clock.png" alt="" />
          <h4>Выплата:</h4>
        </div>
        <div class="text">
          <p>
            Бонус выплачивается после трудоустройства кандидата и прохождении им испытательного
            срока 3 месяца
          </p>
          <p>
            Если рекомендация поступила от двух и более сотрудников, то вознаграждение начисляется
            первому заявителю
          </p>
        </div>
      </div>
    </div>
    <div class="button">
      <button>Загрузите перечень актуальных вакансий</button>
      <button @click="onInviteFriendModalClick">Привести друга</button>
    </div>
    <InviteFriendModal />
  </div>
</template>

<style lang="scss">
.referal-program-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 120px;

  .referal-title {
    max-width: 32vw;
    text-align: center;

    p {
      font-weight: 400;
      margin-top: 32px;
    }
  }

  .conditions {
    margin-top: 48px;
    display: flex;
    gap: 7vw;

    .one-condition {
      max-width: 230px;
      text-align: center;

      h4 {
        margin-top: 24px;
      }

      .text {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-weight: 400;
      }
    }
  }

  .button {
    margin-top: 24px;
    margin-bottom: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    button {
      width: fit-content;
      padding: 12px 18px;
      color: #ffffff;
      background-color: #4768b0;
      border: none;
      border-radius: 10px;
    }
  }

  * {
    color: #4768b0;
  }
}
</style>
