<template>
  <section class="verify" style="background-color: #f7efef">
    <b-modal v-model="reasonModalShow" ref="reasonModal" title="請填寫理由">
      <b-form-textarea
        v-model="reason"
        placeholder="請輸入原因"
        rows="6"
        max-rows="6"
      ></b-form-textarea>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            class="float-right"
            @click="verifyUnPass()"
          >
            送出
          </b-button>
          <b-button
            variant="secondary"
            class="float-right mr-2"
            @click="reasonModalShow = false"
          >
            取消
          </b-button>
        </div>
      </template>
    </b-modal>
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow verify-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center">資料審核</h1>
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>
            <div class="student-group">
              <div
                class="student"
                v-for="student in students"
                :key="student.id"
              >
                <hr />
                <div class="row align-items-center">
                  <div class="col-12 col-md-4 mb-3">
                    <img :src="getImg(student.id)" alt="" />
                  </div>
                  <div class="col-12 col-md-6 mb-3">
                    <h5 v-if="student.isLeader">頭銜：組長</h5>
                    <h5 v-else>頭銜：組員</h5>
                    <h5>學號：{{ student.studentID }}</h5>
                    <h5>姓名：{{ student.name }}</h5>
                    <h5>
                      組別：第 {{ student.Group.id }} 組
                      {{ student.Group.name }}
                    </h5>
                  </div>
                  <div class="col-12 col-md-2 mb-3 fun-btn-group">
                    <button
                      class="btn btn-success"
                      @click="verifyPass(student.id)"
                    >
                      通過驗證
                    </button>
                    <button
                      class="btn btn-danger"
                      @click="reasonModal(student.id)"
                    >
                      拒絕申請
                    </button>
                  </div>
                </div>
              </div>

              <h5 class="text-center text-danger" v-if="students.length == 0">
                目前尚未有資料待審核
              </h5>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminVerifyPage',
  layout: 'admin',
  middleware: 'admin',
  async created() {
    this.getStudents()
  },
  setup() {},
  data() {
    return {
      students: {},
      reason: '',
      nowReasonStudentID: null,
      reasonModalShow: false,
      loading: true,
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    getImg(id) {
      return `/api/admin/verify/studentImg/${id}`
    },

    async getStudents() {
      this.loading = true
      const res = await this.$api.admin.verify.all()

      if (res instanceof Error) {
        this.$router.push({ name: 'admin-page' })
      }

      this.students = res.data
      this.loading = false
    },

    async verifyPass(id) {
      this.loading = true
      const res = await this.$api.admin.verify.pass(id)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getStudents()
      this.loading = false
    },

    async verifyUnPass() {
      if (this.reason == '') {
        alert('請輸入原因！')
        return
      }

      const res = await this.$api.admin.verify.unpass(
        this.nowReasonStudentID,
        this.reason
      )

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.reasonModalShow = false
      this.getStudents()
    },

    reasonModal(id) {
      this.nowReasonStudentID = id
      this.$refs['reasonModal'].show()
    },
  },
}
</script>

<style scoped>
.verify {
  min-height: 100vh;
}

.verify-card {
  min-width: 95vw;
}

.fun-btn-group {
  display: flex;
  justify-content: flex-end;
}

.fun-btn-group button:nth-child(1) {
  margin-right: 10px;
}

img {
  display: block;
  max-width: 100%;
  max-height: 30vh;
  margin: auto;
}

@media (min-width: 768px) {
  .verify-card {
    min-width: 80vw;
  }

  .fun-btn-group button {
    margin: auto;
  }

  .fun-btn-group button:nth-child(1) {
    margin-bottom: 10px;
  }
}
</style>
