<template>
  <div class="results main-container">
    <div class="updateBusiness">
      <a :href="'/bdashboard'"><button class="back">Back</button></a>
      <br />

      <p v-if="show" class="green">Data Updated Successfully</p>
      <div v-if="ownerCompany">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Business Name *"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="ownerCompany.name"
              required
            ></b-form-input>
          </b-form-group>

          
          <b-form-group id="input-group-2" label="City & State *" label-for="input-2">
            <b-form-input id="input-2" v-model="ownerCompany.city" disabled></b-form-input>
          </b-form-group>
          <p class="link">Click <a :href="'/company/edit/'+ownerCompany.name+'/'+ownerCompany.cid+''" target="_blank">here</a> to change City & State </p>
          
          <b-form-group id="input-group-3" label="Website *" label-for="input-3">
            <b-form-input id="input-3" v-model="ownerCompany.website" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Contact First Name" label-for="input-4">
            <b-form-input id="input-4" v-model="ownerCompany.fname"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Contact Last Name" label-for="input-5">
            <b-form-input id="input-5" v-model="ownerCompany.lname"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Phone" label-for="input-6">
            <b-form-input id="input-6" v-model="ownerCompany.phone"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="Postal Code" label-for="input-7">
            <b-form-input id="input-7" v-model="ownerCompany.zip"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-8" label="Address" label-for="input-8">
            <b-form-input id="input-8" v-model="ownerCompany.address1"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-9" label="Address 2" label-for="input-9">
            <b-form-input id="input-9" v-model="ownerCompany.address2"></b-form-input>
          </b-form-group>

          <b-form-group
            id="textarea-1"
            label="Business Description"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              v-model="ownerCompany.descr"
            ></b-form-textarea>
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
import getCompanyByLoginIdQuery from "../query/getCompanyByLoginId.js";
import updateBusinessMutation from "../query/updateBusiness.js";

export default {
  name: "EditBusiness",

  data() {
    return {
      loginid: this.$session.get("loginid"),
      file: null,
      show: false,
    };
  },

  beforeCreate: function() {
    if (!this.$session.exists() || this.$session.get("type") !== "B") {
      this.$router.push("/");
    }
  },

  methods: {
    async onSubmit() {
      await this.$apollo.mutate({
        // Query
        mutation: updateBusinessMutation,
        variables: {
          cid: this.ownerCompany.cid,
          name: (this.ownerCompany.name).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          fname: (this.ownerCompany.fname).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          lname: (this.ownerCompany.lname).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          address1: (this.ownerCompany.address1).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          address2: (this.ownerCompany.address2).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          zip: (this.ownerCompany.zip).replace(/[^A-Z0-9]/ig, " "),
          categoryid: this.ownerCompany.categoryid,
          descr: (this.ownerCompany.descr).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          website: (this.ownerCompany.website).replace(/[^A-Z0-9,./?:@&$#!()-]/ig, " "),
          phone: (this.ownerCompany.phone).replace(/[^A-Z0-9]/ig, " "),
          suggested: parseInt(this.ownerCompany.suggested),
          favorite: parseInt(this.ownerCompany.favorite),
          approved: parseInt(this.ownerCompany.approved),
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
            "http://165.22.34.223:4000/upload/" + this.ownerCompany.cid,
            formData
          );
        } catch (err) {
          console.log(err);
        }

        this.show = true;
      }
    },
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

#textarea,label[for="file"] {
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

  #textarea,label[for="file"] {
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
    font-size: 1.2vw;
  }
  .form-group input {
    height: 3.5vw;
    font-size: 1.1vw;
  }


  #textarea,label[for="file"] {
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

  #textarea,label[for="file"] {
    font-size: 1vw;
  }
}
</style>
