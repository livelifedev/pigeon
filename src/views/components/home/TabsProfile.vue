<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Bio" name="bio">
      <PlaceholderUpcoming
        >Write a description for your pigeon, which will be visible for others
        to see and registered in the Pigeondex.</PlaceholderUpcoming
      >
    </el-tab-pane>
    <el-tab-pane label="Stats" name="stats">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Evolution" name="evolution">
      <PlaceholderUpcoming
        >View the evolutionary progress of your pigeon.</PlaceholderUpcoming
      >
    </el-tab-pane>
    <el-tab-pane label="Flock Tree" name="flock-tree">
      <PlaceholderUpcoming
        >View a tree of the history of your flock.</PlaceholderUpcoming
      >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { PlaceholderUpcoming } from '..';

export default {
  name: 'TabsProfile',
  components: {
    PlaceholderUpcoming
  },
  data() {
    return {
      activeName: 'bio'
    };
  }
};
</script>

<style scoped></style>
