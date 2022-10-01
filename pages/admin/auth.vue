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
                  <label class="form-label">帳號</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="account"
                    placeholder="請輸入帳號"
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
  name: 'AdminLoginPage',
  layout: 'admin',
  head() {
    return {
      title: '管理登入',
    }
  },
  data() {
    return {
      account: '',
      password: '',
      showErrorMessage: false,
      errorMessage: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      if (this.account == '' || this.password == '') {
        this.showErrorMessage = true
        this.errorMessage = '請輸入帳號密碼！'
        return
      }

      this.loading = true
      const res = await this.$api.admin.auth.login(this.account, this.password)
      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }
      var inFifteenMinutes = new Date(new Date().getTime() + 30 * 60 * 1000)
      this.$cookie.set('adminToken', res.data.token, {
        expires: inFifteenMinutes,
      })
      this.$router.push({ name: 'admin-page' })
    },
  },
}
</script>
