<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppLanding msg="Welcome to the Pigeon Breeder's Guild"/>
  </div>
</template>

<script>
import AppLanding from './views/AppLanding.vue'

export default {
  name: 'App',
  components: {
    AppLanding
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
