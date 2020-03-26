<template>
  <div class="header-container">
    <div>
      <el-button icon="el-icon-s-home" plain circle @click="handleOnHome"></el-button>
    </div>
    <h4>Novice Breeder</h4>
    <div>
    <el-button icon="el-icon-user-solid" plain circle @click="handleOnUser"></el-button>
    </div>
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
    },
    handleOnUser() {
      router.push('/breeder-home').catch(err => err);
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.el-button {
  font-size: 1.5rem;
}
</style>
