<template>
  <div class="reward">
    <div class="container">
      <h1 class="text-center mb-5">
        <b style="vertical-align: middle">競賽獎項</b>
      </h1>
      <div class="reward-group">
        <div class="reward-item shadow">
          <img src="~/static/medal.png" alt="" />
          <div class="reward-content">
            <h3>第一名</h3>
            <p>新台幣一萬五千元之現金或等值禮券</p>
          </div>
        </div>
        <div class="reward-item shadow">
          <img src="~/static/second-place.png" alt="" />
          <div class="reward-content">
            <h3>第二名</h3>
            <p>新台幣一萬元之現金或等值禮券</p>
          </div>
        </div>
        <div class="reward-item shadow">
          <img src="~/static/third-prize.png" alt="" />
          <div class="reward-content">
            <h3>第三名</h3>
            <p>新台幣八千元之現金或等值禮券</p>
          </div>
        </div>
        <!-- <div class="reward-item shadow">
          <img src="~/static/join.png" alt="" />
          <div class="reward-content">
            <h3>參加獎</h3>
            <p>AWS雲端服務平台多項學習資源</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  setup() {},
}
</script>

<style scoped>
.reward {
  background-color: #f7efef;
  padding: 10% 0;
  /* min-height: 90vh; */
}

.reward-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 15px;
}

.reward-item {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 10px;
}
.reward-item:last-child {
  grid-column: 1/3;
}

.reward-item .reward-content {
  text-align: center;
}

@media (min-width: 768px) {
  .reward {
    padding: 40px 0;
  }

  .reward-item img {
    width: 70px;
    /* height: 80px; */
  }

  .reward-item:last-child {
    grid-column: unset;
  }

  .reward-group {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 250px);
  }
}
</style>
