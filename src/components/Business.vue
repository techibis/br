<template>
  <div class="business container">
    <h1>It is Fast and Easy to Find Best Rated Businesses in Your Area.</h1>
    <div class="businesses">
      <div class="restaurant">
        <div>
          <img src="@/assets/restaurant.png" />
        </div>
        <div>
          <p>Restaurant</p>
        </div>
      </div>
      <div class="handyman">
        <div>
          <img src="@/assets/handyman.png" />
        </div>
        <div>
          <p>Handyman</p>
        </div>
      </div>
      <div class="plumber">
        <div>
          <img src="@/assets/plumber.png" />
        </div>
        <div>
          <p>Plumber</p>
        </div>
      </div>
      <div class="electrician">
        <div>
          <img src="@/assets/electrician.png" />
        </div>
        <div>
          <p>Electrician</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.business.container {
  background-color: white;
  padding: 20vw 5vw 5vw;
}

.business h1 {
  color: #6f6f6f;
  font-size: 6vw;
  margin-bottom: 10vw;
}

.businesses {
  width: 80%;
  margin: auto;
}

.restaurant > div:first-child,
.handyman div:first-child,
.plumber div:first-child,
.electrician div:first-child {
  height: 75%;
}

.restaurant,
.handyman,
.plumber,
.electrician {
  margin-bottom: 15vw;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.restaurant p,
.handyman p,
.plumber p,
.electrician p {
  color: #8a8585;
  font-size: 5vw;
  margin: 20px 0 0;
}


  .restaurant img,
  .handyman img,
  .plumber img,
  .electrician img {
    height: 100%;
  }


@media screen and (min-width: 640px) {
  .businesses {
    display: flex;
    justify-content: space-between;
  }

  .business.container {
    padding: 10vw 5vw;
  }

  .business h1 {
    font-size: 3.2vw;
    margin-bottom: 5vw;
  }

  .businesses {
    width: 90%;
  }

  .restaurant,
  .handyman,
  .plumber,
  .electrician {
    margin-bottom: 0vw;
  }
  .restaurant p,
  .handyman p,
  .plumber p,
  .electrician p {
    font-size: 2.5vw;
  }

  .restaurant img,
  .handyman img,
  .plumber img,
  .electrician img {
    width: 80%;
  }
}

@media screen and (min-width: 1200px) {
  .restaurant img,
  .handyman img,
  .plumber img,
  .electrician img {
    width: 100%;
  }

  .restaurant p,
  .handyman p,
  .plumber p,
  .electrician p {
    margin: 40px 0 0;
    font-size: 2vw;
  }

  .business.container {
    padding: 8vw;
  }
  .business h1 {
    font-size: 2.5vw;
  }
}
</style>
