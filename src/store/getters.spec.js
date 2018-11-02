import getters from './getters'

test('maxPage returns max number of pages made from items', () => {
  const items = Array(22)
    .fill()
    .map((v, i) => i)

  const state = {
    items
  }

  expect(getters.maxPage(state)).toEqual(2)
})

test('returns first 20 items if state.page value is 1', () => {
  const items = Array(22)
    .fill()
    .map((v, i) => i)

  const state = {
    items,
    page: 1
  }

  const result = getters.displayItems(state)

  expect(result).toEqual(items.slice(0, 20))
})

test('returns items 21-40 if state.page value is 2', () => {
  const items = Array(42)
    .fill()
    .map((v, i) => i)

  const state = {
    items,
    page: 2
  }

  const result = getters.displayItems(state)

  expect(result).toEqual(items.slice(20, 40))
})
