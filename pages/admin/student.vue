<template>
  <section class="student vh-100" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow student-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center">學生查詢</h1>
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>
            <div class="student" v-if="student != null">
              <div class="row align-items-center">
                <div class="col-12 mb-3" v-if="student.studentImg != null">
                  <img
                    :src="getImg(student.id)"
                    class="d-block m-auto"
                    alt=""
                    style="max-height: 40vh; max-width: 100%"
                  />
                </div>
                <div class="col-12">
                  <h5>學號：{{ student.studentID }}</h5>
                  <h5>姓名：{{ student.name }}</h5>
                  <h5>Email：{{ student.email }}</h5>
                  <h5>LineID：{{ student.lineID }}</h5>
                  <h5>手機號碼：{{ student.phone }}</h5>
                  <h5 v-if="student.GroupId != null && student.isLeader">
                    頭銜：組長
                  </h5>
                  <h5 v-else-if="student.GroupId != null">頭銜：組員</h5>
                  <h5 v-if="student.GroupId != null">
                    組別：第 {{ student.Group.id }} 組
                    {{ student.Group?.name }}
                  </h5>
                </div>
              </div>
            </div>

            <b-input-group class="mt-3">
              <b-form-input
                v-model="keyword"
                placeholder="請輸入學號"
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="success" @click="search()">查詢</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminStudentPage',
  layout: 'admin',
  middleware: 'admin',
  setup() {},
  data() {
    return {
      student: null,
      keyword: '',
      loading: false,
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    getImg(id) {
      return `/api/admin/verify/studentImg/${id}`
    },
    async search() {
      this.loading = true
      this.showErrorMessage = false
      const res = await this.$api.admin.student.search(this.keyword)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        this.student = null
        return
      }

      this.student = res.data
      this.loading = false
    },
  },
}
</script>

<style scoped>
.student-card {
  min-width: 95vw;
}

@media (min-width: 768px) {
  .student-card {
    min-width: 40vw;
  }
}
</style>
