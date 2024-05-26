<template>
  <div class="blog-block">
    <div class="left-side">
      <div class="search">
        <input type="text" placeholder="Поиск..." />
        <img src="" alt="" />
      </div>
      <div class="categories">
        <h1>Категории</h1>
        <div>
          <p>Маркетинг</p>
          <p>Реклама</p>
          <p>Креатив</p>
          <p class="last">Продвижение</p>
        </div>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<style lang="scss">
.blog-block {
  padding: 123px 21.46vw 72px 15.63vw;
  display: flex;
  .left-side {
    width: 16.25vw;
    display: flex;
    flex-direction: column;

    .search {
      input {
        width: 16.25vw;
        height: 48px;
        border: 1px solid #c3c3c3;
        border-radius: 10px;
        background-color: #fff;
        padding-left: 16px;
      }
    }

    .categories {
      margin-top: 24px;
      background-color: #f6f6f6;
      padding: 16px;
      border-radius: 10px;

      h1 {
        font-size: 20px;
        color: #474747;
        margin: 0;
      }

      div {
        margin-top: 24px;

        p {
          cursor: pointer;
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          color: #474747;
          border-bottom: 1px solid #e7e7e7;
          margin-bottom: 12px;
        }
        .last {
          border: none;
          margin: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 1800px) {
  .blog-block {
    padding: 123px 12.46vw 72px 5.63vw;
  }
}
</style>
