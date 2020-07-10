<template>
  <div class="besinessReviewerSignUp main-container">
    <div class="box-area">
      <LoginSignUpButtons
        title="Signing"
        businessLink="business-signup"
        reviewerLink="reviewer-signup"
      ></LoginSignUpButtons>
    </div>
  </div>
</template>

<script>
import LoginSignUpButtons from "./LoginSignUpButtons.vue";

export default {
  name: "BesinessReviewerSignUp",
  components: {
    LoginSignUpButtons,
  },
};
</script>

<style>
.besinessReviewerSignUp {
  padding: 8vw 5vw;
  font-family: "Playfair Display", serif;
  background-color: #eff0f0;
}
.besinessReviewerSignUp .loginSignUpButtons {
  align-items: center;
}
.box-area {
  padding: 100px;
  width: 50%;
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
</style>
