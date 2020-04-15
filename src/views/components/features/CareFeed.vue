<template>
  <div>
    <p class="feature-description">
      It is important to maintain a daily feeding schedule to nurture a healthy
      growth.
      <span class="info-text">
        As a {{ `Pigeon/${selectedPigeon.subBreed}` }},
        {{ selectedPigeon.name }} has
        {{ genAppetiteLabel(selectedPigeon.appetite) }} and requires
        {{ selectedPigeon.appetite }}x feeding.
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

    <el-form ref="feedForm" :model="feedForm">
      <el-form-item
        v-for="meal in selectedPigeon.appetite"
        :key="meal"
        :prop="`meal${meal}`"
        :show-message="false"
        required
      >
        <el-time-select
          v-model="feedForm[`meal${meal}`]"
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
        <el-button
          type="primary"
          size="small"
          :loading="isSubmitting"
          @click="handleOnSave"
        >
          Save
        </el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      custom-class="confirm-dialog"
      :title="`Feed ${selectedPigeon.name}`"
      :visible.sync="isConfirmOpen"
      width="100%"
      center
    >
      <span v-if="isFeedingTime">It's within the hour, time to go feed.</span>
      <span v-else>
        It's not yet feeding time, avoid feeding without reason.
      </span>
      <span slot="footer">
        <el-button @click="isConfirmOpen = false">
          Cancel
        </el-button>
        <el-button type="success" @click="goFeed">
          Feed
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: 'CareFeed',
  data() {
    return {
      canEdit: false,
      feedForm: {},

      isSubmitting: false,

      isFeedingTime: false,
      isConfirmOpen: false
    };
  },
  created() {
    if (this.feedingSchedule) {
      this.feedForm = this.feedingSchedule;
    } else {
      this.canEdit = true;
    }
  },
  computed: mapGetters(['selectedPigeon', 'feedingSchedule']),
  methods: {
    ...mapActions(['attachFeedingSchedule', 'updateFeedGrowth']),

    handleOnSave() {
      this.$refs.feedForm.validate(async valid => {
        if (valid) {
          try {
            this.isSubmitting = true;

            await this.attachFeedingSchedule({
              id: this.$route.params.id,
              formDetails: JSON.stringify(this.feedForm)
            });

            this.isSubmitting = false;
            this.canEdit = false;
          } catch (error) {
            console.error(error);
            this.isSubmitting = false;

            this.$message({
              message: 'Unable to update feed schedule.',
              type: 'error',
              center: true
            });
          }
        }
      });
    },
    disableTimeSelect(meal) {
      if (meal > 1) return !this.feedForm[`meal${meal - 1}`];
      return false;
    },
    checkMinTime(meal) {
      if (meal > 1) return this.feedForm[`meal${meal - 1}`];
      return '00:00';
    },
    checkMaxTime(meal) {
      const nextTime = this.feedForm[`meal${meal + 1}`];
      if (nextTime) return this.feedForm[`meal${meal + 1}`];
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
    },
    async goFeed() {
      await this.updateFeedGrowth({
        id: this.$route.params.id,
        growth: this.isFeedingTime ? 5 : 0,
        lastFed: moment().unix()
      }).catch(error => {
        console.error(error);

        this.$message({
          message: 'Unable to complete feeding.',
          type: 'error',
          center: true
        });
      });
      this.isConfirmOpen = false;
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
