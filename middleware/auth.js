export default async function ({ app, redirect }) {
  const res = await app.$api.auth.isLogin()

  if (!res.data?.status) {
    return redirect('/auth/login')
  }
}
