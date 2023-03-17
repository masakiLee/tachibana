import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "news",
          component: () => import("../views/front/NewsView.vue"),
        },
        {
          path: "news/:id",
          component: () => import("../views/front/NewsPagesView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "product/:id",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "cartPay/:id",
          component: () => import("../views/front/CartPayView.vue"),
        },
        {
          path: "cartComplete",
          component: () => import("../views/front/CartCompleteView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("../views/front/NotFound.vue"),
        },
      ],
    },
    {
      path: "/logIn",
      component: () => import("../views/DashBoradView.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/AdminView.vue"),
      children: [
        {
          path: "index",
          component: () => import("../views/admin/AdminIndexView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/admin/AdminProductView.vue"),
        },
        {
          path: "article",
          component: () => import("../views/admin/AdminArticleView.vue"),
        },
        {
          path: "order",
          component: () => import("../views/admin/AdminOrderView.vue"),
        },
        {
          path: "coupon",
          component: () => import("../views/admin/AdminCouponView.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
