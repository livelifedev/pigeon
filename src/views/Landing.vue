<template>
  <div class="landing-container">
    <h1>{{ msg }}</h1>
    <selection />
  </div>
</template>

<script>
import Selection from './Selection'

export default {
  name: 'landing',
  components: {
    Selection
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
