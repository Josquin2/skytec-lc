<template>
  <div class="privilege-block">
    <div class="one-privilege">
      <div class="left-side">
        <h2>01/</h2>
        <h3>Привилегия</h3>
        <img src="/public/img/prime-zone-logo.png" alt="" />
      </div>
      <div class="connect-button">
        <button>Как подключиться?</button>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="left-side">
        <h2>02/</h2>
        <h3>Привилегия</h3>
        <h1>ДМС</h1>
      </div>
      <div class="connect-button">
        <button>Как подключиться?</button>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="left-side">
        <h2>03/</h2>
        <h3>Привилегия</h3>
        <h1>Плюс Обучение</h1>
      </div>
      <div class="connect-button">
        <button>Как подключиться?</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<style lang="scss">
.privilege-block {
  padding: 137px 15.63vw;
  height: 90vh;

  hr {
    margin: 0;
  }

  .one-privilege {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 50px 0;

    .left-side {
      display: flex;
      align-items: center;

      h2 {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #474747;
        padding: 8px;
        border: 1px solid #9a9a9a;
        border-radius: 10px;
      }

      h3 {
        margin: 0;
        font-size: 24px;
        font-weight: 500;
        color: #474747;
        margin-left: 24px;
      }

      img {
        margin-left: 16px;
      }

      h1 {
        margin: 0;
        margin-left: 16px;
        font-size: 24px;
        background: linear-gradient(to right bottom, #4766af, #46bed6);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
    .connect-button {
      button {
        width: 9.3vw;
        background-color: #fff;
        color: #474747;
        border: 1px solid #9a9a9a;
        border-radius: 10px;
        padding: 8px 0px;
        font-size: 16px;
        transition: 0.2s;
      }
      button:hover {
        background-color: #4766af;
        color: #fff;
        border: none;
      }
    }
  }
}
</style>
