<template>
  <div class="second-step-container">
    <h1>Is your squab a half-breed?</h1>

    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Primary">
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

      <el-form-item label="Sub-breed">
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

      <el-form-item>
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
