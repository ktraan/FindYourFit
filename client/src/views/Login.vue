<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="justify-center mb-10 mt-5">
        <v-card class="pa-5 mt-5 " width="730" height="500" elevation="12">
          <v-row class="justify-center">
            <div class="text-h4 d-flex justify-center mt-5">Login</div>
          </v-row>
          <v-row class="justify-center">
            <div class=" d-flex justify-center mt-5">
              Enter your credentials to log in.
            </div>
          </v-row>
          <v-divider class="mx-4 mt-3"></v-divider>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            @blur="$v.email.$touch()"
            class="ml-auto mr-auto mt-5"
            name="email"
            label="Email Address"
            dense
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            @blur="$v.password.$touch()"
            class="ml-auto mr-auto"
            :type="'password'"
            name="password"
            label="Password"
            dense
            outlined
          >
          </v-text-field>
          <v-row class="justify-center">
            <v-btn class=" text-capitalize text-h6" text width="100" href="/"
              >Cancel
            </v-btn>
            <v-btn
              class=" text-capitalize text-h6"
              text
              width="100"
              @click="reset"
              >Clear
            </v-btn>
            <v-btn
              class=" text-capitalize text-h6"
              text
              width="100"
              @click="login"
              >Login</v-btn
            >
          </v-row>
        </v-card>
      </v-row></v-form
    >
  </v-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      error: "",
      email: "",
      password: "",

      valid: true,
    };
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },
  computed: {
    userIsLoggedIn: function() {
      return this.$store.state.isLoggedIn;
    },
    emailErrors() {
      const errors = [];
      if (this.$v.email.$dirty) {
        if (!this.$v.email.required) errors.push("Email is required.");
      }
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (this.$v.password.$dirty) {
        if (!this.$v.password.required) errors.push("Password is required.");
      }
      return errors;
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.$v.$touch();
      let data = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.$router.push("dashboard");
        });
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 350px;
}
</style>
