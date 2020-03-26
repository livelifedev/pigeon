<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Bio" name="bio">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Stats" name="stats">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Evolution" name="evolution">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Flock Tree" name="flock-tree">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
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
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  }
}
</script>

<style scoped></style>
