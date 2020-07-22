<template>
  <div class="dashboard">
    <div class="container">
      <h1>Welcome {{ adminFName }} {{ adminLName }}</h1>
      <hr />
      <div v-if="allCompanys">
        <div v-if="allCompanys.length !== 0">
          <table class="table table-striped table-dark table-center">
            <thead>
              <tr>
                <th scope="col">Company ID</th>
                <th scope="col">Company name</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Address</th>
                <th scope="col">Website</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th scope="col">Staff Favorite</th>
                <th scope="col">Suggested</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="company in allCompanys" :key="company.cid">
                <th scope="row">{{ company.cid }}</th>
                <td>{{ company.name }}</td>
                <td>{{ company.fname }} {{ company.lname }}</td>
                <td>
                  {{ company.address1 }},{{ company.address2 }},{{
                    company.city
                  }}, {{ company.state }}-{{ company.zip }}
                </td>
                <td>{{ company.website }}</td>
                <td>{{ company.phone }}</td>
                <td v-if="company.approved === 1">Approved</td>
                <td v-else>Pending</td>
                <td v-if="company.favorite === 1">Yes</td>
                <td v-else>No</td>
                <td v-if="company.suggested === 1">Yes</td>
                <td v-else>No</td>
                <td>
                  <a
                    :href="
                      '/vue-admin/edit/' + company.name + '/' + company.cid
                    "
                    ><button class="btn btn-danger">view</button></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
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

import getAllCompanysQuery from "../query/getAllBusiness.js";

export default {
  name: "ReviewerDashboard",
  data() {
    return {
      allCompanys: null,
      adminFName: this.$session.get("fname"),
      adminLName: this.$session.get("lname"),
    };
  },

  beforeCreate: function() {
    location.reload();
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },


  apollo: {
    allCompanys: {
      query: getAllCompanysQuery,
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
  padding: 40px;
  background: white;
  color: black;
}


</style>
