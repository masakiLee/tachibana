<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
  props: ['order'],
  emits: ['update-paid'],
  data () {
    return {
      tempOrder: {}
    }
  },
  methods: {},
  mounted () {
    this.orderModal = new bootstrap.Modal(
      this.$refs.orderModal,
      {
        keyboard: false
      }
    )
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  }
}
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="orderModal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <span>訂單細節</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-dark">
          <h3 class="mb-2">用戶資料</h3>
          <table class="table" v-if="order.user">
            <tbody>
              <tr>
                <th style="width: 80px">姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
            </tbody>
          </table>
          <h3 class="mb-2">選購商品</h3>
          <table class="table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <th>
                  {{ item.product.title }}
                </th>
                <td>{{ item.qty }} / {{ item.product.unit }}</td>
                <td class="text-end">NT$ {{ (item.final_total).toLocaleString("zh-TW") }}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                v-model="tempOrder.is_paid"
              />
              <label class="form-check-label" for="flexCheckDefault">
                <span v-if="tempOrder.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary text-white"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-white"
            @click="$emit('update-paid', tempOrder)"
          >
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
