<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
  props: ['orderData'],
  emits: ['del-item'],
  data () {
    return {}
  },
  methods: {},
  mounted () {
    this.orderDelModal = new bootstrap.Modal(
      this.$refs.orderDelModal,
      {
        keyboard: false
      }
    )
  }
}
</script>

<template>
  <div
    ref="orderDelModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-dark">
          是否刪除 訂單編號：<strong class="text-danger text-dark">{{
            orderData.id
          }}</strong>
          <p>(刪除後將無法恢復)。</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger text-white"
            @click="$emit('del-item')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
