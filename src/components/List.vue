<template>
  <div>
    <div class="list-container" :style="{ backgroundImage: `url(${bg1})` }">
      <div class="list-text">
        <h1>
          List Your Business
        </h1>
        <p>
          Achieve Your BusinessRate Status
        </p>
        <p>
          Gain Entry to our Premiere Directory
        </p>
        <a href="/login" class="signUpButton">Sign Up Now</a>
      </div>
      <div class="list-img">
        <img src="@/assets/storefront-window.png" />
      </div>
    </div>
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
export default {
  name: "List",
  data() {
    return {
      bg1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.list-container {
  padding: 20vw 5vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.list-text {
  align-self: center;
  width: 95%;
  margin:auto auto 10vw;
}

.list-text h1 {
  color: #fbf5db;
  font-size: 6vw;
  margin-bottom: 25px;
}

.list-text p {
  color: #ffffff;
  font-size: 5vw;
  line-height: 1.6;
}

.list-img img {
  width: 100%;
}

.signUpButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 20px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 30px;
}
.signUpButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.signUpButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  .list-container {
    padding: 10vw 8vw;
    flex-direction: row;
    justify-content: space-between;
  }

  .list-text h1 {
    font-size: 3.5vw;
  }

  .list-text p {
    color: #ffffff;
    font-size: 2.5vw;
  }

  .list-text {
    align-self: center;
    width: 55%;
    margin: auto;
  }

  .list-img {
    width: 40%;
  }

  .signUpButton {
    font-size: 24px;
  }
}

@media screen and (min-width: 1200px) {
    .list-container {
    padding: 5vw 8vw;
    }


  .list-text h1 {
    font-size: 3vw;
  }

}
</style>
