<template>
  <div class="home-container">
    <el-row>
      <el-col class="graphics-window">
        <el-image
          src="https://via.placeholder.com/300"
          fit="cover"
        ></el-image>
      </el-col>
    </el-row>

    <el-row class="action-buttons-group" type="flex" justify="center">
      <el-col class="action-buttons" :span="24" :sm="{ span: 8 }">
        <el-button>CARE</el-button>
        <el-button>ADVENTURE</el-button>
        <el-button>SOCIALIZE</el-button>
        <el-button>PIGEONDEX</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BreederHome',
  methods: {
  }
}
</script>

<style scoped>
.el-image {
  margin-top: 10px;
  width: 250px;
  height: 200px;
}
.graphics-window {
  text-align: center;
}
.action-buttons {
  display: flex;
  flex-direction: column;
}
.action-buttons .el-button {
  padding: 15px 0;
}
.action-buttons-group {
  margin-top: 15px;
}
.el-button+.el-button {
  margin: 10px 0 0 0;
}
</style>