<template>
  <div class="signup">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Business Name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          required
          v-model="user.businessName"
          type="text"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="First Name" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          v-model="user.firstName"
          type="text"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Last Name" label-for="input-3">
        <b-form-input
          id="input-3"
          required
          v-model="user.lastName"
          type="text"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Email Address"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          required
          v-model="user.email"
          type="email"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Password" label-for="input-5">
        <b-form-input
          id="input-5"
          required
          v-model="user.password"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="PasswordCheck"
        label-for="input-6"
      >
        <b-form-input
          id="input-6"
          required
          v-model="user.passwordCheck"
          type="password"
        ></b-form-input>
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

export default {
  name: "Login",
  data() {
    return {
      user: {
        businessName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.user));
      /* let user = Object.assign({}, this.user); */
      this.resetUser();
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    resetUser() {
      this.user.businessName = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.email = "";
      this.user.password = "";
      this.user.passwordCheck = "";
    },
  },
};
</script>

<style scoped>
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
