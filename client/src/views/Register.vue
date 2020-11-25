<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row class="d-flex justify-center mt-10">
        <v-card class="pa-5" width="730" height="500" elevation="12">
          <v-row class="d-flex justify-center">
            <div class="text-h4 mt-5">Register to Find Your Fit!</div>
          </v-row>
          <div class=" d-flex justify-center mt-5">
            Please fill out your details to register now.
          </div>
          <v-divider class="mx-4 mt-3"></v-divider>
          <v-row class="d-flex justify-space-between mt-3">
            <!-- First Col -->
            <v-row class="pl-9 pr-9">
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
                v-model.trim="user.lastName"
                :rules="lastNameRules"
                name="lastName"
                class="ml-6"
                dense
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
                outlined
                required
              >
              </v-text-field>
            </v-row>

            <!-- Second Col -->

            <v-row class="pl-9 pr-9">
              <v-text-field
                v-model.trim="user.password"
                :rules="passwordRules"
                name="password"
                dense
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
                label="Confirm Password"
                outlined
                required
              >
              </v-text-field>
            </v-row>
            <v-row class="pl-9 pr-9">
              <v-radio-group
                v-model="genderGroup"
                class="ml-1"
                label="Sex:"
                row
                dense
              >
                <v-radio :value="'Male'" label="Male" color="blue darken-1">
                </v-radio>
                <v-radio
                  :value="'Female'"
                  label="Female"
                  color="pink lighten-3"
                >
                </v-radio>
                <v-radio :value="'Other'" label="Other" color="purple accent-4">
                </v-radio>
              </v-radio-group>
              <v-text-field
                v-model.trim="user.location"
                :rules="locationRules"
                dense
                class="ml-8"
                label="Location"
                hint="eg. Edmonton, AB"
                outlined
              >
              </v-text-field>
            </v-row>

            <!-- Buttons -->

            <v-row justify="end">
              <v-btn class="text-capitalize text-h6" text href="/"
                >Cancel
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
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// import RegisterDataService from "../services/RegisterDataService";

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
        pw => (pw && pw.length >= 8) || "Password must be at least 8 characters"
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
  methods: {
    submit() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    createUser() {
      let data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        gender: this.genderGroup,
        location: this.user.location,
        birthday: this.user.birthday
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("dashboard"))
        .catch(err => {
          if (!err) {
            this.$router.push("register");
          }
        });
      // RegisterDataService.create(data)
      //   .then(response => {
      //     this.$router.push("dashboard");
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     if (error.response.data.errors) {
      //       console.log("There were some errors");

      //       let entries = Object.entries(error.response.data.errors);
      //       for (const [value] of Object.entries(entries)) {
      //         // console.log(value[1].message);
      //         this.errors.push(value[1].message);
      //       }
      //       console.log(this.errors);

      //       // TODO: Display the error messages to front end
      //     }

      //     // let stringErrors = JSON.stringify(error.response.data.errors);
      //     // let jsonErrors = JSON.parse(stringErrors);
      //     // console.log(stringErrors);
      //     // console.log(typeof errors);
      //     // console.log(error.response.data);
      //   });
    },

    // Test Method to console.log
    onClickLogger() {
      let data = {
        firstName: this.user.firstName,
        gender2: this.genderGroup,
        cP: this.confirmedPassword
      };
      console.log(data);
    }
  },
  computed: {}
};
</script>

<style>
.container {
  margin: auto;
}
</style>
