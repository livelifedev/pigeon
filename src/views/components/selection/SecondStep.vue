<template>
  <div class="second-step-container">
    <h2>Is your squab a half-breed?</h2>
    <h4 class="text-note">
      Note: Certain flocks of pigeon contain mutations in their DNA, inhereting
      traits of another animal group.
    </h4>

    <el-form
      ref="secondForm"
      :model="secondForm"
      label-width="100px"
      label-position="left"
      :rules="rules"
      hide-required-asterisk
    >
      <el-form-item label="Primary:" prop="primary">
        <el-select
          v-model="secondForm.primary"
          disabled
          placeholder="primary breed"
        >
          <el-option
            v-for="breed in primaryBreeds"
            :key="breed.value"
            :label="breed.label"
            :value="breed.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Sub-breed:" prop="sub">
        <el-select v-model="secondForm.sub" placeholder="secondary breed">
          <el-option
            v-for="breed in subBreeds"
            :key="breed.value"
            :label="breed.label"
            :value="breed"
            :disabled="breed.disabled"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="button-group" label-width="0">
        <el-button-group>
          <el-button type="info" @click="goBack">Prev</el-button>
          <el-button type="info" @click="goNext">Next</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SecondStep',
  data() {
    return {
      secondForm: {
        primary: { value: 0, label: 'Pigeon' },
        sub: { value: 2, label: 'Bird' }
      },

      primaryBreeds: [{ value: 0, label: 'Pigeon' }],

      // TODO: List should be retrieved from API to keep in sync
      subBreeds: [
        { value: 1, label: 'Amphibian' },
        { value: 2, label: 'Bird' },
        { value: 3, label: 'Fish' },
        { value: 4, label: 'Invertebrate' },
        { value: 5, label: 'Mammal' },
        { value: 6, label: 'Reptile' },
        { value: 7, label: 'Alien', disabled: true },
        { value: 8, label: 'Mythological', disabled: true }
      ],

      rules: {
        primary: [{ required: true }],
        sub: [{ required: true }]
      }
    };
  },
  methods: {
    goNext() {
      this.$refs.secondForm.validate(valid => {
        if (valid) {
          this.$emit('nextStep');
          this.$emit('onNext', this.secondForm);
        }
      });
    },
    goBack() {
      this.$emit('prevStep');
    }
  }
};
</script>

<style scoped></style>
