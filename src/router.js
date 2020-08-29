import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vue-admin",
      name: "AdminDashboard",
      component: () => import("./views/AdminDashboard.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/companys/:category",
      name: "Results",
      component: () => import("./views/Results.vue"),
    },
    {
      path: "/companys/:company/:cid",
      name: "SingleResult",
      component: () => import("./views/SingleResult.vue"),
    },
    {
      path: "/company/edit/:company/:cid",
      name: "EditCity",
      component: () => import("./components/EditCity.vue"),
    },
    {
      path: "/vue-admin/edit/:company/:cid",
      name: "ApproveBusiness",
      component: () => import("./views/ApproveBusiness.vue"),
    },
    {
      path: "/bdashboard/edit/:company",
      name: "EditBusiness",
      component: () => import("./views/EditBusiness.vue"),
    },
    {
      path: "/review-status/:rid",
      name: "EditReview",
      component: () => import("./views/EditReview.vue"),
    },
    {
      path: "/reviews/:company/:cid",
      name: "Reviews",
      component: () => import("./views/Reviews.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/branding-guidelines",
      name: "BrandingGuidelines",
      component: () => import("./views/BrandingGuidelines.vue"),
    },
    {
      path: "/benefits-of-joining",
      name: "Benefits",
      component: () => import("./views/Benefits.vue"),
    },
    {
      path: "/add-business-free",
      name: "AddBusinessFree",
      component: () => import("./views/AddBusinessFree.vue"),
    },
    {
      path: "/suggest-a-business",
      name: "SuggestBusiness",
      component: () => import("./views/SuggestBusiness.vue"),
    },
    {
      path: "/compare-plans",
      name: "Compare",
      component: () => import("./views/Compare.vue"),
    },
    {
      path: "/login-signup",
      name: "LoginSignUp",
      component: () => import("./views/LoginSignUp.vue"),
    },
    {
      path: "/signup",
      name: "BesinessReviewerSignUp",
      component: () => import("./components/BesinessReviewerSignUp.vue"),
    },
    {
      path: "/reviewer-signup",
      name: "ReviewerSignUp",
      component: () => import("./views/ReviewerSignUp.vue"),
    },
    {
      path: "/reviewer-login",
      name: "ReviewerLogin",
      component: () => import("./views/ReviewerLogin.vue"),
    },
    {
      path: "/business-signup",
      name: "BusinessSignUp",
      component: () => import("./views/BusinessSignUp.vue"),
    },
    {
      path: "/business-login",
      name: "BusinessLogin",
      component: () => import("./views/BusinessLogin.vue"),
    },
    {
      path: "/login",
      name: "BusinessReviewerLogin",
      component: () => import("./components/BusinessReviewerLogin.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/report-spam",
      name: "Contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/rdashboard",
      name: "ReviewerDashboard",
      component: () => import("./views/ReviewerDashboard.vue"),
    },
    {
      path: "/bdashboard",
      name: "BusinessDashboard",
      component: () => import("./views/BusinessDashboard.vue"),
    },
    {
      path: "/validate/:email/:loginid/:md",
      name: "Validate",
      component: () => import("./views/validate.vue"),
    },
  ],
});
