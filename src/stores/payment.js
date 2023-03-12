import { defineStore } from "pinia";

export const paymentStore = defineStore({
  id: "payment",
  state: () => ({
    success: false,
  }),
  actions: {
    setPaymentSuccess(success) {
      this.success = success;
    },
  },
});
