export default {
  displayedItems ({
    items = [],
    sortOrder
  }) {
    return items.sort((a, b) => {
      return sortOrder === 'ascending'
        ? a.score - b.score
        : b.score - a.score
    })
  }
}
