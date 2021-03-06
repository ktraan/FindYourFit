<template>
  <v-container>
    <v-alert v-if="message" type="success" class="text-center" outlined>
      {{ message }}
    </v-alert>
    <v-alert v-if="errors" type="error" class="text-center" outlined>
      {{ errors }}
    </v-alert>
    <div
      v-if="existingListing === false"
      class="text-h4 d-flex justify-center mt-5"
    >
      Don't have a listing? Create one
      <router-link to="/createListing" class="ml-2">here</router-link>
    </div>

    <v-row v-if="existingListing === true" class="justify-center">
      <v-col md="9"></v-col>
      <v-col md="">
        <v-dialog v-model="dialog" persistent max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="text-h6 ml-n5 mb-n5 text-capitalize white--text"
              color="red lighten-1"
              hover
            >
              Delete Listing
            </v-btn>
          </template>

          <v-card class="ml-auto mr-auto pa-5">
            <v-card-title class="headline text-center">
              Are you sure you want to delete your listing?
            </v-card-title>

            <v-row class="justify-end mt-2">
              <v-btn class="mr-2" @click="dialog = false">Cancel</v-btn>
              <v-btn
                class="mr-5 text-h7"
                color="red lighten-1"
                @click="deleteListing"
              >
                Confirm
              </v-btn>
            </v-row>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row v-if="existingListing === true" class="justify-center mt-5 mb-5">
      <v-card class="pa-2" width="1200" height="650" elevation="3" tile>
        <v-row>
          <v-col cols="4">
            <v-row class="d-flex ml-10 mt-16">
              <v-img
                :src="listing.profilePicture"
                max-width="250"
                max-height="300"
                class="ml-10 mt-10"
              >
              </v-img>
            </v-row>
            <v-row>
              <v-col cols="11">
                <v-file-input
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

            <v-row class="justify-end mt-5">
              <v-btn
                class="text-capitalize text-h5 mr-3"
                color="grey darken-2"
                outlined
                hover
                focus
                large
                @click="clear"
                >Clear</v-btn
              >
              <v-btn
                class="text-capitalize text-h5 "
                color="amber darken-4"
                outlined
                hover
                focus
                width="150"
                large
                @click="updateListing"
              >
                Update
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  url,
} from "vuelidate/lib/validators";
import axios from "axios";
import { mapGetters } from "vuex";

/**
 * TODO:
 * [x] Get the listing of that creator
 * [x] Do GET request to retrieve listing data
 * [x] Grab the card component from CreateListing
 * [x] Error handling/Validations
 *
 */

