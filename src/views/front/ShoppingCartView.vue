<script>
import { mapActions, mapState } from 'pinia'
import PageHeader from '@/components/PageHeader.vue'
import cartStore from '@/stores/cart'
import Swal from 'sweetalert2'
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
    // 其他顧客都在看
    getLikes () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          const data = res.data.products
          const productLength = Object.keys(data).length
          const nums = []
          while (nums.length < 5) {
            const num = Math.floor(Math.random() * productLength)
            if (!nums.includes(num)) {
              nums.push(num)
            }
          }
          this.likes = nums.map((num) => data[num])
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">獲取顧客常看商品錯誤</span>',
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
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['total']),
    ...mapState(cartStore, ['final_total']),
    ...mapState(cartStore, ['copuon']),
    ...mapState(cartStore, ['hasCoupon']),
    ...mapState(cartStore, ['order'])
  },
  mounted () {
    this.getLikes()
  },
  watch: {}
}
</script>

<template>
  <PageHeader />
  <section class="section-cart bg-darkTwo py-8">
    <div class="container">
      <div class="bg-dark p-4 text-center">
        <ul class="step d-flex mb-4 border-bottom border-3 border-primary">
          <li class="text-center bg-primary py-2 stepList flex-fill">
            <i class="bi bi-1-square"></i> 購物車
          </li>
          <li class="text-center py-2 flex-fill">
            <i class="bi bi-2-square"></i> 結帳資訊
          </li>
          <li class="text-center py-2 flex-fill">
            <i class="bi bi-3-square"></i> 付款方式
          </li>
        </ul>
        <div v-if="!carts.length == 0" class="cart-info table-responsive">
          <table class="table table-dark table-hover align-middle caption-top">
            <caption class="pb-4 text-white">
              購物車中有
              <span class="text-danger">{{ carts.length }}</span>
              項商品
            </caption>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td class="text-start">品名</td>
                <td>數量</td>
                <td class="text-end pe-4">金額</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in carts" :key="cart.id">
                <td>
                  <button
                    type="button"
                    class="btn delCart my-auto text-center"
                    @click="deleteCartItem(cart)"
                    data-swal-toast-template="#my-template"
                  >
                    <i class="bi bi-x-square text-primary"></i>
                  </button>
                </td>
                <td>
                  <div
                    class="img bg-darkTwo d-flex justify-content-center align-items-center"
                  >
                    <img
                      :src="cart.product.imageUrl"
                      alt="orderProImg"
                      class="cartProImg p-2"
                    />
                  </div>
                </td>
                <td class="text-start">{{ cart.product.title }}</td>
                <td>
                  <select
                    name=""
                    id=""
                    class="form-select py-0"
                    v-model="cart.qty"
                    @change="updateCartItem(cart)"
                  >
                    <option v-for="i in 20" :value="i" :key="i">
                      {{ i }}
                    </option>
                  </select>
                </td>
                <td class="text-end">
                  NT$ {{ cart.total.toLocaleString("zh-TW") }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control text-white"
              placeholder="輸入OPENSUSHI享8折優惠"
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
          <div class="text-end total">
            總金額：<span>NT$ {{ final_total.toLocaleString("zh-TW") }}</span>
          </div>
          <div class="d-flex justify-content-between mt-4 next">
            <RouterLink
              to="products"
              type="button"
              class="btn btn-outline-light btn-lg"
            >
              <i class="bi bi-arrow-left-square"></i> 繼續購物
            </RouterLink>
            <RouterLink
              to="shoppingCartCheck"
              type="button"
              class="btn btn-danger text-white btn-lg"
            >
              結帳去 <i class="bi bi-arrow-right-square"></i>
            </RouterLink>
          </div>
        </div>
        <div v-else>
          <p class="text-center py-8">購物車無選購商品，快去選購！</p>
          <RouterLink
            to="products"
            type="button"
            class="btn btn-outline-primary text-white btn-lg"
          >
            繼續購物
          </RouterLink>
          <div class="bg-dark mt-4 py-4">
            <p class="like text-center py-2 mb-4 bg-darkTwo">其他顧客都在看</p>
            <div
              class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-6"
            >
              <div class="col" v-for="likes in likes" :key="likes.id">
                <div class="box bg-dark text-white">
                  <h3 class="title p-3">{{ likes.title }}</h3>
                  <div class="bgOrange ms-auto">
                    <img :src="likes.imageUrl" :alt="likes.title" class="pic" />
                  </div>
                  <span class="price bg-danger py-1 px-2 ms-3">
                    NT$ {{ likes.price }}</span
                  >
                  <div
                    class="mark d-flex justify-content-evenly align-items-center"
                  >
                    <RouterLink
                      :to="`product/${likes.id}`"
                      type="button"
                      class="bi bi-search border border-3 px-2 rounded-3"
                    ></RouterLink>
                    <button
                      type="button"
                      class="bi bi-cart-dash border border-primary border-3 bg-primary px-2 rounded-3 text-white"
                      @click="addToCart(products.id, qty)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.table {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
.table > :not(caption) > * > * {
  @media (max-width: 576px) {
    padding: 0.5rem 0.25rem;
  }
}
.img {
  width: 60px;
  height: 60px;
}
.cartProImg {
  width: 60px;
  object-fit: cover;
}

option,
select,
input {
  outline: none;
  padding: 8px;
  background-color: #212121;
  border: 0;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
}
.form-select {
  @media (max-width: 768px) {
    background-position: right 0.25rem center;
  }
}
.form-control::placeholder {
  font-size: 16px;
  color: #666;
}
.form-control:focus,
.form-select:focus,
.form-control:disabled {
  background-color: #212121;
  box-shadow: none;
  color: white;
}
.img {
  width: 80px;
  height: 80px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
}
.cartProImg {
  width: 80px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 40px;
  }
}
.cart-info .delCart {
  --bs-btn-border-color: none;
  --bs-btn-padding-x: 0;
  --bs-btn-padding-y: 0;
}

.step li {
  position: relative;
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
}
.input-group .btn-lg {
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.box {
  box-shadow: 3px 3px 6px rgb(34, 34, 34);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    transform: translateY(-5px);
    .mark {
      opacity: 1;
    }
  }
}
.title {
  text-align: start;
}
.bgOrange {
  width: 106px;
  height: 90px;
  background: #f25c05;
  border-top-left-radius: 100%;
  position: relative;
}
.pic {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scale(1.3);

  @media (max-width: 576px) {
    bottom: -4px;
    right: -12px;
    transform: scale(1);
  }
}
.price {
  position: absolute;
  font-size: 12px;
  bottom: 8px;
  left: 0;
}
.mark {
  position: absolute;
  inset: 0;
  background-color: rgba(27, 27, 27, 0.9);
  opacity: 0;
}
.bi,
.total {
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.bi-arrow-left-square,
.bi-arrow-right-square {
  font-size: 16px;
}
.next .btn-lg {
  --bs-btn-font-size: 16px;
}
.input-group {
  width: 30%;
  margin-left: auto;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
}

.bi-cart-dash {
  display: block;
  @media (max-width: 576px) {
    display: none;
  }
}
</style>
