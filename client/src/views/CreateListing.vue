<template>
  <v-form>
    <v-container class="container" fluid>
      <v-row class="justify-center mt-5">
        <v-card width="1500" height="600" elevation="3" tile>
          <v-row>
            <v-col cols="4">
              <v-card-title class="text-h2">Create a Listing</v-card-title>
              <v-row class="d-flex ml-5">
                <v-img
                  src="../../public/profile.png"
                  max-width="200"
                  class="ml-10 mt-5"
                >
                </v-img>
                <v-btn class="mt-auto ml-n5" icon>
                  <v-icon x-large color="grey darken-4" class=""
                    >mdi-camera</v-icon
                  >
                </v-btn>
              </v-row>
              <v-row class="d-flex">
                <div class="text-h6 font-weight-light text-center mt-5 ml-16">
                  Upload your photo picture
                </div>
              </v-row>
            </v-col>

            <v-col cols="4">
              <v-text-field label="Label"></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      fileInput: "",
      profileImage:
        "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    };
  },
  methods: {
    changeImage() {
      this.fileInput = this.profileImage;
    },
    logger() {
      console.log(this.fileInput);
      console.log(this.profileImage);
    }
  }
};
</script>

<style></style>
