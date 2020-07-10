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
  padding: 8vw 5vw;
  font-family: "Playfair Display", serif;
  background-color: #eff0f0;
}
.besinessReviewerLogin .loginSignUpButtons {
  align-items: center;
}

.box-area {
  padding: 50px 16px;
  width: 100%;
  margin: auto;
    text-align:center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 640px) {
  .box-area {
    padding:50px 25px;
    width: 60%;
  }
  .loginSignUpButtons-container h1 {
    font-size: 3vw;
    }
}
@media screen and (min-width: 999px) {
  .box-area {
      padding: 50px;
    width: 65%;
  }
      .loginSignUpButtons-container h1 {
    font-size: 2.5vw;
    }
}
@media screen and (min-width: 1350px) {
  .box-area {
      padding: 100px;
    width: 50%;
  }
    .loginSignUpButtons-container h1 {
    font-size: 2vw;
    }
}
</style>
