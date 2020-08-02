<template>
  <div class="ratings main-container">
    <div v-if="company" class="apollo">
      <div class="data">
        <p v-if="success" class="green">
          Your review has been submitted successfully.
        </p>
        <p v-if="success1" class="green">
          Your account has been submitted successfully. Please sign in.
        </p>
        <p>Please Rate:</p>
        <h1>{{ company }}</h1>
        <span
          >If you have an account, <a href="/reviewer-login">sign in</a> to
          track your reviews.</span
        >
        <hr style="margin-top:30px" />
        <div>
          <b-form @submit.prevent="onSubmit">
            <p>How would you like to rate this business?*</p>
            <div class="stars">
              <h1>Quality</h1>
              <star-rating
                @rating-selected="setRating1"
                v-model="quality"
                class="star"
                :increment="1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :show-rating="false"
              >
              </star-rating>
              <p>{{ quality }}</p>
            </div>
            <hr />
            <div class="stars">
              <h1>Value</h1>
              <star-rating
                @rating-selected="setRating2"
                v-model="value"
                class="star"
                :increment="1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :show-rating="false"
              >
              </star-rating>
              <p>{{ value }}</p>
            </div>
            <hr />
            <div class="stars">
              <h1>Timeliness</h1>
              <star-rating
                @rating-selected="setRating3"
                v-model="timeliness"
                class="star"
                :increment="1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :show-rating="false"
              >
              </star-rating>
              <p>{{ timeliness }}</p>
            </div>
            <hr />
            <div class="stars">
              <h1>Experience</h1>
              <star-rating
                @rating-selected="setRating4"
                v-model="experience"
                class="star"
                :increment="1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :show-rating="false"
              >
              </star-rating>
              <p>{{ experience }}</p>
            </div>
            <hr />
            <div class="stars">
              <h1>Satisfaction</h1>
              <star-rating
                @rating-selected="setRating5"
                v-model="satisfaction"
                class="star"
                :increment="1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :show-rating="false"
              >
              </star-rating>
              <p>{{ satisfaction }}</p>
            </div>
            <hr />
            <div class="stars">
              <h1>Average Overall</h1>
              <star-rating
                v-model="overall"
                class="star"
                :increment="0.1"
                border-color="#f6d185"
                :border-width="1"
                inactive-color="#fff"
                active-color="#f6d185"
                :star-size="30"
                :read-only="true"
                :fixed-points="1"
                :show-rating="false"
                :round-start-rating="false"
              >
              </star-rating>
              <p>{{ overall }}</p>
            </div>
            <hr />

            <b-form-group
              id="textarea-1"
              label="Comments *"
              label-for="textarea"
            >
              <b-form-textarea
                id="textarea"
                v-model="comments"
                rows="3"
                max-rows="16"
                required
              ></b-form-textarea>
            </b-form-group>
            <div class="row">
              <div class="form-group col-md-4">
                <b-form-group
                  id="input-group-1"
                  label="First Name *"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="fname"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="form-group col-md-4">
                <b-form-group
                  id="input-group-2"
                  label="Last Name *"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="lname"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="form-group col-md-4">
                <b-form-group
                  id="input-group-3"
                  label="Email *"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              v-model="selected"
              required
            >
              I agree to the terms of service and privacy policy.
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-2"
              v-model="checked"
              name="checkbox-2"
            >
              Create an account for full control over my reviews.
            </b-form-checkbox>
            <br />
            <div class="row" v-if="checked">
              <div class="form-group col-md-6">
                <b-form-group
                  id="input-group-4"
                  label="Password *"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group
                  id="input-group-5"
                  label="Verify Password *"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    v-model="passwordCheck"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-button type="submit" class="submitButton">Submit</b-button>
          </b-form>
        </div>
        <p v-if="exist" class="red">
          An account already exist with this email.
        </p>
        <p v-if="show" class="red">
          Password doesn't match
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import addReviewMutation from "../query/addReview.js";
import getReviewerIdQuery from "../query/getReviewerId.js";
import checkEmailQuery from "../query/checkEmail.js";
import addUserMutation from "../query/addUser.js";
import addReviewerMutation from "../query/addReviewer.js";

import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);
var md5 = require("md5");

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

