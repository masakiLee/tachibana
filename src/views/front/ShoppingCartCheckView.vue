<script>
import { mapActions, mapState } from 'pinia'
import PageHeader from '@/components/PageHeader.vue'
import cartStore from '@/stores/cart'
import Swal from 'sweetalert2'
import { Field, Form, ErrorMessage } from 'vee-validate'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      likes: []
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']), // 購物車列表
    ...mapActions(cartStore, ['updateCartItem']), // 修改購物車數量
    ...mapActions(cartStore, ['deleteCartItem']), // 刪除購物車
    ...mapActions(cartStore, ['useCoupon']), // 使用Coupon
    ...mapActions(cartStore, ['addToCart']), // 增加購物車

    // 送出訂單
    onSubmit () {
      const data = this.order
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          const orderId = res.data.orderId
          this.$refs.form.resetForm()
          if (orderId === undefined) {
            Swal.fire({
              toast: true,
              title: '<span style="color: #ff0000">需填收件人資訊</span>',
              icon: 'error',
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              background: '#F2ECDD',
              color: '#000000'
            })
          } else {
            this.$router.push(`/shoppingCartPay/${orderId}`)
            Swal.fire({
              toast: true,
              title: '已送出訂單',
              icon: 'success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              background: '#F2ECDD',
              color: '#F25C05'
            })
            this.order.message = ''
          }
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">訂單送出失敗</span>',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  components: {
    PageHeader,
    VForm: Form,
    VField: Field,
    ErrorMessage
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['total']),
    ...mapState(cartStore, ['final_total']),
    ...mapState(cartStore, ['copuon']),
    ...mapState(cartStore, ['hasCoupon']),
    ...mapState(cartStore, ['order'])
  },
  mounted () {
    this.getCart()
  },
  watch: {}
}
</script>

<template>
  <PageHeader />
  <section class="section-cart bg-darkTwo py-8">
    <div class="container">
      <div class="bg-dark p-4">
        <ul class="step d-flex mb-4 border-bottom border-3 border-primary">
          <li class="text-center py-2 flex-fill">
            <i class="bi bi-check-square text-success"></i> 購物車
          </li>
          <li class="text-center py-2 flex-fill bg-primary stepList">
            <i class="bi bi-2-square"></i> 結帳資訊
          </li>
          <li class="text-center py-2 flex-fill">
            <i class="bi bi-3-square"></i> 付款方式
          </li>
        </ul>
        <div class="row">
          <div class="col-lg-8 order-2 order-lg-1">
            <p class="py-2 border-bottom border-3 info">
              收件人資訊 <span class="marked">* 為必填項目</span>
            </p>
            <VForm
              ref="form"
              v-slot="{ errors }"
              @submit="onSubmit"
              class="row g-4 text-white py-3"
            >
              <div class="col-6">
                <label for="name" class="form-label"
                  >姓名<span class="marked">＊</span>
                </label>
                <VField
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="order.user.name"
                ></VField>
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-6">
                <label for="tel" class="form-label"
                  >電話<span class="marked">＊</span>
                </label>
                <VField
                  id="tel"
                  name="電話"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入手機號碼"
                  :rules="isPhone"
                  v-model="order.user.tel"
                ></VField>
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-12">
                <label for="address" class="form-label"
                  >地址<span class="marked">＊</span>
                </label>
                <VField
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="order.user.address"
                ></VField>
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-12">
                <label for="email" class="form-label"
                  >信箱<span class="marked">＊</span>
                </label>
                <VField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control text-20"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="order.user.email"
                ></VField>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
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
            </VForm>
          </div>
          <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
            <p class="cart border-bottom border-3 py-2">購買明細</p>
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
                class="orderBody d-flex flex-column justify-content-around flex-fill"
              >
                <div class="ordertext d-flex justify-content-between ps-3">
                  <p class="title">{{ cart.product.title }}</p>
                  <p class="num">× {{ cart.qty }}</p>
                </div>
                <div
                  class="d-flex justify-content-between ps-3 align-items-center"
                >
                  <p
                    class="px-1 bg-primary text-monospace useCoupon"
                    v-if="cart.coupon"
                  >
                    已使用優惠券
                  </p>
                  <p class="total ms-auto">
                    NT$ {{ cart.final_total.toLocaleString("zh-TW") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="amount d-flex justify-content-between my-2">
              <span>總金額：</span>
              <span>NT$ {{ final_total.toLocaleString("zh-TW") }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end next">
          <button
            type="submit"
            class="btn btn-danger text-white btn-lg"
            @click="onSubmit"
          >
            送出訂單 <i class="bi bi-arrow-right-square"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.marked {
  font-size: 16px;
  color: #ff0000;
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

textarea {
  resize: none;
  height: 160px;
}
.form-control:focus,
.form-control:disabled {
  background-color: #212121;
  box-shadow: none;
  color: white;
}

.step li {
  position: relative;
  @media (max-width: 768px) {
    font-size: 16px;
  }
}
.stepList::before {
  content: "";
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-top: 24px solid #f25c05;
  border-bottom: 24px solid #f25c05;
  border-left: 16px solid #1b1b1b;
}
.stepList::after {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 100%;
  border-top: 24px solid #0000;
  border-bottom: 24px solid #0000;
  border-left: 16px solid #f25c05;
}
.stepList::before,
.stepList::after {
  @media (max-width: 768px) {
    display: none;
  }
}

.bi {
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.bi-arrow-left-square,
.bi-arrow-right-square,
.next .btn-lg {
  font-size: 16px;
}

.img {
  width: 60px;
  height: 60px;
}
.cartProImg {
  width: 60px;
  object-fit: cover;
}

.useCoupon {
  font-size: 16px;
}
.amount {
  font-size: 24px;
}
</style>
