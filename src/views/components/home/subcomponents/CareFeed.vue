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
    <h4 class="feature-subtitle">
      Feeding schedule
      <el-button
        class="edit-button"
        icon="el-icon-edit"
        circle
        size="small"
      ></el-button>
    </h4>

    <el-form ref="form" :model="form">
      <el-form-item v-for="meal in appetite" :key="meal" :prop="`meal${meal}`">
        <el-time-select
          v-model="form[`meal${meal}`]"
          :picker-options="{
            start: '00:00',
            step: '01:00',
            end: '23:00'
          }"
          :placeholder="`meal ${meal}`"
        >
        </el-time-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'CareFeed',
  data() {
    return {
      appetite: 3,

      form: {},
      time: null
    };
  },
  created() {
    this.form = { ...this.form, ...this.createTimeSlots(this.appetite) };
    console.log(moment());
  },
  methods: {
    createTimeSlots(n) {
      const timeSlots = {};
      for (let i = 0; i < n; i++) timeSlots[`meal${i + 1}`] = null;
      return timeSlots;
    }
  }
};
</script>

<style scoped>
.feature-description {
  margin: 0;
  font-size: 0.8rem;
  text-align: justify;
}
.feature-subtitle {
  margin-bottom: 5px;
}
.action-button {
  width: 100%;
  margin-top: 15px;
}
.edit-button {
  margin-left: 5px;
}
.info-text {
  font-weight: bolder;
}
</style>
