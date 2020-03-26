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
      <el-col v-if="action === MENU" class="action-buttons" :span="24" :sm="{ span: 8 }">
        <el-button @click="handleOnCare">CARE</el-button>
        <el-button>ADVENTURE</el-button>
        <el-button>SOCIALIZE</el-button>
        <el-button>PROFILE</el-button>
        <el-button>PIGEONDEX</el-button>
      </el-col>

      <el-col v-else :span="24" :sm="{ span: 8 }">
        <el-button class="back-button" icon="el-icon-back" plain circle size="small" @click="handleOnBack"></el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Health" name="health">
            <PlaceholderUpcoming>This will display the health</PlaceholderUpcoming>
          </el-tab-pane>
          <el-tab-pane label="Feed" name="feed">User</el-tab-pane>
          <el-tab-pane label="Play" name="play">Config</el-tab-pane>
          <el-tab-pane label="Sleep" name="sleep">Role</el-tab-pane>
          <el-tab-pane label="Groom" name="groom">Groom</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { PlaceholderUpcoming } from './components';

export default {
  name: 'BreederHome',
  components: {
    PlaceholderUpcoming
  },
  data() {
    return {
      MENU: 'MENU',
      CARE: 'CARE',

      action: null,

      activeName: 'health'
    };
  },
  created() {
    this.action = this.MENU;
  },
  methods: {
    handleOnCare() {
      this.action = this.CARE;
    },

    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleOnBack() {
      this.action = this.MENU;
    }
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
.back-button {
  position: absolute;
  top: 45px;
  z-index: 1;
}
</style>