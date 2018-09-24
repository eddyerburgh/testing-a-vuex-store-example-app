import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default function createStore () {
  const state = {
    page: 1,
    items: []
  }

  return {
    state,
    actions,
    mutations,
    getters
  }
}
