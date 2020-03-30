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
      @click="handleOnFeed"
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

    <el-dialog
      custom-class="confirm-dialog"
      :title="`Feed ${currentPigeon.name}`"
      :visible.sync="isConfirmOpen"
      width="100%"
      center
    >
      <span v-if="isFeedingTime">It's within the hour, time to go feed.</span>
      <span v-else>
        It's not yet feeding time, avoid feeding without reason.
      </span>
      <span slot="footer">
        <el-button type="success" @click="isConfirmOpen = false">
          Feed
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'CareFeed',
  data() {
    return {
      feedingSchedule: JSON.parse(sessionStorage.getItem('feedingSchedule')),

      canEdit: false,
      form: {},

      isFeedingTime: false,
      isConfirmOpen: false
    };
  },
  created() {
    if (this.feedingSchedule) {
      this.form = this.feedingSchedule;
    } else {
      this.canEdit = true;
    }
  },
  computed: mapGetters(['currentPigeon']),
  methods: {
    handleOnSave() {
      this.$refs.form.validate(valid => {
        if (valid) {
          sessionStorage.setItem('feedingSchedule', JSON.stringify(this.form));
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
    },
    checkCanFeed() {
      const currentTime = moment().format('HH');
      const feedTimes = Object.keys(this.feedingSchedule).map(e =>
        this.feedingSchedule[e].substring(0, 2)
      );
      return feedTimes.includes(currentTime);
    },
    handleOnFeed() {
      if (this.checkCanFeed()) {
        this.isFeedingTime = true;
      } else {
        this.isFeedingTime = false;
      }
      this.isConfirmOpen = true;
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
