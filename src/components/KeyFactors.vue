<template>
  <div class="ratings main-container">
    <h1>How Your Favorite Business Earned its Rank</h1>
    <p>All BusinessRate Ratings are Based on 3 Key Factors:</p>
    <img src="@/assets/ratings.jpg" class="ratings-img" />
  </div>
</template>

<script>
export default {
  name: "KeyFactors",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.ratings.main-container {
  background-color: white;
    font-family: "Playfair Display", serif;
  padding: 25vw 5vw 20vw;
}

.ratings h1 {
  color: #6f6f6f;
  font-size: 4.5vw;
}

.ratings p {
  color: #808080;
  font-size: 3.8vw;
  margin-top: 5px;
}

.ratings-img {
  width: 100%;
  margin-top: 5vw;
}

@media screen and (min-width: 640px) {
  .ratings.main-container {
    padding: 10vw;
  }
  .ratings h1 {
    font-size: 3.5vw;
  }

  .ratings p {
    font-size: 3vw;
  }
}

@media screen and (min-width: 1200px) {

   .ratings.main-container {
    padding: 6vw;
  }

  .ratings h1 {
    font-size: 2.5vw;
  }

  .ratings p {
    font-size: 2vw;
  }

  .ratings-img {
  margin-top: 3vw;
}
}


</style>
