<template>
  <v-form>
    <v-container class="container" fluid>
      <v-row class="justify-center mt-5">
        <v-alert
          v-if="errors"
          class="text-center text-h5"
          dense
          outlined
          width="700"
          type="error"
        >
          {{ errors }}
        </v-alert>
      </v-row>

      <v-row justify="center">
        <div class="text-h4 text-sm-h3 text-center font-weight-light mt-1 mb-2">
          Get started by creating a listing!
        </div>
      </v-row>
      <v-row justify="center">
        <div class="text-h4 text-sm-h3 text-center font-weight-light ">
          Enter your information below.
        </div>
      </v-row>

      <v-row class="justify-center mt-5 mb-5 ">
        <v-card class="pa-2" width="1200" height="650" elevation="3" tile>
          <v-row>
            <v-col cols="4">
              <v-spacer class=""></v-spacer>

              <v-row class="d-flex ml-10 mt-16">
                <v-img
                  :src="image"
                  max-width="250"
                  max-height="300"
                  class="ml-10 mt-10"
                >
                </v-img>
              </v-row>
              <v-row class="">
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
                  ></v-file-input
                ></v-col>
              </v-row>
              <v-row class="d-flex ml-2">
                <div class="text-h5 font-weight-light text-center ml-12">
                  Upload your profile picture
                </div>
              </v-row>
            </v-col>

            <v-col cols="4">
              <div class="text-h4 text-sm-h5 mb-5 mt-2 ml-n1">
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
              <!-- Max 300 char -->
              <v-textarea
                v-model="listing.summary"
                :error-messages="summaryErrors"
                @blur="$v.listing.summary.$touch()"
                name="summary"
                label="Summary"
                color="amber darken-2"
              ></v-textarea>

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

              <v-row class="">
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
                <!-- <v-text-field
                  v-model="listing.email"
                  :error-messages="emailErrors"
                  @blur="$v.listing.email.$touch()"
                  name="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  color="amber darken-2"
                >
                </v-text-field> -->
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
                  v-model="listing.facebookField"
                  :error-messages="facebookFieldErrors"
                  @blur="$v.listing.facebookField.$touch()"
                  name="facebookField"
                  label="Facebook"
                  prepend-icon="mdi-facebook"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.instagramField"
                  :error-messages="instagramFieldErrors"
                  @blur="$v.listing.instagramField.$touch()"
                  name="instagramField"
                  label="Instagram"
                  prepend-icon="mdi-instagram"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.youtubeField"
                  :error-messages="youtubeFieldErrors"
                  @blur="$v.listing.youtubeField.$touch()"
                  name="youtubeField"
                  label="YouTube"
                  prepend-icon="mdi-youtube"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.twitterField"
                  :error-messages="twitterFieldErrors"
                  @blur="$v.listing.twitterField.$touch()"
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
                  @click="submit"
                  >Submit</v-btn
                ></v-row
              >
              <!-- <v-spacer class="mt-16"></v-spacer> -->
            </v-col>
          </v-row>
        </v-card>
        <!-- <v-btn @click="logger">Logger</v-btn> -->
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  // email,
  url
} from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data: () => {
    return {
      errors: "",

      image: "",
      listing: {
        occupation: "",
        yearsExperience: "",
        education: [],
        listingType: "",
        summary: "",
        phone: "",
        // email: "",
        website: "",
        facebookField: "",
        instagramField: "",
        youtubeField: "",
        twitterField: ""
      },

      fileInput: "",
      imagesize: [
        value =>
          !value ||
          value.size < 8000000 ||
          "Image size should be less than 8 MB"
      ],

      listingTypeItems: [
        "Personal Training",
        "Athletic Training",
        "Group Exercise",
        "Yoga",
        "Nutritionist",
        "Health & Wellness"
      ]
    };
  },
  validations: {
    listing: {
      phone: {
        required,
        numeric,
        minLength: minLength(7)
      },
      // email: {
      //   required,
      //   email
      // },
      occupation: {
        required,
        maxLength: maxLength(50)
      },
      listingType: {
        required
      },
      summary: {
        required,
        maxLength: maxLength(250)
      },
      yearsExperience: {
        numeric
      },
      website: {
        url
      },
      facebookField: {
        url
      },
      instagramField: {
        url
      },
      youtubeField: {
        url
      },
      twitterField: {
        url
      }
    }
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
    // emailErrors() {
    //   const errors = [];
    //   if (this.$v.listing.email.$dirty) {
    //     if (!this.$v.listing.email.required) errors.push("Email is required.");
    //   }
    //   if (this.$v.listing.email.$dirty) {
    //     if (!this.$v.listing.email.email)
    //       errors.push("Invalid email format. ex: findyourfit@gmail.com.");
    //   }
    //   return errors;
    // },
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
      if (this.$v.listing.facebookField.$dirty) {
        if (!this.$v.listing.facebookField.url)
          errors.push("Invalid Facebook URL.");
      }
      return errors;
    },
    instagramFieldErrors() {
      const errors = [];
      if (this.$v.listing.instagramField.$dirty) {
        if (!this.$v.listing.instagramField.url)
          errors.push("Invalid Instagram URL.");
      }
      return errors;
    },
    youtubeFieldErrors() {
      const errors = [];
      if (this.$v.listing.youtubeField.$dirty) {
        if (!this.$v.listing.youtubeField.url)
          errors.push("Invalid YouTube URL.");
      }
      return errors;
    },
    twitterFieldErrors() {
      const errors = [];
      if (this.$v.listing.twitterField.$dirty) {
        if (!this.$v.listing.twitterField.url)
          errors.push("Invalid Twitter URL.");
      }
      return errors;
    }
  },
  methods: {
    changeImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result;
      };
    },
    clear() {},
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.errors = "Please correct the fields before submitting.";
      } else {
        const LISTING_ENDPOINT = "http://localhost:3000/listing";
        axios
          .post(LISTING_ENDPOINT, {
            creator: this.user._id,
            occupation: this.listing.occupation,
            summary: this.listing.summary,
            yearsExperience: this.listing.yearsExperience,
            education: this.listing.education,
            listingType: this.listing.listingType,
            phone: this.listing.phone,
            email: this.user.email,
            website: this.listing.website,
            facebookLink: this.listing.facebookField,
            instagramLink: this.listing.instagramField,
            youtubeLink: this.listing.youtubeField,
            twitterLink: this.listing.twitterField,
            profilePicture: this.image
          })
          .then(response => {
            if (response.status === 201 || response.status === 200) {
              this.$router.push("listings");
              // console.log(response);
              console.log(response.status);
            } else {
              this.errors =
                "There was a problem creating the listing, Please try again.";
            }
          })
          .catch(error => {
            console.log(error);
            this.errors =
              "There was a problem creating the listing, Please try again.";
          });
      }
    },
    logger() {
      // console.log(this.user._id);
      // console.log(this.image);
      // console.log(this.listing);
    }
  }
};
</script>

<style></style>
