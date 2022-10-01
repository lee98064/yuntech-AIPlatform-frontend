<template>
  <section class="posts" style="background-color: #f7efef">
    <div
      class="container d-flex justify-content-center align-items-center h-100 py-5"
    >
      <b-overlay :show="loading" rounded="sm">
        <div class="card shadow posts-card" style="border-radius: 1rem">
          <div class="card-body p-4">
            <h3 class="card-title text-center">所有公告</h3>
            <hr />

            <div class="post-group">
              <div class="post" v-for="post in posts" :key="post.id">
                <h5>
                  <nuxt-link
                    class="text-dark break-word"
                    :to="{ name: 'posts-id', params: { id: post.id } }"
                  >
                    {{ post.title }}
                  </nuxt-link>
                </h5>

                <h6 class="text-muted">{{ post.dateTime }}</h6>
                <hr />
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
  name: 'Posts',
  layout: 'default',
  async created() {
    const res = await this.$api.post.all()

    if (res instanceof Error) {
      this.$router.push({ name: 'index' })
    }

    this.posts = res.data
    this.loading = false
  },
  setup() {},
  data() {
    return {
      posts: {},
      loading: true,
    }
  },
}
</script>

<style scoped>
.posts {
  padding: 80px 0px;
  min-height: 100vh;
}

.posts-card {
  min-width: 90vw;
  min-height: 60vh;
}

.post-group {
  display: flex;
  flex-direction: column;
}

.post {
  width: 100%;
}

.break-word {
  line-break: anywhere;
}

@media (min-width: 768px) {
  .posts-card {
    min-width: 60vw;
  }
}
</style>
