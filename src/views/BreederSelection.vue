<template>
  <div class="selection-container">
    <el-row  type="flex" justify="center">
      <el-col v-if="step !== CONFIRMATION" :span="24" :sm="{ span: 12 }">
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

      <el-col v-else :span="24" :sm="{ span: 12 }">
        <ConfirmStep
          :formDetails="formDetails"
          @onReset="handleOnReset"
          @onSubmit="handleOnSubmit"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment';
import router from '../router';
import { FirstStep, SecondStep, ThirdStep, ConfirmStep } from './components';

export default {
  name: 'BreederSelection',
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    ConfirmStep
  },
  data() {
    return {
      FIRSTSTEP: 'FIRSTSTEP',
      SECONDSTEP: 'SECONDSTEP',
      THIRDSTEP: 'THIRDSTEP',
      CONFIRMATION: 'CONFIRMATION',

      step: null,

      formDetails: { dob: moment().unix() }
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
      this.formDetails = { dob: moment().unix() };
      this.step = this.FIRSTSTEP;
    },
    handleOnSubmit() {
      // TODO: Rewrite to post to backend
      localStorage.setItem('squabDetails', JSON.stringify(this.formDetails));
      router.push('/breeder-home');
    }
  }
};
</script>

<style scoped>
::v-deep .text-note {
  text-align: justify;
}
::v-deep .el-form {
  padding-top: 10px;
}
::v-deep .button-group {
  text-align: center;
  padding-top: 15px;
}
</style>
