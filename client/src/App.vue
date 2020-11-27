<template>
  <v-app>
    <HomePageHeader v-if="!isLoggedIn" />
    <LandingHeader v-if="isLoggedIn" />
    <v-main>
      <router-view />
    </v-main>
    <HomePageFooter v-if="!isLoggedIn" />
    <LandingFooter v-if="isLoggedIn" />
  </v-app>
</template>
<script>
import HomePageHeader from "../src/components/HomePageHeader";
import HomePageFooter from "../src/components/HomePageFooter";
import LandingHeader from "../src/components/LandingHeader";
import LandingFooter from "../src/components/LandingFooter";
export default {
  name: "App",
  components: { HomePageHeader, HomePageFooter, LandingHeader, LandingFooter },
  data: () => ({
    //
  }),
  // This watcher is to change page titles
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "Find Your Fit";
      },
      immediate: true,
    },
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
