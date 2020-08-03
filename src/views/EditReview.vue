<template>
  <div class="results main-container">
    <div class="updateReview">
      <div v-if="this.type === 'A'">
        <a :href="'/vue-admin'">
          <button class="back">Back</button>
        </a>
      </div>
      <div v-if="this.type === 'B'">
        <a :href="'/bdashboard'">
          <button class="back">Back</button>
        </a>
      </div>
      <br />
      <!-- storing value in varible to login in updated lifecycle hook to allow only authorized businessperson to see their company review -->
      <div v-if="review" :set="this.loginid = review.company.loginid">
        <p>Review Id : {{ review.rid }}</p>
        <p>Quality : {{ review.quality }}</p>
        <p>Value : {{ review.value }}</p>
        <p>Timeliness : {{ review.timeliness }}</p>
        <p>Experience : {{ review.experience }}</p>
        <p>Satisfaction : {{ review.satisfaction }}</p>
        <p>Comments : {{ review.comments }}</p>
        <p>date: {{ review.date }}</p>
        <p>Reviewer : {{ review.fname }} {{ review.lname }}</p>
        <p v-if="review.active === 1">Review Status: Active</p>
        <p v-else>Review Status: Inactive</p>
        <p v-if="review.reviewer !== null">
          Reviewer Location : {{ review.reviewer.city }},
          {{ review.reviewer.state }}
        </p>
        <p
          v-if="review.reply !== null"
        >Reply by Owner :{{ review.reply.comment }} - on {{ review.reply.date }}</p>
        <br />
        <hr />

        <h3>Update Status:</h3>
        <b-form @submit.prevent="hideReview">
          <p v-if="success" class="green">Review status updated</p>
          <div class="row">
            <div class="form-group col-md-4">
              <b-form-group
                id="review"
                label="Do you want to hide this review? "
                label-for="input-1"
              >
                <b-form-select id="review-input" v-model="review.active" :options="option"></b-form-select>
              </b-form-group>
            </div>
          </div>
          <b-button type="submit" class="submitButton">Hide Review</b-button>
        </b-form>
        <br />
        <div v-if="review.reply === null">
        <hr />
          <h3>Reply :</h3>
          <b-form @submit.prevent="addReply">
            <p v-if="replied" class="green">Comment has been added!</p>
            <b-form-group id="textarea-1" label="Add Comment" label-for="textarea">
              <b-form-textarea
                id="textarea"
                v-model="comment"
                placeholder="Write a comment ..."
                rows="3"
                max-rows="16"
              ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" class="submitButton">Reply</b-button>
          </b-form>
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
Vue.use(BootstrapVue);

import updateReviewMutation from "../query/updateReview.js";
import addReplyMutation from "../query/addReply.js";
import getReviewQuery from "../query/getReview.js";

export default {
  name: "EditReview",

  data() {
    return {
      loginid: null,
      type: this.$session.get("type"),
      rid: this.$route.params.rid,
      active: 0,
      comment:"",
      success: false,
      replied: false,
      option: [
        { value: 0, text: "Yes" },
        { value: 1, text: "No" },
      ],
    };
  },

  beforeCreate() {
    if (
      this.$session.get("type") !== "B" &&
      this.$session.get("type") !== "A"
    ) {
      this.$router.push("/");
    }
  },

  updated() {
    //allowing only business owner to access the page and edit the review
    if (
      this.$session.get("loginid") !== this.loginid &&
      this.$session.get("type") !== "A"
    ) {
      this.$router.push("/");
    }
  },

  methods: {
    hideReview() {
      this.$apollo.mutate({
        // Query
        mutation: updateReviewMutation,
        variables: {
          rid: this.rid,
          active: parseInt(this.review.active),
        },
        update: (cache, { data: { updateReview } }) => {
          console.log(updateReview);
          this.success = true;
        },
      });
    },

    addReply() {
      this.$apollo.mutate({
        // Query
        mutation: addReplyMutation,
        variables: {
          rid: this.rid,
          comment: this.comment,
          active: 1,
        },
        update: (cache, { data: { addReply } }) => {
          console.log(addReply);
          this.replied = true;
        },
      });
      this.$router.go();
    },
  },

  apollo: {
    review: {
      query: getReviewQuery,
      variables() {
        return {
          rid: this.rid,
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
  width: 90%;
  margin: 10% auto;
}
.green {
  color: green;
}

.back,
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
}
.back {
  margin: 20px 0;
}
.back:hover,
.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.back:active,
.submitButton:active {
  position: relative;
}

.updateReview {
  text-align: left;
}

.form-group.col-md-6 {
  margin-bottom: 0;
}

label {
  font-size: 4vw;
  font-weight: bold;
}

.form-group input {
  height: 10vw;
  padding: 2px 10px;
  border: 1px solid #f6d185;
  font-size: 3.5vw;
}

@media screen and (min-width: 640px) {
  .results {
    width: 75%;
    margin: 5% auto;
  }
  label {
    font-size: 2.2vw;
  }
  .form-group input {
    height: 3vw;
    font-size: 2vw;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .submitButton {
    padding: 6px 60px;
  }
}

@media screen and (min-width: 999px) {
  label {
    font-size: 1.8vw;
  }
  .form-group input {
    height: 4vw;
    font-size: 1.5vw;
  }
}

@media screen and (min-width: 999px) {
  label {
    font-size: 1.2vw;
  }
  .form-group input {
    height: 3.5vw;
    font-size: 1.1vw;
  }
}

@media screen and (min-width: 1200px) {
  label {
    font-size: 3vw;
  }
  .form-group input {
    height: 2.5vw;
    font-size: 0.8vw;
  }
}
</style>
