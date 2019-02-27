import Axios from 'axios'

const baseURLClient = process.env.baseURLClient
const baseURLServer = process.env.baseURLServer
const axios = Axios.create({ baseURL: process.server ? baseURLServer : baseURLClient })

export function fetchVisitCount () {
  return axios.get(`/visit`)
}

export function visit () {
  return axios.post(`/visit`)
}
