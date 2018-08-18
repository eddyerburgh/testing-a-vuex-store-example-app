<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
    <h1 class="title">Top posts of /r/aww</h1>
    <button
      @click="toggleSortOrder"
      class="button is-primary has-margin"
    >
      {{
        `sort by ${this.$store.state.sortOrder === 'ascending'
        ? 'descending'
        : 'ascending'
        }`
      }}
    </button>
      <ImageList />
    </div>
  </div>
</template>

<script>
import ImageList from './components/ImageList.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  methods: {
    toggleSortOrder () {
      this.$store.commit('toggleSortOrder')
    }
  },
  components: {
    ImageList,
    ProgressBar
  }
}
</script>

<style lang="scss">
  .has-margin {
    margin-bottom: 16px;
  }
</style>
