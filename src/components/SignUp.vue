<template>
  <div class="signup">
    <b-form @submit.prevent="onSubmit">
      <p v-if="success" class="red">
        You have successfully creates an account. Please log in.
      </p>
      <p v-if="exist" class="red">
        An account already exist with this email.
      </p>
      <p v-if="show" class="red">
        Password doesn't match
      </p>
      <div class="row">
        <div class="form-group col-md-6">
          <b-form-group
            id="input-group-1"
            label="First Name"
            label-for="input-1"
          >
            <b-form-input id="input-1" required v-model="fname" type="text">
            </b-form-input>
          </b-form-group>
        </div>
        <div class="form-group col-md-6">
          <b-form-group
            id="input-group-2"
            label="Last Name"
            label-for="input-2"
          >
            <b-form-input id="input-2" required v-model="lname" type="text">
            </b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-form-group
        id="input-group-3"
        label="Email Address"
        label-for="input-3"
      >
        <b-form-input id="input-3" required v-model="email" type="email">
        </b-form-input>
      </b-form-group>
      <div class="row">
        <div class="form-group col-md-6">
          <b-form-group id="input-group-4" label="Password" label-for="input-4">
            <b-form-input
              id="input-4"
              required
              v-model="password"
              type="password"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="form-group col-md-6">
          <b-form-group
            id="input-group-5"
            label="Verify Password"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              required
              v-model="passwordCheck"
              type="password"
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-button type="submit" class="submitButton">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
var md5 = require("md5");

Vue.use(BootstrapVue);

import checkEmailQuery from "../query/checkEmail.js";
import addUserMutation from "../query/addUser.js";

export default {
  name: "SignUp",
  props: ["source"],
  data(props) {
    return {
      email: "",
      password: "",
      type: props.source,
      fname: "",
      lname: "",
      active: 1,
      passwordCheck: "",
      show: false,
      exist: false,
      success: false,
    };
  },

  apollo: {
    checkEmail: {
      query: checkEmailQuery,
      variables() {
        return {
          email: this.email,
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },

  methods: {
    async onSubmit() {
      this.$apollo.queries.checkEmail.skip = false;
      await this.$apollo.queries.checkEmail.refetch();

      if (this.checkEmail === null) {
        this.signup();
      } else {
        this.resetForm();
        this.exist = true;
      }
    },

    signup() {
      this.password = md5(this.password);
      this.passwordCheck = md5(this.passwordCheck);

      if (this.password === this.passwordCheck) {
        this.$apollo.mutate({
          mutation: addUserMutation,
          variables: {
            email: this.email,
            password: this.password,
            type: this.type,
            fname: this.fname,
            lname: this.lname,
            active: this.active,
          },
          update: (cache, { data: { addUser } }) => {
            console.log(addUser);
          },
        });
        this.resetForm();
        this.exist = false;
        this.show = false;
        this.success = true;
      } else {
        this.resetForm();
        this.exist = false;
        this.show = true;
      }
    },

    resetForm() {
      this.fname = "";
      this.lname = "";
      this.email = "";
      this.password = "";
      this.passwordCheck = "";
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

.form.container {
  padding: 3vw 6vw;
}

.form-group.col-md-6 {
  margin-bottom: 0;
}
/* Form Design On App Component */

.signup {
  text-align: left;
  font-size: 4vw;
  font-weight: bold;
}

.form-group input {
  height: 8vw;
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
  margin-top: 25px;
}

.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.submitButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  .signup {
    font-size: 2.2vw;
  }
  .form-group input {
    height: 5vw;
    font-size: 2vw;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }
  .submitButton {
    padding: 6px 60px;
  }
}

@media screen and (min-width: 999px) {
  .signup {
    font-size: 1.8vw;
  }
  .form-group input {
    height: 3.5vw;
    font-size: 1.5vw;
  }
}

@media screen and (min-width: 999px) {
  .signup {
    font-size: 1.2vw;
  }
  .form-group input {
    height: 3vw;
    font-size: 1.1vw;
  }
}

@media screen and (min-width: 1200px) {
  .signup {
    font-size: 1vw;
  }
  .form-group input {
    height: 2vw;
    font-size: 0.8vw;
  }
}
</style>
