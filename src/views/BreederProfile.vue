<template>
  <div class="profile-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3>Breeder Profile</h3>
        <i class="el-icon-user-solid"></i>

        <el-table :data="tableData" :show-header="false">
          <el-table-column prop="key" width="120px"></el-table-column>
          <el-table-column prop="value"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-button>Logout</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '../router';

export default {
  name: 'BreederProfile',
  data() {
    return {
      tableData: [
        {
          key: 'Guild ID:',
          value: ''
        },
        {
          key: 'Breeder Name:',
          value: ''
        },
        {
          key: 'Rank:',
          value: ''
        },
        {
          key: 'Email:',
          value: ''
        },
        {
          key: 'Pigeons Bred:',
          value: ''
        }
      ]
    };
  },
  methods: {
    ...mapActions(['registerUser', 'getCurrentUser']),

    handleOnRegister() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          try {
            this.isSubmitting = true;
            await this.registerUser(this.form);
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
.profile-container {
  text-align: center;
}
.el-icon-user-solid {
  font-size: 8rem;
  border: #00000050 1px solid;
  border-radius: 100%;
  overflow: hidden;
  padding: 15px;
}
.el-button {
  margin-top: 20px;
}
</style>
