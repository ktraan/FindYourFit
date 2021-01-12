<template>
  <v-container>
    <h1>All Listings</h1>
    <v-card v-for="listing in listings" :key="listing.id">
      <v-card-title>Hello</v-card-title>
    </v-card>
    <!-- <v-btn @click="getAllListings">Get Listings</v-btn> -->
    <v-btn @click="logger">Logger</v-btn>
  </v-container>
</template>

<script>
/**
 * TODO Items:
 * [x] Fetch all listings
 * [x] Get the total listing count for looping index to render cards
 * [ ] Create card component with all of the data
 *
 *
 */
import axios from "axios";

export default {
  data: () => {
    return {
      errors: "",
      listings: [],
      listingCount: 0
    };
  },
  mounted() {
    this.getAllListings();
  },
  computed: {},
  methods: {
    getAllListings() {
      const LISTING_ENDPOINT = "http://localhost:3000/listing";
      axios
        .get(LISTING_ENDPOINT)
        .then(response => {
          if (response.status === 200) console.log(response.data);
          this.listings = response.data;
        })
        .catch(error => {
          this.errors =
            "There was a problem loading the listings, Please try again later.";
          console.log(error);
        });
    },
    logger() {
      console.log(this.listings[0]);
      console.log(`Listings: ${this.listings}`);
      console.log(`Listing length: ${this.listings.length}`);
    }
  }
};
</script>
