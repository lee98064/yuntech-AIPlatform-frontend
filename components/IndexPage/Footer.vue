<template>
  <footer class="footer">
    <div class="container" style="color: white">
      <div class="row text-center m-0">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 p-0">
          <h4 class="footer-title">聯絡人</h4>
          <p class="footer-content">
            張老師<br />
            <i class="fas fa-envelope"></i> airace2021@gmail.com
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 p-0">
          <h4 class="footer-title">主辦單位</h4>
          <p class="footer-content">
            巨量資料研究(PBL)中心<br />人工智慧研究(PBL)中心
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 p-0">
          <h4 class="footer-title">協辦單位</h4>
          <p class="footer-content">
            教卓中心<br />
            <span style="font-size: 16px">
              本活動由教育部高等教育深耕計畫經費補助
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {},
}
</script>

<style scoped>
.footer {
  background-color: #343a40;
}
.footer .container {
  padding: 30px 0px 0px 0px;
}

.footer-title {
  padding-bottom: 10px;
}

.footer-content {
  color: white;
  font-size: 20px;
  margin-bottom: 30px;
}
.footer p {
  color: rgba(255, 255, 255, 0.5);
}
</style>
