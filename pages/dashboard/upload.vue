<template>
  <section class="upload vh-100" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow upload-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center">上傳學生證</h1>
            <h6 class="text-center text-danger" v-if="user.studentImg != null">
              *您之前已經上傳過學生證，再次上傳將須重新審核！
            </h6>
            <div class="preview mt-3">
              <img v-if="url" :src="url" />
            </div>
            <b-form-file
              v-model="file"
              accept="image/jpeg, image/png, image/gif"
              placeholder="選擇檔案"
              drop-placeholder="Drop file here..."
              class="mb-3"
            ></b-form-file>
            <button class="btn btn-info btn-block" @click="upload()">
              上傳學生證
            </button>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudentUploadPage',
  layout: 'student',
  middleware: 'auth',
  async created() {
    const res = await this.$api.user.info()
    if (res instanceof Error) {
      this.$router.push({ name: 'dashboard-page' })
    }

    this.user = res.data

    if (this.user.studentImg != null) {
      this.url = '/api/user/studentImg'
    }

    this.loading = false
  },
  watch: {
    file: function () {
      this.loading = true
      this.url = URL.createObjectURL(this.file)
      this.loading = false
    },
  },
  setup() {},
  data() {
    return {
      user: {},
      url: null,
      loading: true,
      file: null,
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    async upload() {
      if (this.file == null) {
        this.showErrorMessage = true
        this.errorMessage = '請選擇檔案！'
        return
      }

      let formData = new FormData()
      formData.append('image', this.file)

      const res = await this.$api.user.upload(formData)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      alert('上傳成功！！')
      this.$router.push({ name: 'dashboard-page' })
    },
  },
}
</script>

<style scoped>
.upload-card {
  min-width: 95vw;
}

.preview {
  margin-bottom: 0.8rem;
}

.preview img {
  display: block;
  margin: auto;
  margin-bottom: 0.5rem;
  max-height: 40vh;
  max-width: 100%;
}

@media (min-width: 768px) {
  .upload-card {
    min-width: 50vw;
  }
}
</style>
