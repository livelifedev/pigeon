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
          :percentage="totalGrowth"
          :color="colors[selectedPigeon.element]"
        ></el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">LIFE STAGE:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">{{ selectedPigeon.lifeStage.name }}</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">STATUS:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">{{ selectedPigeon.health }}</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">HUNGER:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">{{ currentHunger }}</h5>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <h5 class="col-title">LAST FED:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">{{ fed }}</h5>
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
import { calcAge } from '../../../utils/pigeonTools';

export default {
  name: 'FeatureHealth',
  data() {
    return {
      colors: {
        Air: '#CCCCFF',
        Fire: '#CC0000',
        Earth: '#999A00',
        Water: '#0299FF',
        Void: '#9933FF'
      }
    };
  },
  computed: {
    ...mapGetters(['selectedPigeon', 'currentHunger', 'lastFedFormatted']),

    totalGrowth() {
      // Add age bonus to base growth
      return this.selectedPigeon.growth + calcAge(this.selectedPigeon.dob) * 2;
    },
    fed() {
      const lastFedInDays = calcAge(this.selectedPigeon.lastFed);
      return lastFedInDays
        ? `${lastFedInDays} days ago`
        : this.lastFedFormatted;
    }
  }
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
