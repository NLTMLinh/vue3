import Vue from "vue";
import VueRouter from "vue-router";
import { firebaseApp } from "./firebaseApp";
import store from "./store";
import App from "./components/App.vue";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/signin",
    component: SignIn
  },
  {
    path: "/signup",
    component: SignUp
  }
];

const router = new VueRouter({ routes, mode: "history" });

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard");
  } else {
    router.replace("/signin");
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
