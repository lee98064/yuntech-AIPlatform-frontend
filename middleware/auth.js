export default async function ({ app, redirect }) {
  const res = await app.$api.auth.isLogin()
  if (res instanceof Error || !res.data.status) {
    return redirect('/auth/login')
  }
}
