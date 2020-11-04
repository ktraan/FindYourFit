<template>
  <v-container fluid>
    <v-spacer></v-spacer>
    <v-row class=" justify-space-between">
      <v-img src="../..//public/yoga.jpg" width="500" height="auto"> </v-img>

      <v-col cols="6" class="mt-auto mb-10">
        <h1 class="h1-text  font-weight-regular">
          Find Your Fit
        </h1>
        <h2 class="mb-5 ml-10 font-weight-medium font-italic">
          A tool to help you find and connect with trainers to meet your health
          & fitness ambitions.
        </h2>
      </v-col>
      <v-row class="justify-end">
        <v-col cols="6" class="mt-auto mb-auto">
          <div class="description-text pb-6 font-weight-medium">
            Finding the right fitness expert to meet your needs can be difficult
            sometimes. Our mission is to help you find a health or fitness
            professional to meet your goals effortlessly.
          </div>
        </v-col>
        <v-img src="../../public/stairs.jpg" width="500" height="auto"></v-img
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
  font-family: Arial, Helvetica, sans-serif;
}
.h1-text {
  font-size: 100px;
}
.description-text {
  font-size: 35px;
}
</style>
