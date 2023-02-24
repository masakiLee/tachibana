<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    toggleNavToggler() {
      const navToggler = document.querySelector("#nav-toggler");
      navToggler.checked = false;
    },
  },
};
</script>

<template>
  <header
    class="header d-flex flex-md-column align-items-end justify-content-between justify-content-md-end"
  >
    <input type="checkbox" name="nav-toggler" id="nav-toggler" />
    <nav class="nav">
      <RouterLink to="/" class="navList" @click="toggleNavToggler"
        >首頁</RouterLink
      >
      <RouterLink to="/news" class="navList" @click="toggleNavToggler"
        >最新消息</RouterLink
      >
      <a href="#" class="navList">美味菜單</a>
      <a href="#" class="navList text-primary">後台登入</a>
    </nav>
    <label for="nav-toggler" class="hamburgerBtn">
      <span class="hamburgerLine"></span>
      <span class="hamburgerLine"></span>
      <span class="hamburgerLine"></span>
    </label>
    <div class="shoppingBtn">
      <img
        src="../assets/image/shopping.svg"
        alt="購物車"
        class="shoppingCar mx-auto"
      />
    </div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
</style>
