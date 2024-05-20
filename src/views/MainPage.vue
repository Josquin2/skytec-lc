<template>
  <div class="main-page-block">
    <div class="left-block">
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
        </div>
      </div>
      <div class="our-blog"></div>
      <div class="my-articles"></div>
    </div>
    <div class="middle-block"></div>
    <div class="right-block"></div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  padding: 100px 15.6vw 50px 15.6vw;
  display: flex;

  .left-block {
    width: 14.17vw;
    display: flex;
    flex-direction: column;
    .some-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #000;
      border-radius: 10px;
      .search-something {
        width: 14.17vw;
        border-radius: 10px;
        border: 1px solid #000;
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
          border: 1px solid black;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4766af;
        }
      }
    }
  }
  .middle-block {
    width: 39.58vw;
    margin-left: 15px;
    margin-right: 15px;
  }
  .right-block {
    width: 13.33vw;
  }
}
</style>
