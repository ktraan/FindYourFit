<template>
  <v-container>
    <v-btn class="danger">Delete Listing</v-btn>
    <v-row class="justify-center mt-5 mb-5">
      <v-card class="pa-2" width="1200" height="650" elevation="3" tile>
        <v-row>
          <v-col cols="4">
            <v-row class="d-flex ml-10 mt-16">
              <v-img
                :src="listing.profilePicture"
                max-width="250"
                max-height="300"
                class="ml-10 mt-10"
              ></v-img>
            </v-row>
            <v-row>
              <v-col cols="11"
                ><v-file-input
                  class="ml-5 mt-2"
                  color="amber darken-2"
                  dense
                  show-size
                  accept="image/*"
                  :rules="imagesize"
                  label="Attach Image"
                  @change="changeImage"
                >
                </v-file-input>
              </v-col>
            </v-row>
            <v-row class="d-flex ml-2">
              <div class="text-h5 font-weight-light text-center ml-12">
                Update your profile picture
              </div>
            </v-row>
          </v-col>

          <v-col cols="4">
            <div class="text-h6 text-sm-h5 mb-5 mt-2 ml-n1">
              {{ user.firstName + " " + user.lastName }}

              <div>
                {{ user.email }}
              </div>
            </div>

            <v-text-field
              v-model="listing.occupation"
              :error-messages="occupationErrors"
              @blur="$v.listing.occupation.$touch()"
              label="Occupation"
              name="occupation"
              color="amber darken-2"
              prepend-icon=""
            >
            </v-text-field>
            <v-select
              v-model="listing.listingType"
              :error-messages="listingTypeErrors"
              @blur="$v.listing.listingType.$touch()"
              label="Listing Type"
              :items="listingTypeItems"
              color="amber darken-2"
            >
            </v-select>
            <v-textarea
              v-model="listing.summary"
              :error-messages="summaryErrors"
              @blur="$v.listing.summary.$touch()"
              name="summary"
              label="Summary"
              color="amber darken-2"
            >
            </v-textarea>
            <v-combobox
              v-model="listing.education"
              chips
              deletable-chips
              multiple
              clearable
              small-chips
              placeholder="Type and press enter..."
              name="education"
              label="Education"
              item-color="amber darken-2"
              color="amber darken-2"
            >
            </v-combobox>
            <v-text-field
              v-model="listing.yearsExperience"
              :error-messages="yearsExperienceErrors"
              @blur="$v.listing.yearsExperience.$touch()"
              class="mt-2"
              name="yearsExperience"
              label="Years of Experience"
              color="amber darken-2"
            >
            </v-text-field>
          </v-col>

          <v-col cols="3">
            <div class="text-h5 mt-1">
              Contact and Socials
            </div>

            <v-row>
              <v-text-field
                v-model="listing.phone"
                :error-messages="phoneErrors"
                @blur="$v.listing.phone.$touch()"
                name="phone"
                label="Phone"
                prepend-icon="mdi-phone"
                color="amber darken-2"
              >
              </v-text-field>

              <v-text-field
                v-model="listing.website"
                :error-messages="websiteErrors"
                @blur="$v.listing.website.$touch()"
                name="website"
                label="Personal Website"
                prepend-icon="mdi-web"
                color="amber darken-2"
              >
              </v-text-field>
              <v-text-field
                v-model="listing.facebookLink"
                :error-messages="facebookFieldErrors"
                @blur="$v.listing.facebookLink.$touch()"
                name="facebookField"
                label="Facebook"
                prepend-icon="mdi-facebook"
                color="amber darken-2"
              >
              </v-text-field>
              <v-text-field
                v-model="listing.instagramLink"
                :error-messages="instagramFieldErrors"
                @blur="$v.listing.instagramLink.$touch()"
                name="instagramField"
                label="Instagram"
                prepend-icon="mdi-instagram"
                color="amber darken-2"
              >
              </v-text-field>
              <v-text-field
                v-model="listing.youtubeLink"
                :error-messages="youtubeFieldErrors"
                @blur="$v.listing.youtubeLink.$touch()"
                name="youtubeField"
                label="YouTube"
                prepend-icon="mdi-youtube"
                color="amber darken-2"
              >
              </v-text-field>
              <v-text-field
                v-model="listing.twitterLink"
                :error-messages="twitterFieldErrors"
                @blur="$v.listing.twitterLink.$touch()"
                name="twitterField"
                label="Twitter"
                prepend-icon="mdi-twitter"
                color="amber darken-2"
              >
              </v-text-field>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-btn @click="logger">Logger</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

/**
 * TODO:
 * [x] Get the listing of that creator
 * [x] Do GET request to retrieve listing data
 * [x] Grab the card component from CreateListing
 * [] Error handling/Validations
 *
 */

export default {
  data: () => {
    return {
      errors: "",
      listing: {},

      listingTypeItems: [
        "Personal Training",
        "Athletic Training",
        "Group Exercise",
        "Yoga",
        "Nutritionist",
        "Health & Wellness"
      ],
      imagesize: [
        value =>
          !value ||
          value.size < 8000000 ||
          "Image size should be less than 8 MB"
      ]
    };
  },
  mounted() {
    this.getListing();
  },
  computed: {
    ...mapGetters(["user"])
  },

  methods: {
    changeImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.listing.profilePicture = reader.result;
      };
    },
    getListing() {
      const URL_ENDPOINT = "http://localhost:3000/listing/myListing/";
      axios
        .post(`${URL_ENDPOINT}`, {
          email: this.user.email
        })
        .then(response => {
          console.log(response.data);
          this.listing = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errors = "You don't have a listing!";
        });
    },
    logger() {
      console.log(this.listing);
    }
  }
};
</script>

<style></style>
