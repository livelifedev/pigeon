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
        <div>
          <el-button @click="handleOnCare">CARE</el-button>
        </div>
        <div>
          <el-button @click="handleOnAdventure">ADVENTURE</el-button>
        </div>
        <div>
          <el-button @click="handleOnSocialize">SOCIALIZE</el-button>
        </div>
        <div>
          <el-button @click="handleOnProfile">PROFILE</el-button>
        </div>
        <div>
          <el-button @click="handleOnPigeondex">PIGEONDEX</el-button>
        </div>
      </el-col>

      <el-col v-else :span="24" :sm="{ span: 8 }">
        <el-button class="back-button" icon="el-icon-back" plain circle size="small" @click="handleOnBack"></el-button>
        <TabsCare v-if="action === CARE" />
        <TabsAdventure v-if="action === ADVENTURE" />
        <TabsSocialize v-if="action === SOCIALIZE" />
        <TabsProfile v-if="action === PROFILE" />
      </el-col>
    </el-row>

    <el-dialog title="Pigeondex" :visible.sync="isPigeondex" :fullscreen="true">
      <ModalPigeondex />
    </el-dialog>
  </div>
</template>

<script>
import { TabsCare, TabsAdventure, TabsSocialize, TabsProfile, ModalPigeondex } from './components';

export default {
  name: 'BreederHome',
  components: {
    TabsCare,
    TabsAdventure,
    TabsSocialize,
    TabsProfile,
    ModalPigeondex
  },
  data() {
    return {
      MENU: 'MENU',
      CARE: 'CARE',
      ADVENTURE: 'ADVENTURE',
      SOCIALIZE: 'SOCIALIZE',
      PROFILE: 'PROFILE',
      // PIGEONDEX: 'PIGEONDEX',

      action: null,

      isPigeondex: false
    };
  },
  created() {
    this.action = this.MENU;
  },
  methods: {
    handleOnCare() {
      this.action = this.CARE;
    },
    handleOnAdventure() {
      this.action = this.ADVENTURE;
    },
    handleOnSocialize() {
      this.action = this.SOCIALIZE;
    },
    handleOnProfile() {
      this.action = this.PROFILE;
    },
    handleOnPigeondex() {
      this.isPigeondex = true;
    },
    handleClosePigeondex() {
      this.isPigeondex = false;
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
  width: 100%;
  padding: 15px 0;
  margin: 10px 0 0 0;
}
.action-buttons-group {
  margin-top: 15px;
}
.back-button {
  position: absolute;
  top: 45px;
  z-index: 1;
}
</style>