import jwt_decode from 'jwt-decode'
export default ({ app }, inject) => {
  inject('jwt', jwt_decode)
}
