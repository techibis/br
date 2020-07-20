<template>
  <div class="form container">
    <div class="form-header">
      <h1>Sign Up</h1>
       <hr style="margin-bottom:40px">
      <SignUp source="R"/>
    </div>
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";

export default {
  name: "ReviewerLogin",
  components: {
    SignUp,
  },
};
</script>

<style>
/* Form Design On App Component */

</style>