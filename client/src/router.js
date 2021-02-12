import Vue from "vue";
// import store from "../store/index.js";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        title: "Find Your Fit",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue"),
      meta: {
        title: "Register - Find Your Fit",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
      meta: {
        title: "Login - Find Your Fit",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue"),
      meta: {
        title: "Dashboard - Find Your Fit",
      },
    },
    {
      path: "/listings",
      name: "listings",
      component: () => import("./views/Listings.vue"),
      meta: {
        title: "Listings - Find Your Fit",
      },
    },
    {
      path: "/listings/:id",
      name: "viewListing",
      component: () => import("./views/ViewListing.vue"),
      meta: {
        title: "View Listings - Find Your Fit",
      },
    },
    {
      path: "/createListing",
      name: "createListing",
      component: () => import("./views/CreateListing.vue"),
      meta: {
        title: "Create Listing - Find Your Fit",
      },
    },
    {
      path: "/myListing",
      name: "myListing",
      component: () => import("./views/MyListing.vue"),
      meta: {
        title: "My Listing - Find Your Fit",
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
