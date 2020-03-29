<template>
  <div>
    <el-row class="row-health">
      <el-col :span="8">
        <h5 class="col-health-title">GROWTH:</h5>
      </el-col>
      <el-col :span="16">
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="5"
          :color="colors[currentPigeon.element]"
        ></el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">LIFE STAGE:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">Hatchling</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">STATUS:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">Healthy</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">HUNGER:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">Neutral</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">LAST FED:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">{{ currentPigeon.dob }}</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">MOOD:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">Chill</h5>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FeatureHealth',
  data() {
    return {
      colors: {
        Air: '#B6D4EF',
        Fire: '#DC2226',
        Earth: '#969836',
        Water: '#2DBBED'
      },

      // TODO: Model out hunger statuses
      hunger: ['overstuffed', 'full', 'neutral', 'hungry', 'starving'],
      appetite: 100, // determined fixed value
      dayIntake: 0 // should meet appetite daily

      // TODO: Model out mood/statuses which are randomly generated and make use of play and sleep
    };
  },
  computed: mapGetters(['currentPigeon'])
};
</script>

<style scoped>
.el-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.row-health {
  display: block;
  margin-bottom: 15px;
}
.el-progress {
  max-width: 300px;
}
.col-health-title {
  margin: 6px 0 0;
}
.col-title,
.col-text {
  margin: 0;
  font-size: 0.7rem;
}
</style>
