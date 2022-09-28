<template>
  <div class="signUpStep">
    <div class="container">
      <h1 class="text-center mb-5">
        <b style="vertical-align: middle">報名流程</b>
      </h1>
      <div class="signUpStep-group">
        <div class="signUpStep-item shadow">
          <div class="signUpStep-step">1</div>
          <div class="signUpStep-icon">
            <img class="mb-3" src="~/static/signup.png" alt="" />
          </div>
          <h4 class="mb-3 text-center">組長填寫報名表</h4>
        </div>
        <div class="signUpStep-item shadow">
          <div class="signUpStep-step">2</div>
          <div class="signUpStep-icon">
            <img class="mb-3" src="~/static/gmail.png" alt="" />
          </div>
          <h4 class="mb-3 text-center">組員收到信後註冊</h4>
        </div>
        <div class="signUpStep-item shadow">
          <div class="signUpStep-step">3</div>
          <div class="signUpStep-icon">
            <img class="mb-3" src="~/static/remember.png" alt="" />
          </div>
          <h4 class="mb-3 text-center">組員記憶帳號密碼</h4>
        </div>
        <div class="signUpStep-item shadow">
          <div class="signUpStep-step">4</div>
          <div class="signUpStep-icon">
            <img class="mb-3" src="~/static/upload.png" alt="" />
          </div>
          <h4 class="mb-3 text-center">上傳學生證</h4>
        </div>
        <div class="signUpStep-item shadow">
          <div class="signUpStep-step">5</div>
          <div class="signUpStep-icon">
            <img class="mb-3" src="~/static/check.png" alt="" />
          </div>
          <h4 class="mb-3 text-center">完成驗證</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpStep',
  setup() {},
}
</script>

<style scoped>
.signUpStep {
  background-color: #f7efef;
  padding: 10% 0;
}

.signUpStep-group {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, 1fr);
}

.signUpStep-item {
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-self: end; */
  background-color: #fff;
  border-radius: 10px;
}

.signUpStep-item .signUpStep-step {
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fde17d;
  width: 40px;
  height: 40px;
  border-radius: 10px 0 10px 0;
  text-align: center;
}

.signUpStep-item .signUpStep-icon img {
  display: block;
  margin: auto;
}

.signUpStep-item h3 {
  text-align: center;
}

@media (min-width: 768px) {
  .signUpStep {
    padding: 40px 0;
  }

  .signUpStep-group {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 250px);
  }

  .signUpStep-item {
    justify-content: space-around;
  }

  .signUpStep-item h4 {
    font-size: 20px;
  }
}
</style>
