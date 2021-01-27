<template>
  <v-container class="container" fluid>
    <v-row class="">
      <v-carousel
        class=""
        cycle
        hide-delimiter-background
        hide-delimiters
        dark
        height="800"
        interval="1000000000"
      >
        <!-- keep interval at 15sec -->
        <v-carousel-item>
          <v-img src="../../public/slide1.jpg" class="d-sm-flex" height="100%">
            <v-row class="mt-16" justify="center" align="center">
              <div class="white--text text-h2 font-weight-regular">
                Check out all of the current listings!
              </div>
            </v-row>
            <v-row class="justify-center">
              <router-link to="/listings" class="text-decoration-none">
                <v-btn
                  width="200"
                  height="60"
                  elevation="20"
                  class="text-capitalize white--text text-h6 mt-5"
                  color="white"
                  outlined
                  rounded
                  plain
                  shaped
                  focus
                >
                  View Listings
                </v-btn></router-link
              >
            </v-row>
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="../../public/slide2.jpg" height="100%"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="../../public/slide4.jpg" height="100%"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="../../public/slide5.jpg" height="100%"></v-img>
        </v-carousel-item> </v-carousel
    ></v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src:
            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
        }
      ]
    };
  }
};
</script>

<style></style>
