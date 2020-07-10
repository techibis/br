import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
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
  ],
});
