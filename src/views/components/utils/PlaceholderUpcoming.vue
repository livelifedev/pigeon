<template>
  <el-card>
    <h3 class="title">Upcoming Feature.</h3>
    <p class="description"><slot></slot></p>
  </el-card>
</template>

<script>
export default {
  name: 'PlaceholderUpcoming'
};
</script>

<style scoped>
.title {
  margin: 0;
  text-align: center;
}
.description {
  font-size: 1rem;
}
</style>
