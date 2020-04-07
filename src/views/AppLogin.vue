<template>
  <div class="profile-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3>Guild Member Login</h3>
        <el-form ref="loginForm" :model="loginForm" label-width="120px">
          <el-form-item label="Activity name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-button @click="login">Login</el-button>
  </div>
</template>

<script>
// import router from '../router';

export default {
  name: 'AppLogin',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      // localStorage.removeItem('token');
      // router.push('/');
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
