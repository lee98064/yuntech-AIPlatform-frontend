<template>
  <section class="" style="background-color: #f7efef">
    <b-modal id="bv-modal-notice" hide-footer>
      <template #modal-title>註冊成功</template>
      <div class="d-block text-center">
        <h3>{{ errorMessage }}</h3>
      </div>
      <b-button class="mt-3" block @click="redirect()">回登入頁</b-button>
    </b-modal>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <b-overlay :show="loading" rounded="sm">
            <div class="card shadow" style="border-radius: 1rem">
              <div class="card-body p-5">
                <b-alert
                  v-model="showErrorMessage"
                  variant="danger"
                  dismissible
                >
                  {{ errorMessage }}
                </b-alert>
                <nuxt-link to="/">
                  <img
                    src="~/static/logo.png"
                    alt=""
                    class="w-100 d-block mb-3"
                  />
                </nuxt-link>

                <div class="form-outline mb-4">
                  <label class="form-label">學號</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="studentID"
                    placeholder="請輸入學號"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    v-model="email"
                    placeholder="請輸入Email"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">姓名</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="name"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">手機號碼</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="phone"
                    placeholder="請輸入手機號碼"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">LINE ID</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="lineID"
                    placeholder="請輸入LINE ID"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label">密碼</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="password"
                    placeholder="請輸入密碼"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">確認密碼</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="passwordConfirm"
                    placeholder="請輸入密碼"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  @click="register()"
                >
                  註冊
                </button>

                <hr class="my-4" />

                <nuxt-link
                  class="btn btn-lg btn-block btn-primary"
                  style="background-color: #dd4b39"
                  to="/auth/login"
                >
                  回登入頁
                </nuxt-link>
              </div>
            </div>
          </b-overlay>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'auth',
  head() {
    return {
      title: '註冊',
    }
  },
  data() {
    return {
      studentID: '',
      email: '',
      name: '',
      phone: '',
      lineID: '',
      password: '',
      passwordConfirm: '',
      showErrorMessage: false,
      errorMessage: '',
      loading: false,
    }
  },
  methods: {
    async register() {
      if (
        this.studentID == '' ||
        this.email == '' ||
        this.name == '' ||
        this.password == '' ||
        this.phone == '' ||
        this.lineID == ''
      ) {
        this.showErrorMessage = true
        this.errorMessage = '請輸入相關基本資料！'
        return
      }

      if (this.password != this.passwordConfirm || this.password == '') {
        this.showErrorMessage = true
        this.errorMessage = '兩次密碼不一致！'
        return
      }

      this.loading = true
      const res = await this.$api.auth.register(
        this.studentID,
        this.email,
        this.name,
        this.password,
        this.phone,
        this.lineID
      )
      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.errorMessage = '註冊成功！五秒後導入回登入頁面！'
      this.$bvModal.show('bv-modal-notice')
      setTimeout(() => {
        this.redirect()
      }, 5000)
    },
    redirect() {
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
