<template>
  <div class="cabinet-block">
    <div class="left">
      <div class="l-upper">
        <div class="photo">
          <span class="bg-circle"></span>
          <img src="/img/cabinet/user.png" alt="" class="user-image" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>Иванов Александр Сергеевич</h1>
          </div>
          <div class="job-info">
            <h2>Отдел досуга</h2>
            <hr />
            <h2>Менеджер по креативу</h2>
          </div>
          <div class="boss">
            <h3>Непосредственный руководитель:</h3>
            <h4>Корнеева Наталья</h4>
          </div>
          <div class="contact">
            <div class="phone-number">
              <img src="" alt="" />
              <p>+7 (992) 007 54 09</p>
              <img src="" alt="" />
            </div>
            <div class="email">
              <img src="" alt="" />
              <p>Ivanovivan@rtg.ru</p>
            </div>
          </div>
        </div>
      </div>
      <div class="l-footer"></div>
    </div>
    <div class="right">
      <div class="r-left"></div>
      <div class="r-right"></div>
    </div>
  </div>
</template>

<style lang="scss">
.cabinet-block {
  min-height: 100vh;
  padding: 117px 15.63vw;

  .left {
    .l-upper {
      display: flex;
      background: linear-gradient(to bottom, #f6f6f6, #fff);
      width: 33.75vw;
      border-radius: 20px;
      .photo {
        .bg-circle {
          display: block;
          position: absolute;
          width: 144px;
          height: 144px;
          background-color: #fff;
          border-radius: 50%;
          z-index: 1;
        }
        .user-image {
          width: 6.88vw;
          z-index: 2;
        }
      }
      .about-user {
        display: flex;
        flex-direction: column;
        margin-left: 50px;

        .name {
          h1 {
            font-size: 24px;
            color: #474747;
          }
        }
        .job-info {
          display: flex;
          h2 {
            font-size: 16px;
            color: #474747;
          }
          hr {
            margin: 0 16px;
            height: 19px;
            width: 1px;
            opacity: 100%;
            background-color: #b5b5b5;
          }
        }
        .boss {
          display: flex;
          h3 {
            margin: 0;
            font-size: 16px;
            color: #7d7d7d;
          }
          h4 {
            margin: 0;
            font-size: 16px;
            color: #474747;
            margin-left: 8px;
          }
        }
        .contact {
          margin-top: 24px;
          display: flex;
          .phone-number {
            display: flex;
            align-items: center;
            border: 1px solid #4766af;
            border-radius: 8px;
            padding: 8px;
            p {
              margin: 0;
            }
          }
          .email {
            display: flex;
            align-items: center;
            margin-left: 16px;
            border: 1px solid #4766af;
            border-radius: 8px;
            padding: 8px;
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
