import { fetchData } from '../api'

export default {
  fetchItems ({ commit }) {
    return fetchData()
      .then(items => commit('setItems', { items }))
  }
}
