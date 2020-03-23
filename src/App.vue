<template>
  <div id="app">
    <el-container>
      <el-header></el-header>

      <router-view></router-view>

      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
