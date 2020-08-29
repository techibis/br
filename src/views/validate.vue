<template>
  <div class="form container">
    <div class="form-header">
      <span>Your account has been activated successfully.</span>
      <span>Please log in to add your business</span>
      <hr style="margin-bottom:40px" />
      <Login />
    </div>
  </div>
</template>

<script>
import validateAccountMutation from "../query/validate.js";

import Vue from "vue";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import Login from "../components/Login.vue";

export default {
  name: "Validate",
  components: {
    Login,
  },

  data() {
    return {
      active: 1,
      loginid: null,
    };
  },

  created() {
    this.loginid = this.$route.params.loginid;
    this.validate();
  },

  methods: {
    validate() {
      this.$apollo.mutate({
        // Query
        mutation: validateAccountMutation,
        variables: {
          loginid: this.loginid,
          active: this.active,
        },

        update: (cache, { data: { validateAccount } }) => {
          console.log(validateAccount);
        },
      });
    },
  },
};
</script>

<style>
/* Form Design On App Component */
span {
  color: green;
  display: block;
  font-size: 18px;
}
</style>
