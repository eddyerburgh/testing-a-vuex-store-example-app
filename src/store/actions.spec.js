import actions from './actions'
import { fetchData } from '../api'

jest.mock('../api')

test('fetchItems commits items returned by api method', async () => {
  const items = [1, 2, 3]
  fetchData.mockResolvedValue([1, 2, 3])
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items })
})
