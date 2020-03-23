<template>
  <div class="third-step-container">
    <h1>What element does your squab belong to?</h1>

    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="Element">
        <el-select v-model="form.element" placeholder="select an element">
          <el-option
            v-for="el in elements"
            :key="el.value"
            :label="el.label"
            :value="el.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="info" @click="goBack">Prev</el-button>
        <el-button type="info" @click="goNext">Done</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ThirdStep',
  data() {
    return {
      form: {
        element: 'Normal'
      },

      elements: [
        { value: 'air', label: 'Air' },
        { value: 'earth', label: 'Earth' },
        { value: 'fire', label: 'Fire' },
        { value: 'water', label: 'Water' },
        { value: 'normal', label: 'Normal' },
        { value: 'space', label: 'Space' }
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
