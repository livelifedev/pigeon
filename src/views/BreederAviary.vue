<template>
  <div class="aviary-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3 class="heading">Pigeon Aviary</h3>

        <el-card>
          <div class="card-container">
            <img
              :src="`./assets/squab-water.svg`"
              alt="Pigeon avatar"
              class="pigeon-thumb"
            />
            <div class="pigeon-info">
              <div>
                <div class="name-text">Text</div>
                <div>Text flock</div>
              </div>
              <div>0 Days</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- <el-button type="success" @click="logout">Logout</el-button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'BreederAviary',
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    ...mapActions(['logoutUser']),

    logout() {
      this.logoutUser();
      router.push('/');
    }
  }
};
</script>

<style scoped>
.heading {
  text-align: center;
}
.card-container {
  display: flex;
  align-items: center;
}
.el-icon-user-solid {
  font-size: 8rem;
  color: darkgray;
  border: lightgray 1px solid;
  border-radius: 100%;
  overflow: hidden;
  padding: 15px;
}
.pigeon-thumb {
  height: 50px;
}
.pigeon-info {
  margin-left: 20px;
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name-text {
  font-weight: bolder;
}
</style>
