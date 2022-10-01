<template>
  <section class="signup vh-100" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow signup-card" style="border-radius: 1rem">
          <div class="card-body p-4" v-if="isInGroup">
            <h1 class="card-title text-center mb-3">{{ group.name }}</h1>
            <h5 class="text-center text-muted">
              邀請碼：{{ group.inviteCode }}
            </h5>
            <h5 class="text-center text-muted mb-3 text-danger">
              隊伍狀態：<span
                :class="group.isVerify ? 'text-success' : 'text-danger'"
                >{{ group.isVerify ? '已驗證' : '尚未驗證' }}</span
              >
            </h5>
            <!-- <h5 class="text-muted">組員名單</h5> -->
            <!-- <hr /> -->
            <div class="member-group">
              <div
                class="member mb-3"
                v-for="student in group.Students"
                :key="student.id"
              >
                <hr />
                <div class="row align-items-center">
                  <div class="col-8 col-md-10">
                    <h5 v-if="student.isLeader">頭銜：組長</h5>
                    <h5 v-else>頭銜：組員</h5>
                    <h5>學號：{{ student.studentID }}</h5>
                    <h5>姓名：{{ student.name }}</h5>
                  </div>
                  <div class="col-4 col-md-2">
                    <div class="verify" v-if="student.isVerify">
                      <img src="~/static/check.png" alt="" />
                      <h5 class="text-muted mb-0">已驗證</h5>
                    </div>
                    <div class="verify" v-else>
                      <img src="~/static/cancel.png" alt="" />
                      <h5 class="text-muted mb-0">尚未驗證</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 未報名 -->
          <div class="card-body p-4" v-else>
            <h1 class="card-title text-center mb-3">報名表單</h1>
            <h5 class="text-center text-muted">您可以選擇</h5>
            <hr />
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>
            <div class="card-text">
              <div class="createGroup">
                <h5 class="text-muted mb-2">建立隊伍</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入隊名"
                    v-model="groupName"
                  />
                  <small class="form-text text-muted"
                    >*建立後您將成為您建立的小組組長</small
                  >
                </div>
                <button
                  type="button"
                  class="btn btn-warning ml-auto d-block"
                  @click="createGroup()"
                >
                  建立組別
                </button>
              </div>

              <hr />

              <div class="joinGroup">
                <h5 class="text-muted mb-2">加入組別</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入加入代碼"
                    v-model="inviteCode"
                  />
                  <small class="form-text text-muted"
                    >*須向你們組長索取加入代碼</small
                  >
                </div>
                <button
                  type="button"
                  class="btn btn-success ml-auto d-block"
                  @click="joinGroup()"
                >
                  加入組別
                </button>
              </div>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StudentSignUpPage',
  layout: 'student',
  middleware: 'auth',
  async created() {
    const res = await this.$api.signup.isInGroup()

    if (res instanceof Error) {
      this.$router.push({ name: 'dashboard-page' })
    }

    if (res.data?.isInGroup) {
      this.getGroupInfo()
      this.isInGroup = true
    }

    this.loading = false
  },
  setup() {},
  data() {
    return {
      isInGroup: false,
      group: {},
      groupName: '',
      inviteCode: '',
      loading: true,
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    async createGroup() {
      if (this.groupName == '') {
        this.showErrorMessage = true
        this.errorMessage = '請輸入隊名！'
        return
      }

      const res = await this.$api.signup.createGroup(this.groupName)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getGroupInfo()
      this.isInGroup = true
    },

    async joinGroup() {
      const res = await this.$api.signup.joinGroup(this.inviteCode)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getGroupInfo()
      this.isInGroup = true
    },

    async getGroupInfo() {
      const res = await this.$api.user.group()

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.group = res.data
    },
  },
}
</script>

<style scoped>
.signup-card {
  min-width: 95vw;
}

.verify img {
  display: block;
  margin: auto;
  margin-bottom: 0.5rem;
  max-width: 50px;
}

.verify h5 {
  text-align: center;
}

@media (min-width: 768px) {
  .signup-card {
    min-width: 50vw;
  }
}
</style>
