<template>
  <div :style="{ backgroundImage: `url(${bg1})` }" class="form main-container">
    <div :style="{ backgroundImage: `url(${bg2})` }" class="bg">
      <div class="heading">
        <h1>Search for the Best Businesses at BusinessRate</h1>
        <p>
          Find rated businesses in your local area or across the country and
          instantly view their latest ratings and reviews
        </p>
      </div>
      <form>
        <div class="input-container" id="input">
          <div id="form">
            <div
              id="autocomplete"
              class="autocomplete-container location-input"
            ></div>
          </div>
          <div>
            <treeselect
              :options="options"
              v-model="cat"
              placeholder="Category: Plumber, Electrician..."
            />
          </div>
          <div>
            <v-select
              v-model="com"
              :options="allApprovedCompanys"
              :placeholder="placeholder"
              :disabled="disabled === 1"
            ></v-select>
          </div>
          <div>
            <input type="submit" value="Find Business" class="input input1" />
          </div>
        </div>
      </form>
    </div>

    <img src="@/assets/gold-striped-background-1.jpg" class="img-border" />
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
import bg2 from "@/assets/phoenix-city-25.png";
import getAllCategoriesQuery from "../query/allCategories.js";
import getAllApprovedCompanysQuery from "../query/getAllApprovedCompanys.js";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

import Vue from "vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

import "vue-select/dist/vue-select.css";

import Treeselect from "@riophae/vue-treeselect";

