<template>
  <v-app-bar color="#deb292">
    <v-row justify="center">
      <router-link to="/" class="">
        <v-img src="../../public/lotus-flower.png" max-width="50"> </v-img>
      </router-link>

      <v-col cols="2" class="d-flex justify-end~ align-center">
        <router-link to="/login"><v-button text>Login</v-button></router-link>
        <router-link to="/register">Register</router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
