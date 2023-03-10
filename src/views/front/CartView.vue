<script>
import { mapActions, mapState } from "pinia";
import PageHeader from "../../components/PageHeader.vue";
import cartStore from "../../stores/cart";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]), //購物車列表
    ...mapActions(cartStore, ["updateCartItem"]), //修改購物車數量
    ...mapActions(cartStore, ["deleteCartItem"]), //刪除購物車
    ...mapActions(cartStore, ["useCoupon"]), //刪除購物車
    //送出訂單
    onSubmit() {
      const data = this.order;
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          const orderId = res.data.orderId;
          this.$refs.form.resetForm();
          this.$router.push(`/cartPay/${orderId}`);
          Swal.fire({
            toast: true,
            title: `已送出訂單`,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#F25C05",
          });
        })
        .catch((err) => {
          alert(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
  },
  components: {
    PageHeader,
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
    ...mapState(cartStore, ["total"]),
    ...mapState(cartStore, ["final_total"]),
    ...mapState(cartStore, ["copuon"]),
    ...mapState(cartStore, ["hasCoupon"]),
    ...mapState(cartStore, ["order"]),
  },
  mounted() {
    this.getCart();
  },
  watch: {},
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-cart bg-darkTwo py-8">
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
                class="step-list text-white flex-fill p-2 text-center bg-darkTwo"
              >
                付款方式
              </li>
              <li
                class="step-list text-white flex-fill p-2 text-center bg-darkTwo"
              >
                訂單完成
              </li>
            </ul>
            <p class="py-2 border-bottom border-3 info">收件人資訊</p>
            <v-form
              ref="form"
              v-slot="{ errors }"
              @submit="onSubmit"
              class="row g-4 text-white py-3"
            >
              <div class="col-6">
                <label for="name" class="form-label">姓名 </label>
                <v-field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="order.user.name"
                ></v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-6">
                <label for="tel" class="form-label">電話 </label>
                <v-field
                  id="tel"
                  name="電話"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入手機號碼"
                  :rules="isPhone"
                  v-model="order.user.tel"
                ></v-field>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-12">
                <label for="address" class="form-label">地址 </label>
                <v-field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="order.user.address"
                ></v-field>
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-12">
                <label for="email" class="form-label">信箱 </label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="order.user.email"
                ></v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">備註</label>
                <textarea
                  name="備註"
                  id="message"
                  cols="10"
                  rows="10"
                  class="w-100 ps-2 py-1"
                  v-model="order.message"
                ></textarea>
              </div>
              <div class="col-6">
                <RouterLink
                  to="products"
                  type="button"
                  class="btn btn-outline-primary d-block btn-lg w-100"
                  v-if="!carts.length == 0"
                >
                  繼續購物
                </RouterLink>
              </div>
              <div class="col-6">
                <button
                  :class="{ disabled: carts.length === 0 }"
                  type="submit"
                  class="btn btn-primary text-white d-block btn-lg w-100"
                >
                  送出訂單
                </button>
              </div>
            </v-form>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
          <div class="bg-dark p-4">
            <p class="cart pb-2 border-bottom border-3">購物車商品</p>
            <div v-if="!carts.length == 0" class="cart-info">
              <div
                v-for="cart in carts"
                :key="cart.id"
                class="d-flex py-4 border-bottom border-darkTwo border-3 justify-content-around"
              >
                <div
                  class="img bg-darkTwo d-flex justify-content-center align-items-center"
                >
                  <img
                    :src="cart.product.imageUrl"
                    alt="orderProImg"
                    class="cartProImg p-2"
                  />
                </div>
                <div
                  class="orderBody d-flex flex-column justify-content-around ps-2 flex-fill"
                >
                  <div class="ordertext d-flex justify-content-between">
                    <p class="title">{{ cart.product.title }}</p>
                    <select
                      name=""
                      id=""
                      class="form-select w-50 py-0"
                      v-model="cart.qty"
                      @change="updateCartItem(cart)"
                    >
                      <option v-for="i in 20" :value="i" :key="i">
                        {{ i }}
                      </option>
                    </select>
                  </div>
                  <p class="total text-end">NT$ {{ cart.total }}</p>
                </div>
                <button
                  type="button"
                  class="btn delCart my-auto text-center"
                  @click="deleteCartItem(cart)"
                  data-swal-toast-template="#my-template"
                >
                  <i class="bi bi-x-square text-primary"></i>
                </button>
              </div>
              <div class="subtotal d-flex justify-content-between text-20 my-2">
                <span>小計：</span>
                <span>NT${{ total }}</span>
              </div>
              <div
                class="couponUse d-flex justify-content-between text-20 my-2 text-primary"
              >
                <span class="coupon">優惠碼：</span>
                <span v-if="hasCoupon">-NT${{ total * 0.2 }}</span>
              </div>
              <div
                v-if="!hasCoupon"
                class="input-group pb-3 border-bottom border-darkTwo border-3"
              >
                <input
                  type="text"
                  class="form-control text-white"
                  placeholder="請輸入優惠碼"
                  v-model="copuon.code"
                />
                <button
                  class="btn btn-primary btn-lg text-white"
                  type="button"
                  id="button-addon2"
                  @click="useCoupon()"
                >
                  使用
                </button>
              </div>
              <div class="amount d-flex justify-content-between text-20 my-2">
                <span>總計：</span>
                <span>NT$ {{ final_total }}</span>
              </div>
            </div>
            <div v-else class="p-8">
              <p class="text-center cartNo">購物車無選購商品，快去選購！</p>
              <RouterLink
                to="products"
                type="button"
                class="btn btn-outline-primary d-block btn-lg w-100 mt-4"
              >
                繼續購物
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.step-list {
  font-size: 20px;
}
.info,
.cart,
.title,
.num,
.total {
  font-size: 20px;
}
option,
select,
input,
textarea {
  outline: none;
  padding: 8px;
  background-color: #212121;
  border: 0;
  color: white;
  font-size: 20px;
}

textarea {
  resize: none;
  height: 160px;
}
label {
  font-size: 20px;
  padding-bottom: 4px;
}
.img {
  width: 60px;
  height: 60px;
}
.cartProImg {
  width: 60px;
  object-fit: cover;
}
.information {
  position: sticky;
  top: 20px;
}
.delCart {
  width: 30px;
}
.cart-info .btn {
  --bs-btn-border-color: none;
}
.bi-cart-x {
  font-size: 48px;
  color: #f25c05;
}
.form-control:focus,
.form-select:focus {
  background-color: #212121;
  box-shadow: none;
  color: white;
}
.form-label {
  margin-bottom: 0;
}

.cartNo {
  word-break: keep-all;
}
</style>
