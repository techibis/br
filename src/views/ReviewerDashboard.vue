<template>
  <div class="dashboard">
    <h1>Welcome Reviewer</h1>
     <button @click="logout">Logout</button>
  </div>
</template>

<script>
import Vue from "vue";
import VueSession from "vue-session";
Vue.use(VueSession);
export default {
  name: "ReviewerDashboard",

    beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/rdashboard");
    }
  },

  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.dashboard{
  background:white;
  color:black;
}
</style>