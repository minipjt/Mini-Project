<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    name: 'Emoji Music Player'
  }),

  created() {
    this.$store.dispatch('continueSession');
    this.$store.dispatch('getUsers');
  }

};
</script>

<style>
.v-application {
  font-family: 'Albert Sans', sans-serif !important;
  background: #000000 !important;
}

.emoji {
  font-family: 'Noto Emoji', sans-serif;
}

.cursor-pointer {
  cursor: pointer;
}

.v-btn {
  text-transform: unset !important;
}

.v-main__wrap > div {
  height: 100%;
}
</style>