<template>
  <div class="addBusiness">
    <b-form @submit.prevent="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Business Name *" label-for="input-1">
        <b-form-input id="input-1" v-model="name" required></b-form-input>
      </b-form-group>

      <!-- <div class="row">
        <div class="form-group col-md-6">
          <b-form-group id="input-group-2" label="City & State *" label-for="input-2">
            <b-form-input id="input-2" v-model="city" required></b-form-input>
          </b-form-group>
        </div>
      </div>-->
      <label>City & State *</label>
      <div id="autocomplete" class="autocomplete-container"></div>
      <br />

      <b-form-group id="input-group-3" label="Website *" label-for="input-3">
        <b-form-input id="input-3" v-model="website" type="url" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Contact First Name" label-for="input-4">
        <b-form-input id="input-4" v-model="fname"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Contact Last Name" label-for="input-5">
        <b-form-input id="input-5" v-model="lname"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Phone" label-for="input-6">
        <b-form-input id="input-6" v-model="phone" type="tel"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Postal Code" label-for="input-7">
        <b-form-input id="input-7" v-model="zip"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-8" label="Address" label-for="input-8">
        <b-form-input id="input-8" v-model="address1"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Address 2" label-for="input-9">
        <b-form-input id="input-9" v-model="address2"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-10" label="Category & Subcategories *" label-for="input-10">
        <b-form-select v-model="categoryid" id="select">
          <option disabled value>Please select one Category</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{
            cat.value
            }}
          </option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="textarea-1" label="Business Description" label-for="textarea">
        <b-form-textarea
          id="textarea"
          v-model="descr"
          placeholder="Write about the Business..."
          rows="3"
          max-rows="16"
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

      <vue-recaptcha sitekey="Your key here"></vue-recaptcha>
      <b-button type="submit" class="submitButton">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import VueRecaptcha from "vue-recaptcha";

import addBusinessMutation from "../query/addBusiness.js";

import axios from "axios";

import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

