<template>
  <div class="guild-intro-container">
    <h2>Introduction to the guild.</h2>
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }" class="text-intro">
        <p>
          The <span class="bold">Guild of Pigeon Breeders (GPB)</span> is an
          ancient association formed to pursue the secrets and further the
          evolution of the mystical creature, <span class="bold">Pigeon</span>.
        </p>
        <p>
          Your potential to be an outstanding pigeon breeder has been recognized
          and we welcome you to join our ranks.
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'GuildIntro'
};
</script>

<style scoped>
.text-intro {
  text-align: justify;
}
.bold {
  font-weight: bolder;
}
</style>
