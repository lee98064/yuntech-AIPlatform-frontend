<template>
  <div>
    <section class="post" style="background-color: #f7efef">
      <div
        class="container d-flex justify-content-center align-items-center h-100 py-5"
      >
        <b-overlay :show="loading" rounded="sm">
          <div class="card shadow-sm post-card" style="border-radius: 1rem">
            <div class="card-body p-4">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6 class="text-muted">{{ post.dateTime }}</h6>
              <hr />

              <div class="content" v-html="post.content"></div>
            </div>
          </div>
        </b-overlay>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Post',
  layout: 'default',
  async created() {
    if (this.$route.params.id == undefined) {
      this.$router.push({ name: 'posts' })
    }

    const res = await this.$api.post.get(this.$route.params.id)

    if (res instanceof Error) {
      this.$router.push({ name: 'posts' })
    }

    this.post = res.data
    this.loading = false
  },
  setup() {},
  data() {
    return {
      post: {},
      loading: true,
    }
  },
}
</script>

<style scoped>
.post {
  padding: 80px 0px;
  min-height: 80vh;
}

.post-card {
  min-width: 90vw;
  min-height: 60vh;
}

.post-group {
  display: flex;
  flex-direction: column;
}
.card-title {
  line-break: anywhere;
}
.content {
  width: 100%;
}

.break-word {
  line-break: anywhere;
}

@media (min-width: 768px) {
  .post-card {
    min-width: 60vw;
  }
}
</style>
