<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
    <h1 class="title">Top posts of /r/aww</h1>
      <ImageList />
    </div>
  </div>
</template>

<script>
import ImageList from './components/ImageList.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
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
