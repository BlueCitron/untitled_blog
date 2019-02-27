import Axios from 'axios'

const baseURLClient = process.env.baseURLClient
const baseURLServer = process.env.baseURLServer
const axios = Axios.create({ baseURL: process.server ? baseURLServer : baseURLClient })

export function login({ username, password }) {
  return axios.post(`/auth/login`, { username, password })
}

export function verify({ accessToken }) {
  return axios.get(`/auth/verify?accessToken=${accessToken}`)
}
