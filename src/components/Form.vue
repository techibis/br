<template>
  <div :style="{ backgroundImage: `url(${bg1})` }" class="form main-container">
    <div :style="{ backgroundImage: `url(${bg2})` }" class="bg">
      <div class="heading">
        <h1>Search for the Best Businesses at BusinessRate</h1>
        <p>
          Find rated businesses in your local area or across the country and
          instantly view their latest ratings and reviews
        </p>
      </div>
      <form @submit="onSubmit">
        <div class="input-container">
          <div>
            <input
              type="text"
              v-model="location"
              onfocus="this.placeholder = ''"
              placeholder="Current Location"
              class="input input1"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="businessName"
              onfocus="this.placeholder = ''"
              placeholder="Business Name"
              class="input input2"
            />
          </div>
          <div>
            <input
              type="text"
              onfocus="this.placeholder = ''"
              v-model="category"
              class="input input3"
              placeholder="Category: Plumber, HVAC..."
            />
          </div>
          <div>
            <input type="submit" value="Find Business" class="input input4" />
          </div>
        </div>
      </form>
    </div>

    <img src="@/assets/gold-striped-background-1.jpg" class="img-border" />
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
import bg2 from "@/assets/phoenix-city-25.png";
export default {
  name: "Form",
  data() {
    return {
      location: "",
      businessName: "",
      category: "",
      bg1,
      bg2,
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$router.push(
        "/companys?location=" +
          this.location +
          "&company=" +
          this.businessName +
          "&category=" +
          this.category +
          ""
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.data {
  color: white;
  font-size: 20px;
}

.form.main-container {
  padding: 15vw 0vw 0vw;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: "Playfair Display", serif;
}

.bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
}

.heading {
  padding: 0vw 2vw;
}

.heading h1 {
  font-size: 7vw;
  margin-bottom: 4vw;
}
.heading p {
  font-size: 5vw;
  margin: auto auto 8vw;
}

.input-container {
  padding: 0 0 15vw;
}

.input {
  border-radius: 40px;
  padding: 20px;
  width: 75vw;
  border: transparent;
  color: black;
  text-align: center;
  font-size: 1.8rem;
  outline: none;
}

.input1,
.input2,
.input3 {
  background-color: #ffffffc9;
  margin-bottom: 20px;
}

.input4 {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.input4:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.form.main-container img.img-border {
  box-shadow: 7px 12px #cecece;
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  .input4 {
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
  }

  .input4:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
}

@media screen and (min-width: 640px) {
  .form.main-container {
    padding: 10vw 0vw 0vw;
  }

  .Noinput-container {
    display: flex;
    justify-content: space-around;
    padding: 0 0 5vw;
  }

  .bg {
    background-position: 0px 71px;
  }

  .heading {
    padding: 0 4vw;
  }

  .heading h1 {
    font-size: 4vw;
    margin-bottom: 3vw;
  }

  .heading p {
    font-size: 2.5vw;
    margin-bottom: 5vw;
  }

  .NOinput {
    width: 30vw;
    padding: 30px;
  }
}

@media screen and (min-width: 768px) {
  .bg {
    background-position: 0px 117px;
  }

  .heading p {
    width: 75%;
  }
}

@media screen and (min-width: 1024px) {
  .bg {
    background-position: 0px 130px;
  }

  .NOinput-container {
    width: 90%;
    margin: auto;
  }
  .NOinput {
    width: 28vw;
  }
}

@media screen and (min-width: 1200px) {
  .Noinput-container {
    width: 75%;
    margin: auto;
  }
  .input-container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 5vw;
  }

  .input {
    width: 22vw;
    margin: 0 10px;
  }
  .NOinput {
    width: 22vw;
  }
  .heading h1 {
    font-size: 3vw;
    margin-bottom: 3vw;
  }

  .heading p {
    font-size: 2vw;
    margin-bottom: 3vw;
  }
  .form.main-container img.img-border {
    box-shadow: 7px 15px #cecece;
  }
}
</style>
