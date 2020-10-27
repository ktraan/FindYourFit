<template>
  <v-container fluid>
    <v-spacer></v-spacer>
    <v-row class=" justify-space-between">
      <v-img src="../..//public/yoga.jpg" max-height="500" max-width="700">
      </v-img>

      <v-col cols="6" class="mt-auto">
        <div class="text-h1 ml-3">
          Find Your Fit
        </div>
        <div class="text-h5 mb-5 ml-16">
          A tool to help you find and connect with trainers to meet your health
          & fitness ambitions.
        </div>
      </v-col>
      <v-row class="justify-end">
        <v-col cols="6" class="mt-auto">
          <div class="text-lg-h4 pb-6">
            Finding the right fitness expert to meet your needs can be difficult
            sometimes. Our mission is to help you find a health or fitness
            professional to meet your goals effortlessly.
          </div>
        </v-col>
        <v-img src="../../public/stairs.jpg" max-width="700"></v-img
      ></v-row>
    </v-row>
    <v-row></v-row>
    <v-row></v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>

<style>
.container {
  background-color: #dbd9d9;
}
</style>
