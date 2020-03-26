<template>
  <div class="third-step-container">
    <h2>What is your squab's elemental line?</h2>
    <h4 class="text-note">Note: Dormant within pigeons is a hidden power, this can be trained and manifested.</h4>

    <el-form ref="form" :model="form" label-width="100px" label-position="left" :rules="rules" hide-required-asterisk>
      <el-form-item label="Element:" prop="element">
        <el-select v-model="form.element" placeholder="select an element">
          <el-option
            v-for="el in elements"
            :key="el.value"
            :label="el.label"
            :value="el.label"
            :disabled="el.disabled"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="button-group" label-width="0">
        <el-button-group>
          <el-button type="info" @click="goBack">Prev</el-button>
          <el-button type="primary" @click="goNext">Done</el-button>
        </el-button-group>
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
        element: 'Air'
      },

      elements: [
        { value: 'air', label: 'Air' },
        { value: 'earth', label: 'Earth' },
        { value: 'fire', label: 'Fire' },
        { value: 'water', label: 'Water' },
        { value: 'void', label: 'Void', disabled: true }
      ],

      rules: {
        element: [{required: true}],
      }
    };
  },
  methods: {
    goNext() {
      this.$refs.form.validate((valid) => { 
        if (valid) {
          this.$emit('nextStep');
          this.$emit('onNext', this.form);
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
