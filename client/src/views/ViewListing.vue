<template>
  <v-container>
    <v-alert v-if="errors" border="bottom" colored-border type="error">
      {{ errors }}
    </v-alert>
    <v-card class="mt-5">
      <v-row>
        <v-col cols="4">
          <v-img
            :lazy-src="listing.profilePicture"
            :src="listing.profilePicture"
            transition="fade-transition"
            max-width="500"
          ></v-img>
        </v-col>
        <v-col class="ml-n10">
          <v-row>
            <v-card-title
              class="text-h5 text-sm-h3 text-md-h2 mb-2 font-weight-light"
            >
              {{ fullName }}
            </v-card-title>
          </v-row>
          <v-row class="ml-2">
            <v-icon color="black" x-large>mdi-phone</v-icon>
            <div class="text-h5 mt-1 ml-5">
              {{ listing.phone }}
            </div>
          </v-row>
          <v-row class="ml-2 mt-2">
            <v-icon color="black" x-large>mdi-email</v-icon>
            <div class="text-h5 mt-1 ml-5">
              {{ listing.email }}
            </div>
          </v-row>
          <v-row class="ml-2 mt-2">
            <v-btn
              v-for="icon in icons"
              :key="icon.id"
              icon
              color="black"
              class=""
            >
              <v-icon class="ml-2" x-large>{{ icon.name }}</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-row justify="center">
      <v-btn
        class="mt-5 amber darken-2 text-h6 text-capitalize font-weight-regular"
        elevation="3"
        @click="allListings"
        >Back To Listings</v-btn
      >
    </v-row>
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
      listing: {},
      fullName: "",

      icons: [
        { name: "mdi-facebook" },
        { name: "mdi-instagram" },
        { name: "mdi-youtube" },
        { name: "mdi-twitter" }
      ]
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
          this.fullName = `${response.data.creator.firstName} ${response.data.creator.lastName}`;
        })
        .catch(error => {
          this.errors = "There was a problem getting this listing";
          console.log(error);
        });
    },
    allListings() {
      this.$router.push({ name: "listings" });
    },
    logger() {
      console.log(this.listing);
      // console.log(this.$route.params.id);
    }
  }
};
</script>

<style></style>
