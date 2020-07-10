<template>
  <div class="addBusiness">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Business Name *"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.businessName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="City & State *"
        label-for="input-2"
      >
        <b-form-select
          id="input-2"
          v-model="form.city"
          :options="cities"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Website *" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.website"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Contact First Name"
        label-for="input-4"
      >
        <b-form-input id="input-4" v-model="form.firstName"> </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Contact Last Name"
        label-for="input-5"
      >
        <b-form-input id="input-5" v-model="form.lastName"> </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Phone" label-for="input-6">
        <b-form-input id="input-6" v-model="form.phone"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Postal Code" label-for="input-7">
        <b-form-input id="input-7" v-model="form.postalCode"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-8" label="Address" label-for="input-8">
        <b-form-input id="input-8" v-model="form.address"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-9" label="Address 2" label-for="input-9">
        <b-form-input id="input-9" v-model="form.address2"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-10"
        label="Category & Subcategories *"
        label-for="input-10"
      >
        <b-form-select
          id="input-10"
          v-model="form.category"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="textarea-1"
        label="Business Description"
        label-for="textarea"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Write about the Business..."
          rows="3"
          max-rows="16"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Company Logo:" label-for="file">
        <b-form-file
          v-model="form.logo"
          id="file"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">
          Selected file: {{ form.logo ? form.logo.name : "" }}
        </div>
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
import VueRecaptcha from "vue-recaptcha";

Vue.use(BootstrapVue);

