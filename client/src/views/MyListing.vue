<template>
  <v-container>
    <h1>My Listings</h1>
    <v-btn @click="logger">Logger</v-btn>
    <v-btn @click="getListing">post</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

/**
 * TODO:
 * [] Get the listing of that creator
 * [] Do GET request to retrieve listing data
 * [] Grab the card component from CreateListing
 * [] Error handling/Validations
 *
 */

export default {
  data: () => {
    return {
      errors: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    getListing() {
      const URL_ENDPOINT = "http://localhost:3000/listing/myListing/";
      axios
        .post(`${URL_ENDPOINT}`, {
          email: this.user.email
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          this.errors = "You don't have a listing!";
        });
    },
    logger() {
      console.log(this.user);
    }
  }
};
</script>

<style></style>
