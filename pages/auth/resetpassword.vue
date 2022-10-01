<template>
  <section class="vh-100" style="background-color: #f7efef">
    <b-modal id="bv-modal-notice" hide-footer>
      <template #modal-title>重設成功</template>
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
                  <label class="form-label">新密碼</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="password"
                    placeholder="輸入新密碼"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label">再次輸入新密碼</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="passwordConfirm"
                    placeholder="輸入新密碼"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  @click="reset()"
                >
                  重設密碼
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
  name: 'ResetPasswordPage',
  layout: 'auth',
  middleware: 'guest',
  created() {
    if (this.$route.query.token == undefined) {
      this.$router.push({ name: 'auth-login' })
    }

    this.token = this.$route.query.token
  },
  head() {
    return {
      title: '重設密碼',
    }
  },
  data() {
    return {
      token: null,
      password: '',
      passwordConfirm: '',
      showErrorMessage: false,
      errorMessage: '',
      loading: false,
    }
  },
  methods: {
    async reset() {
      if (this.password == '' || this.password != this.passwordConfirm) {
        this.showErrorMessage = true
        this.errorMessage = '請檢查兩次密碼是否輸入正確！！'
        return
      }

      this.loading = true
      const res = await this.$api.auth.resetPassword(this.token, this.password)
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
