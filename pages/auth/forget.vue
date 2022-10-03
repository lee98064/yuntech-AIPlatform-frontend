<template>
  <section class="vh-100" style="background-color: #f7efef">
    <b-modal id="bv-modal-notice" hide-footer>
      <template #modal-title>已送出重設信</template>
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
                    placeholder="請輸入註冊時的學號"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    v-model="email"
                    placeholder="請輸入註冊時的Email"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  @click="forget()"
                >
                  傳送重設信
                </button>

                <hr class="my-4" />
                <nuxt-link
                  class="btn btn-lg btn-block btn-info mb-2"
                  style="background-color: #3b5998"
                  to="/auth/login"
                >
                  返回登入頁
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
  name: 'ForgetPage',
  layout: 'auth',
  middleware: 'guest',
  head() {
    return {
      title: '忘記密碼',
    }
  },
  data() {
    return {
      studentID: '',
      email: '',
      showErrorMessage: false,
      errorMessage: '',
      loading: false,
    }
  },
  methods: {
    async forget() {
      if (this.studentID == '' || this.email == '') {
        this.showErrorMessage = true
        this.errorMessage = '請輸入學號和Email！'
        return
      }

      this.loading = true
      const res = await this.$api.auth.forget(this.studentID, this.email)
      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.errorMessage = res.data.message
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
