<template>
  <div class="besinessReviewerLogin mai.-container">
    <div class="box-area">
        <LoginSignUpButtons
        title="Signing"
        businessLink="business-login"
        reviewerLink="reviewer-login"
        ></LoginSignUpButtons>
    </div>
  </div>
</template>

<script>
import LoginSignUpButtons from "./LoginSignUpButtons.vue";

export default {
  name: "BesinessReviewerLogin",
  components: {
    LoginSignUpButtons,
  },
};
</script>

<style>
.besinessReviewerLogin {
  padding:8vw 5vw;
  font-family: "Playfair Display", serif;
  background-color: #eff0f0;
}
.besinessReviewerLogin .loginSignUpButtons {
  align-items: center;
}
.box-area{
  padding: 100px;
  width:50%;
  margin:auto;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
</style>