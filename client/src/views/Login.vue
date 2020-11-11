<template>
  <v-container>
    <v-row class="justify-center">
      <v-card class="pa-5" width="730" height="500" elevation="12">
        <v-row class="justify-center">
          <div class="text-h3 d-flex justify-center mb-10">Login</div>
        </v-row>
        <v-text-field
          class="ml-auto mr-auto"
          name="email"
          label="Email Address"
          dense
          outlined
        >
        </v-text-field>
        <v-text-field
          class="ml-auto mr-auto"
          :type="'password'"
          name="password"
          label="Password"
          dense
          outlined
        >
        </v-text-field>
        <v-row class="justify-center">
          <v-btn class=" text-capitalize" color="" width="100">Cancel</v-btn>
          <v-btn
            class="orange lighten-2 text-capitalize ml-5"
            color="#deb292"
            width="100"
            >Login</v-btn
          >
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data: () => {
    return {
      errors: [],
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
    }
  }
};
</script>

<style scoped>
.v-text-field {
  width: 350px;
}
</style>
