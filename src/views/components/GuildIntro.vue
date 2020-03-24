<template>
  <div class="guild-intro-container">
    <h1>Introduction to the guild.</h1>
    <p>{{introText}}</p>
    <p>{{secondaryText}}</p>
  </div>
</template>

<script>
export default {
  name: 'GuildIntro',
  data() {
    return {
      introText: "The Guild of Pigeon Breeders (GPB) is an ancient association formed to pursue the secrets and further the evolution of the mystical creature, Pigeon.",
      secondaryText: "Your potential to be an outstanding pigeon breeder has been recognized and we welcome you to join our ranks."
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
