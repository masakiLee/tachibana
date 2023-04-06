<script>
import { mapActions, mapState } from 'pinia'
import PageHeader from '@/components/PageHeader.vue'
import cartStore from '@/stores/cart'
import paymentStore from '@/stores/payment'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      order: {
        user: {}
      },
      information: {},
      orderId: '',
      is_paid: '',
      toStringTotal: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']), // 購物車列表
    getOrder () {
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data.order
          this.orderId = res.data.order.id
          this.is_paid = res.data.order.is_paid
          this.toStringTotal = res.data.order.total.toLocaleString('zh-TW')
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">獲取訂單失敗</span>',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    ...mapActions(paymentStore, ['setPaymentSuccess']),
    payOrder () {
      const data = this.order
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`, {
          data
        })
        .then((res) => {
          if (res.data.success) {
            this.setPaymentSuccess(true)
            this.$router.push('/cartComplete')
          }
          this.getCart()
          Swal.fire({
            toast: true,
            title: '已成功付款',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">付款失敗</span>',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    }
  },
  components: {
    PageHeader
  },
  mounted () {
    this.getOrder()
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(paymentStore, ['success'])
  }
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
          <li class="text-center py-2 flex-fill">
            <i class="bi bi-check-square text-success"></i> 結帳資訊
          </li>
          <li class="text-center py-2 flex-fill bg-primary stepList">
            <i class="bi bi-3-square"></i> 付款方式
          </li>
        </ul>
        <div class="row">
          <div class="col-lg-8 order-2 order-lg-1">
            <p class="pb-4 border-bottom border-3 info mb-4">請選擇付款方式</p>
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
                    ><span class="bi-text">信用卡</span></label
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
                    ><span class="bi-text">現金</span></label
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
                    ><i class="bi bi-qr-code-scan"></i
                    ><span class="bi-text">行動支付</span></label
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
            </div>
          </div>
          <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
            <p class="pb-4 border-bottom border-3 info">訂單資訊</p>
            <div class="bg-darkTwo pt-4 pb-3">
              <div
                class="ordertext d-flex justify-content-between px-3 mb-1"
                v-for="orderList in order.products"
                :key="orderList.id"
              >
                <p class="title">{{ orderList.product.title }}</p>
                <p class="num">× {{ orderList.qty }}</p>
              </div>
            </div>
            <div
              class="amount d-flex justify-content-between border-top border-3 pt-3"
            >
              <span>總計：</span>
              <span>NT$ {{ toStringTotal }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end next">
          <button type="button" class="btn btn-danger text-white btn-lg" @click="payOrder()">
            確認交易 <i class="bi bi-arrow-right-square"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

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
  border-top: 23px solid #f25c05;
  border-bottom: 23px solid #f25c05;
  border-left: 16px solid #1b1b1b;
  @media (max-width: 768px) {
    display: none;
  }
}

.bi-text{
  font-size: 20px;
    @media (max-width: 576px) {
    font-size: 12px;
  }
}
.information {
  position: sticky;
  top: 20px;
}

.bi-credit-card,
.bi-cash,
.bi-qr-code-scan {
  font-size: 32px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.btn {
  border-width: 3px;
}

table {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
.next .btn-lg {
  font-size: 16px;
}

.amount {
  font-size: 24px;
}
</style>
