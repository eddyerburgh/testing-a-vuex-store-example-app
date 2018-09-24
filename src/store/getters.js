export default {
  displayItems ({ page, items }) {
    const perPage = 20
    const index = perPage * page
    return items.slice(index - perPage, index)
  },

  maxPage ({ items }) {
    const perPage = 20
    return Math.ceil(items.length / perPage)
  }
}
