<template>
  <div class="dashboard">
    <div class="container">
      <h1>Welcome {{ reviewerFName }} {{ reviewerLName }}</h1>
      <hr />
      <div v-if="reviewerId">
        <p v-if="success" class="green">
          Location has been updated successfully
        </p>
        <b-form @submit.prevent="onSubmit">
          <div class="row">
            <div class="form-group col-md-5">
              <b-form-group id="input-group-1" label="City" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="reviewerId.city"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-group col-md-5">
              <b-form-group
                id="input-group-2"
                label="State"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="reviewerId.state"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-group col-md-2 btn">
              <b-button type="submit" class="submitButton">Update</b-button>
            </div>
          </div>
        </b-form>

        <div v-if="reviewerId.reviewerReviews !== null">
          <div
            class="reviews"
            v-for="review in reviewerId.reviewerReviews"
            :key="review.rid"
          >
            <div class="row ">
              <div class="col-md-6 company">
                <h1>{{ review.company.name }}</h1>
                <h4>
                  <b>Contact Person:</b> {{ review.company.fname }}
                  {{ review.company.lname }}
                </h4>
                <h4 v-if="review.company.address2 !== ''">
                  <b> Address:</b> {{ review.company.address1 }},{{
                    review.company.address2
                  }},{{ review.company.city }}, {{ review.company.state }}-{{
                    review.company.zip
                  }}
                </h4>
                <h4 v-else>
                  <b>Address:</b> {{ review.company.address1 }},
                  {{ review.company.city }}, {{ review.company.state }}-{{
                    review.company.zip
                  }}
                </h4>
                <h4><b>Phone:</b> {{ review.company.phone }}</h4>
                <h4><b>Website:</b> {{ review.company.website }}</h4>
                <div v-if="review.company.ratings !== null">
                  <h4><b>Ranking: </b> {{ review.company.ratings.ranking }}</h4>
                  <h4>
                    <b>Total Reviews: </b> {{ review.company.ratings.revcount }}
                  </h4>
                  <div class="row">
                    <h4 class="col-md-4"><b>Average Ratings :</b></h4>

                    <star-rating
                      :set="(rating = parseInt(review.company.ratings.rating))"
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
                    >
                    </star-rating>
                  </div>
                </div>
              </div>
              <div class="col-md-6 myreview">
                <h2>Your Submitted Rating</h2>
                <hr />
                <div class="row">
                  <h4 class="col-md-4">Quality</h4>
                  <star-rating
                    v-model="review.quality"
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
                  >
                  </star-rating>
                </div>
                <div class="row">
                  <h4 class="col-md-4">Value</h4>
                  <star-rating
                    v-model="review.value"
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
                  >
                  </star-rating>
                </div>
                <div class="row">
                  <h4 class="col-md-4">Timeliness</h4>
                  <star-rating
                    v-model="review.timeliness"
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
                  >
                  </star-rating>
                </div>
                <div class="row">
                  <h4 class="col-md-4">Experience</h4>
                  <star-rating
                    v-model="review.experience"
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
                  >
                  </star-rating>
                </div>
                <div class="row">
                  <h4 class="col-md-4">Satisfaction</h4>
                  <star-rating
                    v-model="review.satisfaction"
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
                  >
                  </star-rating>
                </div>
                <div class="row">
                  <h4 class="col-md-4">Overall</h4>
                  <star-rating
                    v-model="review.overall"
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
                  >
                  </star-rating>
                </div>
                <p><b>Comments: </b>{{ review.comments }} <b>on {{ review.date }}</b></p> 
                
                <p v-if="review.reply !== null">
                  {{ review.company.name }} wrote on {{ review.reply.date }} : {{ review.reply.comment }}
                </p>
              </div>
            </div>
<!-- checking if any other reviewer commented by checking the length of review array and also comparing with review id -->
            <h4 v-if="review.company.reviews.length > 1 ">Other Comments : </h4>
            <div v-for="rev in review.company.reviews" :key="rev.rid">
            <!-- showing other comments from other reviewers  -->
              <div v-if="review.rid !== rev.rid">
                <hr />
                
                <p>Comment : {{ rev.comments }}
                <span> By  {{ rev.fname }} {{ rev.lname }}</span>
                <span v-if="rev.reviewer !== null">
                  , {{ rev.reviewer.city }}, {{ rev.reviewer.state }}</span
                >
                <b> on {{rev.date}}</b>
                </p>
                <p v-if="rev.reply !== null">
                 Owner Replied : {{ rev.reply.comment }} - on {{ rev.reply.date }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

Vue.use(BootstrapVue);

import getReviewerIdQuery from "../query/getReviewerId.js";
import updateLocationMutation from "../query/updateLocation.js";

export default {
  name: "ReviewerDashboard",
  data() {
    return {
      loginid: this.$session.get("loginid"),
      reviewerFName: this.$session.get("fname"),
      reviewerLName: this.$session.get("lname"),
      success: false,
    };
  },

  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },

  apollo: {
    reviewerId: {
      query: getReviewerIdQuery,
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

    onSubmit() {
      this.$apollo.mutate({
        mutation: updateLocationMutation,
        variables: {
          loginid: this.loginid,
          city: (this.reviewerId.city).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          state: (this.reviewerId.state).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
        },
        update: (cache, { data: { updateLocation } }) => {
          console.log(updateLocation);
        },
      });
      this.success = true;
    },
  },
};
</script>

<style>
.dashboard {
  padding: 40px;
  background: white;
  color: black;
}

.form-group.col-md-2.btn {
  margin: auto;
}

.green {
  color: green;
  font-size: italic;
}

.reviews {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 2vw 3vw;
  border-radius: 5px;
  margin: 20px 0;
}

.row {
  margin: 0 0 20px 0;
}

.star {
  margin-top: -5px;
}
h4 {
  margin-bottom: 15px;
}
h4.col-md-4 {
  padding-left: 0;
  margin-bottom: 0;
}
</style>
