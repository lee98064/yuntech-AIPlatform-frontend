<template>
  <footer
    class="text-center text-lg-start text-white"
    style="background-color: #45526e"
  >
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="footer">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h3 class="text-uppercase mb-4 font-weight-bold">聯絡人</h3>
            <h4>張老師</h4>
            <p>changart@yuntech.edu.tw</p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h3 class="text-uppercase mb-4 font-weight-bold">主辦單位</h3>
            <p>
              <a
                href="https://bdrc.yuntech.edu.tw/"
                target="_blank"
                class="text-white"
                >巨量資料研究(PBL)中心</a
              >
            </p>
            <p>
              <a
                href="https://bpis.yuntech.edu.tw/"
                target="_blank"
                class="text-white"
                >前瞻學士學位學程</a
              >
            </p>
            <p>
              <a
                href="https://www.mis.yuntech.edu.tw/"
                target="_blank"
                class="text-white"
                >資訊管理系</a
              >
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h3 class="text-uppercase mb-4 font-weight-bold">協辦單位</h3>
            <p>
              <a
                href="https://platform.tex.yuntech.edu.tw/"
                target="_blank"
                class="text-white"
                >教卓中心</a
              >
            </p>
            <p>
              <a class="text-white">本活動由教育部高等教育深耕計畫經費補助</a>
            </p>
          </div>
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3" />

      <!-- Section: Copyright -->
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-12 text-center text-md-start">
            <!-- Copyright -->
            © 2022 Copyright:
            <a class="text-white" href="https://github.com/lee98064"
              >Ryan Lee</a
            >
            <!-- Copyright -->
          </div>

          <!-- Grid column -->
        </div>
      </section>
      <!-- Section: Copyright -->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {},
}
</script>

<style scoped>
.footer a {
  cursor: pointer;
}

/* .footer {
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
} */
</style>