export default {
  data: () => {
    return {
      errors: "",
      message: "",
      listing: {},
      dialog: "",
      existingListing: true,

      listingTypeItems: [
        "Personal Training",
        "Athletic Training",
        "Group Exercise",
        "Yoga",
        "Nutritionist",
        "Health & Wellness",
      ],
      imagesize: [
        (value) =>
          !value ||
          value.size < 8000000 ||
          "Image size should be less than 8 MB",
      ],
    };
  },
  validations: {
    listing: {
      phone: {
        required,
        numeric,
        minLength: minLength(7),
      },
      occupation: {
        required,
        maxLength: maxLength(50),
      },
      listingType: {
        required,
      },
      summary: {
        required,
        maxLength: maxLength(250),
      },
      yearsExperience: {
        numeric,
      },
      website: {
        url,
      },
      facebookLink: {
        url,
      },
      instagramLink: {
        url,
      },
      youtubeLink: {
        url,
      },
      twitterLink: {
        url,
      },
    },
  },
  mounted() {
    this.getListing();
  },
  computed: {
    ...mapGetters(["user"]),
    phoneErrors() {
      const errors = [];
      if (this.$v.listing.phone.$dirty) {
        if (!this.$v.listing.phone.required)
          errors.push("Phone Number is required.");
        if (!this.$v.listing.phone.numeric)
          errors.push("Phone Number must be numbers only.");
        if (!this.$v.listing.phone.minLength)
          errors.push("Phone Number must be at least 7 numbers.");
      }
      return errors;
    },
    occupationErrors() {
      const errors = [];
      if (this.$v.listing.occupation.$dirty) {
        if (!this.$v.listing.occupation.required)
          errors.push("Occupation is required.");
        if (!this.$v.listing.occupation.maxLength)
          errors.push("Maximum of 50 characters.");
      }
      return errors;
    },
    listingTypeErrors() {
      const errors = [];
      if (this.$v.listing.listingType.$dirty) {
        if (!this.$v.listing.listingType.required)
          errors.push("Listing Type is required.");
      }
      return errors;
    },
    summaryErrors() {
      const errors = [];
      if (this.$v.listing.summary.$dirty) {
        if (!this.$v.listing.summary.required)
          errors.push("Summary is required.");
        if (!this.$v.listing.summary.maxLength)
          errors.push("Maximum of 250 characters");
      }
      return errors;
    },
    yearsExperienceErrors() {
      const errors = [];
      if (this.$v.listing.yearsExperience.$dirty) {
        if (!this.$v.listing.yearsExperience.numeric)
          errors.push("Years of Experience must be a number.");
      }
      return errors;
    },
    websiteErrors() {
      const errors = [];
      if (this.$v.listing.website.$dirty) {
        if (!this.$v.listing.website.url) errors.push("Invalid website URL.");
      }
      return errors;
    },
    facebookFieldErrors() {
      const errors = [];
      if (this.$v.listing.facebookLink.$dirty) {
        if (!this.$v.listing.facebookLink.url)
          errors.push("Invalid Facebook URL.");
      }
      return errors;
    },
    instagramFieldErrors() {
      const errors = [];
      if (this.$v.listing.instagramLink.$dirty) {
        if (!this.$v.listing.instagramLink.url)
          errors.push("Invalid Instagram URL.");
      }
      return errors;
    },
    youtubeFieldErrors() {
      const errors = [];
      if (this.$v.listing.youtubeLink.$dirty) {
        if (!this.$v.listing.youtubeLink.url)
          errors.push("Invalid YouTube URL.");
      }
      return errors;
    },
    twitterFieldErrors() {
      const errors = [];
      if (this.$v.listing.twitterLink.$dirty) {
        if (!this.$v.listing.twitterLink.url)
          errors.push("Invalid Twitter URL.");
      }
      return errors;
    },
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
          email: this.user.email,
        })
        .then((response) => {
          if (response.status === 200) {
            this.listing = response.data;
            this.existingListing = true;
          } else {
            this.existingListing = false;
            this.errors = "You don't have a listing!";
          }
        })
        .catch(() => {
          this.existingListing = false;
          this.errors = "There was a problem retrieiving your listing";
        });
    },
    clear() {
      this.listing.profilePicture = "";
      this.listing.occupation = "";
      this.listing.listingType = "";
      this.listing.summary = "";
      this.listing.education = "";
      this.listing.yearsExperience = "";
      this.listing.phone = "";
      this.listing.website = "";
      this.listing.facebookLink = "";
      this.listing.instagramLink = "";
      this.listing.youtubeLink = "";
      this.listing.twitterLink = "";
    },
    updateListing() {
      const URL_ENDPOINT = "http://localhost:3000/listing/";
      axios
        .put(`${URL_ENDPOINT}${this.listing._id}`, {
          occupation: this.listing.occupation,
          summary: this.listing.summary,
          yearsExperience: this.listing.yearsExperience,
          education: this.listing.education,
          listingType: this.listing.listingType,
          phone: this.listing.phone,
          email: this.user.email,
          website: this.listing.website,
          facebookLink: this.listing.facebookLink,
          instagramLink: this.listing.instagramLink,
          youtubeLink: this.listing.youtubeLink,
          twitterLink: this.listing.twitterLink,
          profilePicture: this.listing.profilePicture,
        })
        .then((response) => {
          if (response.status === 200) {
            this.message = "Your listing has been updated.";
          } else {
            this.errors =
              "There was a problem updating your listing. Please try again";
          }
        })
        .catch(() => {
          this.errors = "Error updating listing. Please try again.";
        });
    },
    deleteListing() {
      const URL_ENDPOINT = "http://localhost:3000/listing/";

      axios
        .delete(`${URL_ENDPOINT}${this.listing._id}`)
        .then((response) => {
          if (response.status === 200) {
            this.message = "Your listing has been deleted.";
            this.existingListing = false;
          } else {
            this.errors =
              "There was a problem deleting your listing. Please try again.";
          }
        })
        .catch(() => {
          this.errors = "Error deleting listing. Please try again.";
        });
    },
    logger() {
      console.log(this.listing);
    },
  },
};
</script>

<style></style>
