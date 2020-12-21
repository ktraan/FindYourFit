<template>
  <v-toolbar class="amber darken-2" max-height="50" dense>
    <router-link to="/dashboard">
      <v-img src="../../public/whitelotus.png" max-width="40"></v-img>
    </router-link>

    <v-toolbar-title class="ml-4 text-h5 white--text mt-1 font-weight-light"
      >Find Your Fit</v-toolbar-title
    >
    <v-row class="justify-end">
      <router-link
        to="/dashboard"
        class="text-decoration-none text-capitalize text-h6 white--text mt-3 mr-7  font-weight-light"
      >
        Home
      </router-link>
      <router-link
        to="/listings"
        class="text-decoration-none text-capitalize text-h6 white--text mt-3 mr-7 font-weight-light"
      >
        Listings
      </router-link>
      <router-link
        to="/createListing"
        class="text-decoration-none text-capitalize text-h6 white--text mt-3 mr-7 font-weight-light"
      >
        Create Listing
      </router-link>
      <v-menu offset-y transition="scroll-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="amber darken-2"
            dark
            max-height="50"
            v-bind="attrs"
            v-on="on"
            elevation="0"
            fab
          >
            <v-icon x-large color="white">mdi-account-cog</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-btn class="text-capitalize" color="red lighten-1" @click="logout"
              >Logout</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Logout" }]
  }),
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
