<template>
  <el-main class="home-container">
    <h1>{{ msg }}</h1>
  </el-main>
</template>

<script>
export default {
  name: 'BreederHome',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
