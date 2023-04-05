import { defineStore } from 'pinia'

const paymentStore = defineStore('payment', {
  state: () => {
    return {
      success: false
    }
  },
  actions: {
    setPaymentSuccess (success) {
      this.success = success
    }
  }
})

export default paymentStore
