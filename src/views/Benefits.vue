<template>
  <div class="benefits-wrapper">
    <div class="benefits-container">
      <div class="benefits-img">
        <img src="@/assets/join.png" />
      </div>
      <div class="benefits-text">
        <div class="header">
          <h1>Benefits of Listing Your Business</h1>
          <p>
            Create your free business listing and manage your reviews and online
            reputation.
          </p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>Get a copy of each review on our site via email</p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>
            Build customer relationship by having the ability to reply to
            reviews
          </p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>
            Add credibility to your business website by adding a link to your
            website for Google Ranking.
          </p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>Your BusinessRate score will update more often</p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>Raise your BusinessRate score with each review on our site.</p>
        </div>
        <div class="points">
          <GoldCheck />
          <p>
            Run a BusinessRate badge on your website to link to your business
            reviews.
          </p>
        </div>
      </div>
    </div>
    <div class="build">
      <h1>What are you waiting for?</h1>
      <a href="/"
        ><button class="buildButton">Build your free listing</button></a
      >
    </div>
  </div>
</template>

<script>
import GoldCheck from "../components/GoldCheck.vue";
export default {
  name: "Benefits",
  components: {
    GoldCheck,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.benefits-wrapper {
  padding: 8vw 5vw;
  background-color: #eff0f0;
  font-family: "Playfair Display", serif;
}

.benefits-container {
  display: flex;
  flex-direction: column-reverse;
  background-size: cover;
  margin-bottom: 80px;
}

.benefits-text .header {
  margin-bottom: 40px;
}

.benefits-text h1 {
  font-size: 6vw;
}
.header p {
  font-size: 4vw;
  color: #545454;
}

.points {
  display: flex;
  margin-bottom: 10px;
}

.points p {
  font-size: 3.5vw;
}

.benefits-text {
  margin-bottom: 50px;
}

.benefits-img img {
  width: 80%;
}
.build {
  width: 80vw;
  background-color: #cfcfcf;
  margin: auto;
  padding: 5vw 4vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.build h1 {
  font-size: 6vw;
}

.buildButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 20px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 20px;
}

.buildButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.buildButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  .benefits-text h1 {
    font-size: 4.5vw;
  }
  .header p {
    font-size: 3vw;
  }

  .points p {
    font-size: 2.5vw;
  }
  .build {
    flex-direction: row;
    justify-content: space-between;
  }

  .build h1 {
    font-size: 3.5vw;
  }
  .buildButton {
    margin-top: 0px;
  }
}

@media screen and (min-width: 769px) {
  .benefits-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .benefits-text h1 {
    font-size: 2.8vw;
  }

  .benefits-text,
  .benefits-img {
    width: 48%;
  }
  .benefits-img {
    margin: auto auto auto 0;
  }

  .benefits-text {
    margin-bottom: 0px;
  }
  .header p {
    font-size: 2vw;
  }

  .points p {
    font-size: 1.5vw;
  }
}

@media screen and (min-width: 1024px) {
  .build {
    width: 60vw;
  }
  .build h1 {
    font-size: 2.5vw;
  }
}
@media screen and (min-width: 1200px) {
  .header p {
    font-size: 1.3vw;
  }

  .benefits-img img {
    width: 65%;
  }

  .points p {
    font-size: 1.2vw;
  }
  .build {
    width: 50vw;
    padding: 3vw 4vw;
  }
  .build h1 {
    font-size: 2vw;
  }
}

@media screen and (min-width: 1399px) {
  .benefits-wrapper {
    padding: 8vw;
  }

  .benefits-text,
  .benefits-img {
    width: 50%;
  }
  .points p {
    font-size: 1vw;
    line-height:1.7;
  }

  .build {
    width: 35vw;
    padding: 2vw;
  }
  .build h1 {
    font-size: 1.5vw;
  }
}
</style>
