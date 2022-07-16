<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title class="mx-auto cursor-pointer" @click="$router.push('/')">{{ name }} <span class="emoji">🎶</span>
      </v-toolbar-title>
    </v-app-bar>
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

};
</script>

<style>
.v-application {
  font-family: 'Albert Sans', sans-serif;
}

.emoji {
  font-family: 'Noto Emoji', sans-serif;
}

.cursor-pointer{
  cursor: pointer;
}
</style>