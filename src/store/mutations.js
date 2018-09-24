export default {
  setItems (state, { items }) {
    state.items = items
  },

  incrementPage (state) {
    state.page++
  },

  decrementPage (state) {
    state.page--
  }

}
