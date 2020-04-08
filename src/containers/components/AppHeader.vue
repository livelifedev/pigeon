<template>
  <div class="header-container">
    <div>
      <el-button
        v-if="isLoggedIn"
        icon="el-icon-house"
        plain
        circle
        @click="handleOnAviary"
      ></el-button>
      <el-button
        v-else
        icon="el-icon-s-home"
        plain
        circle
        @click="handleOnHome"
      ></el-button>
    </div>
    <el-card v-if="isLoggedIn" :body-style="{ padding: '0px' }">
      <h4 class="rank-text">{{ currentUser.rank }}</h4>
    </el-card>
    <div>
      <el-button
        icon="el-icon-user-solid"
        plain
        circle
        @click="handleOnUser(!isLoggedIn)"
      ></el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '../../router';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn', 'currentUser']),
  methods: {
    handleOnHome() {
      router.push('/').catch(err => err);
    },
    handleOnAviary() {
      router.push('/breeder-aviary').catch(err => err);
    },
    handleOnUser(login) {
      if (login) {
        router.push('/login').catch(err => err);
      } else {
        router.push('/breeder-profile').catch(err => err);
      }
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
