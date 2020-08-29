<template>
  <div class="results main-container">
    <div v-if="company" class="breadcrumbLink">
      <a href="/">
        <i class="fa fa-home"></i>
      </a>
      <span>/</span>
      <a href="/">{{ city }}</a>
      <span>/</span>
      <a
        :href="
          '/companys/' +
            company.categoryname.short_name +
            '?lat=' +
            company.lat +
            '&lon=' +
            company.lon
        "
      >{{ company.categoryname.short_name }}</a>
      <span>/</span>
      <a href>{{ company.name }}</a>
    </div>
    <hr />
    <div v-if="company" class="apollo">
      <div class="data">
        <div class="row">
          <div class="col-md-3 logo">
            <img
              v-if="company.logo !== ''"
              :src="'https://br.softwarefactoryexperts.com:4000/' + company.logo"
              class="logo"
            />
            <h1 class="letter" v-else :set="(name = company.name.charAt(0))">{{ name }}</h1>
          </div>
          <div class="col-md-9">
            <h1>{{ company.name }}</h1>
            <a
              class="catLink"
              :href="
                '/companys/' +
                  company.categoryname.short_name +
                  '?lat=' +
                  lat +
                  '&lon=' +
                  lon
              "
            >
              <span>{{ company.categoryname.short_name }}</span>
            </a>
            <div class="stars" v-if="company.ratings !== null">
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
            <p>{{ company.descr }}</p>
            <div class="buttons">
              <a :href="'/reviews/' + company.name + '/' + company.cid" target="_blank">
                <button class="rateBusiness">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  Rate
                </button>
              </a>
              <a :href="company.website" target="_blank">
                <button class="wcl">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                  Website
                </button>
              </a>
              <a :href="'tel:' + company.phone" target="_blank">
                <button class="wcl">
                  <i class="fa fa-mobile" aria-hidden="true"></i> Call
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
                <button class="wcl">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  Location
                </button>
              </a>
            </div>
            <hr />

            <div class="row">
              <div v-if="company.ratings !== null" class="col-md-6 extReview">
                <a style="overflow:hidden;" class="btn btn-light source" target="_blank" href="/">
                  <div class="row">
                    <div class="col-md-6 source-logo">
                      <img
                        src="@/assets/logo_sm.png"
                        alt="BusinessRate Logo"
                      />
                    </div>
                    <div class="col-md-6 arrow">
                      <div class="rating-text-arrow">
                        <div class="rating-text">
                          <strong>BusinessRate.com</strong>
                          <br />
                          <small>{{company.ratings.revcount}} reviews | {{company.ratings.rating}} average</small>
                        </div>
                        <div class="rating-arrow">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                v-for="extReview in company.extReviews"
                :key="extReview.id"
                class="col-md-6 extReview"
              >
                <a
                  style="overflow:hidden;"
                  class="btn btn-light source"
                  target="_blank"
                  :href="'https://'+extReview.source.url"
                >
                  <div class="row">
                    <div class="col-md-6 source-logo">
                      <img :src="extReview.source.logo" :alt="extReview.source.url" />
                    </div>
                    <div class="col-md-6 arrow">
                      <div class="rating-text-arrow">
                        <div class="rating-text">
                          <strong>{{extReview.source.url}}</strong>
                          <br />
                          <small>{{extReview.quantity}} reviews | {{extReview.rating}} average</small>
                        </div>
                        <div class="rating-arrow">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <hr />
            </div>

            <div v-if="company.reviews.length !== 0" :set="(count = company.reviews.length)">
              <!-- <h2>{{count}} ratings & reviews posted directly on BusinessRate</h2> -->
              <div v-for="review in company.reviews" :key="review.rid">
                <div v-if="review.active === 1">
                  <div class="stars" v-if="company.ratings !== null">
                    <h4>
                      {{ review.fname }} {{ review.lname }}
                      <span v-if="review.reviewer !== null">
                        - {{ review.reviewer.city }},
                        {{ review.reviewer.state }}
                      </span>
                    </h4>
                    <star-rating
                      :set="(rating = parseInt(review.overall))"
                      v-model="rating"
                      class="col-md-8 rStar"
                      :increment="0.1"
                      border-color="#f6d185"
                      :border-width="1"
                      inactive-color="#fff"
                      active-color="#f6d185"
                      :star-size="25"
                      :show-rating="false"
                      :read-only="true"
                      :fixed-points="1"
                      :round-start-rating="false"
                    ></star-rating>
                    <p class="date">{{ review.date }}</p>
                    <p>{{ review.comments }}</p>

                    <p v-if="review.reply !== null">
                      <strong>{{ company.name }}</strong>
                      replied on {{ review.reply.date }} :
                      <strong>{{ review.reply.comment }}</strong>
                    </p>
                  </div>
                </div>
                <hr />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div>
          <a :href="'/reviews/' + company.name + '/' + cid">
            <button class="review-button">Leave Review</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCompanyQuery from "../query/business.js";

