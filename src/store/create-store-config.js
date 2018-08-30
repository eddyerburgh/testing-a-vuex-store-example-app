import mutations from './mutations'
import actions from './actions'

export default function createStore () {
  const state = {
    page: 1,
    items: [],
    sortOrder: 'ascending'
  }

  return {
    state,
    actions,
    mutations
  }
}
