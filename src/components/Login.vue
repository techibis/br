<template>
  <div class="login">
    <b-form @submit.prevent="onSubmit">
      <p class="red" v-if="show">Email or Password wrong!</p>
      <p
        class="red"
        v-if="inactive"
      >Your account has not been verified yet. Please check your email and click on the verification link to verify your account</p>
      <b-form-group id="input-group-1" label="Email Address" label-for="input-1">
        <b-form-input id="input-1" required v-model="email" type="email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input id="input-2" required v-model="password" type="password"></b-form-input>
      </b-form-group>
      <b-button type="submit" class="submitButton">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

var md5 = require("md5");

import getUserQuery from "../query/login.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      user: null,
      show: false,
      inactive: false,
    };
  },
  apollo: {
    user: {
      query: getUserQuery,
      variables() {
        return {
          email: this.email.replace(/[^A-Z0-9,./?:@&$#!()_-]/gi, " "),
          password: md5(this.password),
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },

  beforeCreate() {
    // checking if session exist
    if (this.$session.exists()) {
      if (this.$session.get("type") === "A") this.$router.push("/vue-admin");
      if (this.$session.get("type") === "B") this.$router.push("/bdashboard");
      if (this.$session.get("type") === "R") this.$router.push("/rdashboard");
    }
  },

  methods: {
    async onSubmit() {
      this.$apollo.queries.user.skip = false;
      await this.$apollo.queries.user.refetch();
      this.login();
    },

    login() {
      if (this.user) {
        this.$session.set("loginid", this.user.loginid);
        this.$session.set("email", this.user.email);
        this.$session.set("type", this.user.type);
        this.$session.set("fname", this.user.fname);
        this.$session.set("lname", this.user.lname);

        if (this.user.email == this.email && this.user.type == "A") {
          this.$router.push("/vue-admin");
        }
        if (this.user.email == this.email && this.user.type == "B") {
          if (this.user.active == 1) {
            this.$router.push("/bdashboard");
          } else {
            this.show = false;
            this.inactive = true;
            this.resetUser();
          }
        }
        if (this.user.email == this.email && this.user.type == "R") {
          this.$router.push("/rdashboard");
        }
      } else {
         this.inactive = false;
        this.show = true;
        this.resetUser();
      }
    },
    resetUser() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
  font-style: italic;
  font-size: 12px;
}
.login {
  text-align: left;
  font-size: 4vw;
  font-weight: bold;
}

.form-group input {
  height: 10vw;
  padding: 2px 10px;
  border: 1px solid #f6d185;
  font-size: 3.5vw;
}

.submitButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 10px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 30px;
}

.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.submitButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  .login {
    font-size: 2.2vw;
  }
  .form-group input {
    height: 6vw;
    font-size: 2vw;
  }

  .form-group {
    margin-bottom: 2rem;
  }
  .submitButton {
    padding: 6px 60px;
  }
}

@media screen and (min-width: 999px) {
  .login {
    font-size: 1.8vw;
  }
  .form-group input {
    height: 4vw;
    font-size: 1.5vw;
  }
}

@media screen and (min-width: 1200px) {
  .login {
    font-size: 1vw;
  }
  .form-group input {
    height: 2.5vw;
    font-size: 0.8vw;
  }
}
</style>
