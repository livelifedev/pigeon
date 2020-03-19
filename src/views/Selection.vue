<template>
  <div class="hello">
    <first-step v-if="step === FIRSTSTEP" />
    <second-step v-if="step === SECONDSTEP" />
    <third-step v-if="step === THIRDSTEP" />
  </div>
</template>

<script>
import { 
  FirstStep,
  SecondStep,
  ThirdStep
  } from './components'

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
      FIRSTSTEP: "FIRSTSTEP",
      SECONDSTEP: "SECONDSTEP",
      THIRDSTEP: "THIRDSTEP",

      step: "FIRSTSTEP",
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
