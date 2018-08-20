import createStoreConfig from './create-store-config'
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from '../api'

jest.mock('../api')

test('returns sorted items', async () => {
  Vue.use(Vuex)
  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)
  const items = [
    { score: 2 },
    { score: 3 },
    { score: 1 }
  ]
  fetchItems.mockResolvedValue(items)
  await store.dispatch('fetchItems')
  expect(store.getters.displayedItems).toEqual([
    { score: 1 },
    { score: 2 },
    { score: 3 }
  ])
})

test('returns sorted items in descending order', async () => {
  Vue.use(Vuex)
  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)
  const items = [
    { score: 2 },
    { score: 3 },
    { score: 1 }
  ]
  fetchItems.mockResolvedValue(items)
  store.commit('toggleSortOrder')
  await store.dispatch('fetchItems')
  expect(store.getters.displayedItems).toEqual([
    { score: 3 },
    { score: 2 },
    { score: 1 }
  ])
})
