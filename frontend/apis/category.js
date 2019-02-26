import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.baseURL })

export function fetchCategories() {
  return axios.get(`/category`)
}

export function insertCategory({ accessToken, title, order }) {
  return axios.post(`/category`, { title, order }, { headers: { authorization: accessToken } })
}

export function updateCategory({ accessToken, id, title, order }) {
  return axios.put(`/category/${id}`, { id, title, order }, { headers: { authorization: accessToken } })
}

export function deleteCategory({ accessToken, id }) {
  return axios.delete(`/category/${id}`, { headers: { authorization: accessToken } })
}
