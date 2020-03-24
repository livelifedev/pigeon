<template>
  <div class="guild-intro-container">
    <h1>Introduction to the guild.</h1>
    <p>{{introText}}</p>
  </div>
</template>

<script>
export default {
  name: 'GuildIntro',
  data() {
    return {
      introText: "The Guild of Pigeon Breeders (GPB) is an ancient association formed with the intent of unlocking the secrets and furthering the evolution of the mystical creature, Pigeon.",
    };
  },
  methods: {
  }
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
