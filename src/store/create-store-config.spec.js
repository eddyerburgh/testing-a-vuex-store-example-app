import createStoreConfig from './create-store-config'
import Vuex from 'vuex'
import { fetchData } from '../api'
import { createLocalVue } from '@vue/test-utils'
import { createItems } from './utils'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('../api')

test('returns first 20 items', async () => {
  const items = createItems(22)
  fetchData.mockResolvedValue(items)

  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  await store.dispatch('fetchItems')

  expect(store.getters.displayItems)
    .toEqual(items.slice(0, 21))
})
