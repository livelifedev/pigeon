<template>
  <div class="login-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3>Guild Member Login</h3>
        <el-form ref="loginForm" :model="loginForm" hide-required-asterisk>
          <el-form-item label="Email:" prop="email" required>
            <el-input v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password:" prop="password" required>
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-button type="success" :loading="isSubmitting" @click="login">
      Login
    </el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'AppLogin',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },

      isSubmitting: false
    };
  },
  methods: {
    ...mapActions(['loginUser', 'getCurrentUser']),

    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          try {
            this.isSubmitting = true;
            await this.loginUser(this.loginForm);
            await this.getCurrentUser();

            router.push('/breeder-aviary');
          } catch (error) {
            console.error(error);
            this.isSubmitting = false;

            this.$message({
              message: 'Unable to login.',
              type: 'error',
              center: true
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  text-align: center;
}
.el-form {
  max-width: 400px;
  margin: auto;
}
.el-button {
  margin-top: 30px;
}
</style>