export default {
  name: "Reviews",

  data() {
    return {
      cid: this.$route.params.cid,
      company: this.$route.params.company,
      reviewerid: null,
      quality: 0,
      value: 0,
      timeliness: 0,
      experience: 0,
      satisfaction: 0,
      total: 0,
      overall: 0,
      comments: "",
      fname: "",
      lname: "",
      email: "",
      active: 1,
      password: "",
      passwordCheck: "",
      loginid: null,
      x1: 0,
      x2: 0,
      x3: 0,
      x4: 0,
      x5: 0,
      checked: false,
      selected: false,
      show: false,
      success: false,
      success1: false,
      exist: false,
    };
  },

  apollo: {
    reviewerId: {
      query: getReviewerIdQuery,
      variables() {
        return {
          loginid: this.loginid,
        };
      },
      skip() {
        return this.skipQuery;
      },
    },

    checkEmail: {
      query: checkEmailQuery,
      variables() {
        return {
          email: this.email,
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },

  async mounted() {
    // checking if session exist
    if (this.$session.exists() && this.$session.get("type") === "R") {
      //getting the loginid from the session
      this.loginid = this.$session.get("loginid");
      // refetching the query to get the reviewerid
      this.$apollo.queries.reviewerId.skip = false;
      await this.$apollo.queries.reviewerId.refetch();
      this.reviewerid = this.reviewerId.reviewerid;
    } else {
      this.reviewerid = 0;
    }
  },

  methods: {
    setRating1: function() {
      this.x1 = 1;
      this.overallRatings();
    },
    setRating2: function() {
      this.x2 = 1;
      this.overallRatings();
    },
    setRating3: function() {
      this.x3 = 1;
      this.overallRatings();
    },
    setRating4: function() {
      this.x4 = 1;
      this.overallRatings();
    },
    setRating5: function() {
      this.x5 = 1;
      this.overallRatings();
    },
    overallRatings() {
      this.total = this.x1 + this.x2 + this.x3 + this.x4 + this.x5;
      this.overall = parseFloat(
        (
          (this.quality +
            this.value +
            this.timeliness +
            this.experience +
            this.satisfaction) /
          this.total
        ).toFixed(1)
      );
    },

    async onSubmit() {
      if (this.checked) {
        this.$apollo.queries.checkEmail.skip = false;
        await this.$apollo.queries.checkEmail.refetch();
        //check if the email already registered
        if (this.checkEmail === null) {
          //check if password match
          if (this.password === this.passwordCheck) {
            // sign up as a reviewer and get loginid
            await this.signup();

          } else {
            this.exist = false;
            this.success1 = false;
            this.show = true;
          }
        } else {
          this.resetForm();
          this.exist = true;
          this.show = false;
        }
      } else {
        this.submitReview();
      }
    },

    submitReview() {
      this.$apollo.mutate({
        mutation: addReviewMutation,
        variables: {
          cid: this.cid,
          reviewerid: this.reviewerid,
          quality: this.quality,
          value: this.value,
          timeliness: this.timeliness,
          experience: this.experience,
          satisfaction: this.satisfaction,
          overall: this.overall,
          comments: this.comments,
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          active: this.active,
        },
        update: (cache, { data: { addReview } }) => {
          console.log(addReview);
          this.resetForm();
          this.success = true;
        },
      });
    },

    addReviewerInfo() {
      this.$apollo.mutate({
        mutation: addReviewerMutation,
        variables: {
          fname: this.fname,
          lname: this.lname,
          loginid: this.loginid,
        },
        update: (cache, { data: { addReviewer } }) => {
          console.log(addReviewer);
            this.reviewerid = addReviewer.reviewerid;
            // insert review into reviews table
            this.submitReview();
        },
      });
    },

    signup() {
      this.$apollo.mutate({
        mutation: addUserMutation,
        variables: {
          email: this.email,
          password: md5(this.password),
          type: "R",
          fname: this.fname,
          lname: this.lname,
          active: this.active,
        },
        update: (cache, { data: { addUser } }) => {
          console.log(addUser);
          this.loginid = addUser.loginid;
          console.log(this.loginid);
          // insert data into reviewer table and get reviewerid
          this.addReviewerInfo();
        },
      });
      this.exist = false;
      this.show = false;
      this.success1 = true;
    },

    resetForm() {
      this.quality = 0;
      this.value = 0;
      this.timeliness = 0;
      this.experience = 0;
      this.satisfaction = 0;
      this.overall = 0;
      this.comments = "";
      this.fname = "";
      this.lname = "";
      this.email = "";
      this.password = "";
      this.passwordCheck = "";
      this.checked = false;
      this.selected = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.ratings {
  padding: 8vw 2vw;
  background-color: #eff0f0;
}

.green {
  color: green;
  font-style: italic;
}
.red {
  color: red;
  font-style: italic;
}

.data {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5vw 3vw;
  border-radius: 5px;
  width: 90%;
  margin: 30px auto;
  text-align: left;
}

.data > div {
  margin: 30px 0;
}

.data p {
  font-size: 16px;
  line-height: 2;
}

.stars {
  display: flex;
  padding: 10px 0;
}

.stars h1 {
  font-size: 3vw;
  width: 25%;
}
.star p {
  float: right;
}

.star {
  margin-top: -10px;
  width: 70%;
}
.review-button {
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

.review-button:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

@media screen and (min-width: 640px) {
  .ratings {
    padding: 8vw 5vw;
  }

  .data > div {
    width: 75%;
  }
  .stars h1 {
    font-size: 18px;
    margin: auto 0;
    width: 35%;
  }

  .star {
    width: 50%;
  }
  .stars p {
    margin: auto 0;
  }
}

@media screen and (min-width: 999px) {
  .data {
    width: 60%;
  }
}
</style>
