<script>
import { mapActions } from "pinia";
import PageHeader from "../../components/PageHeader.vue";
import cartStore from "../../stores/cart";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      sameCategory: [],
      id: "",
      qty: 1,
      modules: [Pagination],
    };
  },
  methods: {
    getProduct(newId) {
      this.id = newId || this.$route.params.id || "";
      if (!this.id) {
        return;
      }
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${this.id}`)
        .then((response) => {
          this.product = response.data.product;
          this.getCategoryProducts();
        });
    },
    getCategoryProducts() {
      const { category } = this.product;
      this.sameCategory = [];
      this.$http
        .get(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`
        )
        .then((response) => {
          response.data.products.forEach((item) => {
            if (item.id === this.id) {
              return;
            } else {
              this.sameCategory.push(item);
            }
          });
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },
  components: {
    PageHeader,
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.getProduct();
  },
  watch: {
    $route() {
      const newId = this.$route.params.id;
      this.getProduct(newId);
    },
  },
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-product bg-darkTwo py-8">
    <div class="container">
      <div class="d-flex flex-wrap">
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
          class="ms-7 ms-md-8 align-self-end mt-8 mt-md-0"
        >
          <ol class="breadcrumb text-nowrap">
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
    <div class="product mt-7 mt-sm-9 mb-8 bg-dark">
      <div class="container">
        <div class="row pb-4 pb-md-0">
          <div class="col-lg-6">
            <div
              class="product-body d-flex h-100 py-4 py-md-4 py-xl-8"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div
                class="left py-5 px-4 border-end border-primary border-3 my-auto"
              >
                <h3 class="title mx-auto">{{ product.title }}</h3>
                <img
                  :src="product.imageUrl"
                  alt=""
                  class="productUrlImg mt-4"
                />
              </div>
              <div
                class="about w-100 px-4 px-md-8 py-0 d-flex flex-column justify-content-between"
              >
                <span
                  class="category py-1 px-3 bg-darkTwo text-primary border border-white border-1 align-self-start"
                  >{{ product.category }}</span
                >
                <p class="description pt-3 pt-md-0">
                  {{ product.description }}
                </p>
                <p class="price text-primary">
                  {{ product.price }}/<span class="unit text-white">{{
                    product.unit
                  }}</span>
                </p>
                <div class="group d-flex">
                  <select
                    name=""
                    id=""
                    class="form-select w-25 ps-3"
                    v-model="qty"
                  >
                    <option v-for="i in 20" :value="i" :key="i">{{ i }}</option>
                  </select>
                  <button
                    class="btn btn-primary addCart w-50 text-white ms-4"
                    @click="addToCart(product.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
                <p class="font-monospace note pt-3 pt-md-0">
                  ※
                  注意：本商品含有蟹、蝦、魚類、大豆、麩質之穀物(小麥)及其製品可能導致過敏症狀
                  ※
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6"
            v-for="(img, index) in product.imagesUrl"
            :key="index + '123'"
          >
            <div class="productImg" data-aos="zoom-in">
              <img v-if="img" :src="img" alt="" class="productsUrl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="same mt-4 mt-md-10 bg-dark py-6">
      <div class="container">
        <div class="category-area d-flex">
          <div class="same-title px-3 text-center bg-darkTwo">系列料理</div>
          <swiper
            :slidesPerView="3"
            :spaceBetween="10"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '640': {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              '1024': {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }"
            :modules="modules"
            class="mySwiper"
            :observer="true"
          >
            <swiper-slide v-for="category in sameCategory" :key="category.id"
              ><RouterLink
                :to="category.id"
                class="category-list p-3 h-100 d-flex flex-column"
              >
                <div class="my-auto">
                  <img
                    :src="category.imageUrl"
                    alt=""
                    class="categoryImg mx-auto"
                  />
                </div>
                <p class="text-center mt-auto">{{ category.title }}</p>
              </RouterLink>
            </swiper-slide>
          </swiper>
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
.productUrlImg {
  width: 100px;
  object-fit: cover;
}
.title {
  writing-mode: vertical-lr;
  letter-spacing: 12px;
  font-size: 32px;
}
.category {
  font-size: 20px;
}
.description {
  font-size: 20px;
}
.price {
  font-size: 32px;
}
.unit {
  font-size: 20px;
}
select {
  font-size: 24px;
  padding: 4px 0;
  vertical-align: middle;
}
.addCart {
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
.productsUrl {
  width: 546px;
  object-fit: cover;
  aspect-ratio: 4/3;
  transform: scale(1.1);
  box-shadow: 0 3px 6px #000000;
  @media (max-width: 992px) {
    width: 100%;
    transform: scale(1);
  }
}

.same-title {
  writing-mode: vertical-lr;
  font-size: 24px;
  letter-spacing: 4px;
}
.categoryImg {
  width: 80px;
  object-fit: cover;
}
.category-list:hover {
  background-color: #222222;
  cursor: pointer;
}
.form-select {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
.form-select:focus {
  box-shadow: none;
}
.note {
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.category-area {
  position: relative; /* 將父層設為相對定位 */
  height: 182px; /* 設定父層高度，可以根據需要做調整 */
  @media (max-width: 576px) {
    height: 158px;
  }
}

.swiper {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  // padding-bottom: 32px;
  padding: 8px 16px 32px;
  @media (max-width: 576px) {
    padding: 0 0 24px;
  }
}

.swiper-slide img {
  display: block;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

:deep(.swiper-pagination)
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #f25c05;
}
:deep(.swiper-pagination-bullet) {
  background-color: white;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
:deep(.swiper-pagination-horizontal.swiper-pagination-bullets)
  .swiper-pagination-bullet {
  width: 24px;
  height: 8px;
  border-radius: 0;
}
</style>
