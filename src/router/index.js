import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../apps/home/Home.vue";
import Login from "../apps/login/Login";
import Dashboard from "../apps/dashboard/Dashboard";
import RunParser from "@/apps/simple_user/run_parser/RunParser";
import SimpleUser from "@/apps/simple_user/SimpleUser";
import Avatar from "@/apps/simple_user/avatar/Avatar";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Avatar",
    component: Avatar,
    // meta: { requiresAuth: true },
    children: [
        // при совпадении пути с шаблоном /user/:id
        // в <router-view> компонента User будет показан UserHome
        { path: '/run', component: RunParser },

        // ...остальные вложенные маршруты
      ]
  },{
    path: "/login",
    name: "Login",
    component: Login,
    // meta: { guest: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next("/dashboard");
//       return;
//     }
//     next();
//   } else {
//     next("/login");
//     return;
//   }
// });

export default router;