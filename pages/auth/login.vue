<template>
  <section class="vh-100" style="background-color: #f7efef">
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
                  <label class="form-label">密碼</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="password"
                    placeholder="請輸入密碼"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  @click="login()"
                >
                  登入
                </button>

                <hr class="my-4" />

                <nuxt-link
                  class="btn btn-lg btn-block btn-danger"
                  to="/auth/register"
                >
                  註冊
                </nuxt-link>
                <nuxt-link
                  class="btn btn-lg btn-block btn-info mb-2"
                  style="background-color: #3b5998; border: #3b5998"
                  to="/auth/forget"
                >
                  忘記密碼
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
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'guest',
  head() {
    return {
      title: '登入',
    }
  },
  data() {
    return {
      studentID: '',
      password: '',
      showErrorMessage: false,
      errorMessage: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      if (this.studentID == '' || this.password == '') {
        this.showErrorMessage = true
        this.errorMessage = '請輸入帳號密碼！'
        return
      }

      this.loading = true
      const res = await this.$api.auth.login(this.studentID, this.password)
      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }
      var inFifteenMinutes = new Date(new Date().getTime() + 30 * 60 * 1000)
      this.$cookie.set('token', res.data.token, {
        expires: inFifteenMinutes,
      })
      this.$router.push({ name: 'dashboard-page' })
    },
  },
}
</script>
