import actions from './actions'
import { fetchItems } from '../api'

jest.mock('../api')

test('fetchItems commits items returned by api method', async () => {
  const items = [1, 2, 3]
  fetchItems.mockResolvedValue([1, 2, 3])
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items })
})
