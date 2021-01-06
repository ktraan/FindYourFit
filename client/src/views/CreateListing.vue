<template>
  <v-form>
    <v-container class="container" fluid>
      <v-row justify="center">
        <div class="text-h4 text-sm-h3 text-center font-weight-light mt-5 mb-2">
          Get started by creating a listing!
        </div>
      </v-row>
      <v-row justify="center">
        <div class="text-h4 text-sm-h3 text-center font-weight-light ">
          Enter your information below.
        </div>
      </v-row>

      <v-row class="justify-center">
        <v-alert v-if="errors" class="text-center" dense outlined type="error">
          {{ errors }}
        </v-alert>
      </v-row>

      <v-row class="justify-center mt-5 mb-5">
        <v-card width="1200" height="620" elevation="3" tile>
          <v-row>
            <v-col cols="4">
              <v-spacer class=""></v-spacer>

              <v-row class="d-flex ml-10 mt-16">
                <v-img :src="image" max-width="250" class="ml-10 mt-10">
                </v-img>
                <!-- <v-btn class="mt-auto ml-n5" icon @click="uploadImage">
                  <v-icon x-large color="grey darken-4" class=""
                    >mdi-camera</v-icon
                  >
                </v-btn> -->
              </v-row>
              <v-row class="">
                <v-col cols="11"
                  ><v-file-input
                    class="ml-5 mt-2"
                    color="amber darken-2"
                    dense
                    show-size
                    accept="image/*"
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
              </div>
              <v-text-field
                v-model="listing.occupation"
                :error-messages="occupationErrors"
                @blur="$v.listing.occupation.$touch()"
                placeholder="Enter your occupation"
                name="occupation"
                color="amber darken-2"
                prepend-icon=""
              >
              </v-text-field>

              <v-select
                v-model="listing.listingType"
                :error-messages="listingTypeErrors"
                @blur="$v.listing.listingType.$touch()"
                placeholder="Choose the type of listing"
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
                placeholder="Enter a short summary about what you are all about! "
                color="amber darken-2"
              ></v-textarea>

              <v-combobox
                v-model="listing.education"
                chips
                deletable-chips
                multiple
                clearable
                placeholder="Type and press enter..."
                hint="younerd"
                name="education"
                label="Education"
                item-color="amber darken-2"
                color="amber darken-2"
              >
              </v-combobox>

              <v-text-field
                v-model="listing.yearsExperience"
                class="mt-2"
                name="yearsExperience"
                placeholder="Years of experience"
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
                <v-text-field
                  v-model="listing.email"
                  :error-messages="emailErrors"
                  @blur="$v.listing.email.$touch()"
                  name="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.website"
                  name="website"
                  label="Personal Website"
                  prepend-icon="mdi-web"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.facebookField"
                  name="facebookField"
                  label="Facebook"
                  prepend-icon="mdi-facebook"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.instagramField"
                  name="instagramField"
                  label="Instagram"
                  prepend-icon="mdi-instagram"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.youtubeField"
                  name="youtubeField"
                  label="YouTube"
                  prepend-icon="mdi-youtube"
                  color="amber darken-2"
                >
                </v-text-field>
                <v-text-field
                  v-model="listing.twitterField"
                  name="twitterField"
                  label="Twitter"
                  prepend-icon="mdi-twitter"
                  color="amber darken-2"
                >
                </v-text-field>
              </v-row>

              <!-- <v-spacer class="mt-16"></v-spacer> -->
            </v-col>
            <v-row class="justify-end  ml-n16"
              ><v-btn
                class="mt-auto  text-capitalize mr-6 text-h5"
                color="grey lighten-1"
                large
                @click="clear"
                >Clear</v-btn
              >
              <v-btn
                class="mt-auto  text-capitalize mr-12 text-h5"
                color="amber darken-2"
                width="200"
                large
                @click="submit"
                >Submit</v-btn
              ></v-row
            >
          </v-row>
        </v-card>
        <v-btn @click="logger">Logger</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
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
        email: "",
        website: "",
        facebookField: "",
        instagramField: "",
        youtubeField: "",
        twitterField: ""
      },

      fileInput: "",

      listingTypeItems: [
        "Personal Trainer",
        "Athletic Trainer",
        "Group Exercise Instructor",
        "Yoga Instructor",
        "Nutritionist",
        "Health & Wellness"
      ]
    };
  },
  validations: {
    listing: {
      phone: {
        required,
        minLength: minLength(7)
      },
      email: {
        required
      },
      occupation: {
        required
      },
      summary: {
        required,
        maxLength: maxLength(250)
      },
      listingType: {
        required
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
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (this.$v.listing.email.$dirty) {
        if (!this.$v.listing.email.required) errors.push("Email is required.");
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
      }
      return errors;
    },
    occupationErrors() {
      const errors = [];
      if (this.$v.listing.occupation.$dirty) {
        if (!this.$v.listing.occupation.required)
          errors.push("Occupation is required.");
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
    clear() {
      this.$v.$touch();
    },
    submit() {
      const LISTING_ENDPOINT = "http://localhost/3000/listing";
      axios
        .post(LISTING_ENDPOINT, {
          creator: `${this.user.firstName} ${this.user.lastName}`,
          occupation: this.occupation,
          summary: this.summary,
          yearsExperience: this.yearsExperience,
          education: this.education,
          listingType: this.listingType,
          phone: this.phone,
          email: this.email,
          website: this.website,
          facebookLink: this.facebookField,
          instagramLink: this.instagramField,
          youtubeLink: this.youtubeField,
          twitterLink: this.twitterField,
          profilePicture: this.profilePicture
        })
        .then(response => {
          console.log(response);
          if (response.status === 201 || response.status === 200) {
            this.$router.push("listings");
          } else {
            console.log(
              "There was an error creating the listing. Please try again"
            );
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    logger() {
      console.log(this.image);
      console.log(this.listing);
    }
  }
};
</script>

<style></style>
