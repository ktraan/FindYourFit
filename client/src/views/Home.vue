<template>
  <v-container fluid>
    <v-row class=" justify-center">
      <h1 class="h1-text mb-5 ml-10 pa-10 font-weight-medium text-center">
        Find Your Fit is a tool to help you find and connect with trainers to
        meet your health & fitness ambitions.
      </h1>
    </v-row>
    <v-divider></v-divider>
    <v-row class="justify-center">
      <v-col cols="6" class="mt-auto mb-auto">
        <div class="description-text pa-10 font-weight-medium text-center">
          Finding the right fitness expert can be difficult sometimes. Life
          often gets in the way when it comes to our health. Our mission is to
          help you find a health or fitness professional to meet your goals
          effortlessly.
        </div>
      </v-col>
      <v-img src="../../public/stairs.jpg" max-height="800"></v-img>
    </v-row>

    <v-row>
      <v-img src="../../public/gym.jpg" max-width="950"></v-img>
      <v-col cols="6" class="mt-auto mb-auto">
        <h2 class="description-text ml-9 pa-5 font-weight-regular">
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
  font-size: 50px;
  width: 1000px;
}
.description-text {
  font-size: 35px;
}
</style>
