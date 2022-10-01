<template>
  <section class="group" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow group-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center mb-3">所有隊伍</h1>
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>

            <div class="accordion" role="tablist">
              <b-card no-body v-for="group in groups" :key="group.id">
                <b-card-header
                  header-tag="header"
                  class="px-3 py-2"
                  role="tab"
                  v-b-toggle="'accordion-' + group.id"
                >
                  <h4 class="mb-0 float-left">
                    第{{ group.id }}組 {{ group.name }}
                  </h4>
                  <span
                    class="badge badge-pill badge-success float-right mt-1"
                    v-if="group.isVerify"
                    >審核完成</span
                  >
                  <span
                    class="badge badge-pill badge-danger float-right mt-1"
                    v-else
                    >尚未審核完成</span
                  >
                </b-card-header>
                <b-collapse :id="'accordion-' + group.id" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="student-group">
                        <div
                          class="student mb-2"
                          v-for="student in group.Students"
                          :key="student.id"
                        >
                          <div class="row align-items-center">
                            <div class="col-12 col-md-10">
                              <h5 v-if="student.isLeader">頭銜：組長</h5>
                              <h5 v-else>頭銜：組員</h5>
                              <h5>學號：{{ student.studentID }}</h5>
                              <h5>姓名：{{ student.name }}</h5>
                              <h5>Email：{{ student.email }}</h5>
                              <h5>LineID：{{ student.lineID }}</h5>
                              <h5>手機號碼：{{ student.phone }}</h5>
                            </div>
                            <div class="col-12 col-md-2">
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
                          <hr />
                        </div>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminGroupPage',
  layout: 'admin',
  middleware: 'admin',
  async created() {
    this.getGroups()
  },
  setup() {},
  data() {
    return {
      groups: {},
      loading: true,
      showErrorMessage: false,
      errorMessage: '',
    }
  },
  methods: {
    async getGroups() {
      this.loading = true
      const res = await this.$api.admin.group.all()

      if (res instanceof Error) {
        this.$router.push({ name: 'admin-page' })
      }

      this.groups = res.data
      this.loading = false
    },
  },
}
</script>

<style scoped>
.group {
  min-height: 100vh;
}

.group-card {
  min-width: 90vw;
}

.verify img {
  display: none;
}

.student-group .student:last-child hr {
  display: none;
}

@media (min-width: 768px) {
  .group-card {
    min-width: 80vw;
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
}
</style>
