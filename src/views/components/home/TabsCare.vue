<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Health" name="health">
      <CareHealth />
    </el-tab-pane>
    <el-tab-pane label="Feed" name="feed">
      <TabTemplate><CareFeed /></TabTemplate>
    </el-tab-pane>
    <el-tab-pane label="Play" name="play">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Sleep" name="sleep">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Groom" name="groom">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { PlaceholderUpcoming } from '..';
import { TabTemplate, CareHealth, CareFeed } from './subcomponents';

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
  }
};
</script>

<style scoped></style>
