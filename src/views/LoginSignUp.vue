<template>
  <div class="loginSignUp-wrapper">
    <div class="signUp">
      <LoginSignUpButtons
        title="Registering"
        businessLink="business-signup"
        reviewerLink="reviewer-signup"
      ></LoginSignUpButtons>
    </div>
    <div class="vl"></div>
    <div class="login">
      <LoginSignUpButtons
        title="Signing"
        businessLink="business-login"
        reviewerLink="reviewer-login"
      ></LoginSignUpButtons>
    </div>
  </div>
</template>

<script>
import LoginSignUpButtons from "../components/LoginSignUpButtons.vue";
export default {
  name: "LoginSignUp",
  components: {
    LoginSignUpButtons,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.loginSignUp-wrapper {
  padding: 8vw 5vw;
  background-color: #eff0f0;
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
}

.vl {
  display: none;
  border-left: 3px dotted #cbcbcb;
}

.signUp {
  margin: 0 0 70px;
}

.signUp,
.login {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 5vw 3vw;
    border-radius: 5px;
}

@media screen and (min-width: 768px) {
  .loginSignUp-wrapper {
    padding: 8vw 4vw;
    flex-direction: row;
    justify-content: space-around;
  }
  .vl {
    display: block;
  }
  .signUp,
  .login {
    margin: 0;
  }
}


@media screen and (min-width: 1024px) {
  .signUp,
  .login {
    padding: 3.4vw;
  }
}

@media screen and (min-width: 1200px) {
  .loginSignUp-wrapper {
    padding: 8vw 11.5vw;
  }
  .signUp,
  .login {
    padding:5vw 3.4vw;
  }
}
</style>
