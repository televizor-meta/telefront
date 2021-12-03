import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../apps/login/Login";
import SimpleUser from "@/apps/simple_user/SimpleUser";
import AvatarPage from "@/apps/simple_user/avatar/AvatarPage";
import UserMedia from "@/apps/simple_user/user_media/UserMedia";
import Subscription from "@/apps/subscription/Subscription";
import AvatarMenu from "@/apps/simple_user/avatar/AvatarMenu";
import AvatarComments from "@/apps/simple_user/avatar/AvatarComments";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "SimpleUser",
    component: SimpleUser,
    // meta: { requiresAuth: true },
    children: [
        // при совпадении пути с шаблоном /user/:id
        // в <router-view> компонента User будет показан UserHome
        { path: '',
            component: AvatarPage ,
            name: 'AvatarPage',
            children: [
                {
                    path: '',
                    component: AvatarMenu,
                    name: 'AvatarMenu',
                },
                {
                    path: 'comments/',
                    component: AvatarComments,
                    name: 'AvatarComments',
                },

            ]
        },
        {
            path: "/media",
            alias: ["/media/photo", "/media/videos", "/media/pages"],
            name: "UserMedia",
            component: UserMedia,
            // meta: { guest: true },
          },
        {
            path: "/subscription",
            name: "Subscription",
            component: Subscription,
            // meta: { guest: true },
          },
        // ...остальные вложенные маршруты
      ]
  },

    {
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