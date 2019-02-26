import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.baseURL })

export function fetchVisitCount () {
  return axios.get(`/visit`)
}

export function visit () {
  return axios.post(`/visit`)
}
