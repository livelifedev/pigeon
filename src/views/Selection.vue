<template>
  <div class="selection-screen">
    <first-step
      v-if="step === FIRSTSTEP"
      @nextStep="setStep(SECONDSTEP)"
    />
    <second-step
      v-if="step === SECONDSTEP"
      @prevStep="setStep(FIRSTSTEP)"
      @nextStep="setStep(THIRDSTEP)"
    />
    <third-step
      v-if="step === THIRDSTEP"
      @prevStep="setStep(SECONDSTEP)"
    />
  </div>
</template>

<script>
import { 
  FirstStep,
  SecondStep,
  ThirdStep
} from './components'

// Constants
const FIRSTSTEP = "FIRSTSTEP";
const SECONDSTEP = "SECONDSTEP";
const THIRDSTEP = "THIRDSTEP";

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
  data() {
    return {
      FIRSTSTEP,
      SECONDSTEP,
      THIRDSTEP,

      step: FIRSTSTEP,
    }
  },
  methods: {
    setStep(selectedStep) {
      console.log('set', selectedStep);
      this.step = selectedStep;
    }
  }
}
</script>

<style scoped>
</style>
