<template>
  <div class="confirmation-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h2>BIRTH AND GUILD CERTIFICATE</h2>
          <h3>Guild of Pigeon Breeders</h3>

          <el-table :data="tableData" :show-header="false">
            <el-table-column prop="key"> </el-table-column>
            <el-table-column prop="value"> </el-table-column>
          </el-table>
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
  name: 'ConfirmStep',
  props: {
    formDetails: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tableData: [
        {
          key: 'DOB',
          value: moment().format('MMMM DD, YYYY')
        },
        {
          key: 'Name',
          value: this.formDetails.name
        },
        {
          key: 'Flock',
          value: this.formDetails.flock
        },
        {
          key: 'Gender',
          value: this.formDetails.gender
        },
        {
          key: 'Region',
          value: this.formDetails.region
        },
        {
          key: 'Breed',
          value: `${this.formDetails.primary}/${this.formDetails.sub}`
        },
        {
          key: 'Element',
          value: this.formDetails.element
        }
      ]
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
  margin: 20px 0;
}
.el-table {
  padding: 0 20px;
}
</style>
