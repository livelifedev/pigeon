<template>
  <div class="aviary-container">
    <el-row type="flex" justify="center">
      <el-col :span="24" :sm="{ span: 12 }">
        <h3 class="heading">Pigeon Aviary</h3>

        <div v-if="ownedPigeons">
          <div v-if="!ownedPigeons.length" class="heading">
            <p class="message">
              You are currently not raising any pigeons! Please go and register
              your first pigeon.
            </p>
            <el-button type="primary" @click="handleOnRegister">
              Squab Register
            </el-button>
          </div>

          <el-card v-else v-for="pigeon in ownedPigeons" :key="pigeon.id">
            <div class="card-container" @click="handleOnPigeon(pigeon.id)">
              <img
                :src="`./assets/squab-${pigeon.element}.svg`"
                alt="Pigeon avatar"
                class="pigeon-thumb"
              />
              <div class="pigeon-info">
                <div>
                  <div class="name-text">{{ pigeon.name }}</div>
                  <div>{{ pigeon.flock }} flock</div>
                </div>
                <div>{{ displayAge(pigeon.dob) }}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '../router';
import { calcAge } from '../utils/pigeonTools';

export default {
  name: 'BreederAviary',
  computed: mapGetters(['ownedPigeons']),
  methods: {
    handleOnRegister() {
      router.push('/breeder-selection');
    },
    handleOnPigeon(id) {
      router.push(`/breeder-home/${id}`);
    },
    logout() {
      this.logoutUser();
      router.push('/');
    },
    displayAge(dob) {
      return `${calcAge(dob)} days`;
    }
  }
};
</script>

<style scoped>
.heading {
  text-align: center;
}
.el-card {
  margin-bottom: 10px;
}
.card-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.pigeon-thumb {
  height: 50px;
}
.pigeon-info {
  margin-left: 20px;
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name-text {
  font-weight: bolder;
}
.message {
  text-align: justify;
}
</style>
