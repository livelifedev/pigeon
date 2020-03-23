<template>
  <div class="confirmation-container">
    <h1>Please confirm the details of this certificate.</h1>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h2 class="card-title">BIRTH AND GUILD CERTIFICATE</h2>
          <h3>Guild of Pigeon Breeders</h3>

          <div>DOB: {{ currentDate }}</div>
          <div>Name:</div>
          <div>Clan:</div>
          <div>Gender:</div>
          <div>Region:</div>
          <div>Breed:</div>
          <div>Element:</div>
        </el-card>
      </el-col>
    </el-row>
    <el-button type="success">Confirm</el-button>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Confirmation',
  data() {
    return {
      currentDate: null,
      formDetails: {}
    };
  },
  created() {
    this.currentDate = moment().format('MMMM DD, YYYY');
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
