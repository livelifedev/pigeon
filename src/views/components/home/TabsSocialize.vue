<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="Meet" name="meet">
      <PlaceholderUpcoming>Meet other pigeons in a tinder swipe fashion.</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Breed" name="breed">
      <PlaceholderUpcoming>Breed with other pigeons to continue and develop your pigeon's flock line.</PlaceholderUpcoming>
    </el-tab-pane>
    <el-tab-pane label="Relations" name="relations">
      <PlaceholderUpcoming>View your relationships with other pigeons.</PlaceholderUpcoming>
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
  }
}
</script>

<style scoped></style>
