<template>
  <el-main class="selection-container">
    <el-row v-if="step === CONFIRMATION" type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <Confirmation
          :formDetails="formDetails"
          @onReset="handleOnReset"
          @onSubmit="handleOnSubmit"
        />
      </el-col>
    </el-row>

    <el-row v-else type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 8 }">
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
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import router from '../router';
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
    },
    handleOnReset() {
      this.formDetails = {};
      this.step = this.FIRSTSTEP;
    },
    handleOnSubmit() {
      // TODO: Rewrite to post to backend
      localStorage.setItem('squabDetails', JSON.stringify(this.formDetails));
      this.formDetails = {};
      router.push('/breeder-home');
    }
  }
};
</script>

<style scoped></style>
