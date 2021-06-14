import Vue from "vue";
import Router from "vue-router";

import List from "../components/List.vue";
import Detail from "../components/Detail.vue";
import Login from "../views/Login.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "login",
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
    {
      path: "/detail/:name",
      name: "Detail",
      component: Detail,
    },
  ],
  mode: "history",
});

// router.beforeEach((to, from, next) => {
//   if (to.name != "Login") {
//     if (!localStorage.getItem("cToken")) {
//       alert("请先登录");
//       next({ path: "/login" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