export default {
  components: { VueRecaptcha },
  props: ["source"],
  data(props) {
    return {
      cid: null,
      name: "",
      fname: "",
      lname: "",
      address1: "",
      address2: "",
      city: "",
      lat: "",
      lon: "",
      zip: "",
      categoryid: null,
      descr: "",
      website: "",
      phone: "",
      file: null,
      logo: "",
      loginid: null,
      suggested: props.source,
      favorite: 0,
      approved: 0,
      show: true,
      categories: [
        { id: "1", value: "Acupuncturists" },
        { id: "2", value: "Advertising and Marketing" },
        { id: "3", value: "Advertising and Marketing > Promotional Products" },
        { id: "4", value: "Air Duct and Dryer Vent Cleaning" },
        { id: "5", value: "Amusement and Recreation Services" },
        { id: "6", value: "Amusement and Recreation Services > Combat Sports" },
        {
          id: "7",
          value:
            "Amusement and Recreation Services > Combat Sports > Laser Tag Center",
        },
        {
          id: "8",
          value:
            "Amusement and Recreation Services > Combat Sports > Paintball Center",
        },
        { id: "9", value: "Amusement and Recreation Services > Water Sports" },
        {
          id: "10",
          value:
            "Amusement and Recreation Services > Water Sports > Fishing Charter",
        },
        {
          id: "11",
          value:
            "Amusement and Recreation Services > Water Sports > Jet Ski Rental",
        },
        { id: "12", value: "Appliance Repair Services" },
        { id: "13", value: "Architects" },
        { id: "14", value: "Arts and Entertainment" },
        { id: "15", value: "Arts and Entertainment > Arcades and Amusements" },
        { id: "16", value: "Arts and Entertainment > Ballrooms" },
        { id: "17", value: "Arts and Entertainment > Clubs and Nightlife" },
        { id: "18", value: "Arts and Entertainment > Movies and Video" },
        { id: "19", value: "Arts and Entertainment > Music and Recording" },
        { id: "20", value: "Arts and Entertainment > News and Media" },
        { id: "21", value: "Arts and Entertainment > Theaters" },
        { id: "22", value: "Arts and Entertainment > Venues" },
        { id: "23", value: "Arts and Entertainment > Visual Arts" },
        { id: "24", value: "Attorneys and Law Firms" },
        { id: "25", value: "Attorneys and Law Firms > Appellate Attorneys" },
        { id: "26", value: "Attorneys and Law Firms > Business Attorneys" },
        { id: "27", value: "Attorneys and Law Firms > Civil Rights Attorneys" },
        { id: "28", value: "Attorneys and Law Firms > Criminal Attorneys" },
        { id: "29", value: "Attorneys and Law Firms > Divorce Attorneys" },
        { id: "30", value: "Attorneys and Law Firms > Employment Attorneys" },
        { id: "31", value: "Attorneys and Law Firms > Family Attorneys" },
        {
          id: "32",
          value: "Attorneys and Law Firms > Financial and Tax Attorneys",
        },
        {
          id: "33",
          value: "Attorneys and Law Firms > Government and Regulatory Law",
        },
        {
          id: "34",
          value: "Attorneys and Law Firms > Health and Medical Attorneys",
        },
        { id: "35", value: "Attorneys and Law Firms > Immigration Attorneys" },
        {
          id: "36",
          value: "Attorneys and Law Firms > Intellectual Property Attorneys",
        },
        {
          id: "37",
          value: "Attorneys and Law Firms > Personal Injury Attorneys",
        },
        {
          id: "38",
          value: "Attorneys and Law Firms > Product Liability Attorneys",
        },
        { id: "39", value: "Attorneys and Law Firms > Real Estate Attorneys" },
        {
          id: "40",
          value: "Attorneys and Law Firms > Specialized Legal Services",
        },
        {
          id: "41",
          value: "Attorneys and Law Firms > Toxic Exposure Attorneys",
        },
        {
          id: "42",
          value: "Attorneys and Law Firms > Trusts and Estates Attorneys",
        },
        { id: "43", value: "Auto" },
        { id: "44", value: "Auto > Aircraft" },
        { id: "45", value: "Auto > Auto Body" },
        { id: "46", value: "Auto > Auto Glass Services" },
        { id: "47", value: "Auto > Auto Parts and Accessories" },
        { id: "48", value: "Auto > Auto Repair" },
        { id: "49", value: "Auto > Auto Shops" },
        { id: "50", value: "Auto > Auto Shops > Maintenance Services" },
        { id: "51", value: "Auto > Boats" },
        { id: "52", value: "Auto > Buses" },
        { id: "53", value: "Auto > Car Rental Companies" },
        { id: "54", value: "Auto > Car Sales" },
        { id: "55", value: "Auto > Car Sharing" },
        { id: "56", value: "Auto > Car Washes" },
        { id: "57", value: "Auto > Dealers" },
        { id: "58", value: "Auto > Detailing" },
        { id: "59", value: "Auto > Inspections" },
        { id: "60", value: "Auto > Motorcycles" },
        { id: "61", value: "Auto > Oil Change" },
        { id: "62", value: "Auto > Parking" },
        { id: "63", value: "Auto > RVs" },
        { id: "64", value: "Auto > Tire Stores" },
        { id: "65", value: "Auto > Traffic and Driving Schools" },
        { id: "66", value: "Auto > Trailers" },
        { id: "67", value: "Auto > Trucks" },
        { id: "68", value: "Auto > Van Rental" },
        { id: "69", value: "Auto > Wraps" },
        { id: "70", value: "Bail Bonds" },
        { id: "71", value: "Bakeries" },
        { id: "72", value: "Barber Shops" },
        { id: "73", value: "Bars and Breweries" },
        { id: "74", value: "Beauty Salons and Spas" },
        { id: "75", value: "Bicycle Shops" },
        { id: "76", value: "Bookkeepers" },
        { id: "77", value: "Business Support Services" },
        { id: "78", value: "Business Support Services > Fundraising" },
        { id: "79", value: "Cabinet Showrooms" },
        { id: "80", value: "Carpet Cleaners" },
        { id: "81", value: "Catering Companies" },
        { id: "82", value: "Catering Companies > Personal Chef" },
        { id: "83", value: "Child Care Providers" },
        { id: "84", value: "Child and Youth Services" },
        { id: "85", value: "Chimney and Fireplace Services" },
        { id: "86", value: "Civic, Social, and Fraternal Associations" },
        { id: "87", value: "Commercial Contractors" },
        { id: "88", value: "Commercial Contractors > Concrete Mixing" },
        {
          id: "89",
          value: "Commercial Contractors > Concrete Repair or Mudjacking",
        },
        { id: "90", value: "Computer IT Services" },
        {
          id: "91",
          value: "Computer IT Services > Communications and Networking",
        },
        {
          id: "92",
          value:
            "Computer IT Services > Communications and Networking > Telephone System Providers",
        },
        { id: "93", value: "Computer IT Services > Computer Hardware" },
        { id: "94", value: "Computer IT Services > Computer Repair" },
        { id: "95", value: "Computer IT Services > Computer Services" },
        { id: "96", value: "Computer IT Services > Data Management" },
        { id: "97", value: "Computer IT Services > IT Compliance" },
        {
          id: "98",
          value: "Computer IT Services > IT Disaster Recovery Services",
        },
        { id: "99", value: "Computer IT Services > IT Outsourcing Services" },
        { id: "100", value: "Computer IT Services > IT Risk Management" },
        { id: "101", value: "Computer IT Services > IT Support" },
        { id: "102", value: "Computer IT Services > Information Security" },
        { id: "594", value: "Computer IT Services > Printers and Copiers" },
        { id: "595", value: "Computer IT Services > Security Services" },
        { id: "103", value: "Computer IT Services > Software" },
        {
          id: "104",
          value: "Computer IT Services > Software Developers and Consultants",
        },
        { id: "105", value: "Counseling Services" },
        { id: "106", value: "Counseling Services > Career" },
        { id: "107", value: "Counseling Services > Family" },
        { id: "108", value: "Counseling Services > Marriage" },
        { id: "109", value: "Counseling Services > Relationship" },
        { id: "110", value: "Dance Schools and Studios" },
        { id: "111", value: "Dentists and Orthodontists" },
        { id: "112", value: "Dentists and Orthodontists > Dentists" },
        {
          id: "113",
          value: "Dentists and Orthodontists > Dentists > Pediatric Dentistry",
        },
        { id: "114", value: "Dentists and Orthodontists > Orthodontists" },
        { id: "115", value: "Dry Cleaners" },
        { id: "116", value: "Ecommerce" },
        { id: "117", value: "Ecommerce > Jewelry" },
        { id: "118", value: "Ecommerce > Nutrition" },
        { id: "119", value: "Ecommerce > Nutrition > Dietary Supplements" },
        { id: "120", value: "Ecommerce > Nutrition > Herbal Supplements" },
        { id: "121", value: "Ecommerce > Nutrition > Mineral  Supplements" },
        { id: "122", value: "Ecommerce > Personal Care" },
        { id: "123", value: "Ecommerce > Specialty Food Store" },
        { id: "124", value: "Education" },
        { id: "125", value: "Education > Business Consulting" },
        { id: "126", value: "Education > College Consultation" },
        { id: "127", value: "Education > Education and Research Foundations" },
        { id: "128", value: "Education > Elementary Schools" },
        { id: "129", value: "Education > Fine Arts Education" },
        { id: "130", value: "Education > Football Coaching" },
        { id: "131", value: "Education > General Education" },
        { id: "132", value: "Education > Higher Education" },
        { id: "133", value: "Education > Highschools" },
        { id: "134", value: "Education > Language Studies" },
        { id: "135", value: "Education > Life Coaches" },
        { id: "136", value: "Education > Middle Schools" },
        { id: "137", value: "Education > Online Education" },
        { id: "138", value: "Education > Preschools and Kindergartens" },
        { id: "139", value: "Education > Primary Schools" },
        { id: "140", value: "Education > Private and Specialized Schools" },
        { id: "141", value: "Education > Professional and Trade Schools" },
        { id: "142", value: "Education > Risk Management" },
        { id: "143", value: "Education > Safety Training" },
        { id: "144", value: "Education > Seminars" },
        { id: "145", value: "Education > Sports Coaching" },
        { id: "146", value: "Education > Study Abroad Programs" },
        { id: "147", value: "Education > Training Programs" },
        { id: "148", value: "Education > Training Programs > K9" },
        { id: "149", value: "Education > Tutoring and Learning Centers" },
        { id: "150", value: "Employment Agencies" },
        { id: "151", value: "Engineering Services" },
        { id: "152", value: "Event Planners" },
        { id: "153", value: "Event Planners > Wedding" },
        { id: "154", value: "Eye Doctors and Optometrists" },
        { id: "155", value: "Family Doctors" },
        { id: "156", value: "Fencing Contractors" },
        { id: "157", value: "Finance" },
        { id: "158", value: "Finance > Accounting Firms and CPA" },
        { id: "159", value: "Finance > Auto Finance" },
        { id: "160", value: "Finance > Banking Services" },
        { id: "161", value: "Finance > Bookkeepers" },
        { id: "162", value: "Finance > Collection Services" },
        { id: "163", value: "Finance > Credit and Debt Management" },
        { id: "164", value: "Finance > Credit Cards" },
        { id: "165", value: "Finance > Financial Advisers" },
        { id: "166", value: "Finance > Investment Services" },
        { id: "167", value: "Finance > Loan Agents" },
        { id: "168", value: "Finance > Payment Processing Services" },
        { id: "169", value: "Finance > Personal Loans and Advances" },
        { id: "170", value: "Finance > Student Financial Services" },
        { id: "171", value: "Fire Protection" },
        { id: "172", value: "Fitness Centers" },
        { id: "173", value: "Fitness Centers > Fitness Classes" },
        { id: "174", value: "Fitness Centers > Fitness Equipment" },
        { id: "175", value: "Fitness Centers > Fitness Gyms" },
        { id: "176", value: "Fitness Centers > Personal Trainers" },
        { id: "177", value: "Fitness Centers > Pilates" },
        { id: "178", value: "Fitness Centers > Weight Training" },
        { id: "179", value: "Fitness Centers > Yoga Studios" },
        { id: "180", value: "Fitness and Recreational Sports Centers" },
        { id: "181", value: "Flooring Contractors" },
        { id: "182", value: "Flooring Contractors > Concrete Polishing" },
        { id: "183", value: "Food and Beverage" },
        { id: "184", value: "Food and Beverage > Beverages" },
        {
          id: "185",
          value: "Food and Beverage > Beverages > Beverage Distributor",
        },
        { id: "186", value: "Food and Beverage > Food Delivery Services" },
        {
          id: "187",
          value:
            "Food and Beverage > Food Delivery Services > Box Lunch Supplier",
        },
        { id: "188", value: "Funeral Homes and Services" },
        { id: "189", value: "Garage Door Contractors" },
        { id: "190", value: "Glasses and Contact Lenses" },
        { id: "191", value: "Hair Salons" },
        { id: "192", value: "Health and Medicine" },
        { id: "193", value: "Health and Medicine > Alternative Medicine" },
        { id: "194", value: "Health and Medicine > Chiropractors" },
        { id: "195", value: "Health and Medicine > Dental Surgeons" },
        { id: "196", value: "Health and Medicine > Dermatologists" },
        { id: "197", value: "Health and Medicine > Hearing Aids" },
        { id: "198", value: "Health and Medicine > Medical Aids and Supplies" },
        { id: "199", value: "Health and Medicine > Medical Billing" },
        { id: "200", value: "Health and Medicine > Medical Clinics" },
        {
          id: "201",
          value: "Health and Medicine > Medical Diagnostics and Labs",
        },
        { id: "202", value: "Health and Medicine > Medical Equipment" },
        { id: "203", value: "Health and Medicine > Medical Spas" },
        {
          id: "204",
          value: "Health and Medicine > Mental and Behavioral Health",
        },
        { id: "205", value: "Health and Medicine > Nutrition and Weight Loss" },
        {
          id: "206",
          value: "Health and Medicine > Pharmacies and Prescriptions",
        },
        { id: "207", value: "Health and Medicine > Physicians" },
        {
          id: "208",
          value: "Health and Medicine > Physicians > Family Doctors",
        },
        {
          id: "209",
          value:
            "Health and Medicine > Physicians > Family Doctors > Pediatricians",
        },
        { id: "210", value: "Health and Medicine > Reproductive Health" },
        {
          id: "211",
          value: "Health and Medicine > Reproductive Health > Obstetrics",
        },
        {
          id: "212",
          value:
            "Health and Medicine > Services for the Elderly and Persons with Disabilities",
        },
        { id: "213", value: "Home Health Care Providers" },
        {
          id: "214",
          value:
            "Home Health Care Providers > Services for the Elderly and Persons with Disabilities",
        },
        { id: "215", value: "Home Inspectors" },
        { id: "216", value: "Home Services" },
        { id: "217", value: "Home Services > Electricians" },
        {
          id: "218",
          value: "Home Services > Electricians > 24 Hour Electricians",
        },
        { id: "219", value: "Home Services > Electricians > Battery Repair" },
        { id: "220", value: "Home Services > Electricians > Battery Supplies" },
        { id: "221", value: "Home Services > Electricians > Cabling" },
        {
          id: "222",
          value: "Home Services > Electricians > Dry Cell Batteries",
        },
        {
          id: "223",
          value: "Home Services > Electricians > Electric Companies",
        },
        {
          id: "224",
          value: "Home Services > Electricians > Electric Motor Repair",
        },
        {
          id: "225",
          value: "Home Services > Electricians > Exterior Lighting",
        },
        {
          id: "226",
          value: "Home Services > Electricians > Generator Service and Repair",
        },
        { id: "227", value: "Home Services > Electricians > Generators" },
        {
          id: "228",
          value: "Home Services > Electricians > Lighting Contractors",
        },
        {
          id: "229",
          value: "Home Services > Electricians > Storage Batteries",
        },
        {
          id: "230",
          value:
            "Home Services > Electricians > Wiring and Electrical Supplies",
        },
        { id: "231", value: "Home Services > HVAC / Heating and AC" },
        { id: "232", value: "Home Services > Home Contractors" },
        { id: "233", value: "Home Services > Home Contractors > Appraisers" },
        {
          id: "234",
          value: "Home Services > Home Contractors > Basement Finishing",
        },
        {
          id: "235",
          value: "Home Services > Home Contractors > Bathroom Remodeling",
        },
        {
          id: "236",
          value: "Home Services > Home Contractors > Building Inspectors",
        },
        {
          id: "237",
          value: "Home Services > Home Contractors > Cabinet Makers",
        },
        {
          id: "238",
          value: "Home Services > Home Contractors > Concrete Mixing",
        },
        {
          id: "239",
          value: "Home Services > Home Contractors > Concrete Polishing",
        },
        {
          id: "240",
          value:
            "Home Services > Home Contractors > Concrete Repair or Mudjacking",
        },
        {
          id: "241",
          value: "Home Services > Home Contractors > Custom Home Building",
        },
        {
          id: "242",
          value: "Home Services > Home Contractors > Door Installation",
        },
        {
          id: "243",
          value: "Home Services > Home Contractors > Home Remodeling",
        },
        { id: "244", value: "Home Services > Home Contractors > Insulation" },
        {
          id: "245",
          value: "Home Services > Home Contractors > Kitchen Remodeling",
        },
        {
          id: "246",
          value:
            "Home Services > Home Contractors > Licensed General Contractors",
        },
        { id: "247", value: "Home Services > Home Contractors > Remodeling" },
        { id: "248", value: "Home Services > Home Contractors > Roofing" },
        {
          id: "249",
          value: "Home Services > Home Contractors > Siding Installation",
        },
        {
          id: "250",
          value:
            "Home Services > Home Contractors > Sunroom or Patio Enclosure Builders",
        },
        {
          id: "251",
          value: "Home Services > Home Contractors > Window Installation",
        },
        {
          id: "252",
          value: "Home Services > Home Contractors > Window Repair",
        },
        { id: "253", value: "Home Services > Plumbers" },
        { id: "254", value: "Home Services > Plumbers > Backflow Prevention" },
        { id: "255", value: "Home Services > Plumbers > Drainage Contractors" },
        { id: "256", value: "Home Services > Plumbers > Emergency Plumbers" },
        {
          id: "257",
          value: "Home Services > Plumbers > Flood Control Equipment",
        },
        { id: "258", value: "Home Services > Plumbers > Gas Conversions" },
        {
          id: "259",
          value: "Home Services > Plumbers > Leak Detection Services",
        },
        { id: "260", value: "Home Services > Plumbers > Plumbing Repair" },
        { id: "261", value: "Home Services > Plumbers > Plumbing Supplies" },
        { id: "262", value: "Home Services > Plumbers > Portable Toilets" },
        { id: "263", value: "Home Services > Plumbers > Pumps" },
        { id: "264", value: "Home Services > Plumbers > Repipe Services" },
        { id: "265", value: "Home Services > Plumbers > Septic Systems" },
        { id: "266", value: "Home Services > Plumbers > Septic Tank Cleaning" },
        { id: "267", value: "Home Services > Plumbers > Sewer Cleaning" },
        { id: "268", value: "Home Services > Plumbers > Toilet Repair" },
        { id: "269", value: "Home Services > Plumbers > Water Heater Sales" },
        {
          id: "270",
          value: "Home Services > Plumbers > Water Heater Services",
        },
        {
          id: "271",
          value: "Home Services > Plumbers > Water Purification Supplies",
        },
        { id: "272", value: "Home Services > Plumbers > Water Purifiers" },
        { id: "273", value: "Home Services > Plumbers > Water Softening" },
        {
          id: "274",
          value: "Home Services > Plumbers > Water Works Contractors",
        },
        {
          id: "275",
          value: "Home Services > Plumbers > Well Drilling Services",
        },
        { id: "276", value: "Hot Tub and Spa Services" },
        { id: "277", value: "House Cleaning Companies" },
        { id: "278", value: "Individual and Family Social Services" },
        { id: "279", value: "Industrial" },
        { id: "280", value: "Industrial > Agriculture and Farming" },
        { id: "281", value: "Industrial > Energy" },
        { id: "282", value: "Industrial > Environmental Services" },
        { id: "283", value: "Industrial > Foresting and Logging" },
        { id: "284", value: "Industrial > Industrial Supplies" },
        { id: "285", value: "Industrial > Machine Shops" },
        { id: "286", value: "Industrial > Manufacturing" },
        { id: "287", value: "Industrial > Metals" },
        { id: "288", value: "Industrial > Mining and Drilling" },
        { id: "289", value: "Industrial > Plastics" },
        { id: "290", value: "Industrial > Rubber" },
        { id: "291", value: "Industrial > Scientific Instruments" },
        { id: "292", value: "Industrial > Textiles" },
        { id: "293", value: "Industrial > Tool and Die Makers" },
        { id: "294", value: "Industrial > hvac" },
        { id: "295", value: "Insurance" },
        { id: "296", value: "Insurance > Auto Insurance" },
        { id: "297", value: "Insurance > Boat Insurance" },
        { id: "298", value: "Insurance > Business Insurance Services" },
        { id: "299", value: "Insurance > Dental Insurance" },
        { id: "300", value: "Insurance > Disability Insurance" },
        { id: "301", value: "Insurance > Health Insurance" },
        { id: "302", value: "Insurance > Home Insurance" },
        { id: "303", value: "Insurance > Insurance Adjusters" },
        { id: "304", value: "Insurance > Liability and Malpractice Insurance" },
        { id: "305", value: "Insurance > Life Insurance" },
        { id: "306", value: "Insurance > Motorcycle Insurance" },
        { id: "307", value: "Insurance > Property Insurance" },
        { id: "308", value: "Insurance > Renters Insurance" },
        { id: "309", value: "Insurance > Senior and Long Term Care Insurance" },
        { id: "310", value: "Insurance > Title Insurance" },
        { id: "311", value: "Insurance > Travel Insurance" },
        { id: "312", value: "Interior Designers" },
        { id: "313", value: "Interior Designers > Art Decor Consultants" },
        { id: "314", value: "Interior Designers > Blinds" },
        { id: "315", value: "Interior Designers > Home Accessories and Decor" },
        {
          id: "316",
          value: "Interior Designers > Interior Designers Supplies",
        },
        { id: "317", value: "Interior Designers > Lighting" },
        {
          id: "318",
          value: "Interior Designers > Window Treatments and Shades",
        },
        { id: "319", value: "Janitorial Companies" },
        { id: "320", value: "Labor Unions and Similar Labor Organizations" },
        { id: "321", value: "Landscapers" },
        { id: "322", value: "Landscapers > Sprinkler Repair and Irrigation" },
        { id: "323", value: "Laundromats" },
        { id: "324", value: "Lawn Care Companies" },
        { id: "325", value: "Locksmiths" },
        { id: "326", value: "Marina" },
        { id: "327", value: "Martial Arts" },
        { id: "328", value: "Martial Arts > Boxing" },
        { id: "329", value: "Martial Arts > Fencing" },
        { id: "330", value: "Martial Arts > MMA Studios" },
        { id: "331", value: "Martial Arts > Self Defense Classes" },
        { id: "332", value: "Massage Therapists" },
        { id: "333", value: "Moving Service Companies" },
        { id: "334", value: "Nail Salons" },
        { id: "335", value: "Nonprofit Organizations" },
        { id: "336", value: "Other" },
        { id: "337", value: "Other Personal Care Services" },
        { id: "338", value: "Painting Contractors" },
        { id: "339", value: "Painting Contractors > Exterior Painters" },
        { id: "340", value: "Painting Contractors > Interior House Painting" },
        { id: "341", value: "Painting Contractors > Interior Painters" },
        { id: "342", value: "Painting Contractors > Paint Removal" },
        { id: "343", value: "Painting Contractors > Paint Supplies" },
        { id: "344", value: "Painting Contractors > Siding Contractors" },
        { id: "345", value: "Painting Contractors > Siding Materials" },
        { id: "346", value: "Parking Lots and Garages" },
        { id: "347", value: "Personal Services" },
        { id: "348", value: "Personal Services > All Other Personal Services" },
        { id: "349", value: "Personal Services > Dating Services" },
        { id: "350", value: "Personal Services > Online Dating" },
        { id: "351", value: "Pest Control Companies" },
        { id: "352", value: "Pets" },
        { id: "353", value: "Pets > Animal Hospitals" },
        { id: "354", value: "Pets > Horses" },
        { id: "355", value: "Pets > Humane Societies and Shelters" },
        { id: "356", value: "Pets > Pet Boarding and Kennels" },
        { id: "357", value: "Pets > Pet Breeders" },
        { id: "358", value: "Pets > Pet Food and Supplies" },
        { id: "359", value: "Pets > Pet Furniture and Accessories" },
        { id: "360", value: "Pets > Pet Groomers" },
        { id: "361", value: "Pets > Pet Medicine" },
        { id: "362", value: "Pets > Pet Services" },
        { id: "363", value: "Pets > Pet Stores" },
        { id: "364", value: "Pets > Veterinarians" },
        { id: "365", value: "Photographers" },
        { id: "366", value: "Photographers > Wedding" },
        { id: "367", value: "Physical Therapists" },
        { id: "368", value: "Plastic Surgeons" },
        { id: "369", value: "Political Organizations" },
        { id: "370", value: "Pool Service and Repair" },
        { id: "371", value: "Printing and Graphics" },
        { id: "372", value: "Printing and Graphics > Mailing Services" },
        { id: "373", value: "Private Investigators" },
        {
          id: "374",
          value: "Private Investigators > Asset and Financial Investigations",
        },
        { id: "375", value: "Private Investigators > Computer Forensics" },
        {
          id: "376",
          value: "Private Investigators > Corporate Investigations",
        },
        {
          id: "377",
          value: "Private Investigators > Domestic Violence Investigators",
        },
        {
          id: "378",
          value: "Private Investigators > Due Diligence Investigations",
        },
        {
          id: "379",
          value: "Private Investigators > Intellectual Property Investigations",
        },
        { id: "380", value: "Private Investigators > Missing Person Services" },
        { id: "381", value: "Private Investigators > Private Detectives" },
        { id: "382", value: "Private Investigators > Probate Investigators" },
        { id: "383", value: "Private Investigators > Surveillance Companies" },
        { id: "384", value: "Professional Equipment and Supplies" },
        { id: "385", value: "Professional Organizers" },
        { id: "386", value: "Publishers" },
        { id: "387", value: "Publishers > Books" },
        { id: "388", value: "Publishers > Magazines" },
        { id: "389", value: "Real Estate" },
        { id: "390", value: "Real Estate > Apartments and Housing Rental" },
        { id: "391", value: "Real Estate > Commercial Property" },
        { id: "392", value: "Real Estate > Homes For Sale" },
        { id: "393", value: "Real Estate > Land Companies" },
        { id: "394", value: "Real Estate > Land For Sale" },
        { id: "395", value: "Real Estate > Mortgage Services" },
        { id: "396", value: "Real Estate > Note Buying Services" },
        { id: "397", value: "Real Estate > Property Management" },
        { id: "398", value: "Real Estate > Real Estate Agents" },
        { id: "399", value: "Real Estate > Real Estate Brokers" },
        { id: "400", value: "Real Estate > Real Estate Consultants" },
        { id: "401", value: "Real Estate > Timeshares" },
        { id: "402", value: "Religious Organizations" },
        { id: "403", value: "Remediation Services" },
        { id: "404", value: "Remediation Services > Cleaning Services" },
        {
          id: "405",
          value:
            "Remediation Services > Cleaning Services > Crime Scene Cleanup",
        },
        {
          id: "406",
          value: "Remediation Services > Cleaning Services > Mold Removal",
        },
        { id: "407", value: "Remediation Services > Damage Repair" },
        {
          id: "408",
          value:
            "Remediation Services > Damage Repair > Flood Disaster Recovery",
        },
        { id: "409", value: "Restaurants" },
        { id: "410", value: "Restaurants > Afghan" },
        { id: "411", value: "Restaurants > African" },
        { id: "412", value: "Restaurants > American" },
        { id: "413", value: "Restaurants > Argentinean" },
        { id: "414", value: "Restaurants > Armenian" },
        { id: "415", value: "Restaurants > Asian" },
        { id: "416", value: "Restaurants > Australian" },
        { id: "417", value: "Restaurants > Austrian" },
        { id: "418", value: "Restaurants > Bagels" },
        { id: "419", value: "Restaurants > Bakeries and Dessert Shops" },
        { id: "420", value: "Restaurants > Bar and Grills" },
        { id: "421", value: "Restaurants > Barbecue" },
        { id: "422", value: "Restaurants > Belgian" },
        { id: "423", value: "Restaurants > Brazilian" },
        { id: "424", value: "Restaurants > Breakfast" },
        { id: "425", value: "Restaurants > Brewpubs" },
        { id: "426", value: "Restaurants > British" },
        { id: "427", value: "Restaurants > Brunch" },
        { id: "428", value: "Restaurants > Buffets" },
        { id: "429", value: "Restaurants > Burger Joints" },
        { id: "430", value: "Restaurants > Cafeterias and Salad Bars" },
        { id: "431", value: "Restaurants > Cajun and Creole" },
        { id: "432", value: "Restaurants > California Cuisine" },
        { id: "433", value: "Restaurants > Canadian" },
        { id: "434", value: "Restaurants > Caribbean" },
        { id: "435", value: "Restaurants > Catering Services" },
        { id: "436", value: "Restaurants > Cheesesteaks and Hoagies" },
        { id: "437", value: "Restaurants > Chicken" },
        { id: "438", value: "Restaurants > Chilean" },
        { id: "439", value: "Restaurants > Chinese" },
        { id: "440", value: "Restaurants > Coffee and Tea" },
        { id: "441", value: "Restaurants > Croatian" },
        { id: "442", value: "Restaurants > Cuban" },
        { id: "443", value: "Restaurants > Czech" },
        { id: "444", value: "Restaurants > Danish" },
        { id: "445", value: "Restaurants > Delicatessens" },
        { id: "446", value: "Restaurants > Dim Sum" },
        { id: "447", value: "Restaurants > Diners" },
        { id: "448", value: "Restaurants > Donuts" },
        { id: "449", value: "Restaurants > Dutch Restaurants" },
        { id: "450", value: "Restaurants > Egyptian" },
        { id: "451", value: "Restaurants > Ethiopian" },
        { id: "452", value: "Restaurants > European" },
        { id: "453", value: "Restaurants > Family Style" },
        { id: "454", value: "Restaurants > Fast Food" },
        { id: "455", value: "Restaurants > Filipino" },
        { id: "456", value: "Restaurants > Fine Dining" },
        { id: "457", value: "Restaurants > Finnish" },
        { id: "458", value: "Restaurants > Fondue" },
        { id: "459", value: "Restaurants > Food Delivery Services" },
        { id: "460", value: "Restaurants > Food Trucks" },
        { id: "461", value: "Restaurants > Franchises" },
        { id: "462", value: "Restaurants > French" },
        { id: "463", value: "Restaurants > German" },
        { id: "464", value: "Restaurants > Greek" },
        { id: "465", value: "Restaurants > Hawaiian" },
        { id: "466", value: "Restaurants > Health Food" },
        { id: "467", value: "Restaurants > Home Cooking" },
        { id: "468", value: "Restaurants > Hungarian" },
        { id: "469", value: "Restaurants > Ice Cream Shops" },
        { id: "470", value: "Restaurants > Icelandic" },
        { id: "471", value: "Restaurants > Indian" },
        { id: "472", value: "Restaurants > Indonesian" },
        { id: "473", value: "Restaurants > Irish" },
        { id: "474", value: "Restaurants > Italian" },
        { id: "475", value: "Restaurants > Jamaican" },
        { id: "476", value: "Restaurants > Japanese" },
        { id: "477", value: "Restaurants > Korean" },
        { id: "478", value: "Restaurants > Kosher" },
        { id: "479", value: "Restaurants > Lebanese" },
        { id: "480", value: "Restaurants > Malaysian" },
        { id: "481", value: "Restaurants > Mexican" },
        { id: "482", value: "Restaurants > Mexican > Taco" },
        { id: "483", value: "Restaurants > Middle Eastern" },
        { id: "484", value: "Restaurants > Moroccan" },
        { id: "485", value: "Restaurants > Native American" },
        { id: "486", value: "Restaurants > New Zealand" },
        { id: "487", value: "Restaurants > Norwegian" },
        { id: "488", value: "Restaurants > Pan Asian" },
        { id: "489", value: "Restaurants > Pizza" },
        { id: "490", value: "Restaurants > Polish" },
        { id: "491", value: "Restaurants > Polynesian" },
        { id: "492", value: "Restaurants > Portuguese" },
        { id: "493", value: "Restaurants > Russian" },
        { id: "494", value: "Restaurants > Sandwich" },
        { id: "495", value: "Restaurants > Sandwich Shops" },
        { id: "496", value: "Restaurants > Scottish" },
        { id: "497", value: "Restaurants > Seafood" },
        { id: "498", value: "Restaurants > Soul Food" },
        { id: "499", value: "Restaurants > South American" },
        { id: "500", value: "Restaurants > Southern" },
        { id: "501", value: "Restaurants > Southwestern" },
        { id: "502", value: "Restaurants > Spanish" },
        { id: "503", value: "Restaurants > Steak Houses" },
        { id: "504", value: "Restaurants > Sushi Bars" },
        { id: "505", value: "Restaurants > Swedish" },
        { id: "506", value: "Restaurants > Take Out" },
        { id: "507", value: "Restaurants > Tapas Restaurants" },
        { id: "508", value: "Restaurants > Tex Mex" },
        { id: "509", value: "Restaurants > Thai" },
        { id: "510", value: "Restaurants > Turkish" },
        { id: "511", value: "Restaurants > Vegan" },
        { id: "512", value: "Restaurants > Vegetarian" },
        { id: "513", value: "Restaurants > Vietnamese" },
        { id: "514", value: "Restoration Companies" },
        { id: "515", value: "Retail" },
        { id: "516", value: "Retail > Beauty Shops" },
        { id: "517", value: "Retail > Cleaning Products" },
        { id: "518", value: "Retail > Consignment Stores" },
        { id: "519", value: "Retail > Convenience Stores" },
        { id: "520", value: "Retail > Flower Shops" },
        { id: "521", value: "Retail > Furniture" },
        { id: "522", value: "Retail > Furniture > Upholstery" },
        { id: "523", value: "Retail > Hardware Stores" },
        { id: "524", value: "Retail > Jewelry Stores" },
        { id: "525", value: "Retail > Liquor Stores" },
        { id: "526", value: "Retail > Nutrition Store" },
        { id: "527", value: "Retail > Nutrition Store > Dietary Supplements" },
        { id: "528", value: "Retail > Nutrition Store > Herbal Supplements" },
        { id: "529", value: "Retail > Nutrition Store > Mineral Supplements" },
        { id: "530", value: "Retail > Pharmacies" },
        { id: "531", value: "Retail > Specialty Food Store" },
        { id: "532", value: "Roofing Contractors" },
        { id: "533", value: "Roofing Contractors > Ceiling Contractors" },
        { id: "534", value: "Roofing Contractors > Emergency Roofers" },
        {
          id: "535",
          value: "Roofing Contractors > Gutter and Downspout Supplies",
        },
        { id: "536", value: "Roofing Contractors > Gutter Installations" },
        { id: "537", value: "Roofing Contractors > Roof and Floor Structures" },
        { id: "538", value: "Roofing Contractors > Roof Cleaning" },
        { id: "539", value: "Roofing Contractors > Roof Repair" },
        { id: "540", value: "Roofing Contractors > Roofing Supplies" },
        { id: "541", value: "Roofing Contractors > Waterproofing Contractors" },
        { id: "542", value: "Roofing Contractors > Waterproofing Supplies" },
        { id: "543", value: "Screen Printing" },
        { id: "544", value: "Security Services" },
        {
          id: "545",
          value: "Security Services > Alarm Equipment Installation",
        },
        { id: "546", value: "Security Services > Event Security" },
        { id: "547", value: "Security Services > Home Security" },
        {
          id: "548",
          value: "Security Services > Personal Protection Services",
        },
        { id: "549", value: "Security Services > Security Monitoring" },
        { id: "550", value: "Self Storage Centers" },
        { id: "551", value: "Senior Living Communities" },
        { id: "552", value: "Senior Living Communities > Assisted Living" },
        { id: "553", value: "Senior Living Communities > Independent Living" },
        {
          id: "554",
          value: "Senior Living Communities > Retirement Communities",
        },
        { id: "555", value: "Shipping" },
        { id: "556", value: "Sign Companies" },
        { id: "557", value: "Snow Removal Services" },
        { id: "558", value: "Solar Installers" },
        { id: "559", value: "Special Trade Contractors" },
        {
          id: "560",
          value: "Special Trade Contractors > Driveway Sealing Company",
        },
        {
          id: "561",
          value: "Special Trade Contractors > Power Washing Service",
        },
        {
          id: "562",
          value: "Special Trade Contractors > Sandblasting Service",
        },
        { id: "563", value: "Special Trade Contractors > Stone Cleaning" },
        { id: "564", value: "Specialized Design Services" },
        { id: "565", value: "Sports and Recreation Clubs" },
        { id: "566", value: "Surgeons and Specialists" },
        { id: "567", value: "Surveyors" },
        { id: "568", value: "Tailors and Seamstresses" },
        { id: "569", value: "Tattoo Shops" },
        { id: "570", value: "Telephone Call Centers" },
        { id: "571", value: "Therapists and Psychiatrists" },
        { id: "572", value: "Therapists and Psychiatrists > Family" },
        { id: "573", value: "Therapists and Psychiatrists > Marriage" },
        { id: "574", value: "Therapists and Psychiatrists > Relationship" },
        { id: "575", value: "Transportation" },
        { id: "576", value: "Transportation > Charter Bus" },
        { id: "577", value: "Transportation > Limousine Services" },
        { id: "578", value: "Transportation > Professional Driver" },
        { id: "579", value: "Transportation > Shuttle Services" },
        { id: "580", value: "Travel" },
        { id: "581", value: "Travel > Air Travel" },
        { id: "582", value: "Travel > Cruises" },
        { id: "583", value: "Travel > Hotels and Lodging" },
        { id: "584", value: "Travel > Tourist Attractions" },
        { id: "585", value: "Travel > Tours" },
        { id: "586", value: "Travel > Travel Agents" },
        { id: "587", value: "Travel > Travel Services" },
        { id: "588", value: "Travel > Vacation Rentals" },
        { id: "589", value: "Urgent Care Centers" },
        { id: "590", value: "Utility Companies" },
        { id: "591", value: "Utility Companies > Electric Companies" },
        { id: "592", value: "Waste Removal and Recycling" },
        { id: "593", value: "Window Cleaners" },
      ],
    };
  },

  created() {
    // checking if session exist
    if (this.$session.exists() && this.$session.get("type") === "B") {
      this.loginid = this.$session.get("loginid");
    } else {
      this.loginid = 0;
    }
  },

  mounted() {
    const autocomplete = new GeocoderAutocomplete(
      document.getElementById("autocomplete"),
      "f6f712c4b7c7422bad41c44ccebb7627",
      {
        /* Geocoder options */
      }
    );

    autocomplete.on("select", (location) => {
      this.city = location.properties.address_line1;
      this.lat = location.properties.lat;
      this.lon = location.properties.lon;
    });
  },

  methods: {
    async onSubmit() {
      if (this.file !== null) {
        this.logo = this.file.name;
      }

      this.suggested = this.suggested === "1" ? 1 : 0;

      console.log(this.city);
      console.log(typeof this.lat);
      console.log(typeof this.lon);

      await this.$apollo.mutate({
        // Query
        mutation: addBusinessMutation,
        // Parameters
        variables: {
          name: this.name,
          fname: this.fname,
          lname: this.lname,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          lat: parseFloat(this.lat),
          lon: parseFloat(this.lon),
          zip: this.zip,
          categoryid: this.categoryid,
          descr: this.descr,
          website: this.website,
          phone: this.phone,
          logo: this.logo,
          loginid: this.loginid,
          suggested: this.suggested,
          favorite: this.favorite,
          approved: this.approved,
        },

        update: (cache, { data: { addBusiness } }) => {
          console.log(addBusiness);
          this.cid = addBusiness.cid;
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
      this.resetForm();
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    resetForm() {
      this.name = "";
      this.fname = "";
      this.lname = "";
      this.address1 = "";
      this.address2 = "";
      this.city = "";
      this.lat = "";
      this.lon = "";
      this.zip = "";
      this.categoryid = "";
      this.descr = "";
      this.website = "";
      this.phone = "";
      this.file = null;
    },
  },
};
</script>

<style>
@import "~@geoapify/geocoder-autocomplete/styles/minimal.css";

.autocomplete-container {
  position: relative;
}

.addBusiness {
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

.form-group input,
.custom-select {
  height: 10vw;
  padding: 2px 10px;
  border: 1px solid #f6d185;
  font-size: 3.5vw;
}

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
  margin-top: 30px;
}

.submitButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}
.submitButton:active {
  position: relative;
}

@media screen and (min-width: 640px) {
  label {
    font-size: 2.2vw;
  }
  .form-group input,
  .custom-select {
    height: 6vw;
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
  .form-group input,
  .custom-select {
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
  .form-group input,
  .custom-select {
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
    font-size: 1vw;
  }
  .form-group input,
  .custom-select {
    height: 2.5vw;
    font-size: 0.8vw;
  }
  label[for="file"],
  #textarea {
    font-size: 1vw;
  }
}
</style>
