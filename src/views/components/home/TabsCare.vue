<template>
  <el-tabs v-model="activeName" @tab-click="handleTabClick">
    <el-tab-pane label="Health" name="health" :lazy="true">
      <TabTemplate><CareHealth /></TabTemplate>
    </el-tab-pane>
    <el-tab-pane label="Feed" name="feed" :lazy="true">
      <TabTemplate><CareFeed /></TabTemplate>
    </el-tab-pane>
    <el-tab-pane label="Play" name="play" :lazy="true">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Sleep" name="sleep" :lazy="true">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Groom" name="groom" :lazy="true">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapActions } from 'vuex';
import { PlaceholderUpcoming } from '..';
import { TabTemplate, CareHealth, CareFeed } from '..';

export default {
  name: 'TabsCare',
  components: {
    PlaceholderUpcoming,
    TabTemplate,
    CareHealth,
    CareFeed
  },
  data() {
    return {
      activeName: 'health'
    };
  },
  created() {
    this.updateHunger();
  },
  methods: {
    ...mapActions(['updateHunger']),

    handleTabClick: tab => {
      console.log(tab.name);
    }
  }
};
</script>

<style scoped></style>
