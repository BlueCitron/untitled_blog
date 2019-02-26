import {
  fetchLatestComments,
  fetchComments,
  insertComment,
  updateComment,
  deleteComment } from '../apis/comment'

export const state = () => ({
  list: [],
  latest: [],
})

export const actions = {
  async FETCH_LATEST_COMMENTS ({ commit }) {
    const { data } = await fetchLatestComments()
    const { success, latestComments } = data
    commit('SET_LATEST_COMMENTS', latestComments)
  },

  async FETCH_COMMENTS ({ commit }, { post_id }) {
    try {
      const { data} = await fetchComments({ post_id })
      const { success, comments } = data
      commit('SET_COMMENTS', comments)
    } catch (error) {
      console.log('Error from actions/comment/FETCH_COMMENTS', error)
    }
  },

  INSERT_COMMENT ({ }, { content, writer, password, post }) {
    return insertComment({ content, writer, password, post })
  },
  DELETE_COMMENT ({ }, { comment_id, password }) {
    return deleteComment({ comment_id, password })
  }
}

export const mutations = {
  SET_LATEST_COMMENTS (state, data) {
    state.latest = data
  },

  SET_COMMENTS (state, data) {
    state.list = data
  }
}
