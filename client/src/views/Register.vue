<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-alert
        v-if="this.$store.state.auth.error"
        dense
        outlined
        max-width="1000"
        class="text-center mt-5 ml-auto mr-auto"
        type="error"
        >{{ this.$store.state.auth.error }}</v-alert
      >
      <v-row class="d-flex justify-center mt-5">
        <v-card class="pa-5 mb-10" width="730" height="500" elevation="12">
          <v-row class="d-flex justify-center">
            <div class="text-h4 mt-5">Register to Find Your Fit!</div>
          </v-row>
          <div class=" d-flex justify-center mt-5">
            Please fill out your details to register now.
          </div>
          <v-divider class="mx-4 mt-3"></v-divider>

          <v-row class="pl-9 pr-9">
            <v-text-field
              v-model.trim="user.firstName"
              :rules="firstNameRules"
              name="firstName"
              label="First Name"
              dense
              color="amber darken-2"
              outlined
            >
            </v-text-field>

            <v-text-field
              v-model.trim="user.lastName"
              :rules="lastNameRules"
              name="lastName"
              class="ml-6"
              dense
              color="amber darken-2"
              label="Last Name"
              outlined
            >
            </v-text-field>
          </v-row>
          <v-row class="pr-9 pl-9">
            <v-text-field
              v-model.trim="user.email"
              :rules="emailRules"
              name="email"
              dense
              color="amber darken-2"
              label="Email Address"
              hint="eg. fyf@gmail.com"
              outlined
            >
            </v-text-field>
            <v-text-field
              v-model.trim="user.birthday"
              name="birthday"
              :rules="birthdayRules"
              dense
              label="Date of Birth"
              class="ml-6"
              color="amber darken-2"
              hint="eg. 1990-01-30"
              outlined
              required
            >
            </v-text-field>
          </v-row>

          <v-row class="pr-9 pl-9">
            <v-text-field
              v-model.trim="user.password"
              :rules="passwordRules"
              name="password"
              type="password"
              dense
              color="amber darken-2"
              label="Password"
              outlined
              required
            >
            </v-text-field>
            <!-- TODO: Compare this input with other password -->
            <v-text-field
              v-model="confirmedPassword"
              :rules="confirmedPasswordRules"
              dense
              class="ml-6"
              name="confirmedPassword"
              type="password"
              label="Confirm Password"
              outlined
              required
              color="amber darken-2"
            >
            </v-text-field>
          </v-row>

          <v-row class="pr-9 pl-9">
            <v-radio-group
              v-model="genderGroup"
              class="ml-1"
              label="Sex:"
              color="amber darken-2"
              row
              dense
            >
              <v-radio :value="'Male'" label="Male" color="blue darken-1">
              </v-radio>
              <v-radio :value="'Female'" label="Female" color="pink lighten-3">
              </v-radio>
              <v-radio :value="'Other'" label="Other" color="purple accent-4">
              </v-radio>
            </v-radio-group>
            <v-text-field
              v-model.trim="user.location"
              :rules="locationRules"
              dense
              class="ml-5"
              label="Location"
              color="amber darken-2"
              hint="eg. Edmonton, AB"
              outlined
            >
            </v-text-field>
          </v-row>

          <v-row justify="end">
            <v-btn class="text-capitalize text-h6" text href="/">Cancel </v-btn>
            <v-btn class="text-capitalize text-h6" text @click="reset"
              >Clear
            </v-btn>
            <v-btn
              :disabled="!valid"
              class=" text-capitalize text-h6 ml-3 mr-5"
              text
              @click="createUser"
            >
              Submit
            </v-btn>
          </v-row>
          <v-btn @click="log">log</v-btn>
        </v-card>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "register",
  data: () => {
    return {
      errors: [],
      genderGroup: "",
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        location: "",
        birthday: ""
      },

      confirmedPassword: "",

      valid: true,

      firstNameRules: [
        name => !!name || "First Name Required",
        name => (name && name.length > 0) || "Cannot be empty",
        name => (name && name.length <= 35) || "Cannot exceed 35 characters"
      ],

      lastNameRules: [
        name => !!name || "Last Name Required",
        name => (name && name.length > 0) || "Cannot be empty",
        name => (name && name.length <= 35) || "Cannot exceed 35 characters"
      ],
      passwordRules: [
        pw => !!pw || "Password Required",
        pw => (pw && pw.length >= 8) || "Password minimum 8 characters"
      ],
      confirmedPasswordRules: [pw => !!pw || "Password Required"],
      emailRules: [
        email => !!email || "Email Required",
        email => (email && /.+@.+/.test(email)) || "Email must be valid"
      ],
      locationRules: [loc => !!loc || "Location Required"],
      birthdayRules: [bday => !!bday || "Birthday Required"]
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_API_ENDPOINT);
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["register"]),
    log() {
      console.log(process.env.BASE_URL);
      console.log(process.env.VUE_APP_API_ENDPOINT);
      console.log(process.env.NODE_ENV);
      console.log(process.env);
    },
    submit() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    async createUser() {
      this.$refs.form.validate();

      // Send request
      await this.$store
        .dispatch("register", {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          gender: this.genderGroup,
          location: this.user.location,
          birthday: this.user.birthday
        })
        .then(response => {
          if (response.status === 201 || response.status === 200) {
            this.$router.push("/dashboard");
          }
        });
    }
  }
};
</script>

<style>
.container {
  margin: auto;
}
</style>
