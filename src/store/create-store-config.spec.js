import createStoreConfig from './create-store-config'
import Vuex from 'vuex'
import { fetchData } from '../api'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('../api')

test('returns items', async () => {
  const items = [{}, {}, {}]
  fetchData.mockResolvedValue(items)

  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  await store.dispatch('fetchItems')

  expect(store.state.items).toBe(items)
})
