import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.baseURL })

export function login({ username, password }) {
  return axios.post(`/auth/login`, { username, password })
}

export function verify({ accessToken }) {
  return axios.get(`/auth/verify?accessToken=${accessToken}`)
}
