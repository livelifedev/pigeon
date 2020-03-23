<template>
  <div class="confirmation-container">
    <h1>Please confirm the details of this certificate.</h1>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h2 class="card-title">BIRTH AND GUILD CERTIFICATE</h2>
          <h3>Guild of Pigeon Breeders</h3>

          <div>DOB: {{ currentDate }}</div>
          <div>Name: {{ squabDetails.name }}</div>
          <div>Clan: {{ squabDetails.clan }}</div>
          <div>Gender: {{ squabDetails.gender }}</div>
          <div>Region: {{ squabDetails.region }}</div>
          <div>Breed: {{ squabDetails.primary }}/{{ squabDetails.sub }}</div>
          <div>Element: {{ squabDetails.element }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-button type="danger" @click="onReset">Reset</el-button>
    <el-button type="primary" @click="onSubmit">Confirm</el-button>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Confirmation',
  props: {
    formDetails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentDate: moment().format('MMMM DD, YYYY'),
      squabDetails: this.formDetails
    };
  },
  methods: {
    onReset() {
      this.$emit('onReset');
    },
    onSubmit() {
      this.$emit('onSubmit');
    }
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
