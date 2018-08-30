import createStoreConfig from './create-store-config'
import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from '../api'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('../api')

test('returns items', async () => {
  const items = [{},{},{}]
  fetchItems.mockResolvedValue(items)

  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  await store.dispatch('fetchItems')

  expect(store.state.items).toBe(items)
})
