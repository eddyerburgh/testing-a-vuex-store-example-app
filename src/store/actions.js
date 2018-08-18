import { fetchItems } from '../api'

export default {
  fetchItems ({ commit }) {
    return fetchItems()
      .then(items => commit('setItems', { items }))
  }
}
