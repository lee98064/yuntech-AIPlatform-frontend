<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: { Navbar, Footer },
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 600;
}
html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  background-color: #f7efef;
}
</style>
