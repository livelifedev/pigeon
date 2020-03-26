<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Meet" name="meet">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Breed" name="breed">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Relations" name="relations">
      <PlaceholderUpcoming>Upcoming feature...</PlaceholderUpcoming>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { PlaceholderUpcoming } from '..';

export default {
  name: 'TabsSocialize',
  components: {
    PlaceholderUpcoming
  },
  data() {
    return {
      activeName: 'meet'
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
