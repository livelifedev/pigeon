<template>
  <div class="confirmation-container">
    <h1>Please confirm the details of this certificate.</h1>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h2 class="card-title">BIRTH AND GUILD CERTIFICATE</h2>
          <h3>Guild of Pigeon Breeders</h3>
          <el-row>
            <div class="card-details">
              <span>DOB: </span>
              <span>{{ currentDate }}</span>
            </div>
            <div class="card-details">
              <span>Name: </span>
              <span>{{ squabDetails.name }}</span>
            </div>
            <div class="card-details">
              <span>Clan: </span>
              <span>{{ squabDetails.clan }}</span>
            </div>
            <div class="card-details">
              <span>Gender: </span>
              <span>{{ squabDetails.gender }}</span>
            </div>
            <div class="card-details">
              <span>Region: </span>
              <span>{{ squabDetails.region }}</span>
            </div>
            <div class="card-details">
              <span>Breed: </span>
              <span>{{ squabDetails.primary }}/{{ squabDetails.sub }}</span>
            </div>
            <div class="card-details">
              <span>Element: </span>
              <span>{{ squabDetails.element }}</span>
            </div>
          </el-row>
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
.card-details {
  /* display: flex; */
  /* justify-content: space-between; */
}
</style>
