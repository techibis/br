<template>
  <div class="results main-container">
  <a :href="'/vue-admin'"><button class="back">Back</button></a>
    <div v-if="company" class="apollo">
      <h1>{{ company.name }}</h1>
      <div class="data">
        <div v-if="company.owner !== null ">
          <div v-if="company.owner.type === 'B'">
            <h1>
              Business Owner : {{ company.owner.fname }}
              {{ company.owner.lname }}
            </h1>
          </div>
        </div>
        <div>
          <p>id:{{ cid }}</p>
          <p>Contact Person: {{ company.fname }} {{ company.lname }}</p>
          <p>Address1: {{ company.address1 }}</p>
          <p v-if="company.address2.length !== 0">
            Address2: {{ company.address2 }}
          </p>
          <p>City: {{ company.city }}</p>
          <p>State: {{ company.state }}</p>
          <p>Zip: {{ company.zip }}</p>
          <p>Categoryid: {{ company.categoryid }}</p>
          <p>Description: {{ company.descr }}</p>
          <p>Website: {{ company.website }}</p>
          <p>Phone: {{ company.phone }}</p>
          <p>Suggested:{{ company.suggested }}</p>
          <p>Favorite:{{ company.favorite }}</p>
          <p>Approved:{{ company.approved }}</p>
        </div>
        <div v-if="company.hours !== null">
          <h1>Business Hours :</h1>
          <p>
            Monday: {{ company.hours.monstart }} - {{ company.hours.monend }}
          </p>
          <p>
            Tesday : {{ company.hours.tuestart }} - {{ company.hours.tueend }}
          </p>
          <p>
            Wednesday : {{ company.hours.wedstart }} -
            {{ company.hours.wedend }}
          </p>
          <p>
            Thursday : {{ company.hours.thustart }} -
            {{ company.hours.thuend }}
          </p>
          <p>
            Fridayday : {{ company.hours.fristart }} -
            {{ company.hours.friend }}
          </p>
          <p>
            Satday : {{ company.hours.satstart }} - {{ company.hours.satend }}
          </p>
          <p>
            Sunday : {{ company.hours.sunstart }} - {{ company.hours.sunend }}
          </p>
        </div>

        <div v-if="company.ratings !== null">
          <h1>Ratings</h1>
          <p>Rating : {{ company.ratings.rating }}</p>
          <p>Total Reviews : {{ company.ratings.revcount }}</p>
          <p>Total Ranking: {{ company.ratings.ranking }}</p>
        </div>

        <div v-if="company.reviews.length !== 0">
          <h1>Reviews</h1>
          <div v-for="review in company.reviews" :key="review.rid">
            <div v-if="review.active === 1">
              <p>Quality : {{ review.quality }}</p>
              <p>Value : {{ review.value }}</p>
              <p>Timeliness : {{ review.timeliness }}</p>
              <p>Experience : {{ review.experience }}</p>
              <p>Satisfaction : {{ review.satisfaction }}</p>
              <p>Comments : {{ review.comments }}</p>
              <p>Reviewer : {{ review.fname }} {{ review.lname }}</p>
              <p>
                Reviewer Location : {{ review.reviewer.city }},
                {{ review.reviewer.state }}
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import getCompanyQuery from "../query/business.js";
import Vue from "vue";
import VueSession from "vue-session";
Vue.use(VueSession);


export default {
  name: "ApproveBusiness",

  data() {
    return {
      cid: "",
      company:null,
    };
  },
  beforeCreate: function() {
    if (!this.$session.exists() && (this.$session.get("type") !== "A")) {
      this.$router.push("/");
    }
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

.data {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5vw 3vw;
  border-radius: 5px;
  width: 90%;
  margin: 30px auto;
}

.data > div {
  margin-top: 30px;
}

.data p {
  font-size: 16px;
  line-height: 2;
  text-align: left;
}

.back {
  margin: 20px 0;
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
}

.back:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.back:active {
  position: relative;
}

@media screen and (min-width: 999px) {
  .data {
    width: 60%;
  }
}
</style>