import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.baseURL })

export function fetchLatestPosts () {
  return axios.get('/post/latest')
}

export function fetchPost ({ id }) {
  return axios.get(`/post?post=${id}`)
}

export function fetchPosts({ page, category }) {
  const query = category ?
    `page=${page}&category=${category}`
    : `page=${page}`
  return axios.get(`/post?${query}`)
}

export function insertPost(accessToken, { title, content, category, hashtags }) {
  return axios.post(`/post`, { title, content, category, hashtags }, { headers: { authorization: accessToken } })
}

export function updatePost(accessToken, { id, title, content, category, hashtags }) {
  return axios.put(`/post/${id}`, { title, content, category, hashtags }, { headers: { authorization: accessToken } })
}

export function deletePost(accessToken, { id }) {
  return axios.delete(`/post/${id}`, { headers: { authorization: accessToken } })
}
