<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="first-carousel-image-text">
          <h2>Добро пожаловать на новый</h2>
          <h2>портал Sky Alliance</h2>
        </div>
        <img src="/img/main-page/welcome-1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <div class="first-carousel-image-text">
          <h2>Добро пожаловать на новый</h2>
          <h2>портал Sky Alliance</h2>
        </div>
        <img src="/img/main-page/welcome-1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <div class="first-carousel-image-text">
          <h2>Добро пожаловать на новый</h2>
          <h2>портал Sky Alliance</h2>
        </div>
        <img src="/img/main-page/welcome-1.png" class="d-block w-100" alt="..." />
      </div>

      <div class="carousel-item">
        <div class="first-carousel-image-text">
          <h2>Добро пожаловать на новый</h2>
          <h2>портал Sky Alliance</h2>
        </div>
        <img src="/img/main-page/welcome-1.png" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <div class="first-carousel-image-text">
          <h2>Добро пожаловать на новый</h2>
          <h2>портал Sky Alliance</h2>
        </div>
        <img src="/img/main-page/welcome-1.png" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss">
.carousel {
  .carousel-indicators {
    margin-bottom: -20px;

    button {
      background-color: #a9a9a9;
      border-bottom: 0;
      border-top: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
  .carousel-item {
    img {
      border-radius: 20px;
      height: 450px;
    }

    .first-carousel-image-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      color: #fff;
      width: 39.58vw;
      padding: 32px 30px;
      h2 {
        font-size: 36px;
        font-weight: 400;
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .carousel {
    .carousel-item {
      .first-carousel-image-text {
        width: 49vw;
      }
    }
  }
}
</style>
