<template>
  <div class="first-step-container">
    
    <h1>Please register your squab's details.</h1>

    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Gender">
        <el-select v-model="form.gender" placeholder="select a gender">
          <el-option label="Male" value="male"></el-option>
          <el-option label="Female" value="female"></el-option>
          <el-option label="Unknown" value="unknown"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Region">
        <el-select v-model="form.region" placeholder="select a region">
          <el-option label="Africa" value="africa"></el-option>
          <el-option label="Antartica" value="antartica"></el-option>
          <el-option label="Asia" value="asia"></el-option>
          <el-option label="Australia/Oceania" value="australia-oceania"></el-option>
          <el-option label="Europe" value="europe"></el-option>
          <el-option label="North America" value="north-america"></el-option>
          <el-option label="South America" value="south-america"></el-option>
          <el-option label="Unknown" value="unknown"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="info" @click="goNext()">Next</el-button>
      </el-form-item>
    </el-form>
      
  </div>
</template>

<script>
export default {
  name: 'FirstStep',
  components: {
  },
  props: {
  },
  data() {
    return {
      form: {
        name: '',
        gender: '',
        region: '',
      }
    }
  },
  methods: {
    goNext: function() {
      this.$emit('nextStep');
      this.$emit('onNext', this.form);
    },
  }
}
</script>

<style scoped>
.el-select {
  /* display: block; */
}
</style>
