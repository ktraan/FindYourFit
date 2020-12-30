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
      <v-row class="justify-center mt-5 mb-5">
        <v-card width="1200" height="600" elevation="3" tile>
          <v-row>
            <v-col cols="4">
              <v-spacer class=""></v-spacer>

              <v-row class="d-flex ml-10 mt-16">
                <v-img
                  src="../../public/profile.png"
                  max-width="250"
                  class="ml-10 mt-10"
                >
                </v-img>
                <v-btn class="mt-auto ml-n5" icon>
                  <v-icon x-large color="grey darken-4" class=""
                    >mdi-camera</v-icon
                  >
                </v-btn>
              </v-row>
              <v-row class="d-flex ml-2">
                <div class="text-h5 font-weight-light text-center mt-8 ml-16">
                  Upload your profile picture
                </div>
              </v-row>
            </v-col>

            <v-col cols="4">
              <div class="text-h4 text-sm-h5 mb-5 mt-2 ml-n1">
                {{ user.firstName + " " + user.lastName }}
              </div>
              <v-text-field
                v-model="occupation"
                placeholder="Enter your occupation"
                label="Occupation"
                name="occupation"
                color="amber darken-2"
                prepend-icon=""
              >
              </v-text-field>

              <v-text-field
                v-model="yearsExperience"
                class="mt-2"
                label="Experience"
                name="yearsExperience"
                placeholder="Years of experience"
                color="amber darken-2"
              >
              </v-text-field>
              <v-combobox
                v-model="education"
                chips
                deletable-chips
                multiple
                clearable
                placeholder="Type in your education experience"
                name="education"
                label="Education"
                item-color="amber darken-2"
                color="amber darken-2"
              >
              </v-combobox>
              <v-select
                v-model="listingType"
                label="Listing Type"
                placeholder="Choose the type of listing"
                :items="listingTypeItems"
                color="amber darken-2"
              >
              </v-select>
              <!-- Max 300 char -->
              <v-textarea
                v-model="summary"
                label="Summary"
                name="summary"
                placeholder="Enter a short summary about what you are all about! "
                color="amber darken-2"
              ></v-textarea>
            </v-col>

            <v-col cols="3">
              <div>
                Enter the links to your profile
              </div>
              <v-row>
                <v-checkbox
                  v-model="socialsCheck"
                  class="text-left"
                  label="Would you like to add your social media accounts?"
                  color="amber darken-2"
                >
                </v-checkbox>
              </v-row>
              <v-row v-if="socialsCheck">
                <v-text-field
                  v-model="facebookField"
                  name="facebookField"
                  label="Facebook"
                  prepend-icon="mdi-facebook"
                >
                </v-text-field>
                <v-text-field
                  v-model="instagramField"
                  name="instagramField"
                  label="Instagram"
                  prepend-icon="mdi-instagram"
                >
                </v-text-field>
                <v-text-field
                  v-model="youtubeField"
                  name="youtubeField"
                  label="YouTube"
                  prepend-icon="mdi-youtube"
                >
                </v-text-field>
                <v-text-field
                  v-model="twitterField"
                  name="twitterField"
                  label="Twitter"
                  prepend-icon="mdi-twitter"
                >
                </v-text-field>
              </v-row>
              <v-spacer class="mt-16"></v-spacer>

              <v-row class="">
                <v-col class=""> </v-col>
              </v-row>
            </v-col>
            <v-row class="justify-end mt-n16 ml-n16"
              ><v-btn
                class="mt-auto  text-capitalize mr-6 text-h5"
                color="grey lighten-1"
                large
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
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      occupation: "",
      yearsExperience: "",
      education: [],
      listingType: "",
      socialsCheck: false,
      summary: "",
      facebookField: "",
      instagramField: "",
      youtubeField: "",
      snapchatField: "",

      fileInput: "",
      profileImage:
        "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",

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
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    changeImage() {
      this.fileInput = this.profileImage;
    },
    submit() {},
    logger() {
      // console.log(this.user);
      console.log(this.socialsCheck);
      // console.log(this.fileInput);
      // console.log(this.profileImage);
    }
  }
};
</script>

<style></style>