import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Form",
  components: { Treeselect },
  data: () => ({
    lan: "",
    lot: "",
    category: "",
    cat: null,
    com: "",
    company: "",
    cid: "",
    bg1,
    bg2,
    autocomplete: null,
    placeholder: "Please enable / select location",
    location: null,
    gettingLocation: false,
    errorStr: null,
    disabled: 1,
    options: [
      { id: "Acupuncturists", label: "Acupuncturists" },
      {
        id: "Advertising and Marketing",
        label: "Advertising and Marketing",
        children: [
          {
            id: "Promotional Products",
            label: "Promotional Products",
          },
        ],
      },
      {
        id: "Air Duct and Dryer Vent Cleaning",
        label: "Air Duct and Dryer Vent Cleaning",
      },
      {
        id: "Amusement and Recreation Services",
        label: "Amusement and Recreation Services",
        children: [
          {
            id: "Combat Sports",
            label: "Combat Sports",

            children: [
              {
                id: "Laser Tag Center",
                label: "Laser Tag Center",
              },

              {
                id: "Paintball Center",
                label: "Paintball Center",
              },
            ],
          },
          { id: "Water Sports", label: "Water Sports" },
        ],
      },
      { id: "Appliance Repair Services", label: "Appliance Repair Services" },
      { id: "Architects", label: "Architects" },
      {
        id: "Arts and Entertainment",
        label: "Arts and Entertainment",
        children: [
          { id: "Arcades and Amusements", label: "Arcades and Amusements" },
          { id: "Ballrooms", label: "Ballrooms" },
          { id: "Clubs and Nightlife", label: "Clubs and Nightlife" },
          { id: "Movies and Video", label: "Movies and Video" },
          { id: "Music and Recording", label: "Music and Recording" },
          { id: "News and Media", label: "News and Media" },
          { id: "Theaters", label: "Theaters" },
          { id: "Venues", label: "Venues" },
          { id: "Visual Arts", label: "Visual Arts" },
        ],
      },
      {
        id: "Attorneys and Law Firms",
        label: "Attorneys and Law Firms",
        children: [
          { id: "Appellate Attorneys", label: "Appellate Attorneys" },
          { id: "Business Attorneys", label: "Business Attorneys" },
          { id: "Civil Rights Attorneys", label: "Civil Rights Attorneys" },
          { id: "Criminal Attorneys", label: "Criminal Attorneys" },
          { id: "Divorce Attorneys", label: "Divorce Attorneys" },
          { id: "Employment Attorneys", label: "Employment Attorneys" },
          { id: "Family Attorneys", label: "Family Attorneys" },
          {
            id: "Financial and Tax Attorneys",
            label: "Financial and Tax Attorneys",
          },
          {
            id: "Government and Regulatory Law",
            label: "Government and Regulatory Law",
          },
          {
            id: "Health and Medical Attorneys",
            label: "Health and Medical Attorneys",
          },
          { id: "Immigration Attorneys", label: "Immigration Attorneys" },
          {
            id: "Intellectual Property Attorneys",
            label: "Intellectual Property Attorneys",
          },
          {
            id: "Personal Injury Attorneys",
            label: "Personal Injury Attorneys",
          },
          {
            id: "Product Liability Attorneys",
            label: "Product Liability Attorneys",
          },
          { id: "Real Estate Attorneys", label: "Real Estate Attorneys" },
          {
            id: "Specialized Legal Services",
            label: "Specialized Legal Services",
          },
          {
            id: "Toxic Exposure Attorneys",
            label: "Toxic Exposure Attorneys",
          },
          {
            id: "Trusts and Estates Attorneys",
            label: "Trusts and Estates Attorneys",
          },
        ],
      },
      {
        id: "Auto",
        label: "Auto",
        children: [
          { id: "Aircraft", label: "Aircraft" },
          { id: "Auto Body", label: "Auto Body" },
          { id: "Auto Glass Services", label: "Auto Glass Services" },
          {
            id: "Auto Parts and Accessories",
            label: "Auto Parts and Accessories",
          },
          { id: "Auto Repair", label: "Auto Repair" },
          {
            id: "Auto Shops",
            label: "Auto Shops",
            children: [
              { id: "Maintenance Services", label: "Maintenance Services" },
            ],
          },
          { id: "Boats", label: "Boats" },
          { id: "Buses", label: "Buses" },
          { id: "Car Rental Companies", label: "Car Rental Companies" },
          { id: "Car Sales", label: "Car Sales" },
          { id: "Car Sharing", label: "Car Sharing" },
          { id: "Car Washes", label: "Car Washes" },
          { id: "Dealers", label: "Dealers" },
          { id: "Detailing", label: "Detailing" },
          { id: "Inspections", label: "Inspections" },
          { id: "Motorcycles", label: "Motorcycles" },
          { id: "Oil Change", label: "Oil Change" },
          { id: "Parking", label: "Parking" },
          { id: "RVs", label: "RVs" },
          { id: "Tire Stores", label: "Tire Stores" },
          {
            id: "Traffic and Driving Schools",
            label: "Traffic and Driving Schools",
          },
          { id: "Trailers", label: "Trailers" },
          { id: "Trucks", label: "Trucks" },
          { id: "Van Rental", label: "Van Rental" },
          { id: "Wraps", label: "Wraps" },
        ],
      },
      { id: "Bail Bonds", label: "Bail Bonds" },
      { id: "Bakeries", label: "Bakeries" },
      { id: "Barber Shops", label: "Barber Shops" },
      {
        id: "Bars and Breweries",
        label: "Bars and Breweries",
      },
      {
        id: "Beauty Salons and Spas",
        label: "Beauty Salons and Spas",
      },
      { id: "Bicycle Shops", label: "Bicycle Shops" },
      { id: "Bookkeepers", label: "Bookkeepers" },
      {
        id: "Business Support Services",
        label: "Business Support Services",
        children: [
          {
            id: "Fundraising",
            label: "Fundraising",
          },
        ],
      },
      { id: "Cabinet Showrooms", label: "Cabinet Showrooms" },
      { id: "Carpet Cleaners", label: "Carpet Cleaners" },
      {
        id: "Catering Companies",
        label: "Catering Companies",
        children: [
          {
            id: "Personal Chef",
            label: "Personal Chef",
          },
        ],
      },
      {
        id: "Child Care Providers",
        label: "Child Care Providers",
      },
      {
        id: "Child and Youth Services",
        label: "Child and Youth Services",
      },
      {
        id: "Chimney and Fireplace Services",
        label: "Chimney and Fireplace Services",
      },
      {
        id: "Civic, Social, and Fraternal Associations",
        label: "Civic, Social, and Fraternal Associations",
      },
      {
        id: "Commercial Contractors",
        label: "Commercial Contractors",
        children: [
          {
            id: "Concrete Mixing",
            label: "Concrete Mixing",
          },
          {
            id: "Concrete Repair or Mudjacking",
            label: "Concrete Repair or Mudjacking",
          },
        ],
      },
      {
        id: "Computer IT Services",
        label: "Computer IT Services",
        children: [
          {
            id: "Communications and Networking",
            label: "Communications and Networking",
            children: [
              {
                id: "Telephone System Providers",
                label: "Telephone System Providers",
              },
            ],
          },
          {
            id: "Computer Hardware",
            label: "Computer Hardware",
          },
          {
            id: "Computer Repair",
            label: "Computer Repair",
          },
          {
            id: "Computer Services",
            label: "Computer Services",
          },
          {
            id: "Data Management",
            label: "Data Management",
          },
          {
            id: "IT Compliance",
            label: "IT Compliance",
          },
          {
            id: "IT Disaster Recovery Services",
            label: "IT Disaster Recovery Services",
          },
          {
            id: "IT Outsourcing Services",
            label: "IT Outsourcing Services",
          },
          {
            id: "IT Risk Management",
            label: "IT Risk Management",
          },
          { id: "IT Support", label: "IT Support" },
          {
            id: "Information Security",
            label: "Information Security",
          },
          {
            id: "Printers and Copiers",
            label: "Printers and Copiers",
          },
          {
            id: "Computer IT Services, Security Services",
            label: "Security Services",
          },
          { id: "Software", label: "Software" },
          {
            id: "Software Developers and Consultants",
            label: "Software Developers and Consultants",
          },
        ],
      },
      {
        id: "Counseling Services",
        label: "Counseling Services",
        children: [
          {
            id: "Career Counseling",
            label: "Career Counseling",
          },
          {
            id: "Family Counseling",
            label: "Family Counseling",
          },
          {
            id: " Marriage Counseling",
            label: "Marriage Counseling",
          },
          {
            id: "Relationship Counseling",
            label: "Relationship Counseling",
          },
        ],
      },
      {
        id: "Dance Schools and Studios",
        label: "Dance Schools and Studios",
      },
      {
        id: "Dentists and Orthodontists",
        label: "Dentists and Orthodontists",
        children: [
          {
            id: "Dentists",
            label: "Dentists",
            children: [
              {
                id: "Pediatric Dentistry",
                label: "Pediatric Dentistry",
              },
            ],
          },
          {
            id: "Orthodontists",
            label: "Orthodontists",
          },
        ],
      },
      { id: "Dry Cleaners", label: "Dry Cleaners" },
      {
        id: "Ecommerce",
        label: "Ecommerce",
        children: [
          { id: "Jewelry", label: "Jewelry" },
          {
            id: "Nutrition",
            label: "Nutrition",
            children: [
              {
                id: " Dietary Supplements",
                label: "Dietary Supplements",
              },
              {
                id: "Herbal Supplements",
                label: "Herbal Supplements",
              },
              {
                id: "Mineral  Supplements",
                label: "Mineral  Supplements",
              },
            ],
          },
          {
            id: "Personal Care",
            label: "Personal Care",
          },
          {
            id: "Ecommerce, Specialty Food Store",
            label: "Specialty Food Store",
          },
        ],
      },
      {
        id: "Education",
        label: "Education",
        children: [
          {
            id: "Business Consulting",
            label: "Business Consulting",
          },
          {
            id: "College Consultation",
            label: "College Consultation",
          },
          {
            id: "Education and Research Foundations",
            label: "Education and Research Foundations",
          },
          {
            id: "Elementary Schools",
            label: "Elementary Schools",
          },
          {
            id: "Fine Arts Education",
            label: "Fine Arts Education",
          },
          {
            id: "Football Coaching",
            label: "Football Coaching",
          },
          {
            id: "General Education",
            label: "General Education",
          },
          {
            id: "Higher Education",
            label: "Higher Education",
          },
          { id: "Highschools", label: "Highschools" },
          {
            id: "Language Studies",
            label: "Language Studies",
          },
          { id: "Life Coaches", label: "Life Coaches" },
          {
            id: "Middle Schools",
            label: "Middle Schools",
          },
          {
            id: "Online Education",
            label: "Online Education",
          },
          {
            id: "Preschools and Kindergartens",
            label: "Preschools and Kindergartens",
          },
          {
            id: "Primary Schools",
            label: "Primary Schools",
          },
          {
            id: "Private and Specialized Schools",
            label: "Private and Specialized Schools",
          },
          {
            id: "Professional and Trade Schools",
            label: "Professional and Trade Schools",
          },
          {
            id: "Risk Management",
            label: "Risk Management",
          },
          {
            id: "Safety Training",
            label: "Safety Training",
          },
          { id: "Seminars", label: "Seminars" },
          {
            id: "Sports Coaching",
            label: "Sports Coaching",
          },
          {
            id: "Study Abroad Programs",
            label: "Study Abroad Programs",
          },
          {
            id: "Training Programs",
            label: "Training Programs",
            children: [{ id: "K9", label: "K9" }],
          },
          {
            id: "Tutoring and Learning Centers",
            label: "Tutoring and Learning Centers",
          },
        ],
      },
      {
        id: "Employment Agencies",
        label: "Employment Agencies",
      },
      {
        id: "Engineering Services",
        label: "Engineering Services",
      },
      {
        id: "Event Planners",
        label: "Event Planners",
        children: [{ id: "Event Planners, Wedding", label: "Wedding" }],
      },
      {
        id: "Eye Doctors and Optometrists",
        label: "Eye Doctors and Optometrists",
      },
      { id: "Family Doctors", label: "Family Doctors" },
      {
        id: "Fencing Contractors",
        label: "Fencing Contractors",
      },
      {
        id: "Finance",
        label: "Finance",
        children: [
          {
            id: "Accounting Firms and CPA",
            label: "Accounting Firms and CPA",
          },
          { id: "Auto Finance", label: "Auto Finance" },
          {
            id: "Banking Services",
            label: "Banking Services",
          },
          { id: "Finance, Bookkeepers", label: "Bookkeepers" },
          {
            id: "Collection Services",
            label: "Collection Services",
          },
          {
            id: "Credit and Debt Management",
            label: "Credit and Debt Management",
          },
          { id: "Credit Cards", label: "Credit Cards" },
          {
            id: "Financial Advisers",
            label: "Financial Advisers",
          },
          {
            id: "Investment Services",
            label: "Investment Services",
          },
          { id: "Loan Agents", label: "Loan Agents" },
          {
            id: "Payment Processing Services",
            label: "Payment Processing Services",
          },
          {
            id: "Personal Loans and Advances",
            label: "Personal Loans and Advances",
          },
          {
            id: "Student Financial Services",
            label: "Student Financial Services",
          },
        ],
      },
      {
        id: "Fire Protection",
        label: "Fire Protection",
      },
      {
        id: "Fitness Centers",
        label: "Fitness Centers",
        children: [
          {
            id: "Fitness Classes",
            label: "Fitness Classes",
          },
          {
            id: "Fitness Equipment",
            label: "Fitness Equipment",
          },
          {
            id: "Fitness Gyms",
            label: "Fitness Gyms",
          },
          {
            id: "Personal Trainers",
            label: "Personal Trainers",
          },
          { id: "Pilates", label: "Pilates" },
          {
            id: "Weight Training",
            label: "Weight Training",
          },
          {
            id: "Yoga Studios",
            label: "Yoga Studios",
          },
          {
            id: "Fitness and Recreational Sports Centers",
            label: "Fitness and Recreational Sports Centers",
          },
        ],
      },
      {
        id: "Flooring Contractors",
        label: "Flooring Contractors",
        children: [
          {
            id: "Concrete Polishing",
            label: "Concrete Polishing",
          },
        ],
      },

      {
        id: "Food and Beverage",
        label: "Food and Beverage",
        children: [
          {
            id: "Beverages",
            label: "Beverages",
            children: [
              {
                id: "Beverage Distributor",
                label: "Beverage Distributor",
              },
            ],
          },

          {
            id: "Food Delivery Services",
            label: "Food Delivery Services",
            children: [
              {
                id: "Box Lunch Supplier",
                label: "Box Lunch Supplier",
              },
            ],
          },
        ],
      },

      {
        id: "Funeral Homes and Services",
        label: "Funeral Homes and Services",
      },
      {
        id: "Garage Door Contractors",
        label: "Garage Door Contractors",
      },
      {
        id: "Glasses and Contact Lenses",
        label: "Glasses and Contact Lenses",
      },
      { id: "Hair Salons", label: "Hair Salons" },
      {
        id: "Health and Medicine",
        label: "Health and Medicine",
        children: [
          {
            id: "Alternative Medicine",
            label: "Alternative Medicine",
          },
          {
            id: "Chiropractors",
            label: "Chiropractors",
          },
          {
            id: "Dental Surgeons",
            label: "Dental Surgeons",
          },
          {
            id: "Dermatologists",
            label: "Dermatologists",
          },
          {
            id: "Hearing Aids",
            label: "Hearing Aids",
          },
          {
            id: "Medical Aids and Supplies",
            label: "Medical Aids and Supplies",
          },
          {
            id: "Medical Billing",
            label: "Medical Billing",
          },
          {
            id: "Medical Clinics",
            label: "Medical Clinics",
          },
          {
            id: "Medical Diagnostics and Labs",
            label: "Medical Diagnostics and Labs",
          },
          {
            id: "Medical Equipment",
            label: "Medical Equipment",
          },
          {
            id: "Medical Spas",
            label: "Medical Spas",
          },
          {
            id: "Mental and Behavioral Health",
            label: "Mental and Behavioral Health",
          },
          {
            id: "Nutrition and Weight Loss",
            label: "Nutrition and Weight Loss",
          },
          {
            id: "Pharmacies and Prescriptions",
            label: "Pharmacies and Prescriptions",
          },
          {
            id: "Physicians",
            label: "Physicians",
            children: [
              {
                id: "Physicians, Family Doctors",
                label: "Family Doctors",
                children: [
                  {
                    id: "Pediatricians",
                    label: "Pediatricians",
                  },
                ],
              },
            ],
          },

          {
            id: "Reproductive Health",
            label: "Reproductive Health",
            children: [
              {
                id: "Obstetrics",
                label: "Obstetrics",
              },
            ],
          },

          {
            id: "Services for the Elderly and Persons with Disabilities",
            label: "Services for the Elderly and Persons with Disabilities",
          },
        ],
      },

      {
        id: "Home Health Care Providers",
        label: "Home Health Care Providers",
        children: [
          {
            id:
              "Home Health Care Providers, Services for the Elderly and Persons with Disabilities",
            label: "Services for the Elderly and Persons with Disabilities",
          },
        ],
      },

      { id: "Home Inspectors", label: "Home Inspectors" },
      {
        id: "Home Services",
        label: "Home Services",
        children: [
          {
            id: "Electricians",
            label: "Electricians",
            children: [
              {
                id: "24 Hour Electricians",
                label: "24 Hour Electricians",
              },
              {
                id: "Battery Repair",
                label: "Battery Repair",
              },
              {
                id: "Battery Supplies",
                label: "Battery Supplies",
              },
              {
                id: "Cabling",
                label: "Cabling",
              },
              {
                id: "Dry Cell Batteries",
                label: "Dry Cell Batteries",
              },
              {
                id: "Electric Companies",
                label: "Electric Companies",
              },
              {
                id: "Electric Motor Repair",
                label: "Electric Motor Repair",
              },
              {
                id: "Exterior Lighting",
                label: "Exterior Lighting",
              },
              {
                id: "Generator Service and Repair",
                label: "Generator Service and Repair",
              },
              {
                id: "Generators",
                label: "Generators",
              },
              {
                id: "Lighting Contractors",
                label: "Lighting Contractors",
              },
              {
                id: "Storage Batteries",
                label: "Storage Batteries",
              },
              {
                id: "Wiring and Electrical Supplies",
                label: "Wiring and Electrical Supplies",
              },
            ],
          },

          {
            id: "HVAC / Heating and AC",
            label: "HVAC / Heating and AC",
          },
          {
            id: "Home Contractors",
            label: "Home Contractors",
            children: [
              {
                id: "Appraisers",
                label: "Appraisers",
              },
              {
                id: "Basement Finishing",
                label: "Basement Finishing",
              },
              {
                id: "Bathroom Remodeling",
                label: "Bathroom Remodeling",
              },
              {
                id: "Building Inspectors",
                label: "Building Inspectors",
              },
              {
                id: "Cabinet Makers",
                label: "Cabinet Makers",
              },
              {
                id: "Home Contractors, Concrete Mixing",
                label: "Concrete Mixing",
              },
              {
                id: "Home Contractors, Concrete Polishing",
                label: "Concrete Polishing",
              },
              {
                id: "Home Contractors, Concrete Repair or Mudjacking",
                label: "Concrete Repair or Mudjacking",
              },
              {
                id: "Custom Home Building",
                label: "Custom Home Building",
              },
              {
                id: "Door Installation",
                label: "Door Installation",
              },
              {
                id: "Home Remodeling",
                label: "Home Remodeling",
              },
              {
                id: "Insulation",
                label: "Insulation",
              },
              {
                id: "Kitchen Remodeling",
                label: "Kitchen Remodeling",
              },
              {
                id: "Licensed General Contractors",
                label: "Licensed General Contractors",
              },
              {
                id: "Remodeling",
                label: "Remodeling",
              },
              {
                id: "Roofing",
                label: "Roofing",
              },
              {
                id: "Siding Installation",
                label: "Siding Installation",
              },
              {
                id: "Sunroom or Patio Enclosure Builders",
                label: "Sunroom or Patio Enclosure Builders",
              },
              {
                id: "Window Installation",
                label: "Window Installation",
              },
              {
                id: "Window Repair",
                label: "Window Repair",
              },
            ],
          },

          {
            id: "Plumbers",
            label: "Plumbers",
            children: [
              {
                id: "Backflow Prevention",
                label: "Backflow Prevention",
              },
              {
                id: "Drainage Contractors",
                label: "Drainage Contractors",
              },
              {
                id: "Emergency Plumbers",
                label: "Emergency Plumbers",
              },
              {
                id: "Flood Control Equipment",
                label: "Flood Control Equipment",
              },
              {
                id: "Gas Conversions",
                label: "Gas Conversions",
              },
              {
                id: "Leak Detection Services",
                label: "Leak Detection Services",
              },
              {
                id: "Plumbing Repair",
                label: "Plumbing Repair",
              },
              {
                id: "Plumbing Supplies",
                label: "Plumbing Supplies",
              },
              {
                id: "Portable Toilets",
                label: "Portable Toilets",
              },
              { id: "Pumps", label: "Pumps" },
              {
                id: "Repipe Services",
                label: "Repipe Services",
              },
              {
                id: "Septic Systems",
                label: "Septic Systems",
              },
              {
                id: "Septic Tank Cleaning",
                label: "Septic Tank Cleaning",
              },
              {
                id: "Sewer Cleaning",
                label: "Sewer Cleaning",
              },
              {
                id: "Toilet Repair",
                label: "Toilet Repair",
              },
              {
                id: "Water Heater Sales",
                label: "Water Heater Sales",
              },
              {
                id: "Water Heater Services",
                label: "Water Heater Services",
              },
              {
                id: "Water Purification Supplies",
                label: "Water Purification Supplies",
              },
              {
                id: "Water Purifiers",
                label: "Water Purifiers",
              },
              {
                id: "Water Softening",
                label: "Water Softening",
              },
              {
                id: "Water Works Contractors",
                label: "Water Works Contractors",
              },
              {
                id: "Well Drilling Services",
                label: "Well Drilling Services",
              },
            ],
          },
        ],
      },

      {
        id: "Hot Tub and Spa Services",
        label: "Hot Tub and Spa Services",
      },
      {
        id: "House Cleaning Companies",
        label: "House Cleaning Companies",
      },
      {
        id: "Individual and Family Social Services",
        label: "Individual and Family Social Services",
      },
      {
        id: "Industrial",
        label: "Industrial",
        children: [
          {
            id: "Agriculture and Farming",
            label: "Agriculture and Farming",
          },
          { id: "Energy", label: "Energy" },
          {
            id: "Environmental Services",
            label: "Environmental Services",
          },
          {
            id: "Foresting and Logging",
            label: "Foresting and Logging",
          },
          {
            id: "Industrial Supplies",
            label: "Industrial Supplies",
          },
          {
            id: "Machine Shops",
            label: "Machine Shops",
          },
          {
            id: "Manufacturing",
            label: "Manufacturing",
          },
          { id: "Metals", label: "Metals" },
          {
            id: "Mining and Drilling",
            label: "Mining and Drilling",
          },
          { id: "Plastics", label: "Plastics" },
          { id: "Rubber", label: "Rubber" },
          {
            id: "Scientific Instruments",
            label: "Scientific Instruments",
          },
          { id: "Textiles", label: "Textiles" },
          {
            id: "Tool and Die Makers",
            label: "Tool and Die Makers",
          },
          { id: "hvac", label: "hvac" },
        ],
      },

      {
        id: "Insurance",
        label: "Insurance",
        children: [
          {
            id: "Auto Insurance",
            label: "Auto Insurance",
          },
          {
            id: "Boat Insurance",
            label: "Boat Insurance",
          },
          {
            id: "Business Insurance Services",
            label: "Business Insurance Services",
          },
          {
            id: "Dental Insurance",
            label: "Dental Insurance",
          },
          {
            id: "Disability Insurance",
            label: "Disability Insurance",
          },
          {
            id: "Health Insurance",
            label: "Health Insurance",
          },
          {
            id: "Home Insurance",
            label: "Home Insurance",
          },
          {
            id: "Insurance Adjusters",
            label: "Insurance Adjusters",
          },
          {
            id: "Liability and Malpractice Insurance",
            label: "Liability and Malpractice Insurance",
          },
          {
            id: "Life Insurance",
            label: "Life Insurance",
          },
          {
            id: "Motorcycle Insurance",
            label: "Motorcycle Insurance",
          },
          {
            id: "Property Insurance",
            label: "Property Insurance",
          },
          {
            id: "Renters Insurance",
            label: "Renters Insurance",
          },
          {
            id: "Senior and Long Term Care Insurance",
            label: "Senior and Long Term Care Insurance",
          },
          {
            id: "Title Insurance",
            label: "Title Insurance",
          },
          {
            id: "Travel Insurance",
            label: "Travel Insurance",
          },
        ],
      },

      {
        id: "Interior Designers",
        label: "Interior Designers",
        children: [
          {
            id: "Art Decor Consultants",
            label: "Art Decor Consultants",
          },
          { id: "Blinds", label: "Blinds" },
          {
            id: "Home Accessories and Decor",
            label: "Home Accessories and Decor",
          },
          {
            id: "Interior Designers Supplies",
            label: "Interior Designers Supplies",
          },
          { id: "Lighting", label: "Lighting" },
          {
            id: "Window Treatments and Shades",
            label: "Window Treatments and Shades",
          },
        ],
      },
      {
        id: "Janitorial Companies",
        label: "Janitorial Companies",
      },
      {
        id: "Labor Unions and Similar Labor Organizations",
        label: "Labor Unions and Similar Labor Organizations",
      },
      { id: "Landscapers", label: "Landscapers" },
      {
        id: "Sprinkler Repair and Irrigation",
        label: "Sprinkler Repair and Irrigation",
      },
      { id: "Laundromats", label: "Laundromats" },
      {
        id: "Lawn Care Companies",
        label: "Lawn Care Companies",
      },
      { id: "Locksmiths", label: "Locksmiths" },
      { id: "Marina", label: "Marina" },
      {
        id: "Martial Arts",
        label: "Martial Arts",
        children: [
          { id: "Boxing", label: "Boxing" },
          { id: "Fencing", label: "Fencing" },
          { id: "MMA Studios", label: "MMA Studios" },
          {
            id: "Self Defense Classes",
            label: "Self Defense Classes",
          },
        ],
      },

      {
        id: " Massage Therapists",
        label: "Massage Therapists",
      },
      {
        id: "Moving Service Companies",
        label: "Moving Service Companies",
      },
      { id: "Nail Salons", label: "Nail Salons" },
      {
        id: "Nonprofit Organizations",
        label: "Nonprofit Organizations",
      },
      { id: "Other", label: "Other" },
      {
        id: "Other Personal Care Services",
        label: "Other Personal Care Services",
      },
      {
        id: "Painting Contractors",
        label: "Painting Contractors",
        children: [
          {
            id: "Exterior Painters",
            label: "Exterior Painters",
          },
          {
            id: "Interior House Painting",
            label: "Interior House Painting",
          },
          {
            id: "Interior Painters",
            label: "Interior Painters",
          },
          {
            id: "Paint Removal",
            label: "Paint Removal",
          },
          {
            id: "Paint Supplies",
            label: "Paint Supplies",
          },
          {
            id: "Siding Contractors",
            label: "Siding Contractors",
          },
          {
            id: "Siding Materials",
            label: "Siding Materials",
          },
        ],
      },

      {
        id: "Parking Lots and Garages",
        label: "Parking Lots and Garages",
      },
      {
        id: "Personal Services",
        label: "Personal Services",
        children: [
          {
            id: "All Other Personal Services",
            label: "All Other Personal Services",
          },
          {
            id: "Dating Services",
            label: "Dating Services",
          },
          {
            id: "Online Dating",
            label: "Online Dating",
          },
        ],
      },

      {
        id: "Pest Control Companies",
        label: "Pest Control Companies",
      },
      {
        id: "Pets",
        label: "Pets",
        children: [
          {
            id: "Animal Hospitals",
            label: "Animal Hospitals",
          },
          { id: "Horses", label: "Horses" },
          {
            id: "Humane Societies and Shelters",
            label: "Humane Societies and Shelters",
          },
          {
            id: "Pet Boarding and Kennels",
            label: "Pet Boarding and Kennels",
          },
          { id: "Pet Breeders", label: "Pet Breeders" },
          {
            id: "Pet Food and Supplies",
            label: "Pet Food and Supplies",
          },
          {
            id: "Pet Furniture and Accessories",
            label: "Pet Furniture and Accessories",
          },
          { id: "Pet Groomers", label: "Pet Groomers" },
          { id: "Pet Medicine", label: "Pet Medicine" },
          { id: "Pet Services", label: "Pet Services" },
          { id: "Pet Stores", label: "Pet Stores" },
          { id: "Veterinarians", label: "Veterinarians" },
        ],
      },

      {
        id: "Photographers",
        label: "Photographers",
        children: [{ id: "Wedding", label: "Wedding" }],
      },
      {
        id: "Physical Therapists",
        label: "Physical Therapists",
      },
      { id: "Plastic Surgeons", label: "Plastic Surgeons" },
      {
        id: "Political Organizations",
        label: "Political Organizations",
      },
      {
        id: "Pool Service and Repair",
        label: "Pool Service and Repair",
      },
      {
        id: "Printing and Graphics",
        label: "Printing and Graphics",
        children: [
          {
            id: "Mailing Services",
            label: "Mailing Services",
          },
        ],
      },

      {
        id: "Private Investigators",
        label: "Private Investigators",
        children: [
          {
            id: " Asset and Financial Investigations",
            label: "Asset and Financial Investigations",
          },
          {
            id: "Computer Forensics",
            label: "Computer Forensics",
          },
          {
            id: "Corporate Investigations",
            label: "Corporate Investigations",
          },
          {
            id: "Domestic Violence Investigators",
            label: "Domestic Violence Investigators",
          },
          {
            id: "Due Diligence Investigations",
            label: "Due Diligence Investigations",
          },
          {
            id: "Intellectual Property Investigations",
            label: "Intellectual Property Investigations",
          },
          {
            id: "Missing Person Services",
            label: "Missing Person Services",
          },
          {
            id: "Private Detectives",
            label: "Private Detectives",
          },
          {
            id: "Probate Investigators",
            label: "Probate Investigators",
          },
          {
            id: "Surveillance Companies",
            label: "Surveillance Companies",
          },
        ],
      },

      {
        id: "Professional Equipment and Supplies",
        label: "Professional Equipment and Supplies",
      },
      {
        id: "Professional Organizers",
        label: "Professional Organizers",
      },
      {
        id: "Publishers",
        label: "Publishers",
        children: [
          { id: "Books", label: "Books" },
          { id: "Magazines", label: "Magazines" },
        ],
      },

      {
        id: "Real Estate",
        label: "Real Estate",
        children: [
          {
            id: "Apartments and Housing Rental",
            label: "Apartments and Housing Rental",
          },
          {
            id: "Commercial Property",
            label: "Commercial Property",
          },
          {
            id: "Homes For Sale",
            label: "Homes For Sale",
          },
          {
            id: "Land Companies",
            label: "Land Companies",
          },
          {
            id: "Land For Sale",
            label: "Land For Sale",
          },
          {
            id: "Mortgage Services",
            label: "Mortgage Services",
          },
          {
            id: "Note Buying Services",
            label: "Note Buying Services",
          },
          {
            id: "Property Management",
            label: "Property Management",
          },
          {
            id: "Real Estate Agents",
            label: "Real Estate Agents",
          },
          {
            id: "Real Estate Brokers",
            label: "Real Estate Brokers",
          },
          {
            id: "Real Estate Consultants",
            label: "Real Estate Consultants",
          },
          { id: "Timeshares", label: "Timeshares" },
        ],
      },

      {
        id: "Religious Organizations",
        label: "Religious Organizations",
      },
      {
        id: "Remediation Services",
        label: "Remediation Services",
        children: [
          {
            id: "Cleaning Services",
            label: "Cleaning Services",
            children: [
              {
                id: "Crime Scene Cleanup",
                label: "Crime Scene Cleanup",
              },
              {
                id: "Mold Removal",
                label: "Mold Removal",
              },
            ],
          },

          {
            id: "Damage Repair",
            label: "Damage Repair",
            children: [
              {
                id: "Flood Disaster Recovery",
                label: "Flood Disaster Recovery",
              },
            ],
          },
        ],
      },

      {
        id: "Restaurants",
        label: "Restaurants",
        children: [
          {
            id: "Afghan Restaurants",
            label: "Afghan Restaurants",
          },
          {
            id: "African Restaurants",
            label: "African Restaurants",
          },
          {
            id: "American Restaurants",
            label: "American Restaurants",
          },
          {
            id: "Argentinean Restaurants",
            label: "Argentinean Restaurants",
          },
          {
            id: "Armenian Restaurants",
            label: "Armenian Restaurants",
          },
          {
            id: "Asian Restaurants",
            label: "Asian Restaurants",
          },
          {
            id: "Australian Restaurants",
            label: "Australian Restaurants",
          },
          {
            id: "Austrian Restaurants",
            label: "Austrian Restaurants",
          },
          {
            id: "Bagels Restaurants",
            label: "Bagels Restaurants",
          },
          {
            id: "Bakeries and Dessert Shops",
            label: "Bakeries and Dessert Shops",
          },
          {
            id: "Bar and Grills",
            label: "Bar and Grills",
          },
          {
            id: "Barbecue Restaurants",
            label: "Barbecue Restaurants",
          },
          {
            id: "Belgian Restaurants",
            label: "Belgian Restaurants",
          },
          {
            id: "Brazilian Restaurants",
            label: "Brazilian Restaurants",
          },
          {
            id: "Breakfast Restaurants",
            label: "Breakfast Restaurants",
          },
          { id: "Brewpubs", label: "Brewpubs" },
          {
            id: "British Restaurants",
            label: "British Restaurants",
          },
          {
            id: "Brunch Restaurants",
            label: "Brunch Restaurants",
          },
          {
            id: "Buffets Restaurants",
            label: "Buffets Restaurants",
          },
          {
            id: "Burger Joints",
            label: "Burger Joints",
          },
          {
            id: "Cafeterias and Salad Bars",
            label: "Cafeterias and Salad Bars",
          },
          {
            id: "Cajun and Creole Restaurants",
            label: "Cajun and Creole Restaurants",
          },
          {
            id: "California Cuisine",
            label: "California Cuisine",
          },
          {
            id: "Canadian Restaurants",
            label: "Canadian Restaurants",
          },
          {
            id: "Caribbean Restaurants",
            label: "Caribbean Restaurants",
          },
          {
            id: "Catering Services",
            label: "Catering Services",
          },
          {
            id: "Cheesesteaks and Hoagies",
            label: "Cheesesteaks and Hoagies",
          },
          {
            id: "Chicken Restaurants",
            label: "Chicken Restaurants",
          },
          {
            id: "Chilean Restaurants",
            label: "Chilean Restaurants",
          },
          {
            id: "Chinese Restaurants",
            label: "Chinese Restaurants",
          },
          {
            id: "Coffee and Tea",
            label: "Coffee and Tea",
          },
          {
            id: "Croatian Restaurants",
            label: "Croatian Restaurants",
          },
          {
            id: "Cuban Restaurants",
            label: "Cuban Restaurants",
          },
          {
            id: "Czech Restaurants",
            label: "Czech Restaurants",
          },
          {
            id: "Danish Restaurants",
            label: "Danish Restaurants",
          },
          {
            id: "Delicatessens",
            label: "Delicatessens",
          },
          {
            id: "Dim Sum Restaurants",
            label: "Dim Sum Restaurants",
          },
          { id: "Diners", label: "Diners" },
          { id: "Donuts", label: "Donuts" },
          {
            id: "Dutch Restaurants",
            label: "Dutch Restaurants",
          },
          {
            id: "Egyptian Restaurants",
            label: "Egyptian Restaurants",
          },
          {
            id: "Ethiopian Restaurants",
            label: "Ethiopian Restaurants",
          },
          {
            id: "European Restaurants",
            label: "European Restaurants",
          },
          {
            id: "Family Style Restaurants",
            label: "Family Style Restaurants",
          },
          { id: "Fast Food", label: "Fast Food" },
          {
            id: "Filipino Restaurants",
            label: "Filipino Restaurants",
          },
          { id: "Fine Dining", label: "Fine Dining" },
          {
            id: "Finnish Restaurants",
            label: "Finnish Restaurants",
          },
          {
            id: "Fondue Restaurants",
            label: "Fondue Restaurants",
          },
          {
            id: "Restaurants, Food Delivery Services",
            label: "Food Delivery Services",
          },
          { id: "Food Trucks", label: "Food Trucks" },
          { id: "Franchises", label: "Franchises" },
          {
            id: "French Restaurants",
            label: "French Restaurants",
          },
          {
            id: "German Restaurants",
            label: "German Restaurants",
          },
          {
            id: "Greek Restaurants",
            label: "Greek Restaurants",
          },
          {
            id: "Hawaiian Restaurants",
            label: "Hawaiian Restaurants",
          },
          {
            id: "Health Food Restaurants",
            label: "Health Food Restaurants",
          },
          {
            id: "Home Cooking Restaurants",
            label: "Home Cooking Restaurants",
          },
          {
            id: "Hungarian Restaurants",
            label: "Hungarian Restaurants",
          },
          {
            id: "Ice Cream Shops",
            label: "Ice Cream Shops",
          },
          {
            id: "Icelandic Restaurants",
            label: "Icelandic Restaurants",
          },
          {
            id: "Indian Restaurants",
            label: "Indian Restaurants",
          },
          {
            id: "Indonesian Restaurants",
            label: "Indonesian Restaurants",
          },
          {
            id: "Irish Restaurants",
            label: "Irish Restaurants",
          },
          {
            id: "Italian Restaurants",
            label: "Italian Restaurants",
          },
          {
            id: "Jamaican Restaurants",
            label: "Jamaican Restaurants",
          },
          {
            id: "Japanese Restaurants",
            label: "Japanese Restaurants",
          },
          {
            id: "Korean Restaurants",
            label: "Korean Restaurants",
          },
          {
            id: "Kosher Restaurants",
            label: "Kosher Restaurants",
          },
          {
            id: "Lebanese Restaurants",
            label: "Lebanese Restaurants",
          },
          {
            id: "Malaysian Restaurants",
            label: "Malaysian Restaurants",
          },
          {
            id: "Mexican Restaurants",
            label: "Mexican Restaurants",
            children: [
              {
                id: "Taco Restaurants",
                label: "Taco Restaurants",
              },
            ],
          },

          {
            id: "Middle Eastern Restaurants",
            label: "Middle Eastern Restaurants",
          },
          {
            id: "Moroccan Restaurants",
            label: "Moroccan Restaurants",
          },
          {
            id: "Native American Restaurants",
            label: "Native American Restaurants",
          },
          {
            id: "New Zealand Restaurants",
            label: "New Zealand Restaurants",
          },
          {
            id: "Norwegian Restaurants",
            label: "Norwegian Restaurants",
          },
          {
            id: "Pan Asian Restaurants",
            label: "Pan Asian Restaurants",
          },
          { id: "Pizza", label: "Pizza" },
          {
            id: "Polish Restaurants",
            label: "Polish Restaurants",
          },
          {
            id: "Polynesian Restaurants",
            label: "Polynesian Restaurants",
          },
          {
            id: "Portuguese Restaurants",
            label: "Portuguese Restaurants",
          },
          {
            id: "Russian Restaurants",
            label: "Russian Restaurants",
          },
          { id: "Sandwich", label: "Sandwich" },
          {
            id: "Sandwich Shops",
            label: "Sandwich Shops",
          },
          {
            id: "Scottish Restaurants",
            label: "Scottish Restaurants",
          },
          {
            id: "Seafood Restaurants",
            label: "Seafood Restaurants",
          },
          {
            id: "Soul Food Restaurants",
            label: "Soul Food Restaurants",
          },
          {
            id: "South American Restaurants",
            label: "South American Restaurants",
          },
          {
            id: "Southern Restaurants",
            label: "Southern Restaurants",
          },
          {
            id: "Southwestern Restaurants",
            label: "Southwestern Restaurants",
          },
          {
            id: "Spanish Restaurants",
            label: "Spanish Restaurants",
          },
          {
            id: "Steak Houses",
            label: "Steak Houses",
          },
          { id: "Sushi Bars", label: "Sushi Bars" },
          {
            id: "Swedish Restaurants",
            label: "Swedish Restaurants",
          },
          {
            id: "Take Out Restaurants",
            label: "Take Out Restaurants",
          },
          {
            id: "Tapas Restaurants",
            label: "Tapas Restaurants",
          },
          { id: "Tex Mex", label: "Tex Mex" },
          {
            id: "Thai Restaurants",
            label: "Thai Restaurants",
          },
          {
            id: "Turkish Restaurants",
            label: "Turkish Restaurants",
          },
          {
            id: "Vegan Restaurants",
            label: "Vegan Restaurants",
          },
          {
            id: "Vegetarian Restaurants",
            label: "Vegetarian Restaurants",
          },
          {
            id: "Vietnamese Restaurants",
            label: "Vietnamese Restaurants",
          },
        ],
      },

      {
        id: "Restoration Companies",
        label: "Restoration Companies",
      },
      {
        id: "Retail",
        label: "Retail",
        children: [
          { id: "Beauty Shops", label: "Beauty Shops" },
          {
            id: "Cleaning Products",
            label: "Cleaning Products",
          },
          {
            id: "Consignment Stores",
            label: "Consignment Stores",
          },
          {
            id: "Convenience Stores",
            label: "Convenience Stores",
          },
          { id: "Flower Shops", label: "Flower Shops" },
          {
            id: "Furniture",
            label: "Furniture",
            children: [
              {
                id: "Upholstery",
                label: "Upholstery",
              },
            ],
          },

          {
            id: "Hardware Stores",
            label: "Hardware Stores",
          },
          {
            id: "Jewelry Stores",
            label: "Jewelry Stores",
          },
          { id: "Liquor Stores", label: "Liquor Stores" },
          {
            id: "Nutrition Store",
            label: "Nutrition Store",
            children: [
              {
                id: "Dietary Supplements",
                label: "Dietary Supplements",
              },
              {
                id: " Herbal Supplements",
                label: "Herbal Supplements",
              },
              {
                id: "Mineral Supplements",
                label: "Mineral Supplements",
              },
            ],
          },

          { id: "Pharmacies", label: "Pharmacies" },
          {
            id: "Retail, Specialty Food Store",
            label: "Specialty Food Store",
          },
        ],
      },

      {
        id: "Roofing Contractors",
        label: "Roofing Contractors",
        children: [
          {
            id: "Ceiling Contractors",
            label: "Ceiling Contractors",
          },
          {
            id: "Emergency Roofers",
            label: "Emergency Roofers",
          },
          {
            id: "Gutter and Downspout Supplies",
            label: "Gutter and Downspout Supplies",
          },
          {
            id: "Gutter Installations",
            label: "Gutter Installations",
          },
          {
            id: "Roof and Floor Structures",
            label: "Roof and Floor Structures",
          },
          {
            id: "Roof Cleaning",
            label: "Roof Cleaning",
          },
          {
            id: "Roof Repair",
            label: "Roof Repair",
          },
          {
            id: "Roofing Supplies",
            label: "Roofing Supplies",
          },
          {
            id: "Waterproofing Contractors",
            label: "Waterproofing Contractors",
          },
          {
            id: "Waterproofing Supplies",
            label: "Waterproofing Supplies",
          },
        ],
      },

      { id: "Screen Printing", label: "Screen Printing" },
      {
        id: "Security Services",
        label: "Security Services",
        children: [
          {
            id: "Alarm Equipment Installation",
            label: "Alarm Equipment Installation",
          },
          {
            id: "Event Security",
            label: "Event Security",
          },
          {
            id: "Home Security",
            label: "Home Security",
          },
          {
            id: "Personal Protection Services",
            label: "Personal Protection Services",
          },
          {
            id: "Security Monitoring",
            label: "Security Monitoring",
          },
        ],
      },

      {
        id: "Self Storage Centers",
        label: "Self Storage Centers",
      },
      {
        id: "Senior Living Communities",
        label: "Senior Living Communities",
        children: [
          {
            id: "Assisted Living",
            label: "Assisted Living",
          },
          {
            id: "Independent Living",
            label: "Independent Living",
          },
          {
            id: "Retirement Communities",
            label: "Retirement Communities",
          },
        ],
      },

      { id: "Shipping", label: "Shipping" },
      { id: "Sign Companies", label: "Sign Companies" },
      {
        id: "Snow Removal Services",
        label: "Snow Removal Services",
      },
      { id: "Solar Installers", label: "Solar Installers" },
      {
        id: "Special Trade Contractors",
        label: "Special Trade Contractors",
        children: [
          {
            id: "Driveway Sealing Company",
            label: "Driveway Sealing Company",
          },
          {
            id: "Power Washing Service",
            label: "Power Washing Service",
          },
          {
            id: "Sandblasting Service",
            label: "Sandblasting Service",
          },
          {
            id: "Stone Cleaning",
            label: "Stone Cleaning",
          },
        ],
      },

      {
        id: "Specialized Design Services",
        label: "Specialized Design Services",
      },
      {
        id: "Sports and Recreation Clubs",
        label: "Sports and Recreation Clubs",
      },
      {
        id: "Surgeons and Specialists",
        label: "Surgeons and Specialists",
      },
      { id: "Surveyors", label: "Surveyors" },
      {
        id: "Tailors and Seamstresses",
        label: "Tailors and Seamstresses",
      },
      { id: "Tattoo Shops", label: "Tattoo Shops" },
      {
        id: "Telephone Call Centers",
        label: "Telephone Call Centers",
      },
      {
        id: "Therapists and Psychiatrists",
        label: "Therapists and Psychiatrists",
        children: [
          {
            id: "Family Therapist",
            label: "Family Therapist",
          },
          {
            id: "Marriage Therapist",
            label: "Marriage Therapist",
          },
          {
            id: "Relationship Therapist",
            label: "Relationship Therapist",
          },
        ],
      },

      {
        id: "Transportation",
        label: "Transportation",
        children: [
          { id: "Charter Bus", label: "Charter Bus" },
          {
            id: "Limousine Services",
            label: "Limousine Services",
          },
          {
            id: "Professional Driver",
            label: "Professional Driver",
          },
          {
            id: "Shuttle Services",
            label: "Shuttle Services",
          },
        ],
      },

      {
        id: "Travel",
        label: "Travel",
        children: [
          { id: "Air Travel", label: "Air Travel" },
          { id: "Cruises", label: "Cruises" },
          {
            id: "Hotels and Lodging",
            label: "Hotels and Lodging",
          },
          {
            id: "Tourist Attractions",
            label: "Tourist Attractions",
          },
          { id: "Tours", label: "Tours" },
          { id: "Travel Agents", label: "Travel Agents" },
          {
            id: "Travel Services",
            label: "Travel Services",
          },
          {
            id: "Vacation Rentals",
            label: "Vacation Rentals",
          },
        ],
      },

      {
        id: " Urgent Care Centers",
        label: "Urgent Care Centers",
      },
      {
        id: "Utility Companies",
        label: "Utility Companies",
        children: [
          {
            id: "Utility Companies, Electric Companies",
            label: "Electric Companies",
          },
        ],
      },

      {
        id: "Waste Removal and Recycling",
        label: "Waste Removal and Recycling",
      },
      { id: "Window Cleaners", label: "Window Cleaners" },
    ],
  }),

  created() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        localStorage.setItem("city", "Near Me");
        // enable company select if location available
        if (this.lat !== undefined) {
          this.refetchQuery();
        }
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },

  mounted() {
    this.autocomplete = new GeocoderAutocomplete(
      document.getElementById("autocomplete"),
      "e5b3d7c8eec94a7dba4652546a1b3b23",
      {
        /* Geocoder options */
      }
    );
    document.getElementsByClassName(
      "geoapify-autocomplete-input"
    )[0].placeholder = "Current Location ";

    this.autocomplete.on("select", (location) => {
      if (location) {
        this.lat = location.properties.lat;
        this.lon = location.properties.lon;
        localStorage.setItem("city", location.properties.address_line1);
      }
      // enable company select if location available
      if (this.lat !== undefined) {
        this.refetchQuery();
      }
      // if category is not undefined look for businesses by category name

      this.category = this.cat.label;
      if (this.category !== undefined) {
        this.categorySelected();
      }
    });
  },

  updated() {
    this.category = this.cat;
    console.log(this.category);
    this.company = this.com.name;
    this.cid = this.com.value;

    // Check browser support
    if (typeof Storage !== "undefined") {
      // Store
      localStorage.setItem("lat", this.lat);
      localStorage.setItem("lon", this.lon);
    }

    // if location is not undefined
    if (this.lat !== undefined && this.category !== null) {
      // if category is not undefined look for businesses by category name
      this.categorySelected();
    }

    // if company is not undefined look for business by company name
    if (this.company !== undefined) {
      this.companySelected();
    }
  },

  methods: {
    refetchQuery() {
      this.placeholder = "Business Name";
      this.disabled = 0;
      this.$apollo.queries.allApprovedCompanys.skip = false;
      this.$apollo.queries.allApprovedCompanys.refetch();
    },
    categorySelected() {
      this.$router.push(
        "/companys/" +
          this.category +
          "?lat=" +
          this.lat +
          "&lon=" +
          this.lon +
          ""
      );
    },

    companySelected() {
      this.$router.push("/companys/" + this.company + "/" + this.cid + "");
    },
  },

  apollo: {
    allCategories: {
      query: getAllCategoriesQuery,
    },

    allApprovedCompanys: {
      query: getAllApprovedCompanysQuery,
      variables() {
        return {
          lat: parseFloat(this.lat),
          lon: parseFloat(this.lon),
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import "~@geoapify/geocoder-autocomplete/styles/minimal.css";



/* autocomplete-container */

/* find some form input css for background color in App.vue */

.autocomplete-container {
  position: relative;
}

.geoapify-close-button {
  position: absolute;
  right: 20px;
}

.data {
  color: white;
  font-size: 20px;
}

.form.main-container {
  padding: 15vw 0vw 0vw;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-family: "Playfair Display", serif;
}

.bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
}

.heading {
  padding: 0vw 2vw;
}

.heading h1 {
  font-size: 7vw;
  margin-bottom: 4vw;
}
.heading p {
  font-size: 5vw;
  margin: auto auto 8vw;
}

.input-container {
  padding: 0 0 15vw;
}

.input1,
.v-select {
  border-radius: 40px;
  padding: 20px;
  width: 75vw;
  color: #cecece;
  border: transparent;
  text-align: center;
  font-size: 1.8rem;
  outline: none;
}

.v-select {
  padding: 18px 20px;
}

/* location input design on App.vue */

.v-select {
  background-color: #ffffffc9;
  margin: 20px auto;
}

.input1 {
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

.input1:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}

.form.main-container img.img-border {
  box-shadow: 7px 12px #cecece;
}

@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  .input1 {
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border: 1px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
  }

  .input1:hover {
    background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
    background-color: #ffab23;
  }
}

@media screen and (min-width: 640px) {
  .form.main-container {
    padding: 10vw 0vw 0vw;
  }

  .bg {
    background-position: 0px 71px;
  }

  .heading {
    padding: 0 4vw;
  }

  .heading h1 {
    font-size: 4vw;
    margin-bottom: 3vw;
  }

  .heading p {
    font-size: 2.5vw;
    margin-bottom: 5vw;
  }
}

@media screen and (min-width: 768px) {
  .bg {
    background-position: 0px 117px;
  }

  .heading p {
    width: 75%;
  }
}

@media screen and (min-width: 999px) {
  .input-container {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 5vw;
  }

  .input1,
  .v-select {
    width: 22vw;
    margin: 0 10px;
  }
}

@media screen and (min-width: 1024px) {
  .bg {
    background-position: 0px 130px;
  }
}

@media screen and (min-width: 1200px) {
  .geoapify-autocomplete-input {
    width: 100vw !important;
    margin: 0;
  }

  .heading h1 {
    font-size: 3vw;
    margin-bottom: 3vw;
  }

  .heading p {
    font-size: 2vw;
    margin-bottom: 3vw;
  }
  .form.main-container img.img-border {
    box-shadow: 7px 15px #cecece;
  }
}
</style>
