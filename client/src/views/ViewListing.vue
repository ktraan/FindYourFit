<template>
  <v-container>
    <v-alert v-if="errors" border="bottom" colored-border type="error">
      {{ errors }}
    </v-alert>
    <h1>Single Listing</h1>
    <v-card>
      <v-row>
        <v-col cols="5">
          <v-img
            :lazy-src="listing.profilePicture"
            :src="listing.profilePicture"
            max-width="500"
          ></v-img>
        </v-col>
        <v-col>
          <v-card-title>{{ listing.creator.firstName }}</v-card-title>
        </v-col>
      </v-row>
    </v-card>
    <v-btn @click="logger">Logger</v-btn>
  </v-container>
</template>

<script>
/**
 * TODO Items:
 * [x] Get the id listing through params
 * [] Fetch data and put it in mounted
 * [] Create card component listing
 *
 */

import axios from "axios";

export default {
  data: () => {
    return {
      errors: "",
      listing: {}
    };
  },
  mounted() {
    this.getListing();
  },
  methods: {
    getListing() {
      const URL_ENDPOINT = "http://localhost:3000/listing/";
      const listingId = this.$route.params.id;

      axios
        .get(`${URL_ENDPOINT}${listingId}`)
        .then(response => {
          this.listing = response.data;
          // console.log(response.data);
        })
        .catch(error => {
          this.errors = "There was a problem getting this listing";
          console.log(error);
        });
    },
    logger() {
      console.log(this.listing);
      // console.log(this.$route.params.id);
    }
  }
};
</script>

<style></style>
