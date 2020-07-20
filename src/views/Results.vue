<template>
  <div class="results main-container">
    <h1>All Companys for: " {{companyCat}} "</h1>
    <div v-if="category" class="apollo">
      <div class="data" v-for="company in category.companys" :key="company.cid">
        <a :href="'/' + company.name + '/' + company.cid">
          <div class="result">
            <h3>Company Name: {{ company.name }}</h3>
            <p>Company Phone:{{ company.phone }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import getCompanysQuery from "../query/allBusiness.js";

export default {
  name: "Results",

  data() {
    return {
      company: "",
      location: "",
      companyCat: "",
      category:null,
    };
  },

  created() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.location = params.get("location");
    this.company = params.get("company");
    this.companyCat = params.get("category");
  },

  apollo: {
    category: {
      query: getCompanysQuery,
      variables() {
        return {
          companyCat: this.companyCat,
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
}

.result {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 5vw 3vw;
  border-radius: 5px;
  width: 90%;
  margin: 30px auto;
}

.results a {
  text-decoration: none;
  font-size: 16px;
  color: black;
  cursor: pointer;
}

@media screen and (min-width: 999px) {
.result {
  width: 60%;
}

}
</style>
