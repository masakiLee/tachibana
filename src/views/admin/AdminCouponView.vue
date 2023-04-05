<!-- eslint-disable no-unused-vars -->
<script>
import CouponModal from '@/components/CouponModal.vue'
import CouponDelModal from '@/components/CouponDelModal.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false
    }
  },
  components: {
    CouponModal,
    CouponDelModal
  },
  methods: {
    getCoupon () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupons`)
        .then((res) => {
          this.coupons = res.data.coupons
          this.page = res.data.pagination
          if (res.data.success) {
            Swal.fire({
              toast: true,
              title: '取得優惠券成功',
              icon: 'success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              background: '#F2ECDD',
              color: '#F25C05'
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `${err.response.data.message}`,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    // 打開
    openModal (type, item) {
      if (type === 'new') {
        // 新增優惠券
        this.isNew = true
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
        this.$refs.modal.couponModal.show()
      } else if (type === 'edit') {
        // 修改優惠券
        this.isNew = false
        this.tempCoupon = { ...item }
        this.$refs.modal.couponModal.show()
      } else if (type === 'delete') {
        // 刪除優惠券
        this.$refs.delModal.couponDelModal.show()
        this.tempCoupon = { ...item }
      }
    },
    // 送出新增&修改按鈕
    updateCoupon () {
      // 先預設為新增商品
      let newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon`
      let http = 'post'
      // 如果是修改則更改url & http
      if (!this.isNew) {
        newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        http = 'put'
      }
      // 帶入不同的api
      this.$http[http](newurl, { data: this.tempCoupon })
        .then((res) => {
          this.$refs.modal.couponModal.hide()
          this.getCoupon()
          Swal.fire({
            toast: true,
            title: `${res.data.message}`,
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
        })
        .catch((err) => {
          const arr = err.response.data.message
          // 先拆開抓英文出來
          const enArr = arr.map((item) => item.split(' ')[1])
          // 再寫上對應中文
          const zhEnMap = {
            title: '標題',
            is_enabled: '是否啟用',
            percent: '百分比',
            code: '代碼'
          }
          const zhArrTrans = enArr.map(item => zhEnMap[item])
          const newArr = enArr.map((item, index) => `${zhArrTrans[index]}為必填`)
          Swal.fire({
            toast: true,
            title: `${newArr}`,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    // 刪除
    delCoupon () {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$refs.delModal.couponDelModal.hide()
          this.getCoupon()
          Swal.fire({
            toast: true,
            title: `${res.data.message}`,
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `${err.response.data.message}`,
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
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    this.getCoupon()
  }
}
</script>

<template>
  <section class="coupon">
    <div class="container text-dark">
      <h2 class="py-8">
        <i class="bi bi-bookmark-star-fill pe-3"></i>優惠券管理頁面
      </h2>
      <button type="button"
        class="btn btn-dark text-white d-block ms-auto btn-lg mb-4"
        @click="openModal('new')"
      >
        新增優惠券
      </button>
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="coupon in coupons" :key="coupon.id">
          <div class="coupon-card border border-dark border-3 text-center">
            <p class="p-3 bg-dark text-white">{{ coupon.code }}</p>
            <p class="title fw-bold p-3">{{ coupon.title }}</p>
            <p class="p-3">
              折扣
              <span class="percent text-primary">{{ coupon.percent }}</span> %
            </p>
            <button type="button"
              class="btn btn-primary text-white w-50 btn-lg"
              @click="openModal('edit', coupon)"
            >
              修改</button
            ><button type="button"
              class="btn btn-danger text-white w-50 btn-lg"
              @click="openModal('delete', coupon)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
      <CouponModal
        ref="modal"
        :is-new="isNew"
        :coupon="tempCoupon"
        @update-coupon="updateCoupon"
      ></CouponModal>
      <CouponDelModal
        ref="delModal"
        :coupon-data="tempCoupon"
        @del-item="delCoupon"
      ></CouponDelModal>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: 32px;
  line-height: 1;
}
.percent {
  font-size: 48px;
  line-height: 1;
}
</style>
