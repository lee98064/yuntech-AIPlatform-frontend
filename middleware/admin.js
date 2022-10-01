export default async function ({ app, redirect }) {
  const res = await app.$api.admin.auth.isLogin()

  if (!res.data?.status) {
    return redirect('/admin/auth')
  }
}
