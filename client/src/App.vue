<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
