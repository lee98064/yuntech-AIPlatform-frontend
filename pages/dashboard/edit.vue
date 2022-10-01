<template>
  <section class="edit vh-100" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow edit-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center">修改基本資料</h1>
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>

            <div class="form-outline mb-4">
              <label class="form-label">學號</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.studentID"
                placeholder="請輸入學號"
                disabled
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control form-control-lg"
                v-model="user.email"
                placeholder="請輸入Email"
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">姓名</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.name"
                placeholder="請輸入姓名"
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">手機號碼</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.phone"
                placeholder="請輸入手機號碼"
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label">LINE ID</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.lineID"
                placeholder="請輸入LINE ID"
              />
            </div>
            <button
              class="btn btn-warning btn-lg btn-block"
              type="submit"
              @click="edit()"
            >
              修改
            </button>
            <button
              class="btn btn-danger btn-lg btn-block"
              type="submit"
              @click="$router.push({ name: 'dashboard-page' })"
            >
              取消
            </button>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudentEditPage',
  layout: 'student',
  middleware: 'auth',
  async created() {
    const res = await this.$api.user.info()

    if (res instanceof Error) {
      this.$router.push({ name: 'dashboard-page' })
    }

    this.user = res.data
    this.loading = false
  },
  setup() {},
  data() {
    return {
      loading: false,
      user: {},
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    async edit() {
      if (
        this.user.studentID == '' ||
        this.user.email == '' ||
        this.user.name == '' ||
        this.user.phone == '' ||
        this.user.lineID == ''
      ) {
        this.showErrorMessage = true
        this.errorMessage = '請檢查欄位是否都有填上！'
        return
      }

      this.loading = true
      const res = await this.$api.user.edit(this.user)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      // this.loading = false
      alert('更新成功！')
      this.$router.push({ name: 'dashboard-page' })
    },
  },
}
</script>

<style scoped>
.edit-card {
  min-width: 95vw;
}

@media (min-width: 768px) {
  .edit-card {
    min-width: 50vw;
  }
}
</style>
