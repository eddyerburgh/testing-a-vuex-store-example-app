import getters from './getters'

test('returns ascending items if sortOrder is ascending', () => {
  const items = [
    { score: 2 },
    { score: 3 },
    { score: 1 }
  ]
  const state = {
    items,
    sortOrder: 'ascending'
  }
  expect(getters.displayedItems(state))
    .toEqual([
      { score: 1 },
      { score: 2 },
      { score: 3 }
    ])
})

test('returns items sorted by score using ascending sortKey', () => {
  const items = [
    { score: 1 },
    { score: 2 },
    { score: 3 }
  ]
  const state = {
    items,
    sortOrder: 'descending'
  }
  expect(getters.displayedItems(state))
    .toEqual([
      { score: 3 },
      { score: 2 },
      { score: 1 }
    ])
})
