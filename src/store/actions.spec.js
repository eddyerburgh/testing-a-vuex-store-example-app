import actions from './actions'
import flushPromises from 'flush-promises'
import { fetchItems } from '../api'

jest.mock('../api')

test('fetchItems commits items returned by api method', async () => {
  const commit = jest.fn()
  fetchItems.mockResolvedValue([1, 2, 3])
  actions.fetchItems({ commit })
  await flushPromises()
  expect(commit).toHaveBeenCalledWith('setItems', { items: [1, 2, 3] })
})
