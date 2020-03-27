<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Quests" name="quests">
      <PlaceholderUpcoming>Take on quests from the guild to earn rewards.</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Training" name="training">
      <PlaceholderUpcoming>Pigeons have a lot of mysterious abilities, train your pigeon to unlock them.</PlaceholderUpcoming>
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
  }
}
</script>

<style scoped></style>
