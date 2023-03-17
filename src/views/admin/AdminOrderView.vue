<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import PaginationType from "../../components/PaginationType.vue";
import OrderModal from "../../components/OrderModal.vue";
import OrderDelModal from "../../components/OrderDelModal.vue";
export default {
  data() {
    return {
      //先放get到的優惠券
      orders: [],
      page: {},
      //暫存的優惠券
      tempOrder: {},
      isNew: false,
    };
  },
  components: {
    OrderModal,
    OrderDelModal,
    PaginationType,
  },
  methods: {
    getOrder(page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/orders/?page=${page}`
        )
        .then((res) => {
          console.log(res.data.orders);
          this.orders = res.data.orders;
          this.page = res.data.pagination;
          //時間搓轉換時間
          this.orders = res.data.orders.map((item) => {
            const time = item.create_at;
            const date = new Date(time * 1000);
            const dateString = date.toLocaleDateString();
            return {
              ...item,
              dateString, // 新增 dateString 屬性
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //打開
    openModal(type, item) {
      if (type === "edit") {
        //修改
        this.tempOrder = { ...item };
        this.$refs.modal.orderModal.show();
      } else if (type === "delete") {
        //刪除
        this.tempOrder = { ...item };
        this.$refs.delModal.orderDelModal.show();
      }
    },
    //修改付款狀態
    updatePaid(item) {
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http
        .put(api, { data: paid })
        .then((res) => {
          alert(res.data.message);
          this.$refs.modal.orderModal.hide();
          this.getOrder();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //刪除訂單
    delOrder() {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message);
          this.$refs.delModal.orderDelModal.hide();
          this.getOrder();
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
    this.getOrder();
  },
};
</script>

<template>
  <section class="order">
    <div class="container text-dark">
      <h2 class="py-8">
        <i class="bi bi-receipt-cutoff pe-3"></i>訂單管理頁面
      </h2>
      <div class="row">
        <div
          class="col-md-6 col-xl-4 mb-4"
          v-for="order in orders"
          :key="order.id"
        >
          <div class="order-card border border-dark border-3">
            <div class="paid border-bottom p-3 border-dark border-opacity-25">
              <span
                class="isPaid bg-darkTwo text-white p-2"
                v-if="order.is_paid"
                >已付款</span
              >
              <span
                class="NotPaid bg-darkTwo text-white p-2 bg-opacity-50"
                v-else
                >未付款</span
              >
            </div>
            <ul class="p-3">
              <li class="order-list">訂單編號：{{ order.id }}</li>
              <li class="order-list">購買時間：{{ order.dateString }}</li>
              <li class="order-list">總金額：{{ order.total }}</li>
            </ul>
            <button
              class="btn btn-primary text-white w-50 btn-lg"
              @click="openModal('edit', order)"
            >
              修改</button
            ><button
              class="btn btn-danger text-white w-50 btn-lg"
              @click="openModal('delete', order)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
      <OrderModal
        ref="modal"
        :order="tempOrder"
        @update-paid="updatePaid"
      ></OrderModal>
      <OrderDelModal
        ref="delModal"
        :order-data="tempOrder"
        @del-item="delOrder"
      ></OrderDelModal>
      <PaginationType :pages="page" @change-page="getOrder"></PaginationType>
    </div>
  </section>
</template>

<style scoped lang="scss">
.order-list {
  font-size: 20px;
}
</style>
