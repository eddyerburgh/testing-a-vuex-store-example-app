import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default function createStore () {
  const state = {
    page: 1,
    items: [],
    sortOrder: 'ascending'
  }

  return {
    state,
    actions,
    getters,
    mutations
  }
}
