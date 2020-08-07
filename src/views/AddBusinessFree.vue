<template>
  <div class="form container">
    <div class="form-header">
      <h1>Add Business Free</h1>
      <div v-if="login">
        <h2>
          <a href="/business-signup">Sign Up</a> or
          <a href="/business-login">Login</a> first to Add or
          Track your business!
        </h2>
        <p>
          If you are not a business owner please
          <a
            href="/suggest-a-business"
          >click here instead to suggest a business</a>
        </p>
      </div>
      <div v-if="form">
        <AddBusiness source="0"></AddBusiness>
      </div>
    </div>
  </div>
</template>

<script>
import AddBusiness from "../components/AddBusiness.vue";

export default {
  name: "AddBusinessFree",
  data() {
    return {
      form: false,
      login: false,
    };
  },
  components: {
    AddBusiness,
  },

  created() {
    if (this.$session.exists() && this.$session.get("type") === "B") {
      this.form = true;
      this.login = false;
    } else {
      this.form = false;
      this.login = true;
    }
  },
};
</script>

<style>
/* Form Design On App Component */

h1{
  margin-bottom: 20px;
}

.geoapify-autocomplete-input{
  border: 1px solid #f6d185;
  width: 100%;
}
</style>