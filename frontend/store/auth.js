import { login, verify } from '../apis/auth'

export const state = () => ({
  user: {},
  accessToken: '',
})

export const actions = {
  LOGIN ({ }, { username, password }) {
    return login({ username, password })
  },
  VERIFY ({ }, { accessToken }) {
    return verify({ accessToken })
  }
}

export const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_ACCESSTOKEN (state, data) {
    state.accessToken = data
  }
}
