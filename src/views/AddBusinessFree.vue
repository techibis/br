<template>
  <div class="form container">
    <div class="form-header">
      <h1>Add Business Free</h1>
      <h2>
        If you are not a business owner please
        <a href="/suggest-a-business"
          >click here instead to suggest a business</a
        >
      </h2>
      <p>
        <a href="/business-signup">Sign Up</a> or <a href="/business-login">Login </a> first to
        track your suggested business
      </p>
      <AddBusiness source="Business Owner"></AddBusiness>
    </div>
  </div>
</template>

<script>
import AddBusiness from '../components/AddBusiness.vue';

export default {
  name: "AddBusinessFree",
  components: { 
    AddBusiness
   },
};
</script>

<style>
/* Form Design On App Component */
</style>