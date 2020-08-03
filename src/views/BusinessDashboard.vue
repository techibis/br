<template>
  <div class="dashboard">
    <h2>Welcome {{ this.ownerFName }} {{ this.ownerLName }}</h2>
    <hr />
    <br />
    <div v-if="ownerCompany">
      <a :href="'/bdashboard/edit/' + ownerCompany.name">
        <button class="btn btn-danger">Edit Business Information</button>
      </a>
      <h2>{{ ownerCompany.name }}</h2>
      <div class="data">
        <div>
          <p>id:{{ ownerCompany.cid }}</p>
          <p>Contact Person: {{ ownerCompany.fname }} {{ ownerCompany.lname }}</p>
          <p>Address1: {{ ownerCompany.address1 }}</p>
          <p v-if="ownerCompany.address2.length !== 0">Address2: {{ ownerCompany.address2 }}</p>
          <p>City: {{ ownerCompany.city }}</p>
          <p>State: {{ ownerCompany.state }}</p>
          <p>Zip: {{ ownerCompany.zip }}</p>
          <p>Categoryid: {{ ownerCompany.categoryid }}</p>
          <p>Description: {{ ownerCompany.descr }}</p>
          <p>Website: {{ ownerCompany.website }}</p>
          <p>Phone: {{ ownerCompany.phone }}</p>
          <p v-if="ownerCompany.favorite === 1 ">Staff Favorite: Yes</p>
          <p v-else>Staff Favorite: No</p>
          <p v-if="ownerCompany.approved === 1 ">Status : Appoved</p>
          <p v-else>Status : Pending</p>
        </div>
        <br />
        <hr />
        <div v-if="ownerCompany.hours !== null">
          <h3>Business Hours :</h3>
          <br />
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
        <b-form @submit.prevent="updateHours">
          <b-form-checkbox
            id="checkbox-1"
            v-model="checked"
            name="checkbox-1"
          >Click to update business hours.</b-form-checkbox>
          <div v-if="checked">
            <br />
            <p v-if="show">Business Hours has been updated successfully</p>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group label="Monday Start" label-for="input-1">
                  <b-form-select :options="options" v-model="ownerCompany.hours.monstart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group label="Monday End" label-for="input-2">
                  <b-form-select :options="options" v-model="ownerCompany.hours.monend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group label="Tuesday Start" label-for="input-3">
                  <b-form-select :options="options" v-model="ownerCompany.hours.tuestart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group label="Tuesday End" label-for="input-4">
                  <b-form-select :options="options" v-model="ownerCompany.hours.tueend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group label="Wednesday Start" label-for="input-5">
                  <b-form-select :options="options" v-model="ownerCompany.hours.wedstart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group label="Wednesday End" label-for="input-6">
                  <b-form-select :options="options" v-model="ownerCompany.hours.wedend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group id="input-group-7" label="Thursday Start" label-for="input-7">
                  <b-form-select :options="options" v-model="ownerCompany.hours.thustart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group id="input-group-8" label="Thursday End" label-for="input-8">
                  <b-form-select :options="options" v-model="ownerCompany.hours.thuend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group id="input-group-9" label="Friday Start" label-for="input-9">
                  <b-form-select :options="options" v-model="ownerCompany.hours.fristart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group id="input-group-10" label="Friday End" label-for="input-10">
                  <b-form-select :options="options" v-model="ownerCompany.hours.friend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group id="input-group-11" label="Saturday Start" label-for="input-11">
                  <b-form-select :options="options" v-model="ownerCompany.hours.satstart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <p>Saturday End</p>
                <b-form-select :options="options" v-model="ownerCompany.hours.satend" required></b-form-select>
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <b-form-group id="input-group-13" label="Sunday Start" label-for="input-13">
                  <b-form-select :options="options" v-model="ownerCompany.hours.sunstart" required></b-form-select>
                </b-form-group>
              </div>
              <div class="form-group col-md-6">
                <b-form-group id="input-group-14" label="Sunday End" label-for="input-14">
                  <b-form-select :options="options" v-model="ownerCompany.hours.sunend" required></b-form-select>
                </b-form-group>
              </div>
            </div>
            <b-button type="submit" class="submitButton">Update Business Hours</b-button>
          </div>
        </b-form>
        <br />
        <hr />
        <div v-if="ownerCompany.ratings !== null">
          <h3>Ratings :</h3>
          <br />
          <p>Rating : {{ ownerCompany.ratings.rating }}</p>
          <p>Total Reviews : {{ ownerCompany.ratings.revcount }}</p>
          <p>Total Ranking: {{ ownerCompany.ratings.ranking }}</p>
        </div>
        <br />
        <hr />
        <div v-if="ownerCompany.reviews.length !== 0">
          <h3>Reviews :</h3>
          <br />
          <div v-for="review in ownerCompany.reviews" :key="review.rid">
            <a :href="'/review-status/' + review.rid" target="_blank">
              <button class="btn btn-danger">Reply / Edit Review Status</button>
            </a>
            <p>Review Id : {{ review.rid }}</p>
            <p>Quality : {{ review.quality }}</p>
            <p>Value : {{ review.value }}</p>
            <p>Timeliness : {{ review.timeliness }}</p>
            <p>Experience : {{ review.experience }}</p>
            <p>Satisfaction : {{ review.satisfaction }}</p>
            <p>Comments : {{ review.comments }}</p>
            <p>date : {{ review.date }}</p>
            <p>Reviewer : {{ review.fname }} {{ review.lname }}</p>
            <p v-if="review.active === 1">Review Status: Active</p>
            <p v-else>Review Status: Inactive</p>
            <p v-if="review.reviewer !== null">
              Reviewer Location : {{ review.reviewer.city }},
              {{ review.reviewer.state }}
            </p>
            <p v-if="review.reply !== null">
              Reply by Owner : {{ review.reply.comment }} - on {{ review.reply.date }}
            </p>
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import getCompanyByLoginIdQuery from "../query/getCompanyByLoginId.js";
import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import updateBusinessHoursMutation from "../query/updateBusinessHours.js";
Vue.use(BootstrapVue);

