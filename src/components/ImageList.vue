<template>
  <div>
    <template v-for="(item) in items">
      <div class="card" :key="item.id">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48 is-clipped">
                <img :src="item.thumbnail" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">{{item.title}}</p>
              <p class="subtitle is-6">{{item.score}}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.getters.displayItems
    }
  },
  created () {
    this.$store.dispatch('fetchItems')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin-bottom: 16px;
  }
</style>
