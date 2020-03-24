<template>
  <div class="header-container">
    <el-button
      type="success"
      icon="el-icon-s-home"
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
      router.push('/');
    }
  }
};
</script>

<style scoped>
.el-button {
  font-size: 1.5rem;
}
</style>
