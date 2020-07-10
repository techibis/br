<template>
  <div class="loginSignUpButtons-container">
    <h1>{{ title }} in to manage a business?</h1>
    <div class="loginSignUpButtons">
      <button class="businessButton">
        <a :href="'/' + businessLink">Yes, I'd like to manage my business</a>
      </button>
      <button class="reviewButton">
        <a :href="'/' + reviewerLink">No, I'd like to read and write reviews</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginSignUpButtons",
  props: ["title", "businessLink", "reviewerLink"],
};
</script>

<style>
.loginSignUpButtons-container h1 {
  font-size: 5vw;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
}

.loginSignUpButtons {
  display: flex;
  flex-direction: column;
}

.businessButton {
  background-color: #ffec64;
  margin-bottom: 20px;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
}

.businessButton,
.reviewButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  border-radius: 20px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.businessButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.reviewButton:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.businessButton:hover,
.reviewButton:active {
  position: relative;
}

.businessButton a,
.reviewButton a {
  text-decoration: none;
  color: #333333;
}
.businessButton a:hover,
.reviewButton a:hover {
  text-decoration: none;
}

@media screen and (min-width: 640px) {
  .loginSignUpButtons-container h1 {
    font-size: 2.5vw;
    margin-bottom: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .businessButton,
  .reviewButton {
    font-size: 16px;
    width: 32vw;
  }
}
@media screen and (min-width: 1299px) {
  .businessButton,
  .reviewButton {
    width: 25vw;
  }
  .loginSignUpButtons-container h1 {
    font-size: 2vw;
    margin-bottom: 40px;
  }
}
</style>
