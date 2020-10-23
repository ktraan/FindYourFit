<template>
  <v-form>
    <v-container ref="form" v-model="valid" lazy-validation>
      <v-row class="d-flex justify-center mt-10">
        <v-card class="pa-5" width="700" height="500">
          <v-row class="d-flex justify-center">
            <div class="text-h4 mt-5">Register</div>
          </v-row>
          <v-row class="d-flex justify-space-between  mt-10">
            <!-- First Col -->
            <v-col cols="6">
              <v-text-field
                v-model.trim="user.firstName"
                :rules="firstNameRules"
                name="firstName"
                label="First Name"
                dense
                outlined
              >
              </v-text-field>

              <v-text-field
                v-model.trim="user.email"
                name="email"
                dense
                label="Email Address"
                hint="eg. fyf@gmail.com"
                outlined
              >
              </v-text-field>

              <v-text-field
                v-model.trim="user.password"
                :rules="[
                  user.password === confirmedPassword ||
                    ('Passwords do not match' && passwordRules),
                ]"
                name="password"
                dense
                label="Password"
                outlined
                required
              >
              </v-text-field>

              <v-radio-group class="ml-1" label="Sex:" row dense>
                <v-radio
                  class="asdf"
                  v-model.trim="user.gender"
                  v-bind:name="maleGender"
                  label="Male"
                  color="blue darken-1"
                >
                </v-radio>
                <v-radio
                  v-model="user.gender"
                  v-bind:name="femaleGender"
                  value="Female"
                  label="Female"
                  color="pink lighten-3"
                >
                </v-radio>
                <v-radio
                  v-model="user.gender"
                  v-bind:name="otherGender"
                  value="Other"
                  label="Other"
                  color="purple accent-4"
                >
                </v-radio>
              </v-radio-group>
            </v-col>

            <!-- Second Col -->
            <v-col cols="6">
              <v-text-field
                v-model.trim="user.lastName"
                :rules="lastNameRules"
                name="lastName"
                dense
                label="Last Name"
                outlined
              >
              </v-text-field>

              <v-text-field
                v-model.trim="user.birthday"
                name="birthday"
                dense
                label="Date of Birth"
                outlined
                required
              >
              </v-text-field>

              <!-- TODO: Compare this input with other password -->
              <v-text-field
                v-model="confirmedPassword"
                :rules="confirmedPasswordRules"
                dense
                name="confirmedPassword"
                label="Confirm Password"
                outlined
                required
              >
              </v-text-field>

              <v-text-field
                v-model.trim="user.location"
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
                @click="onClickLogger"
              >
                Submit
              </v-btn>
            </v-row>
          </v-row>
        </v-card>
      </v-row>
      <!-- <h2>{{ name.firstName }}</h2> -->
    </v-container>
  </v-form>
</template>

<script>
const GET_URL = "http://localhost:3000/register";

export default {
  name: "register",
  data: () => {
    return {
      // Gender strings
      // TODO: Send Gender as these variables
      maleGender: "Male",
      femaleGender: "Female",
      otherGender: "Other",

      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        location: "",
        birthday: "",
      },

      confirmedPassword: "",

      valid: true,
      firstNameRules: [
        (name) => !!name || "First Name Required",
        (name) => (name && name.length > 0) || "Cannot be empty",
        (name) => (name && name.length <= 35) || "Cannot exceed 35 characters",
      ],
      lastNameRules: [
        (name) => !!name || "Last Name Required",
        (name) => (name && name.length > 0) || "Cannot be empty",
        (name) => (name && name.length <= 35) || "Cannot exceed 35 characters",
      ],
      passwordRules: [
        (pw) => !!pw || "Password Required",
        (pw) =>
          (pw && pw.length >= 8) || "Password must be at least 8 characters",
      ],
      confirmedPasswordRules: [(pw) => !!pw || "Password Required"],
    };
  },
  methods: {
    validate() {
      this.$ref.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    // Test Method to console.log
    onClickLogger() {
      let data = {
        firstName: this.user.firstName,
        gender2: this.gender,
        cP: this.confirmedPassword,
        // gender3: this.gender.name,
      };
      console.log(data);
    },
  },
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
