<template>
  <div class="landing-container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'AppLanding',
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
