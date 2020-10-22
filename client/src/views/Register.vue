<template>
  <v-container>
    <v-row class="d-flex justify-center mt-10">
      <v-card class="pa-5" width="700" height="500">
        <v-row class="d-flex justify-center">
          <div class="text-h4 mt-5">Register</div>
        </v-row>
        <v-row class="d-flex justify-space-between  mt-10">
          <!-- First Col -->
          <v-col cols="6">
            <v-text-field label="First Name" dense outlined> </v-text-field>
            <v-text-field
              dense
              label="Email Address"
              hint="eg. fyf@gmail.com"
              outlined
            >
            </v-text-field>
            <v-text-field
              dense
              label="Password"
              hint="Password must have 8 characters or more."
              outlined
            >
            </v-text-field>

            <v-radio-group class="ml-1" label="Sex:" row dense>
              <v-radio label="Male" color="blue darken-1" ripple></v-radio>
              <v-radio label="Female" color="pink lighten-3" ripple></v-radio>
              <v-radio label="Other" color="purple accent-4" ripple></v-radio>
            </v-radio-group>
          </v-col>

          <!-- Second Col -->
          <v-col cols="6">
            <v-text-field dense label="Last Name" outlined></v-text-field>
            <v-text-field
              dense
              label="Date of Birth"
              hint="eg. 2020-01-30"
              outlined
            >
            </v-text-field>
            <v-text-field dense label="Confirm Password" outlined>
            </v-text-field>
            <v-text-field
              dense
              label="Location"
              hint="eg. Edmonton, AB"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-row class="justify-end">
            <v-btn class="text-capitalize text-h6" width="150" height="40"
              >Cancel
            </v-btn>

            <v-btn
              class="primary text-capitalize text-h6 ml-5 mr-5"
              width="150"
              height="40"
            >
              Submit
            </v-btn>
          </v-row>
        </v-row>
      </v-card>
    </v-row>

    <!-- <h2>{{ name.firstName }}</h2> -->
  </v-container>
</template>

<script>
const GET_URL = "http://localhost:3000/register";

export default {
  name: "register",
  data: () => ({
    error: "",
    name: [],
  }),
  // mounted() {
  //   fetch(GET_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       {
  //         console.log(data);
  //         this.name = data[0];
  //       }
  //     });
  // },
};
</script>

<style>
.container {
  margin: auto;
}
</style>
