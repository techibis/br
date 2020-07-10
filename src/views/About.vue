<template>
  <div class="about-container">
    <div class="about">
      <h1>About Us</h1>
      <p>
        At BusinessRate we are your partners in building your online reputation.
        We help you stay on top of your business reviews to not only build a close
        relationship with your customers, but to help you identify which issues to
        address to allow for your business’ continued success.
      </p>
      <p>
        Manage your company profile and the list of services that you offer. Stand
        out from your competitors with a compelling company description. Upload
        your logo for brand recognition. List your phone number and hours of
        operations to help your customers reach you.
      </p>
      <p>
        Premium services help take your business to the next level with premium
        listings higher on the page results each time a user searches for similar
        businesses in your area. We want to help your potential customers find
        your business, and become long lasting customers. Sign up to list your
        business today.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.about {
  padding: 10vw 8vw;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("../assets/phoenix-city-25.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
    font-family: "Playfair Display", serif;
}

.about-container {
  background-image: url("../assets/radial-gradient.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about h1 {
  color: white;
  font-size: 7vw;
  margin-bottom: 5vw;
  text-align: center;
}

.about p {
  color: white;
  font-size: 4.5vw;
  margin-bottom: 5vw;
  text-align: left;
}

@media screen and (min-width: 640px) {

.about h1 {
  font-size: 5vw;
}

.about p {
  font-size: 2.5vw;
  margin-bottom: 3vw;
}
}
@media screen and (min-width: 1024px) {
  .about {
    padding: 8vw;
  }

.about h1 {
  font-size: 3.5vw;
}

.about p {
  font-size: 2vw;
  margin-bottom: 3vw;
}
}

@media screen and (min-width: 1200px) {
  .about {
  padding: 8vw 12vw;
  }
.about h1 {
  font-size: 3vw;
}

.about p {
  font-size: 1.5vw;
  margin-bottom: 2vw;
}
}

</style>
