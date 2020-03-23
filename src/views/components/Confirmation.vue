<template>
  <div class="confirmation-container">
    <h1>Please confirm the details of this certificate.</h1>
    <el-button type="success">Confirm</el-button>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
    return {
      formDetails: {},
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped></style>
