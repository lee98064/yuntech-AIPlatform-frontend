<template>
  <b-navbar toggleable="lg" type="light" id="navbar">
    <b-navbar-brand :to="{ name: 'index', hash: '#area1' }"
      ><img src="~/static/logo.png" alt="" width="250px"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!--
    <b-navbar-toggle target="navbar-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle> -->

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'index', hash: '#about' }"
          >關於競賽</b-nav-item
        >
        <b-nav-item :to="{ name: 'index', hash: '#rule' }">活動規則</b-nav-item>
        <b-nav-item :to="{ name: 'index', hash: '#post' }">比賽公告</b-nav-item>
        <b-nav-item :to="{ name: 'index', hash: '#reward' }"
          >競賽獎項</b-nav-item
        >
        <b-nav-item :to="{ name: 'index', hash: '#timeline' }"
          >競賽時程表</b-nav-item
        >
        <b-nav-item :to="{ name: 'index', hash: '#signupstep' }"
          >報名流程</b-nav-item
        >
        <!-- <b-nav-item to="#">查看積分</b-nav-item> -->
        <b-nav-item to="/auth/login">報名系統</b-nav-item>
        <!-- <b-nav-item to="/auth/login">登入</b-nav-item> -->
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
>n-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (isJustShown) {
        document.getElementById('navbar').classList.add('navbar-white')
      } else if (window.scrollY > 20) {
        document.getElementById('navbar').classList.add('navbar-white')
      } else {
        document.getElementById('navbar').classList.remove('navbar-white')
      }
    })
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 20) {
        document.getElementById('navbar').classList.add('navbar-white')
      } else {
        document.getElementById('navbar').classList.remove('navbar-white')
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10000;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
}

.navbar-white {
  box-shadow: 0 0.2rem 1rem rgb(0 0 0 / 15%);
  background-color: rgba(255, 255, 255, 1);
}

.navbar-open {
  box-shadow: 0 0.2rem 1rem rgb(0 0 0 / 15%);
  background-color: rgba(255, 255, 255, 1);
}

@media (min-width: 768px) {
  .navbar {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
