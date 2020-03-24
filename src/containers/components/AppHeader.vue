<template>
  <div class="header-container">
    <el-button
      icon="el-icon-s-home"
      plain
      circle
      @click="handleOnHome"
    ></el-button>
  </div>
</template>

<script>
import router from '../../router';

export default {
  name: 'AppHeader',
  data() {
    return {};
  },
  methods: {
    handleOnHome() {
      router.push('/').catch(err => err);
    }
  }
};
</script>

<style scoped>
.el-button {
  font-size: 1.5rem;
}
</style>
