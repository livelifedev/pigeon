<template>
  <el-main class="landing-container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>"Welcome to the Guild of Pigeon Breeders."</h1>
    <el-button type="success" @click="handleOnEnter">Enter</el-button>
  </el-main>
</template>

<script>
import router from '../router';

export default {
  name: 'AppLanding',
  methods: {
    handleOnEnter() {
      router.push('/breeder-selection');
    }
  }
};
</script>

<style scoped></style>
