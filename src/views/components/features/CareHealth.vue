<template>
  <div>
    <el-row>
      <el-col :span="5">
        <h6 class="bar-title">HEALTH</h6>
      </el-col>

      <el-col :span="19">
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="80"
          status="success"
        ></el-progress>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="5">
        <h6 class="bar-title">HUNGER</h6>
      </el-col>

      <el-col :span="19">
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="100"
          status="warning"
        ></el-progress>
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
.bar-title {
  margin: 6px 6px 0 0;
  text-align: center;
}
.el-progress {
  max-width: 300px;
}
</style>
