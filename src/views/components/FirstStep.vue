<template>
  <div class="first-step-container">
    
    <h1>Please register your squab's details.</h1>

    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Gender">
        <el-select v-model="form.gender" placeholder="please select a gender" inline="false">
          <el-option label="Male" value="male"></el-option>
          <el-option label="Female" value="female"></el-option>
          <el-option label="Unknown" value="unknown"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Region">
        <el-input v-model="form.region"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="info" @click="nextStep()">Next</el-button>
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
        dob: '',
        region: '',
      }
    }
  },
  methods: {
    nextStep: function() {
      this.$emit('nextStep')
    },
  }
}
</script>

<style scoped>
</style>
