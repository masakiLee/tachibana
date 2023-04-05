<script>
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import PageHeader from '@/components/PageHeader.vue'
import PaginationType from '@/components/PaginationType.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      page: {},
      currentCategory: 'all'
    }
  },
  methods: {
    getProducts (page = 1) {
      const category =
        this.currentCategory === 'all'
          ? ''
          : `&category=${this.currentCategory}`
      // page = 1 預設參數
      this.$http
        .get(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/?page=${page}&${category}`
        )
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
          this.$router.push({
            query: {
              page: this.page.current_page,
              category: this.currentCategory
            }
          })
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">獲取商品失敗</span>',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    selectCategory (category) {
      this.currentCategory = category
      this.getProducts()
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    PageHeader,
    PaginationType
  },
  mounted () {
    this.getProducts()
    const category =
      this.currentCategory === 'all'
        ? 'all'
        : `&category=${this.currentCategory}`
    this.$router.push({
      path: '/products',
      query: { page: 1, category }
    })
  }
}
</script>

<template>
  <PageHeader />
  <section class="section-products bg-darkTwo py-8">
    <div class="container">
      <div class="d-flex">
        <div
          class="square bg-darkTwo border border-primary border-3 mx-auto mx-md-0"
        >
          <h2
            class="news-tips position-absolute bottom-0 end-0 text-nowrap p-3 bg-dark align-self-start mx-auto"
          >
            逸品料理
          </h2>
        </div>
        <nav
          aria-label="breadcrumb"
          class="ms-8 align-self-end d-none d-md-block"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              逸品料理
            </li>
          </ol>
        </nav>
      </div>
      <div class="products mt-9 mb-8">
        <nav class="nav nav-pills flex-row mb-6">
          <a
            class="flex-fill text-center nav-link"
            :class="{ active: currentCategory === 'all' }"
            @click="selectCategory('all')"
            >全部</a
          >
          <a
            class="flex-fill text-center nav-link"
            :class="{ active: currentCategory === '握壽司' }"
            @click="selectCategory('握壽司')"
            >握壽司</a
          >
          <a
            class="flex-fill text-center nav-link"
            :class="{ active: currentCategory === '卷物' }"
            @click="selectCategory('卷物')"
            >卷物</a
          >
          <a
            class="flex-fill text-center nav-link"
            :class="{ active: currentCategory === '軍艦' }"
            @click="selectCategory('軍艦')"
            >軍艦</a
          >
        </nav>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 g-md-6">
          <div class="col" v-for="products in products" :key="products.id">
            <div class="box bg-dark">
              <h3 class="title p-3">{{ products.title }}</h3>
              <div class="bgOrange ms-auto">
                <img :src="products.imageUrl" :alt="products.title" class="pic">
              </div>
              <span class="price bg-danger py-1 px-2 ms-3">
                NT$ {{ products.price }}
              </span>
              <div class="mark d-flex justify-content-evenly align-items-center">
                <RouterLink :to="`product/${products.id}`" type="button" class="bi bi-search border border-3 px-2 rounded-3"></RouterLink>
                <button type="button" class="bi bi-cart-dash border border-primary border-3 bg-primary px-2 rounded-3 text-white" @click="addToCart(products.id, qty)"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginationType :pages="page" @change-page="getProducts"></PaginationType>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.square {
  width: 180px;
  aspect-ratio: 1/1;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    right: -20px;
    width: 180px;
    height: 180px;
    background-color: #1b1b1b;
  }
}
.news-tips {
  writing-mode: vertical-lr;
  z-index: 3;
}
.breadcrumb {
  margin-bottom: 0;
}
.nav-link {
  background-color: #1b1b1b;
  cursor: pointer;
  color: white;
  &.active {
    background-color: #1b1b1b;
    border-bottom: 5px solid #f25C05;
  }
}
.box {
  box-shadow: 3px 3px 6px rgba(27, 27, 27, 1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 1s all;
  &:hover{
    transform: translateY(-5px);
    .mark {
      opacity: 1;
    }
  }
}
.bgOrange{
  width: 106px;
  height: 90px;
  background: #f25C05;
  border-top-left-radius: 100%;
  position: relative;
}
.pic{
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scale(1.3);
}
.price{
  position: absolute;
  font-size: 12px;
  bottom: 8px;
  left: 0;
}
.mark {
  position: absolute;
  inset: 0;
  background-color: rgba(27, 27, 27, 0.9);
  opacity: 0;
}
.bi{
  font-size: 24px;
}
</style>
