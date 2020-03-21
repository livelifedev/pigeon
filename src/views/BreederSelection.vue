<template>
  <div class="selection-container">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <FirstStep
          v-if="step === FIRSTSTEP"
          @nextStep="setStep(SECONDSTEP)"
        />
        <SecondStep
          v-if="step === SECONDSTEP"
          @prevStep="setStep(FIRSTSTEP)"
          @nextStep="setStep(THIRDSTEP)"
        />
        <ThirdStep
          v-if="step === THIRDSTEP"
          @prevStep="setStep(SECONDSTEP)"
        />
      </el-col>
    </el-row>
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
  name: 'BreederSelection',
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
