<template>
  <div class="dashboard">
    <button class="btn logout" @click="logout">Logout</button>
    <h1>Welcome {{ this.ownerFName }} {{ this.ownerLName }}</h1>
    <hr>

    <div v-if="ownerCompany" class="apollo">
      <h1>{{ ownerCompany.name }}</h1>
      <div class="data">
        <div>
          <p>id:{{ ownerCompany.cid }}</p>
          <p>
            Contact Person: {{ ownerCompany.fname }} {{ ownerCompany.lname }}
          </p>
          <p>Address1: {{ ownerCompany.address1 }}</p>
          <p v-if="ownerCompany.address2.length !== 0">
            Address2: {{ ownerCompany.address2 }}
          </p>
          <p>City: {{ ownerCompany.city }}</p>
          <p>State: {{ ownerCompany.state }}</p>
          <p>Zip: {{ ownerCompany.zip }}</p>
          <p>Categoryid: {{ ownerCompany.categoryid }}</p>
          <p>Description: {{ ownerCompany.descr }}</p>
          <p>Website: {{ ownerCompany.website }}</p>
          <p>Phone: {{ ownerCompany.phone }}</p>
          <p>Suggested:{{ ownerCompany.suggested }}</p>
          <p>Favorite:{{ ownerCompany.favorite }}</p>
          <p>Approved:{{ ownerCompany.approved }}</p>
        </div>

        <div v-if="ownerCompany.hours !== null">
          <h1>Business Hours :</h1>
          <p>
            Monday: {{ ownerCompany.hours.monstart }} -
            {{ ownerCompany.hours.monend }}
          </p>
          <p>
            Tesday : {{ ownerCompany.hours.tuestart }} -
            {{ ownerCompany.hours.tueend }}
          </p>
          <p>
            Wednesday : {{ ownerCompany.hours.wedstart }} -
            {{ ownerCompany.hours.wedend }}
          </p>
          <p>
            Thursday : {{ ownerCompany.hours.thustart }} -
            {{ ownerCompany.hours.thuend }}
          </p>
          <p>
            Fridayday : {{ ownerCompany.hours.fristart }} -
            {{ ownerCompany.hours.friend }}
          </p>
          <p>
            Satday : {{ ownerCompany.hours.satstart }} -
            {{ ownerCompany.hours.satend }}
          </p>
          <p>
            Sunday : {{ ownerCompany.hours.sunstart }} -
            {{ ownerCompany.hours.sunend }}
          </p>
        </div>

        <div v-if="ownerCompany.ratings !== null">
          <h1>Ratings</h1>
          <p>Rating : {{ ownerCompany.ratings.rating }}</p>
          <p>Total Reviews : {{ ownerCompany.ratings.revcount }}</p>
          <p>Total Ranking: {{ ownerCompany.ratings.ranking }}</p>
        </div>

        <div v-if="ownerCompany.reviews.length !== 0">
          <h1>Reviews</h1>
          <div v-for="review in ownerCompany.reviews" :key="review.rid">
            <div v-if="review.active === 1">
              <p>Quality : {{ review.quality }}</p>
              <p>Value : {{ review.value }}</p>
              <p>Timeliness : {{ review.timeliness }}</p>
              <p>Experience : {{ review.experience }}</p>
              <p>Satisfaction : {{ review.satisfaction }}</p>
              <p>Comments : {{ review.comments }}</p>
              <p>date : {{ review.date }}</p>
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
import getCompanyByLoginIdQuery from "../query/getCompanyByLoginId.js";
import Vue from "vue";
import VueSession from "vue-session";
Vue.use(VueSession);

export default {
  name: "BusinessDashboard",
  data() {
    return {
      loginid: this.$session.get("loginid"),
      ownerFName: this.$session.get("fname"),
      ownerLName: this.$session.get("lname"),
    };
  },

  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },

  apollo: {
    ownerCompany: {
      query: getCompanyByLoginIdQuery,
      variables() {
        return {
          loginid: this.loginid,
        };
      },
    },
  },

  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.dashboard {
  background: white;
  color: black;
  padding: 5% 10%;
  font-size: 16px;
}

.btn.logout {
  float: right;
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

.btn.logout:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.btn.logout:active {
  position: relative;
}
</style>
