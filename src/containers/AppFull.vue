<template>
  <div id="app">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { AppHeader } from './components';

export default {
  name: 'AppFull',
  components: {
    AppHeader
  }
};
</script>

<style scoped>
/* #app {
  color: #2c3e50;
} */
.app-header {
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.app-main {
  text-align: center;
  padding: 10px;
}
</style>
