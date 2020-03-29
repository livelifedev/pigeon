<template>
  <div class="home-container">
    <el-row>
      <el-col class="graphics-window">
        <h4 class="pigeon-name">{{ pigeonDetails.name }}</h4>
        <img
          :src="`./assets/squab-${avatarElement}.svg`"
          alt="Pigeon avatar"
          class="pigeon-avatar"
        />
        <h4 class="pigeon-age">Age: {{ calcAge }} days</h4>
      </el-col>
    </el-row>

    <el-row class="action-buttons-group" type="flex" justify="center">
      <el-col
        v-if="action === MENU"
        class="action-buttons"
        :span="24"
        :sm="{ span: 8 }"
      >
        <div>
          <el-button @click="action = CARE">CARE</el-button>
        </div>
        <div>
          <el-button @click="action = ADVENTURE">ADVENTURE</el-button>
        </div>
        <div>
          <el-button @click="action = SOCIALIZE">SOCIALIZE</el-button>
        </div>
        <div>
          <el-button @click="action = PROFILE">PROFILE</el-button>
        </div>
        <div>
          <el-button @click="isPigeondex = true">PIGEONDEX</el-button>
        </div>
      </el-col>

      <el-col v-else :span="24" :sm="{ span: 8 }">
        <el-button
          class="back-button"
          icon="el-icon-back"
          plain
          circle
          size="small"
          @click="action = MENU"
        ></el-button>
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
import moment from 'moment';
import {
  TabsCare,
  TabsAdventure,
  TabsSocialize,
  TabsProfile,
  ModalPigeondex
} from './components';

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

      pigeonDetails: null,

      action: null,

      isPigeondex: false,

      avatarElement: null
    };
  },
  created() {
    this.getPigeonDetails();
    this.avatarElement = this.pigeonDetails.element.toLowerCase();
    this.action = this.MENU;
  },
  computed: {
    calcAge() {
      return moment().diff(moment.unix(this.pigeonDetails.dob), 'days');
    }
  },
  methods: {
    getPigeonDetails() {
      // TODO: Change to get from Vuex store
      this.pigeonDetails = JSON.parse(localStorage.getItem('squabDetails'));
    }
  }
};
</script>

<style scoped>
.pigeon-avatar {
  margin-top: 10px;
  height: 150px;
}
.pigeon-name,
.pigeon-age {
  margin: 10px 5px;
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
  margin-top: 0;
}
.back-button {
  position: absolute;
  top: -40px;
  z-index: 1;
}
</style>
