import {
  fetchLatestPosts,
  fetchPost,
  fetchPosts,
  insertPost,
  updatePost,
  deletePost } from '../apis/post'

export const state = () => ({
  post: {},
  list: [],
  latest: [],
  pageinfo: {
    total: 0,
    page: 1,
    perPage: 4,
  },
})

export const actions = {
  async FETCH_LATEST_POSTS ({ commit }) {
    const { data } = await fetchLatestPosts()
    const { success, latestPosts } = data
    commit('SET_LATEST_POSTS', latestPosts)
  },

  async FETCH_POST ({ commit }, { id }) {
    try {
      const { data } = await fetchPost({ id })
      const { success, post } = data
      const buf = new Buffer(post.content)
      post.content = buf.toString()
      commit('SET_POST', post)
    } catch (error) {
      console.log('Error from actions/post/FETCH_POST', error)
    }
  },
  async FETCH_POSTS ({ commit }, { page, category }) {
    try {
      const { data } = await fetchPosts({ page, category })
      const { success } = data
      const { posts, pageinfo } = data
      posts.map(post => {
        const buf = new Buffer(post.content)
        post.content = buf.toString()
      })
      commit('SET_POSTS', posts)
      commit('SET_PAGEINFO', pageinfo)
    } catch (error) {
      console.log('Error from actions/post/FETCH_POSTS', error)
    }
  },
  INSERT_POST ({ rootState }, { title, content, category, hashtags }) {
    const { accessToken } = rootState.auth
    return insertPost(accessToken, { title, content, category, hashtags })
  },
  UPDATE_POST ({ rootState }, { id, title, content, category, hashtags }) {
    const { accessToken } = rootState.auth
    return updatePost(accessToken, { id, title, content, category, hashtags })
  },
  DELETE_POST ({ rootState }, { id }) {
    const { accessToken } = rootState.auth
    return deletePost(accessToken, { id })
  }
}

export const mutations = {
  SET_LATEST_POSTS (state, data) {
    state.latest = data
  },
  SET_POST (state, data) {
    state.post = data
  },
  SET_POSTS (state, data) {
    state.list = data
  },
  SET_PAGEINFO (state, data) {
    state.pageinfo = data
  },
  SET_CATEGORY (state, data) {
    state.category = data
  },
  SET_PAGE (state, data) {
    state.pageinfo.page = data
  }
}
