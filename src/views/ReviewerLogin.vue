<template>
  <div class="form container">
    <div class="form-header">
      <h1>Login</h1>
       <hr style="margin-bottom:40px">
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "ReviewerLogin",
  components: {
    Login,
  },
};
</script>

<style>
/* Form Design On App Component */

</style>