<template>
  <v-app>
    <HomePageHeader v-if="!isLoggedIn" />
    <Header v-if="isLoggedIn" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import HomePageHeader from "../src/components/HomePageHeader";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
export default {
  name: "App",
  components: { HomePageHeader, Footer, Header },
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
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>
