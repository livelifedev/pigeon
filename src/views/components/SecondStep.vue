<template>
  <div class="second-step-container">
    <h2>Is your squab a half-breed?</h2>
    <h4 class="text-note">Note: Certain flocks of pigeons contain mutations in their DNA, inhereting traits of another animal group.</h4>

    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-form-item label="Primary:">
        <el-select v-model="form.primary" disabled placeholder="primary breed">
          <el-option
            v-for="breed in primaryBreeds"
            :key="breed.value"
            :label="breed.label"
            :value="breed.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Sub-breed:">
        <el-select v-model="form.sub" placeholder="secondary breed">
          <el-option
            v-for="breed in subBreeds"
            :key="breed.value"
            :label="breed.label"
            :value="breed.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="button-group" label-width="0">
        <el-button type="info" @click="goBack">Prev</el-button>
        <el-button type="info" @click="goNext">Next</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SecondStep',
  data() {
    return {
      form: {
        primary: 'Pigeon',
        sub: 'Bird'
      },

      primaryBreeds: [{ value: 'pigeon', label: 'Pigeon' }],

      subBreeds: [
        { value: 'amphibian', label: 'Amphibian' },
        { value: 'bird', label: 'Bird' },
        { value: 'fish', label: 'Fish' },
        { value: 'invertebrate', label: 'Invertebrate' },
        { value: 'mammal', label: 'Mammal' },
        { value: 'reptile', label: 'Reptile' },
        { value: 'alien', label: 'Alien' },
        { value: 'mythological', label: 'Mythological' }
      ]
    };
  },
  methods: {
    goNext() {
      this.$emit('nextStep');
      this.$emit('onNext', this.form);
    },
    goBack() {
      this.$emit('prevStep');
    }
  }
};
</script>

<style scoped></style>
