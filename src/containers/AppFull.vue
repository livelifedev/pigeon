<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import { AppHeader, AppFooter } from './components';

export default {
  name: 'AppFull',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style scoped>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
