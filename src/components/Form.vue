<template>
  <div :style="{ backgroundImage: `url(${bg1})` }" class="form container">
    <div :style="{ backgroundImage: `url(${bg2})` }" class="bg">
      <div class="heading">
        <h1>Search for the Best Businesses at BusinessRate</h1>
        <p>
          Find rated businesses in your local area or across the country and
          instantly view their latest ratings and reviews
        </p>
      </div>
      <div class="input-container">
        <div>
          <input
            type="text"
            v-model="location"
            placeholder="Current Location"
            class="input input1"
          />
        </div>
        <div>
          <input
            type="text"
            v-model="businessName"
            class="input input2"
            placeholder="Business name, Plumber, HVAC..."
          />
        </div>
        <div>
          <input
            type="submit"
            @click="search"
            value="Find Business"
            class="input input3"
          />
        </div>
      </div>
    </div>
    <img src="@/assets/gold-striped-background-1.jpg" class="border" />
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
      bg1,
      bg2,
    };
  },
  methods: {
    search: () => {
      alert("button clicked");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.form.container {
  padding: 15vw 0vw 0vw;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  padding: 30px;
  width: 75vw;
  border: transparent;
  color: black;
  text-align: center;
  font-size: 1.8rem;
  outline: none;
}

.input1,
.input2 {
  background-color: #ffffffc9;
  margin-bottom: 20px;
}

.input3 {
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

.input3:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.form.container img.border {
  box-shadow: 7px 15px #cecece;
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  .input3 {
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

  .input3:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
}

@media screen and (min-width: 640px) {
  .form.container {
    padding: 10vw 0vw 0vw;
  }

  .input-container {
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

  .input {
    width: 30vw;
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

  .input-container {
    width: 90%;
    margin: auto;
  }
  .input {
    width: 28vw;
  }
}

@media screen and (min-width: 1200px) {
  .input-container {
    width: 75%;
    margin: auto;
  }

  .input {
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
}
</style>