export default {
  components: { VueRecaptcha },
  props: ["source"],
  data(props) {
    return {
      form: {
        businessName: "",
        city: null,
        website: "",
        firstName: "",
        lastName: "",
        phone: "",
        postalCode: "",
        address: "",
        address2: "",
        category: null,
        description: "",
        logo: null,
        dataSource: props.source,
      },
        show: true,

      cities: [
        "New York, NY - USA",
        "Los Angeles, CA - USA",
        "Chicago, IL - USA",
        "Houston, TX - USA",
        "Philadelphia, PA - USA",
        "Phoenix, AZ - USA",
        "San Antonio, TX - USA",
        "San Diego, CA - USA",
        "Dallas, TX - USA",
        "San Jose, CA - USA",
        "Jacksonville, FL - USA",
        "Indianapolis, IN - USA",
        "San Francisco, CA - USA",
        "Austin, TX - USA",
        "Columbus, OH - USA",
        "Fort Worth, TX - USA",
        "Detroit, MI - USA",
        "Seattle, WA - USA",
        "Boston, MA - USA",
        "Denver, CO - USA",
      ],
      categories: [
        "Acupuncturists",
        "Advertising and Marketing",
        "Advertising and Marketing > Promotional Products",
        "Air Duct and Dryer Vent Cleaning",
        "Amusement and Recreation Services",
        "Amusement and Recreation Services > Combat Sports",
        "Amusement and Recreation Services > Combat Sports > Laser Tag Center",
        "Amusement and Recreation Services > Combat Sports > Paintball Center",
        "Amusement and Recreation Services > Water Sports",
        "Amusement and Recreation Services > Water Sports > Fishing Charter",
        "Amusement and Recreation Services > Water Sports > Jet Ski Rental",
        "Appliance Repair Services",
        "Architects",
        "Arts and Entertainment",
        "Arts and Entertainment > Arcades and Amusements",
        "Arts and Entertainment > Ballrooms",
        "Arts and Entertainment > Clubs and Nightlife",
        "Arts and Entertainment > Movies and Video",
        "Arts and Entertainment > Music and Recording",
        "Arts and Entertainment > News and Media",
        "Arts and Entertainment > Theaters",
        "Arts and Entertainment > Venues",
        "Arts and Entertainment > Visual Arts",
        "Attorneys and Law Firms",
        "Attorneys and Law Firms > Appellate Attorneys",
        "Attorneys and Law Firms > Business Attorneys",
        "Attorneys and Law Firms > Civil Rights Attorneys",
        "Attorneys and Law Firms > Criminal Attorneys",
        "Attorneys and Law Firms > Divorce Attorneys",
        "Attorneys and Law Firms > Employment Attorneys",
        "Attorneys and Law Firms > Family Attorneys",
        "Attorneys and Law Firms > Financial and Tax Attorneys",
        "Attorneys and Law Firms > Government and Regulatory Law",
        "Attorneys and Law Firms > Health and Medical Attorneys",
        "Attorneys and Law Firms > Immigration Attorneys",
        "Attorneys and Law Firms > Intellectual Property Attorneys",
        "Attorneys and Law Firms > Personal Injury Attorneys",
        "Attorneys and Law Firms > Product Liability Attorneys",
        "Attorneys and Law Firms > Real Estate Attorneys",
        "Attorneys and Law Firms > Specialized Legal Services",
        "Attorneys and Law Firms > Toxic Exposure Attorneys",
        "Attorneys and Law Firms > Trusts and Estates Attorneys",
        "Auto",
        "Auto > Aircraft",
        "Auto > Auto Body",
        "Auto > Auto Glass Services",
        "Auto > Auto Parts and Accessories",
        "Auto > Auto Repair",
        "Auto > Auto Shops",
        "Auto > Auto Shops > Maintenance Services",
        "Auto > Boats",
        "Auto > Buses",
        "Auto > Car Rental Companies",
        "Auto > Car Sales",
        "Auto > Car Sharing",
        "Auto > Car Washes",
        "Auto > Dealers",
        "Auto > Detailing",
        "Auto > Inspections",
        "Auto > Motorcycles",
        "Auto > Oil Change",
        "Auto > Parking",
        "Auto > RVs",
        "Auto > Tire Stores",
        "Auto > Traffic and Driving Schools",
        "Auto > Trailers",
        "Auto > Trucks",
        "Auto > Van Rental",
        "Auto > Wraps",
        "Bail Bonds",
        "Bakeries",
        "Barber Shops",
        "Bars and Breweries",
        "Beauty Salons and Spas",
        "Bicycle Shops",
        "Bookkeepers",
        "Business Support Services",
        "Business Support Services > Fundraising",
        "Cabinet Showrooms",
        "Carpet Cleaners",
        "Catering Companies",
        "Catering Companies > Personal Chef",
        "Child Care Providers",
        "Child and Youth Services",
        "Chimney and Fireplace Services",
        "Civic, Social, and Fraternal Associations",
        "Commercial Contractors",
        "Commercial Contractors > Concrete Mixing",
        "Commercial Contractors > Concrete Repair or Mudjacking",
        "Computer IT Services",
        "Computer IT Services > Communications and Networking",
        "Computer IT Services > Communications and Networking > Telephone System Providers",
        "Computer IT Services > Computer Hardware",
        "Computer IT Services > Computer Repair",
        "Computer IT Services > Computer Services",
        "Computer IT Services > Data Management",
        "Computer IT Services > IT Compliance",
        "Computer IT Services > IT Disaster Recovery Services",
        "Computer IT Services > IT Outsourcing Services",
        "Computer IT Services > IT Risk Management",
        "Computer IT Services > IT Support",
        "Computer IT Services > Information Security",
        "Computer IT Services > Printers and Copiers",
        "Computer IT Services > Security Services",
        "Computer IT Services > Software",
        "Computer IT Services > Software Developers and Consultants",
        "Counseling Services",
        "Counseling Services > Career",
        "Counseling Services > Family",
        "Counseling Services > Marriage",
        "Counseling Services > Relationship",
        "Dance Schools and Studios",
        "Dentists and Orthodontists",
        "Dentists and Orthodontists > Dentists",
        "Dentists and Orthodontists > Dentists > Pediatric Dentistry",
        "Dentists and Orthodontists > Orthodontists",
        "Dry Cleaners",
        "Ecommerce",
        "Ecommerce > Jewelry",
        "Ecommerce > Nutrition",
        "Ecommerce > Nutrition > Dietary Supplements",
        "Ecommerce > Nutrition > Herbal Supplements",
        "Ecommerce > Nutrition > Mineral  Supplements",
        "Ecommerce > Personal Care",
        "Ecommerce > Specialty Food Store",
        "Education",
        "Education > Business Consulting",
        "Education > College Consultation",
        "Education > Education and Research Foundations",
        "Education > Elementary Schools",
        "Education > Fine Arts Education",
        "Education > Football Coaching",
        "Education > General Education",
        "Education > Higher Education",
        "Education > Highschools",
        "Education > Language Studies",
        "Education > Life Coaches",
        "Education > Middle Schools",
        "Education > Online Education",
        "Education > Preschools and Kindergartens",
        "Education > Primary Schools",
        "Education > Private and Specialized Schools",
        "Education > Professional and Trade Schools",
        "Education > Risk Management",
        "Education > Safety Training",
        "Education > Seminars",
        "Education > Sports Coaching",
        "Education > Study Abroad Programs",
        "Education > Training Programs",
        "Education > Training Programs > K9",
        "Education > Tutoring and Learning Centers",
        "Employment Agencies",
        "Engineering Services",
        "Event Planners",
        "Event Planners > Wedding",
        "Eye Doctors and Optometrists",
        "Family Doctors",
        "Fencing Contractors",
        "Finance",
        "Finance > Accounting Firms and CPA",
        "Finance > Auto Finance",
        "Finance > Banking Services",
        "Finance > Bookkeepers",
        "Finance > Collection Services",
        "Finance > Credit and Debt Management",
        "Finance > Credit Cards",
        "Finance > Financial Advisers",
        "Finance > Investment Services",
        "Finance > Loan Agents",
        "Finance > Payment Processing Services",
        "Finance > Personal Loans and Advances",
        "Finance > Student Financial Services",
        "Fire Protection",
        "Fitness Centers",
        "Fitness Centers > Fitness Classes",
        "Fitness Centers > Fitness Equipment",
        "Fitness Centers > Fitness Gyms",
        "Fitness Centers > Personal Trainers",
        "Fitness Centers > Pilates",
        "Fitness Centers > Weight Training",
        "Fitness Centers > Yoga Studios",
        "Fitness and Recreational Sports Centers",
        "Flooring Contractors",
        "Flooring Contractors > Concrete Polishing",
        "Food and Beverage",
        "Food and Beverage > Beverages",
        "Food and Beverage > Beverages > Beverage Distributor",
        "Food and Beverage > Food Delivery Services",
        "Food and Beverage > Food Delivery Services > Box Lunch Supplier",
        "Funeral Homes and Services",
        "Garage Door Contractors",
        "Glasses and Contact Lenses",
        "Hair Salons",
        "Health and Medicine",
        "Health and Medicine > Alternative Medicine",
        "Health and Medicine > Chiropractors",
        "Health and Medicine > Dental Surgeons",
        "Health and Medicine > Dermatologists",
        "Health and Medicine > Hearing Aids",
        "Health and Medicine > Medical Aids and Supplies",
        "Health and Medicine > Medical Billing",
        "Health and Medicine > Medical Clinics",
        "Health and Medicine > Medical Diagnostics and Labs",
        "Health and Medicine > Medical Equipment",
        "Health and Medicine > Medical Spas",
        "Health and Medicine > Mental and Behavioral Health",
        "Health and Medicine > Nutrition and Weight Loss",
        "Health and Medicine > Pharmacies and Prescriptions",
        "Health and Medicine > Physicians",
        "Health and Medicine > Physicians > Family Doctors",
        "Health and Medicine > Physicians > Family Doctors > Pediatricians",
        "Health and Medicine > Reproductive Health",
        "Health and Medicine > Reproductive Health > Obstetrics",
        "Health and Medicine > Services for the Elderly and Persons with Disabilities",
        "Home Health Care Providers",
        "Home Health Care Providers > Services for the Elderly and Persons with Disabilities",
        "Home Inspectors",
        "Home Services",
        "Home Services > Electricians",
        "Home Services > Electricians > 24 Hour Electricians",
        "Home Services > Electricians > Battery Repair",
        "Home Services > Electricians > Battery Supplies",
        "Home Services > Electricians > Cabling",
        "Home Services > Electricians > Dry Cell Batteries",
        "Home Services > Electricians > Electric Companies",
        "Home Services > Electricians > Electric Motor Repair",
        "Home Services > Electricians > Exterior Lighting",
        "Home Services > Electricians > Generator Service and Repair",
        "Home Services > Electricians > Generators",
        "Home Services > Electricians > Lighting Contractors",
        "Home Services > Electricians > Storage Batteries",
        "Home Services > Electricians > Wiring and Electrical Supplies",
        "Home Services > HVAC / Heating and AC",
        "Home Services > Home Contractors",
        "Home Services > Home Contractors > Appraisers",
        "Home Services > Home Contractors > Basement Finishing",
        "Home Services > Home Contractors > Bathroom Remodeling",
        "Home Services > Home Contractors > Building Inspectors",
        "Home Services > Home Contractors > Cabinet Makers",
        "Home Services > Home Contractors > Concrete Mixing",
        "Home Services > Home Contractors > Concrete Polishing",
        "Home Services > Home Contractors > Concrete Repair or Mudjacking",
        "Home Services > Home Contractors > Custom Home Building",
        "Home Services > Home Contractors > Door Installation",
        "Home Services > Home Contractors > Home Remodeling",
        "Home Services > Home Contractors > Insulation",
        "Home Services > Home Contractors > Kitchen Remodeling",
        "Home Services > Home Contractors > Licensed General Contractors",
        "Home Services > Home Contractors > Remodeling",
        "Home Services > Home Contractors > Roofing",
        "Home Services > Home Contractors > Siding Installation",
        "Home Services > Home Contractors > Sunroom or Patio Enclosure Builders",
        "Home Services > Home Contractors > Window Installation",
        "Home Services > Home Contractors > Window Repair",
        "Home Services > Plumbers",
        "Home Services > Plumbers > Backflow Prevention",
        "Home Services > Plumbers > Drainage Contractors",
        "Home Services > Plumbers > Emergency Plumbers",
        "Home Services > Plumbers > Flood Control Equipment",
        "Home Services > Plumbers > Gas Conversions",
        "Home Services > Plumbers > Leak Detection Services",
        "Home Services > Plumbers > Plumbing Repair",
        "Home Services > Plumbers > Plumbing Supplies",
        "Home Services > Plumbers > Portable Toilets",
        "Home Services > Plumbers > Pumps",
        "Home Services > Plumbers > Repipe Services",
        "Home Services > Plumbers > Septic Systems",
        "Home Services > Plumbers > Septic Tank Cleaning",
        "Home Services > Plumbers > Sewer Cleaning",
        "Home Services > Plumbers > Toilet Repair",
        "Home Services > Plumbers > Water Heater Sales",
        "Home Services > Plumbers > Water Heater Services",
        "Home Services > Plumbers > Water Purification Supplies",
        "Home Services > Plumbers > Water Purifiers",
        "Home Services > Plumbers > Water Softening",
        "Home Services > Plumbers > Water Works Contractors",
        "Home Services > Plumbers > Well Drilling Services",
        "Hot Tub and Spa Services",
        "House Cleaning Companies",
        "Individual and Family Social Services",
        "Industrial",
        "Industrial > Agriculture and Farming",
        "Industrial > Energy",
        "Industrial > Environmental Services",
        "Industrial > Foresting and Logging",
        "Industrial > Industrial Supplies",
        "Industrial > Machine Shops",
        "Industrial > Manufacturing",
        "Industrial > Metals",
        "Industrial > Mining and Drilling",
        "Industrial > Plastics",
        "Industrial > Rubber",
        "Industrial > Scientific Instruments",
        "Industrial > Textiles",
        "Industrial > Tool and Die Makers",
        "Industrial > hvac",
        "Insurance",
        "Insurance > Auto Insurance",
        "Insurance > Boat Insurance",
        "Insurance > Business Insurance Services",
        "Insurance > Dental Insurance",
        "Insurance > Disability Insurance",
        "Insurance > Health Insurance",
        "Insurance > Home Insurance",
        "Insurance > Insurance Adjusters",
        "Insurance > Liability and Malpractice Insurance",
        "Insurance > Life Insurance",
        "Insurance > Motorcycle Insurance",
        "Insurance > Property Insurance",
        "Insurance > Renters Insurance",
        "Insurance > Senior and Long Term Care Insurance",
        "Insurance > Title Insurance",
        "Insurance > Travel Insurance",
        "Interior Designers",
        "Interior Designers > Art Decor Consultants",
        "Interior Designers > Blinds",
        "Interior Designers > Home Accessories and Decor",
        "Interior Designers > Interior Designers Supplies",
        "Interior Designers > Lighting",
        "Interior Designers > Window Treatments and Shades",
        "Janitorial Companies",
        "Labor Unions and Similar Labor Organizations",
        "Landscapers",
        "Landscapers > Sprinkler Repair and Irrigation",
        "Laundromats",
        "Lawn Care Companies",
        "Locksmiths",
        "Marina",
        "Martial Arts",
        "Martial Arts > Boxing",
        "Martial Arts > Fencing",
        "Martial Arts > MMA Studios",
        "Martial Arts > Self Defense Classes",
        "Massage Therapists",
        "Moving Service Companies",
        "Nail Salons",
        "Nonprofit Organizations",
        "Other",
        "Other Personal Care Services",
        "Painting Contractors",
        "Painting Contractors > Exterior Painters",
        "Painting Contractors > Interior House Painting",
        "Painting Contractors > Interior Painters",
        "Painting Contractors > Paint Removal",
        "Painting Contractors > Paint Supplies",
        "Painting Contractors > Siding Contractors",
        "Painting Contractors > Siding Materials",
        "Parking Lots and Garages",
        "Personal Services",
        "Personal Services > All Other Personal Services",
        "Personal Services > Dating Services",
        "Personal Services > Online Dating",
        "Pest Control Companies",
        "Pets",
        "Pets > Animal Hospitals",
        "Pets > Horses",
        "Pets > Humane Societies and Shelters",
        "Pets > Pet Boarding and Kennels",
        "Pets > Pet Breeders",
        "Pets > Pet Food and Supplies",
        "Pets > Pet Furniture and Accessories",
        "Pets > Pet Groomers",
        "Pets > Pet Medicine",
        "Pets > Pet Services",
        "Pets > Pet Stores",
        "Pets > Veterinarians",
        "Photographers",
        "Photographers > Wedding",
        "Physical Therapists",
        "Plastic Surgeons",
        "Political Organizations",
        "Pool Service and Repair",
        "Printing and Graphics",
        "Printing and Graphics > Mailing Services",
        "Private Investigators",
        "Private Investigators > Asset and Financial Investigations",
        "Private Investigators > Computer Forensics",
        "Private Investigators > Corporate Investigations",
        "Private Investigators > Domestic Violence Investigators",
        "Private Investigators > Due Diligence Investigations",
        "Private Investigators > Intellectual Property Investigations",
        "Private Investigators > Missing Person Services",
        "Private Investigators > Private Detectives",
        "Private Investigators > Probate Investigators",
        "Private Investigators > Surveillance Companies",
        "Professional Equipment and Supplies",
        "Professional Organizers",
        "Publishers",
        "Publishers > Books",
        "Publishers > Magazines",
        "Real Estate",
        "Real Estate > Apartments and Housing Rental",
        "Real Estate > Commercial Property",
        "Real Estate > Homes For Sale",
        "Real Estate > Land Companies",
        "Real Estate > Land For Sale",
        "Real Estate > Mortgage Services",
        "Real Estate > Note Buying Services",
        "Real Estate > Property Management",
        "Real Estate > Real Estate Agents",
        "Real Estate > Real Estate Brokers",
        "Real Estate > Real Estate Consultants",
        "Real Estate > Timeshares",
        "Religious Organizations",
        "Remediation Services",
        "Remediation Services > Cleaning Services",
        "Remediation Services > Cleaning Services > Crime Scene Cleanup",
        "Remediation Services > Cleaning Services > Mold Removal",
        "Remediation Services > Damage Repair",
        "Remediation Services > Damage Repair > Flood Disaster Recovery",
        "Restaurants",
        "Restaurants > Afghan",
        "Restaurants > African",
        "Restaurants > American",
        "Restaurants > Argentinean",
        "Restaurants > Armenian",
        "Restaurants > Asian",
        "Restaurants > Australian",
        "Restaurants > Austrian",
        "Restaurants > Bagels",
        "Restaurants > Bakeries and Dessert Shops",
        "Restaurants > Bar and Grills",
        "Restaurants > Barbecue",
        "Restaurants > Belgian",
        "Restaurants > Brazilian",
        "Restaurants > Breakfast",
        "Restaurants > Brewpubs",
        "Restaurants > British",
        "Restaurants > Brunch",
        "Restaurants > Buffets",
        "Restaurants > Burger Joints",
        "Restaurants > Cafeterias and Salad Bars",
        "Restaurants > Cajun and Creole",
        "Restaurants > California Cuisine",
        "Restaurants > Canadian",
        "Restaurants > Caribbean",
        "Restaurants > Catering Services",
        "Restaurants > Cheesesteaks and Hoagies",
        "Restaurants > Chicken",
        "Restaurants > Chilean",
        "Restaurants > Chinese",
        "Restaurants > Coffee and Tea",
        "Restaurants > Croatian",
        "Restaurants > Cuban",
        "Restaurants > Czech",
        "Restaurants > Danish",
        "Restaurants > Delicatessens",
        "Restaurants > Dim Sum",
        "Restaurants > Diners",
        "Restaurants > Donuts",
        "Restaurants > Dutch Restaurants",
        "Restaurants > Egyptian",
        "Restaurants > Ethiopian",
        "Restaurants > European",
        "Restaurants > Family Style",
        "Restaurants > Fast Food",
        "Restaurants > Filipino",
        "Restaurants > Fine Dining",
        "Restaurants > Finnish",
        "Restaurants > Fondue",
        "Restaurants > Food Delivery Services",
        "Restaurants > Food Trucks",
        "Restaurants > Franchises",
        "Restaurants > French",
        "Restaurants > German",
        "Restaurants > Greek",
        "Restaurants > Hawaiian",
        "Restaurants > Health Food",
        "Restaurants > Home Cooking",
        "Restaurants > Hungarian",
        "Restaurants > Ice Cream Shops",
        "Restaurants > Icelandic",
        "Restaurants > Indian",
        "Restaurants > Indonesian",
        "Restaurants > Irish",
        "Restaurants > Italian",
        "Restaurants > Jamaican",
        "Restaurants > Japanese",
        "Restaurants > Korean",
        "Restaurants > Kosher",
        "Restaurants > Lebanese",
        "Restaurants > Malaysian",
        "Restaurants > Mexican",
        "Restaurants > Mexican > Taco",
        "Restaurants > Middle Eastern",
        "Restaurants > Moroccan",
        "Restaurants > Native American",
        "Restaurants > New Zealand",
        "Restaurants > Norwegian",
        "Restaurants > Pan Asian",
        "Restaurants > Pizza",
        "Restaurants > Polish",
        "Restaurants > Polynesian",
        "Restaurants > Portuguese",
        "Restaurants > Russian",
        "Restaurants > Sandwich",
        "Restaurants > Sandwich Shops",
        "Restaurants > Scottish",
        "Restaurants > Seafood",
        "Restaurants > Soul Food",
        "Restaurants > South American",
        "Restaurants > Southern",
        "Restaurants > Southwestern",
        "Restaurants > Spanish",
        "Restaurants > Steak Houses",
        "Restaurants > Sushi Bars",
        "Restaurants > Swedish",
        "Restaurants > Take Out",
        "Restaurants > Tapas Restaurants",
        "Restaurants > Tex Mex",
        "Restaurants > Thai",
        "Restaurants > Turkish",
        "Restaurants > Vegan",
        "Restaurants > Vegetarian",
        "Restaurants > Vietnamese",
        "Restoration Companies",
        "Retail",
        "Retail > Beauty Shops",
        "Retail > Cleaning Products",
        "Retail > Consignment Stores",
        "Retail > Convenience Stores",
        "Retail > Flower Shops",
        "Retail > Furniture",
        "Retail > Furniture > Upholstery",
        "Retail > Hardware Stores",
        "Retail > Jewelry Stores",
        "Retail > Liquor Stores",
        "Retail > Nutrition Store",
        "Retail > Nutrition Store > Dietary Supplements",
        "Retail > Nutrition Store > Herbal Supplements",
        "Retail > Nutrition Store > Mineral Supplements",
        "Retail > Pharmacies",
        "Retail > Specialty Food Store",
        "Roofing Contractors",
        "Roofing Contractors > Ceiling Contractors",
        "Roofing Contractors > Emergency Roofers",
        "Roofing Contractors > Gutter and Downspout Supplies",
        "Roofing Contractors > Gutter Installations",
        "Roofing Contractors > Roof and Floor Structures",
        "Roofing Contractors > Roof Cleaning",
        "Roofing Contractors > Roof Repair",
        "Roofing Contractors > Roofing Supplies",
        "Roofing Contractors > Waterproofing Contractors",
        "Roofing Contractors > Waterproofing Supplies",
        "Screen Printing",
        "Security Services",
        "Security Services > Alarm Equipment Installation",
        "Security Services > Event Security",
        "Security Services > Home Security",
        "Security Services > Personal Protection Services",
        "Security Services > Security Monitoring",
        "Self Storage Centers",
        "Senior Living Communities",
        "Senior Living Communities > Assisted Living",
        "Senior Living Communities > Independent Living",
        "Senior Living Communities > Retirement Communities",
        "Shipping",
        "Sign Companies",
        "Snow Removal Services",
        "Solar Installers",
        "Special Trade Contractors",
        "Special Trade Contractors > Driveway Sealing Company",
        "Special Trade Contractors > Power Washing Service",
        "Special Trade Contractors > Sandblasting Service",
        "Special Trade Contractors > Stone Cleaning",
        "Specialized Design Services",
        "Sports and Recreation Clubs",
        "Surgeons and Specialists",
        "Surveyors",
        "Tailors and Seamstresses",
        "Tattoo Shops",
        "Telephone Call Centers",
        "Therapists and Psychiatrists",
        "Therapists and Psychiatrists > Family",
        "Therapists and Psychiatrists > Marriage",
        "Therapists and Psychiatrists > Relationship",
        "Transportation",
        "Transportation > Charter Bus",
        "Transportation > Limousine Services",
        "Transportation > Professional Driver",
        "Transportation > Shuttle Services",
        "Travel",
        "Travel > Air Travel",
        "Travel > Cruises",
        "Travel > Hotels and Lodging",
        "Travel > Tourist Attractions",
        "Travel > Tours",
        "Travel > Travel Agents",
        "Travel > Travel Services",
        "Travel > Vacation Rentals",
        "Urgent Care Centers",
        "Utility Companies",
        "Utility Companies > Electric Companies",
        "Waste Removal and Recycling",
        "Window Cleaners",
      ],
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
     /* let business = Object.assign({}, this.form); */
      this.resetForm();
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    resetForm() {
      this.form.businessName = "";
      this.form.city = null;
      this.form.website = "";
      this.form.phone = "";
      this.form.postalCode = "";
      this.form.address = "";
      this.form.address2 = "";
      this.form.category = null;
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.description = "";
      this.form.logo = null;
    },
  },
};
</script>

<style>
.addBusiness {
  text-align: left;
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
