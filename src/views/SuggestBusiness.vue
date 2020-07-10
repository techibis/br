<template>
  <div class="form container">
    <div class="form-header">
      <h1>Suggest A Business</h1>
      <h2>
        If you are a business owner please
        <a href="/add-business-free"
          >click here instead to list your business for free</a
        >
      </h2>
      <p>
        <a href="/reviewer-signup">Sign Up</a> or
        <a href="/reviewer-login">Login </a> first to track your suggested
        business
      </p>
      <AddBusiness source="Suggetion"></AddBusiness>
    </div>
  </div>
</template>

<script>
import AddBusiness from "../components/AddBusiness.vue";

export default {
  name: "SuggestBusiness",
  components: {
    AddBusiness,
  },
};
</script>

<style>
/* Form Design On App Component */
</style>
