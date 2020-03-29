<template>
  <div>
    <el-row class="row-health">
      <el-col :span="8">
        <h5 class="col-health-title">HEALTH:</h5>
      </el-col>
      <el-col :span="16">
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="80"
          status="success"
        ></el-progress>
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
        <h5 class="col-title">MOOD:</h5>
      </el-col>
      <el-col :span="16">
        <h5 class="col-text">Chill</h5>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FeatureHealth',
  data() {
    return {
      // TODO: Model out hunger statuses
      hunger: ['overstuffed', 'full', 'neutral', 'hungry', 'starving'],
      // neutral - still state, hungry - feeding time, full - met daily appetite, overstuffed - fed more for current time, starving missed feed schedule
      //
      appetite: 100, // determined fixed value
      dayIntake: 0 // should meet appetite daily
      // Should I assign points or keep count of snacks and meals
      // Each pigeon should have a consumption value based on breed
      // Food can tally up to meet this value
      // Reset day intake everyday, if end of day hungry keep hungry
    };
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
