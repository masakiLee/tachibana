<script>
export default {
  data() {
    return {
      articles: {},
    };
  },
  methods: {},
};
</script>

<template>
  <section class="section-menu bg-dark py-10 position-relative">
    <div class="menuOne position-absolute">
      <img src="../assets/image/menuOne.png" alt="" class="d-none d-md-block" />
    </div>
    <div class="menuTwo position-absolute">
      <img src="../assets/image/menuTwo.png" alt="" class="" />
    </div>
    <div class="menuThree position-absolute">
      <img src="../assets/image/menuThree.png" alt="" class="" />
    </div>
    <div class="container">
      <div class="border border-3 border-white py-10 px-6 px-md-10 bg-darkTwo">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <h2
              class="menu-tips border border-3 border-primary p-3 bg-dark mx-auto"
            >
              美味菜單
            </h2>
            <h3 class="menu-text text-center py-8">
              橘鮨提供美味的季節性魚類 搭配蔬菜和肉類 永遠都有驚喜
            </h3>
            <button
              type="button"
              class="btn btn-outline-primary menu-btn d-block mx-auto btn-lg"
            >
              即刻品嘗
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.menuOne {
  width: 124px;
  height: 124px;
  right: 16%;
  top: 120px;
}
.menuTwo {
  width: 520px;
  height: 200px;
  right: 0;
  bottom: 24%;
  @media (max-width: 1200px) {
    width: 460px;
    height: 80px;
    bottom: 32%;
  }
  @media (max-width: 992px) {
    width: 220px;
    height: 80px;
    bottom: 12%;
  }
}
.menuThree {
  width: 560px;
  height: 320px;
  left: 0;
  top: 18%;
  @media (max-width: 1200px) {
    width: 460px;
    height: 80px;
    top: 22%;
  }
  @media (max-width: 992px) {
    width: 240px;
    height: 80px;
    top: 10%;
  }
}
.menu-tips {
  writing-mode: vertical-lr;
}
.menu-text {
  word-break: keep-all;
  line-height: 36px;
}
.menu-btn {
  font-size: 24px;
  color: white;
  @media (max-width: 992px) {
    font-size: 20px;
  }
}
</style>
