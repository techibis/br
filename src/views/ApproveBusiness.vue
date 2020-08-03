<template>
  <div class="results main-container">
    <div class="updateBusiness">
      <a :href="'/vue-admin'">
        <button class="back">Back</button>
      </a>
      <br />

      <p v-if="show" class="green">Data Updated Successfully</p>
      <div v-if="company">
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="input-group-1" label="Business Name *" label-for="input-1">
            <b-form-input id="input-1" v-model="company.name" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="City & State *" label-for="input-2">
            <b-form-input id="input-2" v-model="company.city" disabled></b-form-input>
          </b-form-group>
          <p class="link">
            Click
            <a :href="'/company/edit/'+company.name+'/'+company.cid+''" target="_blank">here</a> to change City & State
          </p>

          <b-form-group id="input-group-3" label="Website *" label-for="input-3">
            <b-form-input id="input-3" v-model="company.website" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Contact First Name" label-for="input-4">
            <b-form-input id="input-4" v-model="company.fname"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Contact Last Name" label-for="input-5">
            <b-form-input id="input-5" v-model="company.lname"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Phone" label-for="input-6">
            <b-form-input id="input-6" v-model="company.phone"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Postal Code" label-for="input-7">
            <b-form-input id="input-7" v-model="company.zip"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-8" label="Address" label-for="input-8">
            <b-form-input id="input-8" v-model="company.address1"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-9" label="Address 2" label-for="input-9">
            <b-form-input id="input-9" v-model="company.address2"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-10" label="Suggested" label-for="input-10">
            <b-form-input id="input-10" v-model="company.suggested"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-11" label="Favorite" label-for="input-11">
            <b-form-input id="input-11" v-model="company.favorite"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-12" label="Approved" label-for="input-12">
            <b-form-input id="input-12" v-model="company.approved"></b-form-input>
          </b-form-group>

          <b-form-group id="textarea-1" label="Business Description" label-for="textarea">
            <b-form-textarea id="textarea" v-model="company.descr"></b-form-textarea>
          </b-form-group>

          <b-form-group label="Company Logo:" label-for="file">
            <b-form-file
              v-model="file"
              id="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : "" }}</div>
          </b-form-group>

          <b-button type="submit" class="submitButton">Submit</b-button>
        </b-form>
      </div>
      <hr />
      <b-form @submit.prevent="updateHours">
        <b-form-checkbox
          id="checkbox-1"
          v-model="checked"
          name="checkbox-1"
        >Click to update business hours.</b-form-checkbox>
        <div v-if="checked">
          <br />
          <p v-if="success">Business Hours has been updated successfully</p>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group label="Monday Start" label-for="input-1">
                <b-form-select :options="options" v-model="company.hours.monstart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group label="Monday End" label-for="input-2">
                <b-form-select :options="options" v-model="company.hours.monend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group label="Tuesday Start" label-for="input-3">
                <b-form-select :options="options" v-model="company.hours.tuestart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group label="Tuesday End" label-for="input-4">
                <b-form-select :options="options" v-model="company.hours.tueend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group label="Wednesday Start" label-for="input-5">
                <b-form-select :options="options" v-model="company.hours.wedstart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group label="Wednesday End" label-for="input-6">
                <b-form-select :options="options" v-model="company.hours.wedend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group id="input-group-7" label="Thursday Start" label-for="input-7">
                <b-form-select :options="options" v-model="company.hours.thustart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group id="input-group-8" label="Thursday End" label-for="input-8">
                <b-form-select :options="options" v-model="company.hours.thuend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group id="input-group-9" label="Friday Start" label-for="input-9">
                <b-form-select :options="options" v-model="company.hours.fristart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group id="input-group-10" label="Friday End" label-for="input-10">
                <b-form-select :options="options" v-model="company.hours.friend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group id="input-group-11" label="Saturday Start" label-for="input-11">
                <b-form-select :options="options" v-model="company.hours.satstart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <p>Saturday End</p>
              <b-form-select :options="options" v-model="company.hours.satend" required></b-form-select>
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group id="input-group-13" label="Sunday Start" label-for="input-13">
                <b-form-select :options="options" v-model="company.hours.sunstart" required></b-form-select>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group id="input-group-14" label="Sunday End" label-for="input-14">
                <b-form-select :options="options" v-model="company.hours.sunend" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          <b-button type="submit" class="submitButton">Update Business Hours</b-button>
        </div>
      </b-form>
      <br />
      <br />
      <hr />
      <div v-if="company">
        <div v-if="company.reviews.length !== 0">
          <h3>Reviews :</h3>
          <br />
          <div v-for="review in company.reviews" :key="review.rid">
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
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
import axios from "axios";

