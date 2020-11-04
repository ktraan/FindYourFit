<template>
  <v-app>
    <HomePageHeader v-if="isHome" />
    <v-app-bar
      v-if="isNotHome"
      class="d-flex justify-space-around"
      max-height="70"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script>
import HomePageHeader from '../src/components/HomePageHeader'

export default {
  name: "App",
  components: { HomePageHeader },
  data: () => ({
    //
  }),
  // This watcher is to change page titles
  watch: {
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Find Your Fit'
        },
         immediate: true
      }
    },
  computed: {
    isNotHome() {
      return this.$route.name !== "home";
    },
    isHome() {
      return this.$route.name === "home";
    },
  },
};
</script>

<style> 
#app {
  background-color: #dbd9d9;
}
</style>