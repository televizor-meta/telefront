import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import store from "./store"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import "./assets/styles/main.sass"

// Components fot routers
import axios from "axios";
import router from "./router";

// Libs
Vue.use(BootstrapVue);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://gabbyblog.herokuapp.com/";

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});


import App from "./App";

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
