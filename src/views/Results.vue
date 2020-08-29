<template>
  <div class="results main-container">
    <div class="breadcrumbLink">
        <a href="/"><i class="fa fa-home"></i></a><span>/</span>
        <a href="/">{{city}}</a><span>/</span>
        <a :href="'/companys/' + companyCat + '?lat=' + lat + '&lon='+ lon ">{{ companyCat }}</a>
    </div>
    <hr>
    <div v-if="category" class="apollo">
      <div class="data" v-for="company in category.companys" :key="company.lat">
        <div v-if="company.favorite === 1">
          <div class="result">
            <div class="row main">
              <div class="col-md-3 logo">
                <img
                  v-if="company.logo !== ''"
                  :src="'https://br.softwarefactoryexperts.com:4000/'+company.logo"
                  class="logo"
                />
                <h1 class="letter" v-else :set="name= company.name.charAt(0)">{{name}}</h1>
              </div>
              <div class="col-md-6 company">
                <a :href="'/companys/' + company.name + '/' + company.cid" target="_blank">
                  <h1>{{ company.name }}</h1>
                </a>
                <div class="staff">
                  <span class="staff-icon">
                    <img
                      width="15px"
                      src="@/assets/Red_and_Gold_Transparent_Rosette_Ribbon_PNG_Clipart.png"
                    />
                  </span>
                  <span class="staff-text">Staff Favorite</span>
                </div>
                <p
                  class="dis"
                  :set="distance= parseInt(company.distance)"
                >Distance : {{distance}} Mile(s)</p>
                <p>{{ company.descr }}</p>
                <div v-if="company.ratings !== null">
                  <div class="comRating">
                    <star-rating
                      :set="(rating = parseInt(company.ratings.rating))"
                      v-model="rating"
                      class="col-md-8 star"
                      :increment="0.1"
                      border-color="#f6d185"
                      :border-width="1"
                      inactive-color="#fff"
                      active-color="#f6d185"
                      :star-size="30"
                      :read-only="true"
                      :fixed-points="1"
                      :round-start-rating="false"
                    ></star-rating>
                  </div>
                </div>
                <a
                  :href="'/companys/' + company.name + '/' + company.cid"
                  target="_blank"
                >View Profile & Reviews</a>
              </div>
              <div class="col-md-3">
                <a :href="company.website" target="_blank">
                  <button class="viewProfile">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                    <b>Visit</b> Website
                  </button>
                </a>
                <a :href="'tel:' + company.phone" target="_blank">
                  <button class="rateBusiness">
                    <b>
                      <i class="fa fa-phone" aria-hidden="true"></i> Call
                    </b> Now
                  </button>
                </a>
                <a
                  :href="
                        'http://maps.google.com/?q=' +
                          company.address1 +
                          ',' +
                          company.city +
                          ',' +
                          company.zip
                      "
                  target="_blank"
                >
                  <i class="fa fa-map-marker" aria-hidden="true">
                    <b>
                      Get
                      Direction
                    </b>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <mapbox
          access-token="pk.eyJ1IjoiYnVzaW5lc3NyYXRlIiwiYSI6ImNrZHJ0NXJ4czBoYWoycnBoazJtMTlycHIifQ.JWg1JG8JIbpbFLQQvNsq9g"
          :map-options="{
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.lon, this.lat],
          zoom: 9,
        }"
          :geolocate-control="{
          show: true,
          position: 'top-left',
        }"
          @map-load="loaded"
          @geolocate-error="geolocateError"
          @geolocate-geolocate="geolocate"
        />
      </div>
      <div class="data" v-for="company in category.companys" :key="company.cid">
        <div class="result">
          <div class="row main">
            <div class="col-md-3 logo">
              <img
                v-if="company.logo !== ''"
                :src="'https://br.softwarefactoryexperts.com:4000/'+company.logo"
                class="logo"
              />
              <h1 class="letter" v-else :set="name= company.name.charAt(0)">{{name}}</h1>
            </div>
            <div class="col-md-6 company">
              <a :href="'/companys/' + company.name + '/' + company.cid" target="_blank">
                <h1>{{ company.rank }}. {{ company.name }}</h1>
              </a>
              <a class="catLink" :href="'/companys/' + companyCat + '?lat=' + lat + '&lon='+ lon ">
                <span>
                  {{
                  company.categoryname.short_name
                  }}
                </span>
              </a>
              
              <p :set="distance= parseInt(company.distance)">Distance : {{distance}} Mile(s)</p>
              <p>{{ company.descr }}</p>
              <div v-if="company.ratings !== null">
                <div class="comRating">
                  <star-rating
                    :set="(rating = parseInt(company.ratings.rating))"
                    v-model="rating"
                    class="col-md-8 star"
                    :increment="0.1"
                    border-color="#f6d185"
                    :border-width="1"
                    inactive-color="#fff"
                    active-color="#f6d185"
                    :star-size="30"
                    :read-only="true"
                    :fixed-points="1"
                    :round-start-rating="false"
                  ></star-rating>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <a :href="'/companys/' + company.name + '/' + company.cid" target="_blank">
                <button class="viewProfile">
                  <b>View Profile</b>
                </button>
              </a>
              <a :href="'/reviews/' + company.name + '/' + company.cid" target="_blank">
                <button class="rateBusiness">
                  <b>Rate Business</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCompanysQuery from "../query/allBusiness.js";
