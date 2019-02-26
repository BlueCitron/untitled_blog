import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.baseURL })

export function fetchLatestComments () {
  return axios.get(`/comment/latest`)
}

export function fetchComments ({ post_id }) {
  return axios.get(`/comment?post=${post_id}`)
}

export function insertComment ({ content, writer, password, post }) {
  return axios.post(`/comment`, { content, writer, password, post })
}

export function updateComment ({ comment_id, content, password }) {
  return axios.put(`/comment/${comment_id}`, { content, password })
}

export function deleteComment ({ comment_id, password }) {
  return axios.delete(`/comment/${comment_id}?password=${password}`)
}
