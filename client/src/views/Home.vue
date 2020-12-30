<template>
  <v-container fluid>
    <v-row class=" justify-center">
      <h1
        class="h1-text text-h4 text-sm-h2 mb-5 ml-10 font-weight-light pa-10 text-center"
      >
        Find Your Fit is a tool to help you find and connect with trainers to
        meet your health & fitness ambitions.
      </h1>
    </v-row>
    <v-divider></v-divider>
    <v-row class="justify-center">
      <div
        class=" text-h4 text-sm-h3 font-weight-light description-text mt-5 mb-5 text-center"
      >
        Finding the right fitness expert can be difficult sometimes. Life often
        gets in the way when it comes to our health. Our mission is to help you
        find a health or fitness professional to meet your goals effortlessly.
      </div>

      <v-img src="../../public/stairs.jpg" max-height="800"></v-img>
    </v-row>

    <v-row class="d-sm-flex">
      <v-col cols="6" class="pa-0">
        <v-img class="" src="../../public/gym.jpg"></v-img>
      </v-col>

      <v-col cols="6" class="d-flex mt-auto mb-auto">
        <h2
          class="text-h6 text-sm-h4 text-md-h3 bottom-text ml-5 pa-5 font-weight-light"
        >
          We want you to have the highest chance of achieving your end goal.
          Find Your Fit will help you find someone catered to exactly what you
          are looking for.
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {}
};
</script>

<style>
.container {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.h1-text {
  width: 1050px;
}
.description-text {
  width: 800px;
}
.bottom-text {
  width: 1000px;
}
</style>
