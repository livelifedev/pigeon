<template>
  <div class="selection-container">
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <FirstStep
          v-if="step === FIRSTSTEP"
          @nextStep="setStep(SECONDSTEP)"
          @onNext="handleOnNext"
        />
        <SecondStep
          v-if="step === SECONDSTEP"
          @prevStep="setStep(FIRSTSTEP)"
          @nextStep="setStep(THIRDSTEP)"
          @onNext="handleOnNext"
        />
        <ThirdStep
          v-if="step === THIRDSTEP"
          @prevStep="setStep(SECONDSTEP)"
          @nextStep="setStep(CONFIRMATION)"
          @onNext="handleOnNext"
        />
        <Confirmation v-if="step === CONFIRMATION" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { FirstStep, SecondStep, ThirdStep, Confirmation } from './components';

export default {
  name: 'BreederSelection',
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    Confirmation
  },
  data() {
    return {
      FIRSTSTEP: 'FIRSTSTEP',
      SECONDSTEP: 'SECONDSTEP',
      THIRDSTEP: 'THIRDSTEP',
      CONFIRMATION: 'CONFIRMATION',

      step: null,

      formDetails: {}
    };
  },
  created() {
    this.step = this.FIRSTSTEP;
  },
  methods: {
    setStep(selectedStep) {
      this.step = selectedStep;
    },
    handleOnNext(details) {
      this.formDetails = { ...this.formDetails, ...details };
      console.log('next', details);
      console.log('new details', this.formDetails);
    }
  }
};
</script>

<style scoped></style>
