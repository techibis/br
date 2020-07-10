<template>
  <div class="branding-container main-container">
    <h1 class="header">BusinessRate Branding Guidelines</h1>
    <hr />

    <div class="brand">
      <div class="brand-logo">
        <h1>Logo</h1>
        <img :src="`${url}`" />
        <p>
          Primary Logo Download:
          <a :href="`${url}`" download="BusinessRate.png">PNG </a>
        </p>
      </div>
      <div>
        <h1>Color</h1>
        <div class="brand-color">
          <p>HEX: #F6d185</p>
          <p>RGB: (246, 209, 133)</p>
        </div>
      </div>
    </div>

    <div class="trademark">
      <h1 class="h1">Trademark / Copy</h1>
      <div>
        <div class="correct">
          <h2>Correct</h2>
          <h1>BusinessRate</h1>
        </div>
        <div class="incorrect">
          <h2>incorrect</h2>
          <h1>Businessrate</h1>
          <h1>businessrate</h1>
          <h1>Business Rate</h1>
          <h1>business rate</h1>
          <h1>business Rate</h1>
          <h1>Business rate</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import bg1 from "@/assets/logo.png";
Vue.prototype.$http = axios;
export default {
  name: "BrandingGuidelines",
  data() {
    return {
      url: bg1,
    };
  },
};
</script>

<style>
.branding-container {
  padding: 5vw;
  margin-top: -3px;
  font-family: "Playfair Display", serif;
  background-color: #eff0f0;
  text-align: center;
}

.branding-container .header {
  font-size: 7vw;
}

.branding-container h1 {
  font-size: 6vw;
}

.brand {
  padding: 5vw 0;
  text-align: left;
}

.brand h1,
.trademark .h1 {
  margin-bottom: 10vw;
}

.brand,
.brand-logo {
  margin-bottom: 10vw;
}

.brand-logo p,
.brand-logo a {
  font-size: 3vw;
}

.brand-logo a {
  text-decoration: none;
}

.brand-logo img {
  width: 100%;
}

.brand-color {
  padding: 2vw 3vw;
  background-color: #f6d185;
}

.brand-color p {
  font-size: 4vw;
  line-height: 2;
}

.trademark {
  text-align: left;
}

.trademark h2 {
  font-size: 3.5vw;
  margin-bottom: 2vw;
}

.correct h1,
.incorrect h1 {
  font-size: 4.5vw;
  margin-bottom: 3vw;
}
@media screen and (min-width: 640px) {
  .brand,
  .trademark > div {
    display: flex;
  }

  .brand > div,
  .correct,
  .incorrect {
    width: 45%;
    margin: 0 auto 0 0;
  }

  .branding-container h1 {
    font-size: 3vw;
  }
  .brand h1,
  .trademark .h1 {
    margin-bottom: 7vw;
  }
  .branding-container .header {
    margin-bottom: 20px;
  }

  .brand,
  .brand-logo {
    margin-bottom: 5vw;
  }
  .brand-logo p,
  .brand-logo a {
    font-size: 1.5vw;
  }
  .brand-color p {
    font-size: 2vw;
  }
  .trademark h2 {
    font-size: 2vw;
  }
  .correct h1,
  .incorrect h1 {
    font-size: 2.5vw;
    margin-bottom: 1.5vw;
  }
  .brand-color {
    padding: 1vw 3vw;
  }
}
@media screen and (min-width: 768px) {
  .brand h1,
  .trademark .h1 {
    margin-bottom: 5vw;
  }
  .branding-container .header {
    font-size: 4vw;
  }
}
@media screen and (min-width: 1024px) {
  .branding-container {
  padding: 5vw 8vw;
  }
  .branding-container .header {
    font-size: 3vw;
  }

  .branding-container h1 {
    font-size: 2vw;
  }
  .trademark h2 {
    font-size: 1.5vw;
  }
  .correct h1,
  .incorrect h1 {
    font-size: 1.8vw;
  }
  .brand-color p {
    font-size: 1.7vw;
  }
}

@media screen and (min-width: 1200px) {
    .branding-container {
  padding: 5vw 10vw;
  }
  .branding-container .header {
    font-size: 2vw;
  }

  .branding-container h1 {
    font-size: 1.5vw;
  }
  .trademark h2 {
    font-size: 1vw;
  }
  .correct h1,
  .incorrect h1 {
    font-size: 1.2vw;
  }
  .brand-logo p,
  .brand-logo a {
    font-size: 1vw;
  }
  .brand,
  .brand-logo {
    margin-bottom: 0vw;
  }

  .brand h1,
  .trademark .h1 {
    margin-bottom: 4vw;
  }
    .brand-color p {
    font-size: 1.2vw;
  }
}
</style>
