<template>
  <v-app>
    <Header />
    
    <v-main>
      <v-icon>fas fa-lock </v-icon>
      <router-view />
      
    </v-main>
    
  </v-app>
</template>

<script>
import Header from '../src/components/Header'
export default {
  name: "App",
  components: { Header },
  data: () => ({
    //
  }),
};
</script>