import Vue from "vue";
import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// var mapboxgl = require("mapbox-gl");
import Mapbox from "mapbox-gl-vue";
import marker from "@/assets/marker.png";
import favorite from "@/assets/favorite.png";
export default {
  name: "Results",

  data() {
    return {
      lat: "",
      lon: "",
      companyCat: "",
      city: localStorage.getItem("city")
    };
  },

  components: { Mapbox },

  methods: {
    loaded(map) {
      map.loadImage(favorite, function (error, image) {
        if (error) throw error;
        map.addImage("favorite", image);
      });

      map.loadImage(marker, function (error, image) {
        if (error) throw error;
        map.addImage("marker", image);
      });

      for (let i = 0; i < this.category.companys.length; i++) {
        if (this.category.companys[i].favorite === 1) {
          map.addLayer({
            id: "points" + i,
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [
                        this.category.companys[i].lon,
                        this.category.companys[i].lat,
                      ],
                    },
                    properties: {
                      title: this.category.companys[i].rank,
                    },
                  },
                ],
              },
            },
            layout: {
              "icon-image": "favorite",
              "icon-size": 0.1,
              "icon-allow-overlap": true,
            },
          });
        } else {
          map.addLayer({
            id: "points" + i,
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [
                        this.category.companys[i].lon,
                        this.category.companys[i].lat,
                      ],
                    },
                    properties: {
                      title: this.category.companys[i].rank,
                      },
                  },
                ],
              },
            },

            layout: {
              "icon-image": "marker",
              "icon-size": 0.08,
              "icon-allow-overlap": true,
              "text-field": "{title}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, -0.5],
              "text-anchor": "center",
            },
          });
        }
      }
    },


    geolocateError(control, positionError) {
      console.log(positionError);
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`
      );
    },
  },

  created() {
    this.companyCat = this.$route.params.category;
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.lat = params.get("lat");
    this.lon = params.get("lon");
  },

  apollo: {
    category: {
      query: getCompanysQuery,
      variables() {
        return {
          companyCat: this.companyCat,
          lat: parseFloat(this.lat),
          lon: parseFloat(this.lon),
        };
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.fa {
  font-size: 18px;
  margin-right: 10px;
}
.results {
  padding: 8vw 5vw;
  background-color: #eff0f0;
}

.row.main {
  margin: 0;
}

.map {
  margin: 30px auto 80px;
  text-align: right;
  height: 320px;
  position: relative;
  padding: 20px 20px 20px 20px;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

.result {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  margin: 30px auto;
  text-align: left;
}


.results a {
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: black;
}

.results a.catLink{
  font-size: 12px;
  color: #009fe0;

}
.breadcrumbLink a {
  font-size: 14px;
  color: #db9422;
  margin:0 10px;
  text-decoration: none;

}
.breadcrumbLink span{
  font-size: 14px;
  color: #ccc;
}

.breadcrumbLink a:hover {
  color: #f1c05d;

}

.breadcrumbLink{
  display: inline;
  text-align: left;
}


.logo img {
  width: 100%;
}

.loginSignUpButtons {
  display: flex;
  flex-direction: column;
}

.viewProfile {
  background-color: #ffec64;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
}

.viewProfile,
.rateBusiness {
  box-shadow: 0px 1px 0px 0px #fff6af;
  border-radius: 40px;
  border: 1px solid #ffaa22;
  display: inline-block;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 18px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.viewProfile:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.rateBusiness:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.viewProfile:active,
.viewProfile:focus,
.rateBusiness:active,
.rateBusiness:focus {
  outline: none;
}

.col-md-3 .letter {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-family: "Monoton", cursive;
  font-size: 75px;
  line-height: 1;
  color: grey;
}

.col-md-3.logo {
  border: 1px solid #e2e2e2;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: 0 auto;
}

.col-md-3.logo img {
  width: 100%;
}

.col-md-3 a {
  text-decoration: none;
  color: #333333;
  text-align: center;
}
.col-md-3 a:hover {
  text-decoration: none;
}
.col-md-3 button {
  width: 90%;
}
.col-md-6.company {
  margin: 30px 0;
}

h1 {
  color: #da9423;
}
.staff {
  margin: 10px 0 20px;
}
.dis {
  margin: 10px 0;
}

.staff-icon {
  border: 1px solid #f6d185;
  border-right: 0;
  padding: 7px 13px 7px 16px;
  border-radius: 16px;
  line-height: 24px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.staff-text {
  font-style: italic;
  padding: 2px 18px 6px 8px;
  font-size: 15px;
  border: 1px solid #f6d185;
  border-radius: 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.comRating {
  margin: 20px auto;
}

.col-md-8.star.vue-star-rating {
  padding-left: 0;
}

p {
  font-size: 14px;
}
.col-md-3 {
  text-align: center;
}

@media screen and (min-width: 640px) {
  .star {
    margin-top: -10px;
  }

  .col-md-3 .letter {
    font-size: 100px;
  }
  .results {
    padding: 5vw;
  }
  .col-md-3 {
    padding: 0;
  }
  .map {
    height: 400px;
  }
}

@media screen and (min-width: 768px) {
  .col-md-6.company {
    margin: 0px;
  }
}

@media screen and (min-width: 999px) {
  .result {
    width: 95%;
    padding: 20px;
  }

  .map {
    width: 95%;
  }

  .col-md-6.company {
    margin: 0;
  }
  .col-md-3.logo {
    margin: 0 auto;
  }
  .col-md-6 {
    padding-left: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .result,
  .map {
    width: 70%;
  }
}
@media screen and (min-width: 1299px) {
  .col-md-3.logo img {
    width: inherit;
  }
}
</style>
