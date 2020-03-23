<template>
  <div class="confirmation-container">
    <h1>Please confirm the details of this certificate.</h1>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h2 class='card-title'>BIRTH AND GUILD CERTIFICATE</h2>
          <h3>Guild of Pigeon Breeders</h3>
        </el-card>
      </el-col>
    </el-row>
    <el-button type="success">Confirm</el-button>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
    return {
      formDetails: {}
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}
.card-title {
}
</style>
