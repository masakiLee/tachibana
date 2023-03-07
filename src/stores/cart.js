import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const cartStore = defineStore("cart", {
  state: () => {
    return {
      carts: {},
      total: 0,
      final_total: 0,
      copuon: {
        code: "",
      },
      hasCoupon: false,
      order: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      orderId: "",
    };
  },
  actions: {
    //取得購物車列表
    getCart() {
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts; //購物車
        this.total = res.data.data.total; //總金額
        this.final_total = res.data.data.final_total; //總金額(包含優惠券)
      });
    },
    //增加商品
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty,
      };
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //修改購物車數量
    updateCartItem(cart) {
      const data = {
        product_id: cart.product.id,
        qty: cart.qty,
      };
      axios
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, {
          data,
        })
        .then((res) => {
          this.getCart();
        });
    },
    //刪除購物車
    deleteCartItem(cart) {
      axios
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`)
        .then((res) => {
          this.getCart();
        });
    },
    //使用優惠券
    useCoupon() {
      const data = this.copuon;
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/coupon`, {
          data,
        })
        .then((res) => {
          this.hasCoupon = res.data.success;
          this.final_total = res.data.data.final_total;
        });
    },
  },
  getters: {},
});

export default cartStore;
