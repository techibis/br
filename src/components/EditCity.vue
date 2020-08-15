<template>
<div class="city main-container">
    <div class="data">
      <p v-if="success" class="green">City and State have been updaded successfully</p>
      <p>City & State *</p>
      <div id="autocomplete" class="autocomplete-container"></div>

      <button class="submitButton" @click="submit">Update City & State</button>
    </div>
    <!-- setting value to loginid variable -->
    <p v-if="company" :set="this.loginid = company.loginid"></p>
  </div>
</template>

<script>
import updateCityMutation from "../query/updateCity.js";
import getCompanyQuery from "../query/business.js";

import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

export default {
  name: "EditCity",
  data() {
    return {
      city: "",
      lat: "",
      lon: "",
      cid: this.$route.params.cid,
      loginid:"",
      success: false,
    };
  },

    created() {
        //allowing only business owner and admin to access the page
        if (
        this.$session.get("type") !== "A" &&
        this.$session.get("type") !== "B"
        ) {
            this.$router.push("/");
        }
    },

    mounted() {
        const autocomplete = new GeocoderAutocomplete(
        document.getElementById("autocomplete"),
        "e5b3d7c8eec94a7dba4652546a1b3b23",
        {
            /* Geocoder options */
        }
        );

        autocomplete.on("select", (location) => {
            this.city = location.properties.address_line1;
            this.lat = location.properties.lat;
            this.lon = location.properties.lon;
        });
    },

    updated() {
        //allowing only business owner to access the page and edit the review
        if (
            this.$session.get("loginid") !== this.loginid && this.$session.get("type") !=="A"
        ) {
            this.$router.push("/");
        }
    },

    methods: {
        submit() {
        this.$apollo.mutate({
            // Query
            mutation: updateCityMutation,
            variables: {
            cid: this.cid,
            city: this.city,
            lat: parseFloat(this.lat),
            lon: parseFloat(this.lon),
            },
            update: (cache, { data: { updateCity } }) => {
            console.log(updateCity);
            },
        });
        this.success = true;
        },
    },

    apollo: {
        company: {
            query: getCompanyQuery,
            variables() {
                return {
                    cid: this.cid,
                };
            },
        },
    },
  
};
</script>

<style scoped>
@import "~@geoapify/geocoder-autocomplete/styles/minimal.css";

.autocomplete-container {
  position: relative;
}

.data {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5vw 3vw;
  border-radius: 5px;
  width: 90%;
  margin: 30px auto;
}

.green {
  color: green;
  font-style: italic;
  font-size: 12px;
}

.city {
  font-size: 4vw;
  font-weight: bold;
  background-color: #eff0f0;
}

p {
  margin-bottom: 20px;
}

.submitButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 10px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 30px;
}

.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.submitButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  .city {
    font-size: 2.2vw;
  }
  .submitButton {
    padding: 6px 60px;
  }
}

@media screen and (min-width: 999px) {
  .city {
    font-size: 1.8vw;
  }
  .data {
    width: 60%;
  }
}

@media screen and (min-width: 1200px) {
  .city {
    font-size: 1vw;
  }
}
</style>
