<template>
  <div class="header-container">
    <div>
      <el-button
        icon="el-icon-s-home"
        plain
        circle
        @click="handleOnHome"
      ></el-button>
    </div>
    <el-card :body-style="{ padding: '0px' }">
      <h4 v-if="session" class="rank-text">Novice Breeder</h4>
    </el-card>
    <div v-if="session">
      <el-button
        icon="el-icon-user-solid"
        plain
        circle
        @click="handleOnUser"
      ></el-button>
    </div>
  </div>
</template>

<script>
import router from '../../router';

export default {
  name: 'AppHeader',
  data() {
    return {
      session: !!localStorage.getItem('squabDetails')
    };
  },
  methods: {
    handleOnHome() {
      router.push('/').catch(err => err);
    },
    handleOnUser() {
      router.push('/breeder-home').catch(err => err);
    }
  },
  // TODO: Remove watcher after implementing Vuex
  watch: {
    '$route.path'() {
      this.session = !!localStorage.getItem('squabDetails');
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
.el-card {
  height: 40px;
  display: flex;
  align-items: center;
}
.el-button {
  font-size: 1.5rem;
}
.rank-text {
  font-size: 0.8rem;
  margin: 0 20px;
}
</style>
