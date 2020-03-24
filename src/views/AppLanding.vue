<template>
  <div class="landing-container">
    <div v-if="!isIntro">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Welcome to the Guild of Pigeon Breeders.</h1>
      <el-button type="success" @click="handleOnEnter">Enter</el-button>
    </div>

    <div v-else>
      <GuildIntro />
      <el-button type="success" @click="handleOnGo">Go</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../router';
import { GuildIntro } from './components';

export default {
  name: 'AppLanding',
  components: {
    GuildIntro
  },
  data() {
    return {
      isIntro: false
    };
  },
  methods: {
    handleOnEnter() {
      this.isIntro = true;
    },
    handleOnGo() {
      router.push('/breeder-selection');
    }
  }
};
</script>

<style scoped>
.landing-container {
  text-align: center;
}
.el-button {
  margin-top: 15px;
}
</style>
