<template>
  <div class="map-wrapper">
    <div class="map-container" :style="{ backgroundImage: `url(${bg1})` }">
      <div class="map">
        <img src="@/assets/map-transparent.png" />
      </div>
      <div class="map-text">
        <h1>
          Our Comprehensive Research and Evaluations Allow us to Rate each
          Business to Help You Save Time Finding the Very Best
        </h1>
      </div>
    </div>
    <img src="@/assets/gold-striped-background-1.jpg" class="map border" />
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
export default {
  name: "Map",
  data() {
    return {
      bg1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.map-container {
  padding: 20vw 5vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.map-text {
  align-self: center;
  width: 90%;
}

.map-text h1 {
  color: #fbf5db;
  font-size: 5vw;
}

.map img {
  width: 100%;
  margin-left: -7%;
  margin-bottom: 10vw;
}

.map.border {
  box-shadow: 7px 15px #cecece;
  position:absolute;
}

@media screen and (min-width: 640px) {
  .map-container {
      padding: 10vw 5vw;
    flex-direction: row;
    justify-content: space-between;
  }
  .map img {
    width: 45vw;
    margin-bottom: 0vw;
  }
  .map-text h1 {
    font-size: 3vw;
  }
  .map-text {
    align-self: center;
    width: 48%;
  }
}


@media screen and (min-width: 1200px) {
    .map-text h1 {
    font-size: 2.5vw;
  }
}
</style>
