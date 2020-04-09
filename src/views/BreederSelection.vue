<template>
  <div class="selection-container">
    <el-row type="flex" justify="center">
      <el-col v-if="step !== CONFIRMATION" :span="24" :sm="{ span: 12 }">
        <FirstStep
          v-if="step === FIRSTSTEP"
          @nextStep="step = SECONDSTEP"
          @onNext="handleOnNext"
        />
        <SecondStep
          v-if="step === SECONDSTEP"
          @prevStep="step = FIRSTSTEP"
          @nextStep="step = THIRDSTEP"
          @onNext="handleOnNext"
        />
        <ThirdStep
          v-if="step === THIRDSTEP"
          @prevStep="step = SECONDSTEP"
          @nextStep="step = CONFIRMATION"
          @onNext="handleOnNext"
        />
      </el-col>

      <el-col v-else :span="24" :sm="{ span: 14 }">
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
import { mapActions } from 'vuex';
import moment from 'moment';
import router from '../router';
import { FirstStep, SecondStep, ThirdStep, ConfirmStep } from './components';
import { calcAppetite } from '../utils/pigeonTools';

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
    ...mapActions(['registerPigeon']),

    handleOnNext(details) {
      this.formDetails = { ...this.formDetails, ...details };
    },
    handleOnReset() {
      this.formDetails = { dob: moment().unix() };
      this.step = this.FIRSTSTEP;
    },
    async handleOnSubmit() {
      const finalDetails = {
        ...this.formDetails,
        appetite: calcAppetite(this.formDetails.sub.value)
      };

      await this.registerPigeon(finalDetails);
      router.push('/breeder-aviary');
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
