<script setup lang="ts">
function onConnectButtonClick(id: string) {
  document.getElementById(id)?.classList.toggle('instruction-hidden')
}
</script>

<!-- <template>
  <div class="privilege-block">
    <div class="one-privilege">
      <div class="left-side">
        <div class="privilege-name">
          <h2>01/</h2>
          <h3>Привилегия</h3>
          <img src="/img/prime-zone-logo.png" alt="" />
        </div>
        <div class="instruction instruction-hidden" id="instruction-prime-zone">
          <p>
            Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел
            и нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
          </p>
        </div>
      </div>
      <div class="connect-button">
        <button @click="onConnectButtonClick('instruction-prime-zone')">Как подключиться?</button>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="left-side">
        <div class="privilege-name">
          <h2>02/</h2>
          <h3>Привилегия</h3>
          <h1>ДМС</h1>
        </div>
        <div class="instruction instruction-hidden" id="instruction-dms">
          <p>
            Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел
            и нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
          </p>
        </div>
      </div>
      <div class="connect-button">
        <button @click="onConnectButtonClick('instruction-dms')">Как подключиться?</button>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="left-side">
        <div class="privilege-name">
          <h2>03/</h2>
          <h3>Привилегия</h3>
          <h1>Плюс Обучение</h1>
        </div>
        <div class="instruction instruction-hidden" id="instruction-plus-education">
          <p>
            Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел
            и нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
          </p>
        </div>
      </div>
      <div class="connect-button">
        <button @click="onConnectButtonClick('instruction-plus-education')">
          Как подключиться?
        </button>
      </div>
    </div>
    <hr />
  </div>
</template> -->

<template>
  <div class="privilege-block">
    <div class="one-privilege">
      <div class="top-side">
        <div class="privilege-name">
          <h2>01/</h2>
          <h3>Привилегия</h3>
          <img src="/img/prime-zone-logo.png" alt="" />
        </div>
        <div class="connect-button">
          <button @click="onConnectButtonClick('instruction-prime-zone')">Как подключиться?</button>
        </div>
      </div>
      <div class="bottom-side instruction-hidden" id="instruction-prime-zone">
        <div class="instruction">
          <p>
            Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел
            и нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="top-side">
        <div class="privilege-name">
          <h2>02/</h2>
          <h3>Привилегия</h3>
          <h1>ДМС</h1>
        </div>
        <div class="connect-button">
          <button @click="onConnectButtonClick('instruction-dms')">Как подключиться?</button>
        </div>
      </div>
      <div class="bottom-side instruction-hidden" id="instruction-dms">
        <p>
          Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел и
          нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
        </p>
      </div>
    </div>
    <hr />
    <div class="one-privilege">
      <div class="top-side">
        <div class="privilege-name">
          <h2>03/</h2>
          <h3>Привилегия</h3>
          <h1>Плюс Обучение</h1>
        </div>
        <div class="connect-button">
          <button @click="onConnectButtonClick('instruction-plus-education')">
            Как подключиться?
          </button>
        </div>
      </div>
      <div class="bottom-side instruction-hidden" id="instruction-plus-education">
        <p>
          Подключиться к данной привилегии можно по инструкции ниже, для этого перейдите в раздел и
          нажмите на кнопку ниже, затем заполните форму заявки ниже и отправьте запрос.
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>
