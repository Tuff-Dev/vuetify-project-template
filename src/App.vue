<template>
  <v-app>
    <navigation-bar />
    <!-- <nav-2 /> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
// import Nav2 from './components/Nav2.vue';

export default {
  name: 'App',

  components: {
    NavigationBar,
    // Nav2
  },

  data: () => ({
    //
  }),
};
</script>
