<template>
<nav role="navigation" aria-label="dropdown navigation">
  <a
    class="pagination-previous"
    :disabled="!hasLess"
    @click="decrement"
  >
    Prev
  </a>
  <a
    class="pagination-next"
    :disabled="!hasMore"
    @click="increment"
  >
    Next
  </a>
</nav>
</template>

<script>
export default {
  methods: {
    increment () {
      if (this.hasMore) {
        this.$store.commit('incrementPage')
      }
    },
    decrement () {
      if (this.hasLess) {
        this.$store.commit('decrementPage')
      }
    }
  },
  computed: {
    hasLess () {
      return this.$store.state.page > 1
    },
    hasMore () {
      console.log(this.$store.getters.maxPage)
      return this.$store.state.page !== this.$store.getters.maxPage
    }
  }
}
</script>
