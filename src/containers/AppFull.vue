<template>
  <el-container id="app">
    <el-header>
      <AppHeader />
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer>
      <AppFooter />
    </el-footer>
  </el-container>
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
  text-align: center;
  color: #2c3e50;
}
</style>
