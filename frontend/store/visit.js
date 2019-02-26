import { fetchVisitCount, visit } from '../apis/visit'

export const state = () => ({
  total: 0,
  today: 0,
  yestr: 0,
  hasVisited: false,
})

export const actions = {
  async FETCH_VISIT ({ commit }) {
    const { data } = await fetchVisitCount()
    const { total, today, yestr } = data
    commit('SET_TOTAL', total)
    commit('SET_TODAY', today)
    commit('SET_YESTR', yestr)
  },
  async VISIT ({ state, dispatch, commit }) {
    if (!state.hasVisited) {
      await visit()
      commit('SET_HAS_VISITED', true)
    }
    dispatch('FETCH_VISIT')
  }
}

export const mutations = {
  SET_TOTAL (state, data) {
    state.total = data
  },
  SET_TODAY (state, data) {
    state.today = data
  },
  SET_YESTR (state, data) {
    state.yestr = data
  },
  SET_HAS_VISITED (state, data) {
    state.hasVisited = data
  }
}
