<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: #191919;
    font-family: "Playfair Display", serif;
}

html {
  font-size: 10px;
}

#app {
  display: flex;
  flex-direction: column;
}

.main-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.img-border {
  height: 20px;
  margin-bottom: -3px;
  width: 100%;
}

@media screen and (min-width: 640px) {
  .main-container {
    padding: 0 10rem;
  }

  .img-border {
    height: 25px;
  }
}

/* "ReviewerLogin / ReviewerSignUp / BusinessLogin / BusinessSignUp / Suggest a Business / Add Business " Free Form Design */

.form.container {
  padding: 10vw 5vw;
  font-family: "Playfair Display", serif;
  margin: 5vw auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 96vw;
}

.form-header {
  text-align: center;
}
.form-header h1 {
  font-size: 7vw;
}
.form-header h2 {
  font-size: 4.5vw;
  margin: 3vw auto 2vw;
}
.form-header p {
  font-size: 3.5vw;
  margin-bottom: 10vw;
}

.form-header a {
  text-decoration: none;
}

@media screen and (min-width: 640px) {
  .form.container {
    padding: 10vw;
    width: 85vw;
    margin: 10vw auto;
  }
  .form-header h1 {
    font-size: 4vw;
  }
  .form-header h2 {
    font-size: 2.8vw;
    margin: 2vw auto;
  }
  .form-header p {
    font-size: 2.5vw;
    margin-bottom: 6vw;
  }
}

@media screen and (min-width: 999px) {
  .form.container {
    padding: 10vw;
    width: 75vw;
  }
  .form-header h1 {
    font-size: 3vw;
  }
  .form-header h2 {
    font-size: 1.9vw;
    margin: 1vw auto;
  }
  .form-header p {
    font-size: 1.6vw;
    margin-bottom: 4vw;
  }
}

@media screen and (min-width: 1200px) {
  .form.container {
    padding: 5vw 3.4vw;
    width: 50vw;
    margin: 5vw auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .form-header h1 {
    font-size: 2vw;
  }
  .form-header h2 {
    font-size: 1.2vw;
    margin: 1vw auto;
  }
  .form-header p {
    font-size: 1vw;
    margin-bottom: 2vw;
  }
}

</style>
