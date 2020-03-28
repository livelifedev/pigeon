<template>
  <div>
    <p class="feature-description">
      It is important to maintain a daily feeding schedule to nurture a healthy
      growth. As a pigeon/bird, <span class="info-text">name</span> has a strong
      appetite and requires <span class="info-text">3x feeding</span>.
    </p>

    <el-button class="action-button" type="success" size="small">
      FEED
    </el-button>
    <h4>
      Feeding schedule
      <el-button
        class="edit-button"
        icon="el-icon-edit"
        circle
        size="small"
      ></el-button>
    </h4>
    <el-time-select
      v-for="meal in meals"
      :key="meal"
      v-model="time"
      :picker-options="{
        start: '00:00',
        step: '01:00',
        end: '23:00'
      }"
      placeholder="Select time"
    >
    </el-time-select>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'CareFeed',
  data() {
    return {
      time: '',
      meals: ['1', '2', '3']
    };
  },
  created() {
    console.log(moment());
  }
};
</script>

<style scoped>
.feature-description {
  margin: 0;
  font-size: 0.8rem;
  text-align: justify;
}
.action-button {
  width: 100%;
  margin-top: 10px;
}
.edit-button {
  margin-left: 5px;
}
.info-text {
  font-weight: bolder;
}
</style>
