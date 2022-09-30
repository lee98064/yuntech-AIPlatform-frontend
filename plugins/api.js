function createApi($axios) {
  return {
    auth: {
      login(studentID, password) {
        return $axios
          .post('/auth/login', {
            studentID,
            password,
          })
          .then((res) => res)
          .catch((e) => e)
      },
      register(studentID, email, name, password, phone, lineID) {
        return $axios
          .post('/auth/register', {
            studentID,
            email,
            name,
            password,
            phone,
            lineID,
          })
          .then((res) => res)
          .catch((e) => e)
      },
      forget(studentID, email) {
        return $axios
          .post('/auth/forget', {
            studentID,
            email,
          })
          .then((res) => res)
          .catch((e) => e)
      },
      isLogin() {
        return $axios
          .get('/auth/isLogin')
          .then((res) => res)
          .catch((e) => e)
      },
    },
  }
}

import Vue from 'vue'

export default (context, inject) => {
  // 注入Vue實例
  Vue.prototype.$api = createApi(context.$axios)

  // 注入context
  context.app.$api = createApi(context.$axios)

  // 同時注入，前面會自帶$
  inject('api', createApi(context.$axios))
}
