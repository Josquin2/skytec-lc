<template>
  <div class="documents-block">
    <div class="documents-header">
      <div class="gradient-line"></div>
      <h1>Нормативные документы</h1>
    </div>
    <div class="documents-common">
      <div class="huge-document">
        <img src="/img/documents/first-document.png" alt="" />
        <span class="open-full"></span>
      </div>
      <div class="documents-mini-block">
        <div class="one-document-common">
          <span></span>
          <p>Договор на предоставление маркетинговых услуг</p>
        </div>
        <div class="one-document-common">
          <span></span>
          <p>Политика конфиденциальности</p>
        </div>
        <div class="one-document-common">
          <span></span>
          <p>Положение о внутреннем контроле и безопасности</p>
        </div>
        <div class="one-document-common">
          <span></span>
          <p>Прейскурант цен и услуг</p>
        </div>
      </div>
      <div class="documents-mini-block">
        <div class="one-document-common">
          <span></span>
          <p>Политика работы с персоналом и правила внутреннего трудового распорядка</p>
        </div>
        <div class="one-document-common">
          <span></span>
          <p>Прейскурант цен и услуг</p>
        </div>
        <div class="one-document-common">
          <span></span>
          <p>Регламент или стандарты предоставления услуг</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.documents-block {
  padding: 137px 15.63vw;
  display: flex;
  flex-direction: column;

  .documents-header {
    display: flex;
    flex-direction: column;

    .gradient-line {
      width: 32px;
      height: 4px;
    }
    h1 {
      font-size: 20px;
      text-transform: uppercase;
      color: #474747;
      margin: 0;
      margin-top: 4px;
    }
  }

  .documents-common {
    display: flex;
    margin-top: 24px;
    gap: 24px;
    .huge-document {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .open-full {
        width: 30px;
        height: 36px;
        position: absolute;
        margin-top: 392px;
        margin-left: 266px;
        background: url(/img/documents/open-icon-black.svg);
      }
    }
    .huge-document:hover {
      .open-full {
        background: url(/img/documents/open-icon-blue.svg);
      }
    }

    .documents-mini-block {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 16.67vw;
    }
  }

  .one-document-common {
    cursor: pointer;
    height: max-content;
    padding: 8px 16px;
    border: 1.5px solid #9a9a9a;
    border-radius: 10px;
    display: flex;
    align-items: center;
    span {
      display: flex;
      width: 24px;
      height: 24px;
      background: url(/img/documents/document-black.svg) no-repeat;
    }
    p {
      width: 13.28vw;
      font-size: 16px;
      color: #474747;
      margin: 0;
      margin-left: 8px;
      text-wrap: wrap;
    }
  }
  .one-document-common:hover {
    border: 1.5px solid #4766af;
    span {
      background: url(/img/documents/document-blue.svg) no-repeat;
    }
    p {
      color: #4766af;
    }
  }
}
</style>
