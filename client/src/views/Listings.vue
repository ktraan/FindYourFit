<template>
  <v-container>
    <v-row class="mt-10"></v-row>
    <v-row justify="center">
      <v-card
        v-for="(listing, index) in listings"
        :key="listing.value"
        width="400"
        class="mr-16 ml-10 mb-10"
      >
        <v-img
          :src="listing.profilePicture"
          max-width="400"
          max-height="400"
        ></v-img>
        <v-card-title class="text-h4 justify-center">
          <v-btn
            elevation="0"
            color="white"
            class="text-capitalize text-h4"
            @click="viewListing(index)"
          >
            {{ `${listing.creator.firstName} ${listing.creator.lastName}` }}
          </v-btn>
        </v-card-title>

        <!-- Icons -->
        <v-row justify="center" class="mt-n2">
          <v-btn class="" icon>
            <v-icon color="blue darken-2" large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="ml-4" icon>
            <v-icon color="black" large>mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="ml-4" icon>
            <v-icon color="red" large>mdi-youtube</v-icon>
          </v-btn>
          <v-btn class="ml-4" icon>
            <v-icon color="blue darken-2" large>mdi-twitter</v-icon>
          </v-btn>
        </v-row>
        <v-divider class="mt-2"></v-divider>
        <v-card-text class="text-center">
          {{ listing.summary }}
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
/**
 * TODO Items:
 * [x] Fetch all listings
 * [x] Get the total listing count for looping index to render cards
 * [x] Figure out how to retreived referenced data
 * [x] Create card component with all of the data
 *
 *
 */
import axios from "axios";

export default {
  data: () => {
    return {
      errors: "",
      creators: [],
      listings: [],
      selectedId: "",

      icons: [
        { facebook: "mdi-facebook" },
        { instagram: "mdi-instagram" },
        { instagram: "mdi-youtube" },
        { instagram: "mdi-twitter" }
      ]
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
          if (response.status === 200) {
            this.listings = response.data;
          } else {
            this.errors = "There are no listings! Be the first to create one.";
          }
        })
        .catch(error => {
          this.errors =
            "There was a problem loading the listings, Please try again later.";
          console.log(error);
        });
    },
    viewListing(index) {
      /**
       *  [x] Get the index of the array
       *  [x] Search array for the selected index
       *  [x] Send the id through params
       *
       */
      // console.log(this.listings[index]._id);
      const listingToSend = this.listings[index]._id;

      this.$router.push({ name: "viewListing", params: { id: listingToSend } });
    },

    logger() {
      console.log(this.creators);
      // console.log(this.listings[0]);
      // console.log(`Listings: ${this.listings}`);
      // console.log(`Listing length: ${this.listings.length}`);
    }
  }
};
</script>
