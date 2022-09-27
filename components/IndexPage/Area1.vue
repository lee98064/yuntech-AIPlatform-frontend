<template>
  <div class="area1">
    <div class="left">
      <h1>
        2022 <br />
        雲科大AI賽車
      </h1>
      <p>
        提升雲科大學生對人工智慧之認識，並鼓勵更多學生進入人工智慧之領域。<br />
        透過此次的競賽，熟悉目前業界廣泛運用的雲端運算平台服務，瞭解人工智慧與自駕車的應用相關技術。
      </p>
      <button class="btn btn-primary">報名競賽</button>
    </div>
    <div class="right">
      <div class="img-container">
        <img src="~/static/area1/deepracer.png" alt="" />
      </div>
    </div>
    <div class="decoration"></div>
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
  justify-content: space-evenly;
  min-height: calc(100vh - 100px);
  min-height: 100vh;
  /* background-image: url('~/static/bg-1.png');
  background-position: center center;
  background-repeat: no-repeat; */
}

.area1 .decoration {
  display: none;
}

.area1 .left {
  padding: 0px 5%;
}

.area1 .left h1 {
  color: #374daa;
  text-align: center;
}

.area1 .left p {
  font-size: 12px;
  text-align: center;
}

.area1 .left button {
  display: block;
  margin: auto;
}

.area1 .right {
  position: relative;
}

.area1 .right .img-container {
  padding: 50px 30px;
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
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 2%;
  }

  .area1 .decoration {
    display: block;
    position: absolute;
    top: 0;
    right: 10.5%;
    height: 500px;
    width: 500px;
    z-index: -2;
    background-color: #d9e0ff;
  }

  .area1 .left {
    padding: 0;
    max-width: 50vw;
  }

  .area1 .left :is(h1, p) {
    text-align: left;
  }

  .area1 h1 {
    font-size: 60px;
  }

  .area1 .left p {
    line-height: 166.6%;
    font-size: 20px;
  }

  .area1 .left button {
    margin: unset;
  }

  .area1 .right img {
    max-width: 500px;
  }
}
</style>
