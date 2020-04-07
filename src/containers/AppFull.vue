<template>
  <div id="app">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { AppHeader } from './components';

export default {
  name: 'AppFull',
  components: {
    AppHeader
  },
  created() {
    if (this.$store.state.auth.token) {
      this.getCurrentUser();
    }
  },
  methods: mapActions(['getCurrentUser'])
};
</script>

<style scoped>
.app-header {
  display: flex;
  padding: 0 10px;
  height: 60px;
}
.app-main {
  padding: 0 20px 20px 20px;
}
</style>
