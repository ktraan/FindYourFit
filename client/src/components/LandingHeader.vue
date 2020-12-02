<template>
  <v-toolbar class="amber darken-2" max-height="50" dense>
    <v-img src="../../public/blacklotus.png" max-width="40"></v-img>

    <v-toolbar-title class="ml-4">Find Your Fit</v-toolbar-title>
    <v-row class="justify-end">
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
            <v-icon x-large color="black">mdi-account-circle-outline</v-icon>
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
      <!-- <v-menu>
        <template
          ><v-btn class="amber darken-2" elevation="0" max-height="50" fab>
            <v-icon x-large>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-menu> -->
      <!-- <router-link
        to="/profile"
        class="text-decoration-none text-h6 ml-10 mt-10"
        >Profile</router-link
      >
      <router-link
        to="/listings"
        class="text-decoration-none text-h6 ml-10 mt-10"
        >Listings</router-link
      >
      <router-link
        to="/addlisting"
        class="text-decoration-none text-h6 ml-10 mt-10"
        >Add Listing</router-link
      >
      <v-btn @click="logout">Logout</v-btn> -->
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Logout" }],
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/" });
      });
    },
  },
};
</script>
