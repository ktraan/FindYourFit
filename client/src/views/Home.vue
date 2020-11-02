<template>
  <v-container fluid>
    <v-spacer></v-spacer>
    <v-row class=" justify-space-between">
      <v-img src="../..//public/yoga.jpg" max-width="920" height="633">
      </v-img>

      <v-col cols="6" class="mt-auto mb-16">
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
          <div class="description-text pb-6 pa-1 font-weight-medium">
            Finding the right fitness expert can be difficult
            sometimes. Life often gets in the way when it comes to our health.
            Our mission is to help you find a health or fitness professional to meet your goals effortlessly. 
          </div>
        </v-col>
        <v-img src="../../public/stairs.jpg" max-width="960">
        </v-img>
      </v-row>
    </v-row>
  
    <v-row>
      <v-img src="../../public/gym.jpg" max-width="920"></v-img>
        <v-col cols="6" class="mt-auto mb-auto">
        <h2 class="description-text ml-9 pa-5 font-weight-regular">
          We want you to have the highest chance of achieving your end goal. 
          Find Your Fit will help you find someone catered to exactly what you are looking for.
        </h2>
        </v-col>
    </v-row>
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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.h1-text{
  font-size: 100px;
}
.description-text{
  font-size: 35px;
}
</style>
