import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
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
          Swal.fire({
            toast: true,
            title: "已加入購物車",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#F25C05",
          });
          console.log(res.data.data);
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
        // eslint-disable-next-line no-unused-vars
        .then((_res) => {
          const name = cart.product.title;
          this.getCart();
          Swal.fire({
            toast: true,
            title: `已修改<span style="color: #f25c05"> ${name} </span>數量`,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#000000",
          });
        });
    },
    //刪除購物車
    deleteCartItem(cart) {
      const name = cart.product.title;
      Swal.bindClickHandler();

      Swal.mixin({
        icon: "warning",
        toast: true,
        backdrop: true,
        allowOutsideClick: false,
        background: "#F2ECDD",
        color: "#000000",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "刪除",
        cancelButtonText: "取消",
        confirmButtonColor: "#ff0000", // 確認按鈕的顏色
        cancelButtonColor: "#1b1b1b", // 取消按鈕的顏色
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      })
        .fire({
          title: `是否要刪除<span style="color: #f25c05"> ${name} </span>？`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`)
              // eslint-disable-next-line no-unused-vars
              .then((_res) => {
                this.getCart();
                Swal.fire({
                  toast: true,
                  title: `已刪除<span style="color: #f25c05"> ${name} </span>`,
                  icon: "success",
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 1500,
                  background: "#F2ECDD",
                  color: "#000000",
                });
              });
          }
        });

      Swal.bindClickHandler();
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
          Swal.fire({
            toast: true,
            title: `已成功使用優惠券`,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#F25C05",
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch((_err) => {
          Swal.fire({
            toast: true,
            title: `<span style="color: #ff0000">優惠代碼錯誤</span>`,
            icon: "error",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            background: "#F2ECDD",
            color: "#000000",
          });
        });
    },
  },
  getters: {},
});

export default cartStore;
