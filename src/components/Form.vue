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
      <form>
        <div class="input-container" id="input">
          <div id="form">
            <div id="autocomplete" class="autocomplete-container location-input"></div>
          </div>
          <div>
            <v-select
              v-model="com"
              :options="allApprovedCompanys"
              :placeholder="placeholder"
              :disabled="disabled ===1"
            ></v-select>
          </div>
          <div>
            <v-select
              v-model="cat"
              :options="allCategories"
              placeholder="Category: Plumber, Electrician..."
            ></v-select>
          </div>
          <div>
            <input type="submit" value="Find Business" class="input input1" />
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
import getAllCategoriesQuery from "../query/allCategories.js";
import getAllApprovedCompanysQuery from "../query/getAllApprovedCompanys.js";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

import Vue from "vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

import "vue-select/dist/vue-select.css";

export default {
  name: "Form",
  data() {
    return {
      lan: "",
      lot: "",
      category: "",
      cat: "",
      com: "",
      company: "",
      cid: "",
      bg1,
      bg2,
      autocomplete: null,
      placeholder: "Please enable / select location",
      location: null,
      gettingLocation: false,
      errorStr: null,
      disabled: 1,
    };
  },

  created() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        console.log(pos);
        // enable company select if location available
        if (this.lat !== undefined) {
          this.refetchQuery();
        }
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },

  mounted() {
    this.autocomplete = new GeocoderAutocomplete(
      document.getElementById("autocomplete"),
      "e5b3d7c8eec94a7dba4652546a1b3b23",
      {
        /* Geocoder options */
      }
    );
    document.getElementsByClassName(
      "geoapify-autocomplete-input"
    )[0].placeholder = "Current Location ";

    this.autocomplete.on("select", (location) => {
      if (location) {
        this.lat = location.properties.lat;
        this.lon = location.properties.lon;
      }

      // enable company select if location available
      if (this.lat !== undefined) {
        this.refetchQuery();
      }
      // if category is not undefined look for businesses by category name

      this.category = this.cat.label;
      if (this.category !== undefined) {
        this.categorySelected();
      }
    });
  },

  updated() {
    this.category = this.cat.label;
    this.company = this.com.name;
    this.cid = this.com.value;

    // if location is not undefined
    if (this.lat !== undefined && this.category !== undefined) {
      // if category is not undefined look for businesses by category name
      this.categorySelected();
    }

    // if company is not undefined look for business by company name
    if (this.company !== undefined) {
      this.companySelected();
    }
  },

  methods: {
    refetchQuery() {
      this.placeholder = "Business Name";
      this.disabled = 0;
      this.$apollo.queries.allApprovedCompanys.skip = false;
      this.$apollo.queries.allApprovedCompanys.refetch();
    },
    categorySelected() {
      this.$router.push(
        "/companys/" +
          this.category +
          "?lat=" +
          this.lat +
          "&lon=" +
          this.lon +
          ""
      );
    },

    companySelected() {
      this.$router.push("/companys/" + this.company + "/" + this.cid + "");
    },
  },

  apollo: {
    allCategories: {
      query: getAllCategoriesQuery,
    },

    allApprovedCompanys: {
      query: getAllApprovedCompanysQuery,
      variables() {
        return {
          lat: parseFloat(this.lat),
          lon: parseFloat(this.lon),
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "~@geoapify/geocoder-autocomplete/styles/minimal.css";

/* autocomplete-container */

/* find some form input css for background color in App.vue */

.autocomplete-container {
  position: relative;
}

.geoapify-close-button {
  position: absolute;
  right: 20px;
}

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

.input1,
.v-select {
  border-radius: 40px;
  padding: 20px;
  width: 75vw;
  color: #cecece;
  border: transparent;
  text-align: center;
  font-size: 1.8rem;
  outline: none;
}

.v-select {
  padding: 18px 20px;
}

/* location input design on App.vue */

.v-select {
  background-color: #ffffffc9;
  margin: 20px auto;
}

.input1 {
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

.input1:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.form.main-container img.img-border {
  box-shadow: 7px 12px #cecece;
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  .input1 {
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

  .input1:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
}

@media screen and (min-width: 640px) {
  .form.main-container {
    padding: 10vw 0vw 0vw;
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
}

@media screen and (min-width: 768px) {
  .bg {
    background-position: 0px 117px;
  }

  .heading p {
    width: 75%;
  }
}

@media screen and (min-width: 999px) {
  .input-container {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 5vw;
  }

  .input1,
  .v-select{
    width: 22vw;
    margin: 0 10px;
  }
}

@media screen and (min-width: 1024px) {
  .bg {
    background-position: 0px 130px;
  }
}

@media screen and (min-width: 1200px) {
  .geoapify-autocomplete-input {
    width: 100vw !important;
    margin: 0;
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
