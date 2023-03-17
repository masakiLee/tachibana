<script>
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
export default {
  props: ["couponData"],
  emits: ["del-item"],
  data() {
    return {
      tempCoupon: {},
    };
  },
  methods: {},
  mounted() {
    this.couponDelModal = new bootstrap.Modal(
      this.$refs.couponDelModal,
      //options 不能使用 esc 關閉
      {
        keyboard: false,
      }
    );
  },
};
</script>

<template>
  <div
    ref="couponDelModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除 <span class="text-primary">{{ couponData.title }}</span>
          <strong class="text-danger"></strong>
          優惠券 (刪除後將無法恢復)。
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
