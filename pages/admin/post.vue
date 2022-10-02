<template>
  <section class="post" style="background-color: #f7efef">
    <b-modal
      size="xl"
      v-model="editModalShow"
      ref="editModal"
      title="建立/編輯貼文"
      no-enforce-focus
    >
      <div style="width: 100%">
        <b-form-group label="標題:">
          <b-form-input
            v-model="post.title"
            type="text"
            placeholder="請輸入標題"
            required
          ></b-form-input>
        </b-form-group>
        <no-ssr>
          <tinymceEditor v-model="post.content" ref="editor"></tinymceEditor>
        </no-ssr>
      </div>
      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="warning"
            class="float-right"
            @click="editPost()"
            v-if="isEdit"
          >
            修改
          </b-button>
          <b-button
            variant="primary"
            class="float-right"
            @click="createPost()"
            v-else
          >
            送出
          </b-button>
          <b-button
            variant="secondary"
            class="float-right mr-2"
            @click="
              editModalShow = false
              isEdit = false
            "
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
        <div class="card shadow post-card relative" style="border-radius: 1rem">
          <button
            class="btn btn-sm btn-primary"
            id="newPostBtn"
            @click="create()"
          >
            新增貼文
          </button>
          <div class="card-body p-4">
            <h1 class="card-title text-center">公告管理</h1>
            <b-alert v-model="showErrorMessage" variant="danger" dismissible>
              {{ errorMessage }}
            </b-alert>
            <hr />
            <div class="post-group">
              <div
                class="post-item row mb-4"
                v-for="post in posts"
                :key="post.key"
              >
                <div class="col-12 mb-2">
                  <h5>{{ post.title }}</h5>
                  <h6 class="text-muted">{{ post.dateTime }}</h6>
                </div>
                <div class="col-12">
                  <button class="btn btn-sm btn-warning" @click="edit(post.id)">
                    編輯
                  </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deletePost(post.id)"
                  >
                    刪除
                  </button>
                  <button
                    class="btn btn-sm btn-secondary"
                    @click="hidePost(post.id)"
                    v-if="post.isOpen"
                  >
                    隱藏貼文
                  </button>
                  <button
                    class="btn btn-sm btn-info"
                    @click="showPost(post.id)"
                    v-else
                  >
                    顯示貼文
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-overlay>
    </div>
  </section>
</template>

<script>
import tinymceEditor from '~/components/tinymce-editor'
export default {
  name: 'AdminPostPage',
  layout: 'admin',
  middleware: 'admin',
  components: {
    tinymceEditor,
  },
  async created() {
    this.getPosts()
  },
  setup() {},
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
      isEdit: false,
      posts: {},
      loading: false,
      showErrorMessage: false,
      errorMessage: '',
      editModalShow: false,
    }
  },
  methods: {
    async getPosts() {
      this.loading = true
      const res = await this.$api.admin.post.all()

      if (res instanceof Error) {
        this.$router.push({ name: 'admin-page' })
      }

      this.posts = res.data
      this.loading = false
    },
    async hidePost(id) {
      this.loading = true
      const res = await this.$api.admin.post.hide(id)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getPosts()
    },
    async showPost(id) {
      this.loading = true
      const res = await this.$api.admin.post.show(id)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getPosts()
    },
    async deletePost(id) {
      if (!confirm('確定要刪除嗎？')) {
        return
      }
      this.loading = true
      const res = await this.$api.admin.post.delete(id)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.getPosts()
    },

    async edit(id) {
      this.loading = true
      const res = await this.$api.admin.post.get(id)

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }
      this.post = res.data
      this.isEdit = true
      this.editModalShow = true
      this.loading = false
    },

    async editPost() {
      if (this.post.title == '') {
        alert('標題不可空白！！')
        return
      }
      this.loading = true
      const res = await this.$api.admin.post.edit(
        this.post.id,
        this.post.title,
        this.post.content
      )

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.post = {}
      this.isEdit = false
      this.editModalShow = false
      this.getPosts()
    },

    create() {
      this.post = {
        title: '',
        content: '',
      }
      this.isEdit = false
      this.editModalShow = true
    },

    async createPost() {
      if (this.post.title == '') {
        alert('標題不可空白！！')
        return
      }
      this.loading = true
      const res = await this.$api.admin.post.create(
        this.post.title,
        this.post.content
      )

      if (res instanceof Error) {
        this.showErrorMessage = true
        this.errorMessage = res.response.data.message
        this.loading = false
        return
      }

      this.post = {}
      this.editModalShow = false
      this.getPosts()
    },
  },
}
</script>

<style scoped>
.post {
  min-height: 100vh;
}

.post-card {
  min-width: 95vw;
  min-height: 50vh;
}

.post-item h5 {
  line-break: anywhere;
}

#newPostBtn {
  position: absolute;
  right: 1.5rem;
  top: 2rem;
}

@media (min-width: 768px) {
  .post-card {
    min-width: 60vw;
  }
}
</style>
