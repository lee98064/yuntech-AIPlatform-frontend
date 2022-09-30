<template>
  <section class="student-dashboard vh-100" style="background-color: #f7efef">
    <div class="container py-5">
      <!-- <h1 class="text-center mb-5">報名系統</h1> -->
      <img src="~/static/logo-student.png" alt="" class="w-100 d-block logo" />
      <div class="student-function-group">
        <nuxt-link
          :to="{ name: 'student-signup' }"
          class="student-function-item shadow"
        >
          <img src="~/static/join.png" alt="" />
          <h3>報名</h3>
        </nuxt-link>
        <div class="student-function-item shadow">
          <img src="~/static/upload-student.png" alt="" />
          <h3>上傳學生證</h3>
        </div>
        <div class="student-function-item shadow">
          <img src="~/static/edit.png" alt="" />
          <h3>修改資料</h3>
        </div>
        <div class="student-function-item shadow">
          <img src="~/static/personal-information.png" alt="" />
          <h3>顯示資料</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudentIndexPage',
  layout: 'student',
  middleware: 'auth',
  setup() {},
}
</script>

<style scoped>
.logo {
  margin: auto;
  margin-bottom: 30px;
}

.student-dashboard {
  display: flex;
  align-items: center;
  justify-content: center;
}

.student-function-group {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
  height: 100%;
  grid-gap: 15px;
}

.student-function-item {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.student-function-item:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.student-function-item img {
  display: block;
  margin-bottom: 20px;
}

.student-function-item h3 {
  text-align: center;
  color: #000;
}

@media (min-width: 768px) {
  .student-function-group {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 250px);
  }

  .logo {
    max-width: 400px;
  }
}
</style>
