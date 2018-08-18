import mutations from './mutations'

test('setItems updates state with items in payload', () => {
  const state = {
    items: []
  }
  const items = [{}, {}]
  mutations.setItems(state, { items })
  expect(state.items).toBe(items)
})
