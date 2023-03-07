<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cart";

export default {
  data() {
    return {};
  },
  methods: {
    toggleNavToggler() {
      const navToggler = document.querySelector("#nav-toggler");
      navToggler.checked = false;
    },
    ...mapActions(cartStore, ["getCart"]), //購物車列表
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<template>
  <header class="header d-flex flex-column justify-content-end">
    <input type="checkbox" name="nav-toggler" id="nav-toggler" />
    <nav class="nav">
      <RouterLink to="/" class="navList" @click="toggleNavToggler"
        >首頁</RouterLink
      >
      <RouterLink to="/news" class="navList" @click="toggleNavToggler"
        >最新消息</RouterLink
      >
      <RouterLink to="/products" class="navList" @click="toggleNavToggler"
        >逸品料理</RouterLink
      >
      <RouterLink to="/cart" class="navList" @click="toggleNavToggler"
        >購物車</RouterLink
      >
    </nav>
    <label for="nav-toggler" class="hamburgerBtn">
      <span class="hamburgerLine"></span>
      <span class="hamburgerLine"></span>
      <span class="hamburgerLine"></span>
    </label>
    <RouterLink to="/cart">
      <button type="button" class="shoppingBtn position-relative border-0">
        <img
          src="../assets/image/shopping.svg"
          alt="購物車"
          class="shoppingCar mx-auto"
        />
        <span class="badge bg-danger position-absolute rounded-pill">{{
          carts.length
        }}</span>
      </button>
    </RouterLink>
  </header>
  <RouterView></RouterView>
  <footer class="bg-dark footer">
    <div class="container">
      <div class="py-8 row">
        <div class="col-lg-6">
          <div class="logo">
            <img src="../assets/image/logo-sm.svg" alt="logo" />
            <p class="logoName">TACHIBANA</p>
            <p class="lesp">SUSHI</p>
          </div>
        </div>
        <div
          class="col-lg-6 text-end d-flex flex-column justify-content-between"
        >
          <ul
            class="d-flex justify-content-center justify-content-lg-end footer-link"
          >
            <li class="px-0 px-xl-3">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            ｜
            <li class="px-0 px-xl-3">
              <RouterLink to="/news">最新消息</RouterLink>
            </li>
            ｜
            <li class="px-0 px-xl-3">
              <RouterLink to="/products">逸品料理</RouterLink>
            </li>
            ｜
            <li class="text-primary px-0 ps-xl-3">
              <RouterLink to="/">後台登入</RouterLink>
            </li>
          </ul>
          <a
            href="tel:+886-2-9999334"
            class="border border-3 border-primary p-3 my-3 align-self-center align-self-lg-end text-center text-md-end tel"
            ><i class="bi bi-telephone-fill me-2"></i>02-2999-9334
            <span class="d-block mt-1">11：00 ~ 21：00 週三休息</span>
          </a>
          <ul>
            <li class="mb-2 text-center text-lg-end address">
              22060 新北市板橋區縣民大道一段22號
            </li>
            <li class="font-monospace text-center text-lg-end copyright">
              Copyright © 橘鮨 2023 All Rights Reserved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  width: max-content;
  z-index: 8;
  background-color: transparent;
  #nav-toggler {
    display: none;
  }
  #nav-toggler:checked ~ .nav {
    left: 0;
  }
  #nav-toggler:checked ~ .hamburgerBtn .hamburgerLine:nth-child(1) {
    transform: rotate(45deg);
    transition: bottom 0.5s, transform 0.5s 0.5s;
    background-color: #f25c05;
  }
  #nav-toggler:checked ~ .hamburgerBtn .hamburgerLine:nth-child(2) {
    opacity: 0;
    transition: 0.5s;
  }
  #nav-toggler:checked ~ .hamburgerBtn .hamburgerLine:nth-child(3) {
    transform: rotate(-45deg);
    transition: top 0.5s, transform 0.5s 0.5s;
    background-color: #f25c05;
  }
  .nav {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1b1b1b;
    transition: 1s left;
    left: -110%;
    .navList {
      font-size: 32px;
      font-weight: 700;
      writing-mode: vertical-rl;
      padding: 16px;
      letter-spacing: 12px;
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    @media (max-width: 768px) {
      font-size: 24px;
      padding: 8px;
    }
  }

  .hamburgerBtn,
  .shoppingBtn {
    height: 80px;
    width: 80px;
    cursor: pointer;
    padding: 24px;

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      padding: 12px;
    }
  }
  .shoppingBtn {
    background-color: #f25c05;
    outline: 0;
    &:hover .shoppingCar {
      transform: rotate(-10deg);
    }
  }
  .hamburgerBtn {
    position: relative;
    background-color: #1b1b1b;
  }
  .hamburgerLine {
    width: 32px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    &:nth-child(1) {
      transform: translateY(-12px);
      transition: bottom 0.5s 0.5s, transform 0.5s;
    }
    &:nth-child(2) {
      top: 0;
      bottom: 0;
      transition: 0.5s 0.5s;
    }
    &:nth-child(3) {
      transform: translateY(12px);
      transition: top 0.5s 0.5s, transform 0.5s;
    }
  }
}

.footer {
  .logo {
    width: 160px;
    @media (max-width: 992px) {
      margin: 0 auto;
    }
  }
  .logoName {
    font-family: "Permanent Marker";
    font-size: 24px;
    text-align: center;
  }
  .lesp {
    letter-spacing: 4px;
    text-align: center;
  }
  .bi-telephone-fill {
    color: #f25c05;
  }
  &-link,
  .tel,
  .address,
  .copyright {
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
}
.badge {
  top: 4px;
  right: 4px;
}
</style>