export default {
  name: "BusinessDashboard",
  data() {
    return {
      loginid: this.$session.get("loginid"),
      ownerFName: this.$session.get("fname"),
      ownerLName: this.$session.get("lname"),
      checked: false,
      success: false,
      options: [
        { value: "Closed", text: "Closed" },
        { value: "00:00:00 AM", text: "00:00:00 AM" },
        { value: "00:30:00 AM", text: "00:30:00 AM" },
        { value: "01:00:00 AM", text: "01:00:00 AM" },
        { value: "01:30:00 AM", text: "01:30:00 AM" },
        { value: "02:00:00 AM", text: "02:00:00 AM" },
        { value: "02:30:00 AM", text: "02:30:00 AM" },
        { value: "03:00:00 AM", text: "03:00:00 AM" },
        { value: "03:30:00 AM", text: "03:30:00 AM" },
        { value: "04:00:00 AM", text: "04:00:00 AM" },
        { value: "04:30:00 AM", text: "04:30:00 AM" },
        { value: "05:00:00 AM", text: "05:00:00 AM" },
        { value: "05:30:00 AM", text: "05:30:00 AM" },
        { value: "06:00:00 AM", text: "06:00:00 AM" },
        { value: "06:30:00 AM", text: "06:30:00 AM" },
        { value: "07:00:00 AM", text: "07:00:00 AM" },
        { value: "07:30:00 AM", text: "07:30:00 AM" },
        { value: "08:00:00 AM", text: "08:00:00 AM" },
        { value: "08:30:00 AM", text: "08:30:00 AM" },
        { value: "09:00:00 AM", text: "09:00:00 AM" },
        { value: "09:30:00 AM", text: "09:30:00 AM" },
        { value: "10:00:00 AM", text: "00:00:00 AM" },
        { value: "10:30:00 AM", text: "00:30:00 AM" },
        { value: "11:00:00 AM", text: "11:00:00 AM" },
        { value: "11:30:00 AM", text: "11:30:00 AM" },
        { value: "12:00:00 PM", text: "12:00:00 PM" },
        { value: "12:30:00 PM", text: "12:30:00 PM" },
        { value: "01:00:00 PM", text: "01:00:00 PM" },
        { value: "01:30:00 PM", text: "01:30:00 PM" },
        { value: "02:00:00 PM", text: "02:00:00 PM" },
        { value: "02:30:00 PM", text: "02:30:00 PM" },
        { value: "03:00:00 PM", text: "03:00:00 PM" },
        { value: "03:30:00 PM", text: "03:30:00 PM" },
        { value: "04:00:00 PM", text: "04:00:00 PM" },
        { value: "04:30:00 PM", text: "04:30:00 PM" },
        { value: "05:00:00 PM", text: "05:00:00 PM" },
        { value: "05:30:00 PM", text: "05:30:00 PM" },
        { value: "06:00:00 PM", text: "06:00:00 PM" },
        { value: "06:30:00 PM", text: "06:30:00 PM" },
        { value: "07:00:00 PM", text: "07:00:00 PM" },
        { value: "07:30:00 PM", text: "07:30:00 PM" },
        { value: "08:00:00 PM", text: "08:00:00 PM" },
        { value: "08:30:00 PM", text: "08:30:00 PM" },
        { value: "09:00:00 PM", text: "09:00:00 PM" },
        { value: "09:30:00 PM", text: "09:30:00 PM" },
        { value: "10:00:00 PM", text: "10:00:00 PM" },
        { value: "10:30:00 PM", text: "10:30:00 PM" },
        { value: "11:00:00 PM", text: "11:00:00 PM" },
        { value: "11:30:00 PM", text: "11:30:00 PM" },
      ],
    };
  },

  beforeCreate: function () {
    if (!this.$session.exists() || this.$session.get("type") !== "B") {
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

    updateHours() {
      this.$apollo.mutate({
        // Query
        mutation: updateBusinessHoursMutation,
        variables: {
          cid: this.ownerCompany.cid,
          monstart: this.ownerCompany.hours.monstart,
          monend: this.ownerCompany.hours.monend,
          tuestart: this.ownerCompany.hours.tuestart,
          tueend: this.ownerCompany.hours.tueend,
          wedstart: this.ownerCompany.hours.wedstart,
          wedend: this.ownerCompany.hours.wedend,
          thustart: this.ownerCompany.hours.thustart,
          thuend: this.ownerCompany.hours.thuend,
          fristart: this.ownerCompany.hours.fristart,
          friend: this.ownerCompany.hours.friend,
          satstart: this.ownerCompany.hours.satstart,
          satend: this.ownerCompany.hours.satend,
          sunstart: this.ownerCompany.hours.sunstart,
          sunend: this.ownerCompany.hours.sunend,
        },
        update: (cache, { data: { updateBusinessHours } }) => {
          console.log(updateBusinessHours);
        },
      });
      this.show = true;
      this.checked = false;
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

.custom-control-label {
  font-size: 12px;
}

.btn-danger {
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

.btn-danger:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.btn-danger:active {
  position: relative;
}
</style>
