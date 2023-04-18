<script>
import ProductModal from '@/components/ProductModal.vue'
import ProductDelModal from '@/components/ProductDelModal.vue'
import PaginationType from '@/components/PaginationType.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      page: {}
    }
  },
  components: {
    ProductModal,
    ProductDelModal,
    PaginationType
  },
  methods: {
    getProducts (page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/products/?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
          if (res.data.success) {
            Swal.fire({
              toast: true,
              title: '取得商品成功',
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
        this.tempProduct = {}
        this.isNew = true
        this.$refs.modal.productModal.show()
      } else if (type === 'edit') {
        // 修改優惠券
        this.isNew = false
        this.tempProduct = { ...item }
        this.$refs.modal.productModal.show()
      } else if (type === 'delete') {
        // 刪除優惠券
        this.$refs.delModal.productDelModal.show()
        this.tempProduct = { ...item }
      }
    },
    // 新增商品
    updateProduct () {
      // 先預設為新增商品
      let newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product`
      let http = 'post'
      // 如果是修改則更改url & http
      if (!this.isNew) {
        newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }
      // 帶入不同的api
      this.$http[http](newurl, { data: this.tempProduct })
        .then((res) => {
          this.$refs.modal.productModal.hide()
          this.getProducts()
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
            category: '分類',
            unit: '單位',
            origin_price: '原價',
            price: '售價'
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
    delProduct () {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$refs.delModal.productDelModal.hide()
          this.getProducts()
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
    },
    // 新增照片
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    this.getProducts()
  }
}
</script>

<template>
  <section class="product">
    <div class="container text-dark">
      <h2 class="py-8"><i class="bi bi-box-seam-fill pe-3"></i>商品管理頁面</h2>
      <button
        class="btn btn-dark text-white d-block ms-auto btn-lg mb-4"
        @click="openModal('new')"
      >
        新增商品
      </button>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        <div class="col mb-4" v-for="product in products" :key="product.id">
          <div class="product-card border border-dark border-3 text-center">
            <div class="d-flex align-items-stretch">
              <p class="px-4 py-2 bg-dark text-white">{{ product.title }}</p>
              <div class="product-image p-4">
                <img :src="product.imageUrl" alt="productImg" />
              </div>
            </div>
            <button type="button"
              class="btn btn-primary text-white w-50 btn-lg"
              @click="openModal('edit', product)"
            >
              修改</button
            ><button type="button"
              class="btn btn-danger text-white w-50 btn-lg"
              @click="openModal('delete', product)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
      <ProductModal
        ref="modal"
        :is-new="isNew"
        :product="tempProduct"
        @create-images="createImages"
        @update-product="updateProduct"
      ></ProductModal>
      <ProductDelModal
        ref="delModal"
        :product-data="tempProduct"
        @del-item="delProduct"
      ></ProductDelModal>
      <PaginationType :pages="page" @change-page="getProducts"></PaginationType>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-image {
  aspect-ratio: 1/1;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
