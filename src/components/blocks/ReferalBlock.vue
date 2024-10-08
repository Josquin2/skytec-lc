<script setup lang="ts">
import InviteFriendModal from '@/components/vacancies/InviteFriendModal.vue'
import { Api } from '@/api/api'

const ApiClass = new Api()

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList?.toggle('modal-hidden')
}

async function onDownloadVacanciesClick() {
  const resp = await ApiClass.getObjects('download/vacancies')
  const link = document.createElement('a')
  link.href = resp?.download
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="referal-program-block">
    <div class="referal-title">
      <div class="gradient-line"></div>
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
          <h4>Условия</h4>
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
          <h4>Размеры вознаграждения</h4>
        </div>
        <div class="text">
          <p>Руководители групп, сложные технические позиции - 50 net</p>
          <p>Остальные позиции - 30 net</p>
        </div>
      </div>
      <div class="one-condition">
        <div class="photo-title">
          <img src="/img/referal/clock.png" alt="" />
          <h4>Выплата</h4>
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
      <button @click="onDownloadVacanciesClick">Загрузите перечень актуальных вакансий</button>
      <button @click="onInviteFriendModalClick" class="invite">Привести друга</button>
    </div>
    <InviteFriendModal />
  </div>
</template>

<style lang="scss">
.referal-program-block {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;

  .referal-title {
    .gradient-line {
      width: 88px;
      height: 4px;
    }

    h2 {
      margin-top: 4px;
      font-size: 20px;
      text-transform: uppercase;
    }
    p {
      margin-top: 10px;
      max-width: 605px;
    }
  }

  .conditions {
    margin-top: 45px;
    display: flex;
    gap: 24px;

    .one-condition {
      height: 100%;
    }

    .photo-title {
      display: flex;
      align-items: center;
      gap: 12px;
      height: 38px;

      h4 {
        font-size: 16px;
        margin: 0;
      }
    }

    .text {
      height: 90%;
      margin-top: 20px;
      max-width: 424px;
      min-height: 220px;
      border: 1px solid #cccccc;
      border-radius: 17px;
      padding: 26px 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      p {
        margin: 0;
        color: #1b1f26b8;
        line-height: 20px;
      }
    }
  }

  .button {
    margin-top: 52px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding-bottom: 84px;

    button {
      width: fit-content;
      padding: 16px 52px;
      border: 1px solid #4766af;
      border-radius: 7px;
      background-color: #ffffff;
      color: #4766af;
    }

    .invite {
      background-color: #4766af;
      color: #ffffff;
    }
  }
}

@media only screen and (max-width: 1380px) {
  .referal-program-block {
    zoom: 0.85;
  }
}
</style>
