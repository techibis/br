<template>
  <div class="results main-container">
    <div class="updateBusiness">
      <a :href="'/vue-admin'"><button class="back">Back</button></a>
      <br />

      <p v-if="show" class="green">Data Updated Successfully</p>
      <div v-if="company">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Business Name *"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="company.name"
              required
            ></b-form-input>
          </b-form-group>

          <div class="row">
            <div class="form-group col-md-6">
              <b-form-group
                id="input-group-2"
                label="City*"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="company.city"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="form-group col-md-6">
              <b-form-group
                id="input-group-3"
                label="State *"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="company.state"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            id="input-group-4"
            label="Website *"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="company.website"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="Contact First Name"
            label-for="input-5"
          >
            <b-form-input id="input-5" v-model="company.fname"> </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Contact Last Name"
            label-for="input-6"
          >
            <b-form-input id="input-6" v-model="company.lname"> </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Phone" label-for="input-7">
            <b-form-input id="input-7" v-model="company.phone"> </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-8"
            label="Postal Code"
            label-for="input-8"
          >
            <b-form-input id="input-8" v-model="company.zip"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-9" label="Address" label-for="input-9">
            <b-form-input
              id="input-9"
              v-model="company.address1"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-10"
            label="Address 2"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              v-model="company.address2"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-11"
            label="Suggested"
            label-for="input-11"
          >
            <b-form-input
              id="input-11"
              v-model="company.suggested"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-12"
            label="Favorite"
            label-for="input-12"
          >
            <b-form-input
              id="input-12"
              v-model="company.favorite"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-13"
            label="Approved"
            label-for="input-13"
          >
            <b-form-input
              id="input-13"
              v-model="company.approved"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="textarea-1"
            label="Business Description"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              v-model="company.descr"
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" class="submitButton">Submit</b-button>
        </b-form>
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

import getCompanyQuery from "../query/business.js";
import updateBusinessMutation from "../query/updateBusiness.js";



export default {
  name: "ApproveBusiness",

  data() {
    return {
      cid: "",
      show: false,
    };
  },

  beforeCreate: function() {
    if (!this.$session.exists() && this.$session.get("type") !== "A") {
      this.$router.push("/");
    }
    this.name = this.company.name;
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
          city: this.company.city,
          state: this.company.state,
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
      this.show = true;
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
.back,
.submitButton {
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

.back:hover,
.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.back:active,
.submitButton:active {
  position: relative;
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
  border-color: #f6d185;
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
