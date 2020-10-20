<template>
  <v-container name="register">
    <v-row class="d-flex">
      <div class="text-h1">Register</div>
    </v-row>

    <h2>{{ name.firstName }}</h2>
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
  mounted() {
    fetch(GET_URL)
      .then((response) => response.json())
      .then((data) => {
        {
          console.log(data);
          this.name = data[0];
        }
      });
  },
};
</script>
