<template>
  <div class="first-step-container">
    <h2>Please register your squab's details.</h2>
    <h4>Note: A squab is a baby pigeon.</h4>

    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="Name:">
        <el-input v-model="form.name" placeholder="given name"></el-input>
      </el-form-item>

      <el-form-item label="Flock:">
        <el-input v-model="form.flock" placeholder="name of pigeon flock"></el-input>
      </el-form-item>

      <el-form-item label="Gender:">
        <el-select v-model="form.gender" placeholder="select a gender">
          <el-option
            v-for="gender in genders"
            :key="gender.value"
            :label="gender.label"
            :value="gender.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Region:">
        <el-select v-model="form.region" placeholder="select a region">
          <el-option
            v-for="region in regions"
            :key="region.value"
            :label="region.label"
            :value="region.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="button-group" label-width="0">
        <el-button type="info" @click="goNext">Next</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FirstStep',
  data() {
    return {
      form: {
        name: '',
        flock: '',
        gender: '',
        region: ''
      },

      genders: [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'unknown', label: 'Unknown' }
      ],

      regions: [
        { value: 'africa', label: 'Africa' },
        { value: 'antartica', label: 'Antartica' },
        { value: 'asia', label: 'Asia' },
        { value: 'australia-oceania', label: 'Australia/Oceania' },
        { value: 'europe', label: 'Europe' },
        { value: 'north-america', label: 'North America' },
        { value: 'south-america', label: 'South America' },
        { value: 'unknown', label: 'Unknown' }
      ]
    };
  },
  methods: {
    goNext() {
      this.$emit('nextStep');
      this.$emit('onNext', this.form);
    }
  }
};
</script>

<style scoped>
.el-form {
  padding-top: 10px;
}
.button-group {
  text-align: center;
  padding-top: 15px;
}
</style>
