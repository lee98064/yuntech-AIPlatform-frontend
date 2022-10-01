<template>
  <section class="post vh-100" style="background-color: #f7efef">
    <b-modal v-model="editModalShow" ref="reasonModal" title="請填寫理由">
      <div style="width: 100%">
        <client-only>
          <tinymceEditor v-model="content" ref="editor"></tinymceEditor>
        </client-only>
      </div>
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
            @click="editModalShow = false"
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
        <div class="card shadow post-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h1 class="card-title text-center">公告管理</h1>
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
  setup() {},
  data() {
    return {
      title: '',
      content: '',
      loading: false,
      showErrorMessage: false,
      errorMessage: '',
      editModalShow: true,
    }
  },
  methods: {},
}
</script>

<style scoped>
.post-card {
  min-width: 95vw;
}

@media (min-width: 768px) {
  .post-card {
    min-width: 40vw;
  }
}
</style>
