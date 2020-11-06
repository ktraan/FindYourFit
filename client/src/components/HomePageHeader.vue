<template>
  <v-card class="overflow-hidden">
    <v-app-bar height="600" src="../../public/yoga.jpg" prominent>
      <v-row class="d-flex mt-auto">
        <router-link to="/" class="">
          <v-img src="../../public/whitelotus.png" class="ml-5" width="100">
          </v-img>
        </router-link>
        <v-toolbar-title class="h1text text-h1 ml-8">
          Find Your Fit
        </v-toolbar-title>
        <!-- <v-row justify="end" class="mr-10"> -->
        <v-tabs background-color="transparent" grow>
          <v-tab to="/" class="tab text-capitalize">
            <p class="text-h6">
              Home
            </p>
          </v-tab>
          <v-tab to="/login" class="tab text-capitalize">
            <p class="text-h6">
              Login
            </p>
          </v-tab>
          <v-tab to="/register" class="tabs text-capitalize">
            <p class="text-h6">
              Register
            </p>
          </v-tab>
        </v-tabs>
        <!-- </v-row> -->
      </v-row>
    </v-app-bar>
  </v-card>
</template>

<style>
.h1text {
  color: white;
}
.tabs {
  color: white;
}
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
  margin-top: auto;
}
</style>
