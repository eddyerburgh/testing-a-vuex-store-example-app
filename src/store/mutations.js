export default {
  setItems (state, { items }) {
    state.items = items
  },

  toggleSortOrder (state) {
    state.sortOrder = state.sortOrder === 'ascending'
      ? 'descending'
      : 'ascending'
  }
}
