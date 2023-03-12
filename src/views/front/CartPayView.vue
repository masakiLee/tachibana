<script>
import { mapActions, mapState } from "pinia";
import PageHeader from "../../components/PageHeader.vue";
import cartStore from "../../stores/cart";
import { paymentStore } from "../../stores/payment";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        user: {},
      },
      information: {},
      orderId: "",
      is_paid: "",
    };
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]), //購物車列表
    getOrder() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data.order;
          this.orderId = res.data.order.id;
          this.is_paid = res.data.order.is_paid;
        });
    },
    payOrder() {
      const data = this.order;
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`, {
          data,
        })
        .then((res) => {
          if (res.data.success) {
            paymentStore.setPaymentSuccess(true);
            this.$router.push(`/cartComplete`);
          }
          this.getCart();
          Swal.fire({
            toast: true,
            title: `已成功付款`,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#F25C05",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    PageHeader,
  },
  mounted() {
    this.getOrder();
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-cartPay py-8 bg-darkTwo">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 order-2 order-lg-1">
          <div class="bg-dark p-4 information">
            <ul class="step d-flex justify-content-around">
              <li
                class="step-list text-white flex-fill p-2 text-center bg-primary"
              >
                結帳資訊
              </li>
              <li
                class="step-list text-white flex-fill p-2 text-center bg-primary"
              >
                付款方式
              </li>
              <li
                class="step-list text-white flex-fill p-2 text-center bg-darkTwo"
              >
                訂單完成
              </li>
            </ul>
            <p class="py-3 border-bottom border-3 info mb-4">請選擇付款方式</p>
            <div class="selete">
              <div class="row">
                <div class="col-4">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />
                  <label
                    class="btn btn-outline-primary w-100 h-100 d-flex flex-column"
                    for="option1"
                    ><i class="bi bi-credit-card"></i
                    ><span class="bi-text">CREDIT CARD</span></label
                  >
                </div>
                <div class="col-4">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary w-100 h-100 d-flex flex-column"
                    for="option2"
                    ><i class="bi bi-cash"></i
                    ><span class="bi-text">CASH</span></label
                  >
                </div>
                <div class="col-4">
                  <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="option4"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-primary w-100 h-100 d-flex flex-column"
                    for="option4"
                    ><i class="bi bi-wallet"></i
                    ><span class="bi-text">MOBILE PAYMENT</span></label
                  >
                </div>
              </div>
            </div>
            <div class="information mt-4">
              <table class="table table-darkTwo table-hover">
                <thead>
                  <tr>
                    <td colspan="2">訂單編號</td>
                    <td colspan="2">{{ orderId }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">收件人姓名</td>
                    <td colspan="2">{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">收件人電話</td>
                    <td colspan="2">{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">收件人地址</td>
                    <td colspan="2">{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">Email</td>
                    <td colspan="2">{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <td colspan="2">付款狀態</td>
                    <td colspan="2" v-if="is_paid">已付款</td>
                    <td colspan="2" v-else class="text-primary">未付款</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-grid col-6 ms-auto">
                <button
                  class="btn btn-primary payBtn text-white"
                  type="button"
                  @click="payOrder()"
                >
                  馬上付款
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
          <div class="bg-dark p-4">
            <p class="cart pb-2 border-bottom border-3">購買明細</p>
            <div class="cart-info">
              <div
                v-for="orderList in order.products"
                :key="orderList.id"
                class="d-flex py-4 border-bottom border-darkTwo border-3 justify-content-around"
              >
                <div
                  class="img bg-darkTwo d-flex justify-content-center align-items-center"
                >
                  <img
                    alt="orderProImg"
                    class="cartProImg p-2"
                    :src="orderList.product.imageUrl"
                  />
                </div>
                <div
                  class="orderBody d-flex flex-column justify-content-around flex-fill"
                >
                  <div class="ordertext d-flex justify-content-between ps-3">
                    <p class="title">{{ orderList.product.title }}</p>
                    <p class="num">× {{ orderList.qty }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between ps-3 align-items-center"
                  >
                    <p
                      class="px-1 bg-primary font-monospace useCoupon"
                      v-if="orderList.coupon"
                    >
                      已使用優惠券
                    </p>
                    <p class="total ms-auto">NT${{ orderList.final_total }}</p>
                  </div>
                </div>
              </div>
              <div class="amount d-flex justify-content-between text-20 my-2">
                <span>總計：</span>
                <span>NT${{ order.total }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.info,
.cart,
.title,
.num,
.total,
.bi-text,
.payBtn {
  font-size: 20px;
}
.information {
  position: sticky;
  top: 20px;
}

.cartProImg {
  width: 60px;
  object-fit: cover;
}

.useCoupon {
  font-size: 16px;
}
.form-check {
  padding-left: 48px;
  margin-bottom: 0;
}
.bi-credit-card,
.bi-cash,
.bi-wallet {
  font-size: 32px;
}
.btn {
  --bs-btn-border-width: 3px;
}
.bi-text {
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 12px;
  }
}
.form-select:focus {
  box-shadow: none;
}
.payBtn {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
table {
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
</style>
