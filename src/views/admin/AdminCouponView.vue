<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import CouponModal from "../../components/CouponModal.vue";
import CouponDelModal from "../../components/CouponDelModal.vue";
export default {
  data() {
    return {
      //先放get到的優惠券
      coupons: [],
      //暫存的優惠券
      tempCoupon: {
        title: "",
        is_enabled: 0,
        percent: 100,
        code: "",
      },
      isNew: false,
    };
  },
  components: {
    CouponModal,
    CouponDelModal,
  },
  methods: {
    getCoupon() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupons`)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //打開
    openModal(type, item) {
      if (type === "new") {
        //新增優惠券
        this.isNew = true;
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
        this.$refs.modal.couponModal.show();
      } else if (type === "edit") {
        //修改優惠券
        this.isNew = false;
        this.tempCoupon = { ...item };
        this.$refs.modal.couponModal.show();
      } else if (type === "delete") {
        //刪除優惠券
        this.$refs.delModal.couponDelModal.show();
        this.tempCoupon = { ...item };
      }
    },
    //送出新增&修改按鈕
    updateCoupon() {
      //先預設為新增商品
      let newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon`;
      let http = "post";
      //如果是修改則更改url & http
      if (!this.isNew) {
        newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        http = "put";
      }
      // 帶入不同的api
      this.$http[http](newurl, { data: this.tempCoupon })
        .then((response) => {
          alert(response.data.message);
          this.$refs.modal.couponModal.hide();
          this.getCoupon();
        })
        .catch((err) => {
          alert(err);
        });
    },
    //刪除
    delCoupon() {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.$refs.delModal.couponDelModal.hide();
          this.getCoupon();
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.getCoupon();
  },
};
</script>

<template>
  <section class="coupon">
    <div class="container text-dark">
      <h2 class="py-8">
        <i class="bi bi-bookmark-star-fill pe-3"></i>優惠券管理頁面
      </h2>
      <button
        class="btn btn-dark text-white d-block ms-auto btn-lg mb-4"
        @click="openModal('new')"
      >
        新增優惠券
      </button>
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="coupon in coupons" :key="coupon.id">
          <div class="coupon-card border border-dark border-3 text-center">
            <p class="p-3 bg-dark text-white">{{ coupon.code }}</p>
            <p class="title fw-bold p-3">{{ coupon.title }}</p>
            <p class="p-3">
              折扣
              <span class="percent text-primary">{{ coupon.percent }}</span> %
            </p>
            <button
              class="btn btn-primary text-white w-50 btn-lg"
              @click="openModal('edit', coupon)"
            >
              修改</button
            ><button
              class="btn btn-danger text-white w-50 btn-lg"
              @click="openModal('delete', coupon)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
      <CouponModal
        ref="modal"
        :is-new="isNew"
        :coupon="tempCoupon"
        @update-coupon="updateCoupon"
      ></CouponModal>
      <CouponDelModal
        ref="delModal"
        :coupon-data="tempCoupon"
        @del-item="delCoupon"
      ></CouponDelModal>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: 32px;
  line-height: 1;
}
.percent {
  font-size: 48px;
  line-height: 1;
}
</style>
