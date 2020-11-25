<template>
  <v-app-bar class="blue lighten-3" max-height="100">
    <v-row class="justify-center">
      <router-link
        to="/profile"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Profile</router-link
      >
      <router-link
        to="/listings"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Listings</router-link
      >
      <router-link
        to="/addlisting"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Add Listing</router-link
      >
      <v-btn @click="logout">Logout</v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>
