<template>
  <v-container>
    <v-alert v-if="errors" border="bottom" colored-border type="error">
      {{ errors }}
    </v-alert>
    <v-row justify="center">
      <v-card class="mt-12" max-width="1500">
        <v-row>
          <v-col cols="4">
            <v-img
              :lazy-src="listing.profilePicture"
              :src="listing.profilePicture"
              transition="fade-transition"
              max-width="600"
            ></v-img>
          </v-col>
          <v-col md="3" class="">
            <v-row>
              <v-card-title
                class="text-h5 text-sm-h4 text-md-h3 mb-2 font-weight-light"
              >
                {{ fullName }}
              </v-card-title>
            </v-row>
            <v-row
              class="ml-2 text-h6 text-sm-h5 text-md-h4 font-weight-regular mb-2"
            >
              <div>{{ listing.occupation }}</div>
            </v-row>
            <v-row class="ml-2">
              <v-icon color="black" x-large>mdi-phone</v-icon>
              <div
                class="text-h7 text-sm-h6 text-md-h5 font-weight-light mt-1 ml-5"
              >
                {{ listing.phone }}
              </div>
            </v-row>
            <v-row class="ml-2 mt-2">
              <v-icon color="black" x-large>mdi-email</v-icon>
              <div
                class="text-h7 text-sm-h6 text-md-h5 font-weight-light mt-1 ml-5"
              >
                {{ listing.email }}
              </div>
            </v-row>
            <v-row class="mt-3 justify-space-around">
              <v-btn
                v-for="icon in icons"
                :key="icon.id"
                icon
                :color="icon.color"
                class="ml-n5"
              >
                <v-icon class="ml-2" x-large>{{ icon.name }}</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <div
                class="text-h7 text-sm-h6 text-md-h5 font-weight-regular mt-3 ml-5"
              >
                - {{ listing.yearsExperience }} years of experience
              </div>
            </v-row>
            <v-row>
              <v-chip
                class="text-h7 text-sm-h6 font-weight-regular mt-3 ml-5"
                v-for="item in listing.education"
                :key="item.id"
                color="amber darken-2"
                outlined
                medium
              >
                <v-icon class="mr-2" left>mdi-school</v-icon>
                {{ item }}
              </v-chip>
            </v-row>
          </v-col>
          <v-col md="" class="">
            <v-row class="mt-xl-16 mt-lg-5">
              <div
                class="text-h7 text-sm-h6 text-md-h5 text-lg-h4 font-weight-light mt-10 mt-lg-0 mt-xl-10 ml-5 mr-10"
              >
                {{ listing.summary }}
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-card></v-row
    >
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
        { name: "mdi-facebook", color: "blue darken-2" },
        { name: "mdi-instagram", color: "black" },
        { name: "mdi-youtube", color: "red" },
        { name: "mdi-twitter", color: "blue darken-2" }
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
