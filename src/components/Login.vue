<template>
  <div class="login">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email Address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          required
          v-model="user.email"
          type="email"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          v-model="user.password"
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
  props: ["person"],
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      show:true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.user));
      this.resetUser();
        this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    resetUser() {
      this.user.email = "";
      this.user.password = "";
    },
  },
};
</script>

<style scoped>
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
