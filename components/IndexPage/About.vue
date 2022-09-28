<template>
  <div class="about">
    <div class="container">
      <h1 class="text-center mb-5">
        <b style="vertical-align: middle">關於競賽</b>
      </h1>
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="about-box">
            <h2 class="about-box-title">舉辨AI賽車之動機與目的</h2>
            <p class="about-box-content">
              提升雲科大學生對人工智慧之認識，並鼓勵更多學生進入人工智慧之領域。
              透過此次的競賽，學生可以熟悉目前業界廣泛運用的雲端運算平台服務，瞭解人工智慧的相關技術，以及目前相當熱門的自駕車的應用。
            </p>
          </div>
          <div class="about-box">
            <h2 class="about-box-title">什麼是 AWS DeepRacer ?</h2>
            <p class="about-box-content">
              根據 AWS 網站： 『AWS DeepRacer 是開始使用強化學習 (RL)
              最快的方法，透過強化學習、3D 賽車模擬器和全球賽車聯盟實際駕駛 1/18
              比例全自動駕駛賽車。 開發人員可以在線上模擬器訓練、評估和調校 RL
              模型、將他們的模型部署到 AWS DeepRacer
              以獲得真實世界的自動駕駛體驗， 以及在 AWS DeepRacer League
              比賽中爭取贏得 AWS DeepRacer 冠軍盃的機會。』 簡單地說，DeepRacer
              是一個在自動駕駛汽車上學習和改進人工智慧 (AI) 和機器學習 (ML)
              技術的平台，
              可以經過全面訓練並用於虛擬模擬。本次競賽考量疫情因素，將採用線上競賽方式進行。
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img src="~/static/deepracer.png" alt="" />
          <img class="mt-5" src="~/static/AWS.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {},
}
</script>

<style scoped>
.about {
  background-color: #f7efef;
  padding: 10% 0;
}

.about-box {
  padding: 20px;
}

.about-box .about-box-title {
  text-align: center;
  color: #374daa;
  margin-bottom: 20px;
  font-size: 28px;
}

.about-box .about-box-content {
  font-weight: 700;
  line-height: 166.6%;
  text-align: justify;
}

img {
  display: block;
  margin: auto;
  max-width: 400px;
}

@media (min-width: 768px) {
  .about {
    padding: 40px 0;
  }
}
</style>
