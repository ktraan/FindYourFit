<template>
  <v-app-bar class="blue lighten-3" max-height="100">
    <router-link to="/">
      <v-icon x-large class="mt-7 ml-5">mdi-home-circle-outline</v-icon>
    </router-link>
    <v-row class="justify-center">
      <router-link to="/login" class="text-decoration-none text-h4 ml-10 mt-10"
        >Login</router-link
      >
      <router-link
        to="/register"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Register</router-link
      >
      <router-link
        to="/profile"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Profile</router-link
      >
      <router-link
        to="/listings"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Listings</router-link
      >
      <router-link
        to="/addlisting"
        class="text-decoration-none text-h4 ml-10 mt-10"
        >Add Listing</router-link
      >
    </v-row>
  </v-app-bar>
</template>
