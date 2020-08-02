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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="company in allCompanys" :key="company.cid">
                <th scope="row">{{ company.cid }}</th>
                <td>{{ company.name }}</td>
                <td>{{ company.fname }} {{ company.lname }}</td>
                <td v-if="company.address2 !== '' ">
                  {{ company.address1 }},{{ company.address2 }},{{
                    company.city
                  }} - {{ company.zip }}
                </td>
                <td v-else>
                  {{ company.address1 }},{{
                    company.city
                  }} - {{ company.zip }}
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
                    ><button class="btn btn-danger">Edit</button></a
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

<!--
      {
        "cid": "1",
        "name": "Pro-Precision Electrical Contracting LLC",
        "fname": "John",
        "lname": "Smith",
        "address1": "9730 SW 220th St",
        "address2": "",
        "city": "Miami",
        "state": "FL",
        "zip": "33190",
        "categoryid": "1",
        "descr": "Professional electricians in the Miami area.  Call us and we will be there within 1 hour, day or night!  In business since 1835.",
        "website": "proprecisionelectrical.co",
        "phone": "305-439-1784",
        "logo": "",
        "loginid": "2",
        "suggested": 0,
        "favorite": 0,
        "approved": 1,
        "hours": {
          "cid": "1",
          "monstart": "09:00:00",
          "monend": "17:00:00",
          "tuestart": "09:00:00",
          "tueend": "17:00:00",
          "wedstart": "09:00:00",
          "wedend": "17:00:00",
          "thustart": "09:00:00",
          "thuend": "17:00:00",
          "fristart": "09:00:00",
          "friend": "17:00:00",
          "satstart": "09:00:00",
          "satend": "17:00:00",
          "sunstart": "09:00:00",
          "sunend": "17:00:00"
        },
        "ratings": {
          "cid": "1",
          "rating": "4",
          "revcount": "2",
          "ranking": "1"
        },
        "reviews": [
          {
            "rid": "1",
            "cid": "1",
            "reviewerid": "2",
            "quality": 5,
            "value": 3,
            "timeliness": 4,
            "experience": 1,
            "satisfaction": 1,
            "overall": 2,
            "comments": "Well, when he walked in, he broke my door frame!  He was so tall!  Like 8 foot tall, and let me tell you.  I am only 5 foot two, so he was like a giant to me and I was shocked and some part of my brain kicked in and I was like, I am about to get sassy if he does a bad job.  My fingers even snapped! I was like, uh-uh and so he tried to fix my ceiling fan and when he was done and he left, my ceiling fan was hanging by a wire.  A wire people!  So I was shook.",
            "fname": "Lex",
            "lname": "A",
            "email": "lex@a.com",
            "active": 1,
            "reviewer": {
              "reviewerid": "2",
              "fname": "Lexi",
              "lname": "A",
              "city": "Coral Springs",
              "state": "FL"
            }
          }
        ],
        "owner": {
          "loginid": "2",
          "email": "abi@gmail.com",
          "type": "B",
          "fname": "Abi",
          "lname": "M",
          "active": 1
        },
        "categoryname": {"name":"Electrician"},
      },

 -->

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import getAllCompanysQuery from "../query/getAllBusiness.js";


export default {
  name: "AdminDashboard",
  data() {
    return {
      allCompanys: null,
      adminFName: this.$session.get("fname"),
      adminLName: this.$session.get("lname"),
    };
  },

  beforeCreate(){
    if (!this.$session.exists()|| this.$session.get("type") !== "A") {
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

.btn.logout {
  float: right;
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

.btn.logout:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.btn.logout:active {
  position: relative;
}
</style>
