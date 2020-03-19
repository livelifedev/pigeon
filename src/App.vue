<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <landing msg="Welcome to Pigeon Breeder"/>
  </div>
</template>

<script>
import Landing from './views/Landing.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
