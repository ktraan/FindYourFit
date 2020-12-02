<template> </template>
<template>
  <v-footer padless class="amber darken-2">
    <v-row class="d-flex justify-center">
      <v-card flat tile class="amber darken-2">
        <v-row class="justify-center mt-3">
          <a
            href="/"
            class="text-decoration-none white--text text-h6 mt-3 font-weight-light"
          >
            Home
          </a>
          <a
            href="/"
            class="text-decoration-none white--text text-h6 mt-3 ml-5 font-weight-light"
          >
            Contact
          </a>
        </v-row>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            class="white--text mx-4"
          >
            <v-icon size="30px" class="">
              {{ icon }}
            </v-icon>
          </v-btn>
          <v-divider class="mt-3"></v-divider>
        </v-card-text>
        <v-card-text class="mb-5 text-center">
          © Find Your Fit - {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-email"],
    };
  },
  component: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
