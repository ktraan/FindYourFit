<template>
  <v-app-bar color="#deb292">
    <v-row justify="center">
      <router-link to="/" class="">
        <v-img src="../../public/lotus-flower.png"  max-width="50"> </v-img>
      </router-link>

      
        <router-link to="/login"><v-button text>Login</v-button></router-link>
        <router-link to="/register">Register</router-link>
      
    </v-row>
  </v-app-bar>
</template>