import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

export default {
  name: "SingleResults",

  data() {
    return {
      cid: "",
      company: null,
      city: localStorage.getItem("city"),
      lat: localStorage.getItem("lat"),
      lon: localStorage.getItem("lon"),
    };
  },

  created() {
    this.cid = this.$route.params.cid;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.results {
  padding: 8vw 5vw;
  background-color: #eff0f0;
}

.breadcrumbLink a {
  font-size: 14px;
  color: #db9422;
  margin: 0 10px;
  text-decoration: none;
}
.breadcrumbLink span {
  font-size: 14px;
  color: #ccc;
}

.breadcrumbLink a:hover {
  color: #f1c05d;
}

.breadcrumbLink {
  display: inline;
  text-align: left;
}

.data {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5vw 3vw;
  border-radius: 5px;
  width: 98%;
  margin: auto;
}

.data .row {
  padding: 15px;
}

.review-button,
.rateBusiness {
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  border-radius: 40px;
  border: 1px solid #ffaa22;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 48px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.wcl {
  box-shadow: 0px 1px 0px 0px #fff6af;
  border-radius: 40px;
  border: 1px solid #ffaa22;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.review-button:hover,
.rateBusiness:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.rateBusiness,
.wcl {
  padding: 6px 12px;
  font-size: 14px;
  width: 100px;
  margin: auto 15px 15px auto;
}

.wcl:hover {
  background-color: rgb(227, 227, 227);
}

.review-button:active,
.wcl:active,
.wcl:focus,
.rateBusiness:active,
.rateBusiness:focus {
  outline: none;
}

.col-md-3.logo {
  border: 1px solid #e2e2e2;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: 0 auto 20px;
}

.col-md-3.logo img {
  width: 100%;
}

.col-md-9 h1 {
  color: #da9423;
  margin: 20px auto;
}
.col-md-9 {
  padding: 0;
}

.col-md-9 .catLink {
  font-size: 12px;
  color: #009fe0;
  text-decoration: none;
}
.col-md-9 .catLink:hover {
  color: #0d8dc0;
}

.col-md-9 p {
  font-size: 12px;
  margin: 20px auto;
}

p.date {
  display: inline-block;
  margin: 10px auto;
}

.stars {
  margin-top: 10px;
  text-align: left;
}

h2 {
  margin: 40px auto;
}

h4.span {
  color: black;
}

.col-md-8.star.vue-star-rating {
  padding-left: 0;
  display: flex;
  justify-content: center;
}
.col-md-8.rStar.vue-star-rating {
  padding-left: 0;
  display: inline-block;
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

.col-md-6.extReview {
  margin-bottom: 20px;
  padding: 0;
  flex: 0 0 100%;
  max-width: 100%;
}

.source {
  font-size: 10px;
}

.source-logo {
  display: block;
  margin: auto;
  text-align: center;
}

.source-logo img {
  width: 100px;
}

a.btn.btn-light.source {
  width: 100%;
  text-align: center;
}

.col-md-6.arrow {
  padding-right: 5px;
  margin: auto;
}

.rating-text-arrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

a.btn.btn-light.source .row {
  flex-wrap: nowrap;
  height: 85px;
}

.fa-angle-right:before {
    font-size: 30px;
    font-weight: 500;
}

@media screen and (min-width: 450px) {
  .source {
    font-size: 14px;
  }
}
@media screen and (min-width: 640px) {
  .data {
    width: 90%;
  }
  .data .row {
    padding: 15px;
    text-align: left;
  }
  .col-md-3.logo {
    margin: 0 auto;
  }
  .col-md-9 h1 {
    font-size: 34px;
  }
  .col-md-3 .letter {
    font-size: 100px;
  }

  .col-md-8.star.vue-star-rating {
    justify-content: flex-start;
  }

  .col-md-9 {
    padding-left: 40px;
  }

  .source {
    font-size: 14px;
  }
}

@media screen and (min-width: 1299px) {
  .col-md-3.logo img {
    width: inherit;
  }
  .col-md-6.extReview{
    max-width: 49%;
  }
  .col-md-6.extReview:nth-child(odd){
    margin-right: auto;
  }
}
</style>
