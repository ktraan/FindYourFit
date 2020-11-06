<template>
  <v-app>
    <HomePageHeader />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import HomePageHeader from "../src/components/HomePageHeader";
import Footer from "../src/components/Footer";
export default {
  name: "App",
  components: { HomePageHeader, Footer },
  data: () => ({
    //
  }),
  // This watcher is to change page titles
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "Find Your Fit";
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
    }
  }
};
</script>
