<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      productLength: "",
      orderLength: "",
      articleLength: "",
      couponLength: "",
    };
  },
  components: {},
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/products/all`)
        .then((res) => {
          const data = res.data.products;
          this.productLength = Object.keys(data).length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOrder() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.orderLength = res.data.orders.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getArticles() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/articles`)
        .then((res) => {
          this.articleLength = res.data.articles.length;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getCoupon() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupons`)
        .then((res) => {
          this.couponLength = res.data.coupons.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.getProducts();
    this.getOrder();
    this.getArticles();
    this.getCoupon();
  },
};
</script>

<template>
  <div class="index">
    <div class="container">
      <div class="row py-8">
        <RouterLink to="/admin/products" class="col-md-3 text-center mb-3">
          <div class="product border border-dark border-3 p-3 bg-darkTwo">
            <i class="bi bi-box-seam-fill d-block text-center"></i>
            <p class="title">商品數</p>
            <p class="num">{{ productLength }}</p>
          </div>
        </RouterLink>
        <RouterLink to="/admin/order" class="col-md-3 text-center mb-3">
          <div class="product border border-dark border-3 p-3 bg-darkTwo">
            <i class="bi bi-receipt-cutoff d-block text-center"></i>
            <p class="title">訂單數</p>
            <p class="num">{{ orderLength }}</p>
          </div>
        </RouterLink>
        <RouterLink to="/admin/article" class="col-md-3 text-center mb-3">
          <div class="product border border-dark border-3 p-3 bg-darkTwo">
            <i class="bi bi-chat-square-text-fill d-block text-center"></i>
            <p class="title">文章數</p>
            <p class="num">{{ articleLength }}</p>
          </div>
        </RouterLink>
        <RouterLink to="/admin/coupon" class="col-md-3 text-center mb-3">
          <div class="product border border-dark border-3 p-3 bg-darkTwo">
            <i class="bi bi-bookmark-star-fill d-block text-center"></i>
            <p class="title">Coupon數</p>
            <p class="num">{{ couponLength }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bi {
  font-size: 48px;
}
.title {
  font-size: 28px;
}
.num {
  font-size: 32px;
}
.product {
  background-color: #fffaee;
}
</style>
