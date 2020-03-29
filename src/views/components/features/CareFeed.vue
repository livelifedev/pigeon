<template>
  <div>
    <p class="feature-description">
      It is important to maintain a daily feeding schedule to nurture a healthy
      growth.
      <span class="info-text">
        As a {{ `${currentPigeon.primary}/${currentPigeon.sub}` }},
        {{ currentPigeon.name }} has
        {{ genAppetiteLabel(currentPigeon.appetite) }} and requires
        {{ currentPigeon.appetite }}x feeding.
      </span>
    </p>

    <el-button
      class="action-button"
      type="success"
      size="small"
      :disabled="!feedingSchedule"
    >
      FEED
    </el-button>
    <h4 class="feature-subtitle">
      Feeding schedule
      <el-button
        v-if="!canEdit"
        @click="canEdit = true"
        class="edit-button"
        icon="el-icon-edit"
        circle
        size="small"
      ></el-button>
    </h4>

    <p class="sub-text" v-if="!feedingSchedule">
      Please create a feeding schedule.
    </p>

    <el-form ref="form" :model="form">
      <el-form-item
        v-for="meal in currentPigeon.appetite"
        :key="meal"
        :prop="`meal${meal}`"
        :show-message="false"
        required
      >
        <el-time-select
          v-model="form[`meal${meal}`]"
          :picker-options="{
            start: '01:00',
            step: '01:00',
            end: '24:00',
            minTime: checkMinTime(meal),
            maxTime: checkMaxTime(meal)
          }"
          :placeholder="`meal ${meal}`"
          :clearable="false"
          :readonly="!canEdit"
          :disabled="disableTimeSelect(meal)"
        >
        </el-time-select>
      </el-form-item>

      <el-form-item v-if="canEdit">
        <el-button type="primary" size="small" @click="handleOnSave"
          >Save</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import moment from 'moment';

export default {
  name: 'CareFeed',
  data() {
    return {
      feedingSchedule: JSON.parse(localStorage.getItem('feedingSchedule')),

      canEdit: false,
      form: {}
    };
  },
  created() {
    if (this.feedingSchedule) {
      this.form = this.feedingSchedule;
    } else {
      this.canEdit = true;
    }
    // console.log(moment().format('H'));
  },
  computed: mapGetters(['currentPigeon']),
  methods: {
    handleOnSave() {
      // console.log(this.form.meal1.substring(0, 2));
      // form.meal1.substring(0,2)
      this.$refs.form.validate(valid => {
        if (valid) {
          localStorage.setItem('feedingSchedule', JSON.stringify(this.form));
          this.feedingSchedule = this.form;
          this.canEdit = false;
        }
      });
    },
    disableTimeSelect(meal) {
      if (meal > 1) return !this.form[`meal${meal - 1}`];
      return false;
    },
    checkMinTime(meal) {
      if (meal > 1) return this.form[`meal${meal - 1}`];
      return '00:00';
    },
    checkMaxTime(meal) {
      const nextTime = this.form[`meal${meal + 1}`];
      if (nextTime) return this.form[`meal${meal + 1}`];
      return null;
    },
    genAppetiteLabel(appetite) {
      if (appetite > 3) return 'an enormous appetite';
      if (appetite === 3) return 'a large appetite';
      if (appetite === 2) return 'a normal appetite';
      return 'a small appetite';
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
.el-form-item {
  margin-bottom: 5px;
}
.sub-text {
  font-size: 0.8rem;
}
</style>
