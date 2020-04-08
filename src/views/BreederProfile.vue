<template>
  <div class="profile-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3>Breeder Profile</h3>
        <i class="el-icon-user-solid"></i>

        <div class="details-wrapper">
          <el-table :data="tableData" :show-header="false">
            <el-table-column prop="key" width="120px"></el-table-column>
            <el-table-column prop="value"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <el-button type="success" @click="logout">Logout</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'BreederProfile',
  computed: {
    ...mapGetters(['currentUser']),

    tableData() {
      if (this.currentUser) {
        return [
          {
            key: 'Guild ID:',
            value: `#${this.currentUser.id}`
          },
          {
            key: 'Breeder Name:',
            value: this.currentUser.breederName
          },
          {
            key: 'Rank:',
            value: this.currentUser.rank
          },
          {
            key: 'Email:',
            value: this.currentUser.email
          },
          {
            key: 'Pigeons Bred:',
            value: this.currentUser.pigeons
          }
        ];
      }
      return null;
    }
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
.profile-container {
  text-align: center;
}
.el-icon-user-solid {
  font-size: 8rem;
  color: darkgray;
  border: lightgray 1px solid;
  border-radius: 100%;
  overflow: hidden;
  padding: 15px;
}
.details-wrapper {
  max-width: 400px;
  margin: auto;
  margin-top: 5px;
}
.el-button {
  margin-top: 30px;
}
</style>
