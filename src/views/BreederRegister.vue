<template>
  <div class="selection-container">
    <h2>Join the ranks!</h2>
    <h4 class="text-note">Become an official Pigeon Breeder.</h4>

    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <el-form
          ref="form"
          :model="form"
          label-width="110px"
          label-position="left"
          :rules="rules"
          hide-required-asterisk
        >
          <el-form-item label="Breeder Name:" prop="breederName">
            <el-input
              v-model="form.breederName"
              placeholder="username"
            ></el-input>
          </el-form-item>

          <el-form-item label="Email:" prop="email">
            <el-input v-model="form.email" placeholder="email"></el-input>
          </el-form-item>

          <el-form-item label="Password:" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              placeholder="password"
            ></el-input>
          </el-form-item>

          <el-form-item label="Confirm:" prop="confirmPassword">
            <el-input
              type="password"
              v-model="form.confirmPassword"
              placeholder="confirm password"
            ></el-input>
          </el-form-item>

          <el-form-item class="button-group" label-width="0">
            <el-button-group>
              <el-button type="primary" @click="handleOnRegister">
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
      if (value !== this.form.password) {
        callback(new Error("passwords don't match!"));
      } else {
        callback();
      }
    };

    return {
      form: {
        breederName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },

      rules: {
        breederName: [{ required: true }],
        email: [{ required: true }, { type: 'email', trigger: ['blur'] }],
        password: [{ required: true }],
        confirmPassword: [{ validator: validatePass }]
      }
    };
  },
  methods: {
    ...mapActions(['registerUser']),

    handleOnRegister() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            await this.registerUser(this.form);
            router.push('/breeder-selection');
          } catch (error) {
            console.log(error);
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
