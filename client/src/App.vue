<template>
  <v-app>
    <HomePageHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import HomePageHeader from "../src/components/HomePageHeader";
export default {
  name: "App",
  components: { HomePageHeader },
  data: () => ({
    //
  }),
  // This watcher is to change page titles
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "Find Your Fit";
      },
      immediate: true,
    },
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
