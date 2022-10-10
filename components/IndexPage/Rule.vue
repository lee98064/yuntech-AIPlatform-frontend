<template>
  <div class="rule">
    <div class="container">
      <h1 class="text-center mb-5">
        <b style="vertical-align: middle">活動規則</b>
      </h1>
      <div class="rule-group">
        <div class="rule-item">
          <img class="mb-3" src="~/static/time.png" alt="" />
          <h1 class="mb-3">報名期間</h1>
          <time
            >民國111年10月11日 <br />
            至 <br />民國111年10月26日</time
          >
        </div>
        <div class="rule-item">
          <img class="mb-3" src="~/static/teamwork.png" alt="" />
          <h1 class="mb-3">組隊方式</h1>
          <p>身分須為雲科在學學生 每組1到4人 報名方式請參考下方流程</p>
        </div>
        <div class="rule-item">
          <img class="mb-3" src="~/static/point.png" alt="" />
          <h1 class="mb-3">積分計算</h1>
          <p>
            二次線上賽車積分賽 每次賽車前10名可獲得積分
            第1至10名之積分依序如下： 25, 18, 15, 12, 10, 8, 6, 4, 2, 1分
          </p>
        </div>
        <div class="rule-item">
          <img class="mb-3" src="~/static/book.png" alt="" />
          <h1 class="mb-3">競賽規章</h1>
          <p>
            本競賽僅能以自己的Reinforcement Learning model或是 AWS DeepRacer
            控制台提供的Sample model進行比賽。不得分享或使用別人分享之model 。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rule',
  setup() {},
}
</script>

<style scoped>
.rule {
  background-color: #eeeeee;
  padding: 10% 0;
  min-height: 90vh;
}

.rule-group {
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}

.rule-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 40px 20px;
  background-color: #3b4d60;
  color: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
}

.rule-group .rule-item:nth-child(1) time {
  text-align: center;
}

.rule-item:nth-child(1) {
  background-color: #23829c;
}

.rule-item:nth-child(2) {
  background-color: #9152ac;
}

.rule-item:nth-child(3) {
  background-color: #41b13a;
}

.rule-item:nth-child(4) {
  background-color: #ee974c;
}

@media (min-width: 768px) {
  .rule {
    padding: 40px 0;
  }

  .rule-group {
    grid-template-columns: 1.5fr repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
  }

  .rule-group .rule-item {
    text-align: justify;
  }

  .rule-group .rule-item:nth-child(1) {
    justify-content: center;
    text-align: center;
    grid-column: 1/2;
    grid-row: 1/3;
  }

  .rule-group .rule-item:nth-child(1) time {
    font-size: 30px;
  }

  .rule-group .rule-item:nth-child(4) {
    grid-column: 2/4;
  }
}
</style>
