<template>
  <div class="first-step-container">
    <h1>Please register your squab's details</h1>
    <el-button type="info" @click="nextStep()">Next</el-button>
  </div>
</template>

<script>
export default {
  name: 'FirstStep',
  components: {
  },
  props: {
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
