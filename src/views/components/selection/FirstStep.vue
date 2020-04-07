<template>
  <div class="first-step-container">
    <h2>Please register your squab's details.</h2>
    <h4 class="text-note">Note: A squab is a baby pigeon.</h4>

    <el-form
      ref="firstForm"
      :model="firstForm"
      label-width="100px"
      label-position="left"
      :rules="rules"
      hide-required-asterisk
    >
      <el-form-item label="Name:" prop="name">
        <el-input v-model="firstForm.name" placeholder="given name"></el-input>
      </el-form-item>

      <el-form-item label="Flock:" prop="flock">
        <el-input
          v-model="firstForm.flock"
          placeholder="name of pigeon flock"
        ></el-input>
      </el-form-item>

      <el-form-item label="Gender:" prop="gender">
        <el-select v-model="firstForm.gender" placeholder="select a gender">
          <el-option
            v-for="gender in genders"
            :key="gender.value"
            :label="gender.label"
            :value="gender.label"
            :disabled="gender.disabled"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Region:" prop="region">
        <el-select v-model="firstForm.region" placeholder="select a region">
          <el-option
            v-for="region in regions"
            :key="region.value"
            :label="region.label"
            :value="region.label"
            :disabled="region.disabled"
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
      firstForm: {
        name: '',
        flock: '',
        gender: '',
        region: ''
      },

      genders: [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'genderless', label: 'Genderless', disabled: true }
      ],

      regions: [
        { value: 'africa', label: 'Africa' },
        { value: 'antartica', label: 'Antartica' },
        { value: 'asia', label: 'Asia' },
        { value: 'australia-oceania', label: 'Australia/Oceania' },
        { value: 'europe', label: 'Europe' },
        { value: 'north-america', label: 'North America' },
        { value: 'south-america', label: 'South America' },
        { value: 'unknown', label: 'Unknown', disabled: true }
      ],

      rules: {
        name: [{ required: true }],
        flock: [{ required: true }],
        gender: [{ required: true }],
        region: [{ required: true }]
      }
    };
  },
  methods: {
    goNext() {
      this.$refs.firstForm.validate(valid => {
        if (valid) {
          this.$emit('nextStep');
          this.$emit('onNext', this.firstForm);
        }
      });
    }
  }
};
</script>

<style scoped></style>
