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

    signup: {
      isInGroup() {
        return $axios
          .get('/signUp/isInGroup')
          .then((res) => res)
          .catch((e) => e)
      },
      createGroup(groupName) {
        return $axios
          .post('/signUp/createGroup', {
            groupName,
          })
          .then((res) => res)
          .catch((e) => e)
      },
      joinGroup(inviteCode) {
        return $axios
          .post('/signUp/joinGroup', {
            inviteCode,
          })
          .then((res) => res)
          .catch((e) => e)
      },
    },

    user: {
      info() {
        return $axios
          .get('/user')
          .then((res) => res)
          .catch((e) => e)
      },
      group() {
        return $axios
          .get('/user/group')
          .then((res) => res)
          .catch((e) => e)
      },
      upload(formData) {
        return $axios
          .post('/user/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => res)
          .catch((e) => e)
      },
      edit(student) {
        return $axios
          .patch('/user/edit', { ...student })
          .then((res) => res)
          .catch((e) => e)
      },
    },
    admin: {
      auth: {
        login(account, password) {
          return $axios
            .post('/admin/auth/login', {
              account,
              password,
            })
            .then((res) => res)
            .catch((e) => e)
        },
        isLogin() {
          return $axios
            .get('/admin/auth/isLogin')
            .then((res) => res)
            .catch((e) => e)
        },
      },
      verify: {
        all() {
          return $axios
            .get('/admin/verify')
            .then((res) => res)
            .catch((e) => e)
        },
        pass(studentID) {
          return $axios
            .post('/admin/verify/pass', {
              studentID,
            })
            .then((res) => res)
            .catch((e) => e)
        },
        unpass(studentID, reason) {
          return $axios
            .post('/admin/verify/unpass', {
              studentID,
              reason,
            })
            .then((res) => res)
            .catch((e) => e)
        },
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
