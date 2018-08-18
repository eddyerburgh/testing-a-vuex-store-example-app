<template>
  <div
    class="loader"
    :value="percent"
    max="100"
  />
</template>

<script>
export default {
  data () {
    return {
      percent: 0
    }
  },
  created () {
    setInterval(() => {
      this.percent += 0.5
    }, 100)
  }
}
</script>

<style scoped>
  progress[value]::-webkit-progress-bar {
    transition : all .2s ease;
  }
</style>
