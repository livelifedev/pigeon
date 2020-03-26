<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Quests" name="quests">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Training" name="training">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Explore" name="explore">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { PlaceholderUpcoming } from '..';

export default {
  name: 'TabsAdventure',
  components: {
    PlaceholderUpcoming
  },
  data() {
    return {
      activeName: 'quests'
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
