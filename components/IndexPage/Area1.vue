<template>
  <div class="area1">
    <h1 class="mb-4">
      2022 <br />
      雲科大 AI 賽車
    </h1>
    <p class="mb-4">
      提升雲科大學生對人工智慧之認識，並鼓勵更多學生進入人工智慧領域。
      透過此次的競賽，熟悉目前業界廣泛運用的雲端運算平台服務，人工智慧與自駕車的應用相關技術。
    </p>
    <nuxt-link class="btn btn-primary" :to="{ name: 'index', hash: '#about' }">
      報名競賽
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Area1',
}
</script>

<style scoped>
.area1 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('~/static/bg-1.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 5%;
}

.area1 h1 {
  color: #374daa;
  font-size: 55px;
  text-align: center;
}

.area1 p {
  font-size: 15px;
  text-align: justify;
}

.area1 a {
  font-size: 20px;
  letter-spacing: 6px;
  padding: 5px 40px;
  text-align: center;
}

.area1 .right {
  position: relative;
}

.area1 .right .img-container {
  padding: 40px 30px;
  border-radius: 30% 5%;
  background-color: #9fadd9;
}

.area1 .right img {
  display: block;
  max-width: 350px;
  margin: auto;
}

@media (min-width: 768px) {
  .area1 {
    padding: 0;
    align-items: center;
    padding: 0px 2%;
  }

  .area1 h1 {
    font-size: 5vw;
  }

  .area1 p {
    max-width: 40vw;
    font-size: 20px;
    text-align: center;
  }

  .area1 a {
    font-size: 30px;
  }
}
</style>
