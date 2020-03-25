<template>
  <el-card class="box-card">
    <h3 class="title">Upcoming Feature.</h3>
    <p class="description"><slot></slot></p>
  </el-card>
</template>

<script>
export default {
  name: 'PlaceholderUpcoming',
};
</script>

<style scoped>
.title {
  margin: 0;
}
.description {
  font-size: 0.8em;
}
</style>
