<template>
  <div class="register-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h2>Join the ranks!</h2>
        <h4 class="text-note">
          Become an official pigeon breeder of the guild.
        </h4>

        <el-form
          ref="registerForm"
          :model="registerForm"
          label-width="110px"
          label-position="left"
          :rules="rules"
          hide-required-asterisk
        >
          <el-form-item label="Breeder Name:" prop="breederName">
            <el-input
              v-model="registerForm.breederName"
              placeholder="name"
            ></el-input>
          </el-form-item>

          <el-form-item label="Email:" prop="email">
            <el-input
              v-model="registerForm.email"
              placeholder="email"
            ></el-input>
          </el-form-item>

          <el-form-item label="Password:" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
              placeholder="password"
            ></el-input>
          </el-form-item>

          <el-form-item label="Confirm:" prop="confirmPassword">
            <el-input
              type="password"
              v-model="registerForm.confirmPassword"
              placeholder="confirm password"
            ></el-input>
          </el-form-item>

          <el-form-item class="button-group" label-width="0">
            <el-button-group>
              <el-button
                type="success"
                :loading="isSubmitting"
                @click="handleOnRegister"
              >
                Register
              </el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'BreederSelection',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error("passwords don't match!"));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        breederName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      isSubmitting: false,

      rules: {
        breederName: [{ required: true }],
        email: [{ required: true }, { type: 'email', trigger: ['blur'] }],
        password: [{ required: true }],
        confirmPassword: [{ validator: validatePass }]
      }
    };
  },
  methods: {
    ...mapActions(['registerUser', 'getCurrentUser']),

    handleOnRegister() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          try {
            this.isSubmitting = true;
            await this.registerUser(this.registerForm);
            await this.getCurrentUser();

            router.push('/breeder-selection');
          } catch (error) {
            console.error(error);
            this.isSubmitting = false;

            this.$message({
              message: 'Unable to complete registration.',
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
.text-note {
  text-align: justify;
}
.el-form {
  padding-top: 10px;
}
.button-group {
  text-align: center;
  padding-top: 15px;
}
</style>
