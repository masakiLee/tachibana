<script>
import PageHeader from "../../components/PageHeader.vue";
import PaginationType from "../../components/PaginationType.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      page: {},
    };
  },
  methods: {
    getProducts(page = 1) {
      //page = 1 預設參數
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
        });
    },
  },
  components: {
    PageHeader,
    PaginationType,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<template>
  <PageHeader></PageHeader>
  <section class="section-products bg-darkTwo py-8">
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
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              逸品料理
            </li>
          </ol>
        </nav>
      </div>
      <div class="products mt-9 mb-8">
        <div
          class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-6 text-center"
        >
          <div class="col" v-for="products in products" :key="products.id">
            <RouterLink
              :to="`product/${products.id}`"
              class="productsList border border-3 bg-dark border-primary h-100 d-flex"
            >
              <h3 class="p-4 bg-primary">{{ products.title }}</h3>
              <div class="productsImgBox my-auto">
                <img
                  :src="products.imageUrl"
                  :alt="products.title"
                  data-aos="fade-zoom"
                  data-aos-easing="ease-in"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  class="productsImg"
                />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <PaginationType :pages="page" @change-page="getProducts"></PaginationType>
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
.productsImg {
  width: max-content;
  object-fit: cover;
  transition: 0.6s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: min-content;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
}
.productsList:hover {
  color: white;
}
</style>
