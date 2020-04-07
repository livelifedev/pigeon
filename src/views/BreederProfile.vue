<template>
  <div class="profile-container">
    <el-row type="flex" justify="center">
      <el-col class="details-container" :span="24" :sm="{ span: 12 }">
        <div class="profile-image">
          <i class="el-icon-user-solid"></i>
        </div>

        <div class="fields-container">
          <div v-for="field in tableData" :key="field.key">
            <h5 class="field-name">{{ field.key }}</h5>
            <span class="field-text">{{ field.value }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
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
          value: '1'
        },
        {
          key: 'Breeder Name:',
          value: '1111'
        },
        {
          key: 'Rank:',
          value: 'Novice Breeder'
        },
        {
          key: 'Email:',
          value: '111'
        },
        {
          key: 'Pigeons Bred:',
          value: '0'
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
.details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-image {
  margin-top: 15px;
  text-align: center;
}
.el-icon-user-solid {
  font-size: 8rem;
  border: #00000050 1px solid;
  border-radius: 100%;
  overflow: hidden;
  padding: 15px;
}
.field-name {
  margin: 15px 0 2px;
}
.fields-container {
  /* padding-right: 40px; */
}
.field-text {
  /* font-size: 1.4rem; */
}
</style>
