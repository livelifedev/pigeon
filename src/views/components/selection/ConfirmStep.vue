<template>
  <div class="confirmation-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <h3 class="title">BIRTH AND GUILD CERTIFICATE</h3>
          <h5 class="title">Guild of Pigeon Breeders (GPB)</h5>

          <el-row type="flex" justify="center">
            <el-col :span="24" :sm="{ span: 16 }" class="certificate-wrapper">
              <el-table :data="tableData" :show-header="false">
                <el-table-column prop="key" width="77px"></el-table-column>
                <el-table-column prop="value"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <div class="button-group">
      <el-button-group>
        <el-button type="danger" @click="onReset">Reset</el-button>
        <el-button type="primary" :loading="showLoading" @click="onSubmit">
          Confirm
        </el-button>
      </el-button-group>
    </div>
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
    },
    isSubmitting: Boolean
  },
  data() {
    return {
      showLoading: this.isSubmitting,

      tableData: [
        {
          key: 'DOB:',
          value: moment.unix(this.formDetails.dob).format('MMMM DD, YYYY')
        },
        {
          key: 'Name:',
          value: this.formDetails.name
        },
        {
          key: 'Flock:',
          value: this.formDetails.flock
        },
        {
          key: 'Gender:',
          value: this.formDetails.gender
        },
        {
          key: 'Region:',
          value: this.formDetails.region
        },
        {
          key: 'Breed:',
          value: `${this.formDetails.primary.label}/${this.formDetails.sub.label}`
        },
        {
          key: 'Element:',
          value: this.formDetails.element.label
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
.title {
  text-align: center;
  margin: 0 0 10px;
}
.box-card {
  margin: 10px 0;
}
.certificate-wrapper {
  max-width: 300px;
}
</style>
