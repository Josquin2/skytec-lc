<template>
  <div class="some-info">
    <input type="text" placeholder="+7/ФИО/e-mail" class="search-something" />
    <div class="other-links">
      <p class="link">Инструкция по удаленному доступу</p>
      <p class="link">Заявка в HelpDesk</p>
      <p class="link">Заявка в АХО</p>
      <p class="link">Инструкция по настройке бронирования переговорных</p>
      <p class="link">Нормативные документы</p>
    </div>
    <div class="vacancies">
      <div class="vacancy-common">Актуальные вакансии</div>
      <div class="invite-friend">
        <b class="invite-friend-text">Приведи друга</b>
        <img src="/img/main-page/vacancies.png" alt="" class="vacancies-image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  .left-block {
    .some-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #9a9a9a;
      border-radius: 10px 10px 19px 19px;
      .search-something {
        padding-left: 16px;
        height: 48px;
        width: 14.17vw;
        border-radius: 10px;
        border: 1px solid #9a9a9a;
        border-top: none;
      }
      .other-links {
        margin-top: 40px;
        width: 12vw;
        .link {
          font-size: 16px;
          cursor: pointer;
          width: fit-content;
        }
        .link:hover {
          color: #4766af;
          border-bottom: 1px solid #4766af;
        }
      }
      .vacancies {
        .vacancy-common {
          width: 12vw;
          height: 40px;
          border: 1px solid #9a9a9a;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4766af;
          font-weight: 500;
          cursor: pointer;
        }
        .invite-friend {
          .invite-friend-text {
            color: #4766af;
            max-width: 4.5vw;
            position: absolute;
            margin-top: 12px;
            margin-left: 0.8vw;
          }

          .vacancies-image {
            width: 12.5vw;
            margin-top: 8px;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>
