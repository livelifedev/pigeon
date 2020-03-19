<template>
  <div class="hello">
    <first-step v-if="step === 'first-step'" />
    <second-step v-if="step === 'second-step'" />
    <third-step v-if="step === 'third-step'" />
  </div>
</template>

<script>
import { 
  FirstStep,
  SecondStep,
  ThirdStep
  } from './views/components'

export default {
  name: 'selection',
  components: {
    FirstStep,
    SecondStep,
    ThirdStep
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      step: "first-step",
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
