<template>
  <div class="landing-container">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>"Welcome to the Pigeon Breeder's Guild"</h1>
    <el-button type="primary" @click="handleOnEnter">Enter</el-button>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'AppLanding',
  components: {
  },
  props: {
    msg: String
  },
  methods: {
    handleOnEnter() {
      router.push('/breeder-selection');
    }
  }
}
</script>

<style scoped>
</style>
