import actions from './actions'
import { fetchItems } from '../api'

jest.mock('../api')

test('fetchItems commits items returned by api method', async () => {
  const commit = jest.fn()
  fetchItems.mockResolvedValue([1, 2, 3])
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items: [1, 2, 3] })
})