import getCompanyQuery from "../query/business.js";
import updateBusinessMutation from "../query/updateBusiness.js";

import updateBusinessHoursMutation from "../query/updateBusinessHours.js";

export default {
  name: "ApproveBusiness",

  data() {
    return {
      cid: "",
      file: null,
      show: false,
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
    if (!this.$session.exists() || this.$session.get("type") !== "A") {
      this.$router.push("/");
    }
  },

  created() {
    this.cid = this.$route.params.cid;
  },

  methods: {
    async onSubmit() {
      await this.$apollo.mutate({
        // Query
        mutation: updateBusinessMutation,
        variables: {
          cid: this.cid,
          name: this.company.name,
          fname: this.company.fname,
          lname: this.company.lname,
          address1: this.company.address1,
          address2: this.company.address2,
          city: this.city,
          lat: parseFloat(this.lat),
          lon: parseFloat(this.lon),
          zip: this.company.zip,
          categoryid: this.company.categoryid,
          descr: this.company.descr,
          website: this.company.website,
          phone: this.company.phone,
          suggested: parseInt(this.company.suggested),
          favorite: parseInt(this.company.favorite),
          approved: parseInt(this.company.approved),
        },
        update: (cache, { data: { updateBusiness } }) => {
          console.log(updateBusiness);
        },
      });

      // upload file to backend
      if (this.file !== null) {
        const formData = new FormData();
        formData.append("file", this.file);

        try {
          await axios.post(
            "http://localhost:4000/upload/" + this.cid,
            formData
          );
        } catch (err) {
          console.log(err);
        }
      }

      this.show = true;
    },

    updateHours() {
      this.$apollo.mutate({
        // Query
        mutation: updateBusinessHoursMutation,
        variables: {
          cid: this.company.cid,
          monstart: this.company.hours.monstart,
          monend: this.company.hours.monend,
          tuestart: this.company.hours.tuestart,
          tueend: this.company.hours.tueend,
          wedstart: this.company.hours.wedstart,
          wedend: this.company.hours.wedend,
          thustart: this.company.hours.thustart,
          thuend: this.company.hours.thuend,
          fristart: this.company.hours.fristart,
          friend: this.company.hours.friend,
          satstart: this.company.hours.satstart,
          satend: this.company.hours.satend,
          sunstart: this.company.hours.sunstart,
          sunend: this.company.hours.sunend,
        },
        update: (cache, { data: { updateBusinessHours } }) => {
          console.log(updateBusinessHours);
        },
      });
      this.success = true;
      this.checked = false;
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

.link {
  margin-bottom: 20px;
}

.back,
.submitButton,
.btn-danger {
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

.back,
.submitButton {
  margin: 20px 0;
}

.back:hover,
.btn-danger:hover,
.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.back:active,
.submitButton:active {
  position: relative;
}

.btn-danger {
  float: right;
}

.updateBusiness {
  text-align: left;
}

.form-group.col-md-6 {
  margin-bottom: 0;
}

label {
  font-size: 4vw;
  font-weight: bold;
}

label[for="file"],
#textarea {
  font-size: 4vw;
  border-color:#f6d185;
}

.form-group input{
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
  label[for="file"],
  #textarea {
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
  label[for="file"],
  #textarea {
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

  label[for="file"],
  #textarea {
    font-size: 1.2vw;
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
  label[for="file"],
  #textarea {
    font-size: 1vw;
  }
}
</style>
