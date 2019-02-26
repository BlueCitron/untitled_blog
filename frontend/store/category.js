import { fetchCategories, insertCategory, updateCategory, deleteCategory } from '../apis/category'

export const state = () => ({
  category: '',
  list: [],
})

export const getters = {
  getMaxOrder (state) {
    return state.list.length == 0 ? 1 :
      state.list
      .map(item => item.order)
      .reduce((previous, current) => previous > current ? previous : current) + 1
  }
}

export const actions = {
  async FETCH_CATEGORIES ({ commit }) {
    try {
      const { data } = await fetchCategories()
      commit('SET_CATEGORIES', data.categories)
    } catch (error) {
      console.log('Error from [action]/category/FETCH_CATEGORIES', error)
    }
  },
  INSERT_CATEGORY ({ rootState }, { title, order }) {
    const { accessToken } = rootState.auth
    return insertCategory({ accessToken, title, order })
  },
  UPDATE_CATEGORY ({ rootState }, { id, title, order }) {
    const { accessToken } = rootState.auth
    return updateCategory({ accessToken, id, title, order })
  },
  DELETE_CATEGORY ({ rootState }, { id }) {
    const { accessToken } = rootState.auth
    return deleteCategory({ accessToken, id })
  }
}

export const mutations = {
  SET_CATEGORY (state, data) {
    state.category = data
  },
  SET_CATEGORIES (state, data) {
    state.list = data
  },
}
