<template>
  <div class="first-step-container">
    <h1>What</h1>
    <button @click="nextStep()">Next</button>
  </div>
</template>

<script>
export default {
  name: 'first-set',
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
