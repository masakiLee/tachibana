<script>
import PageHeader from "../../components/PageHeader.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      console.log(this.$route.params); // 拿出 id值
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((response) => {
          console.log("單一產品列表：", response.data.product);
          this.product = response.data.product;
        });
    },
  },
  components: {
    PageHeader,
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-product bg-darkTwo py-8">
    <div class="container">
      <div class="d-flex">
        <div
          class="square bg-darkTwo border border-primary border-3 mx-auto mx-md-0"
        >
          <h2
            class="news-tips position-absolute bottom-0 end-0 text-nowrap p-3 bg-dark align-self-start mx-auto"
          >
            逸品料理
          </h2>
        </div>
        <nav
          aria-label="breadcrumb"
          class="ms-8 align-self-end d-none d-md-block"
        >
          <ol class="breadcrumb font-monospace text-nowrap">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/products">逸品料理</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="product mt-8 mt-md-10 mb-8 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="product-body d-flex">
              <h3>尋味棒</h3>
            </div>
          </div>
          <div class="col-6">
            <div class="productImg">
              <img
                src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.square {
  width: 180px;
  aspect-ratio: 1/1;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    right: -20px;
    width: 180px;
    height: 180px;
    background-color: #1b1b1b;
  }
}
.news-tips {
  writing-mode: vertical-lr;
  z-index: 3;
}
.breadcrumb {
  margin-bottom: 0;
}
.breadcrumb-item:nth-child(2) {
  margin-right: 16px;
}
.productImg {
  transform: scale(1.1);
}
</style>
