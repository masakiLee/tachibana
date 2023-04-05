<script>
import PageHeader from '@/components/PageHeader.vue'
import paymentStore from '@/stores/payment'

export default {
  beforeRouteEnter (to, from, next) {
    const store = paymentStore() // 實例化 paymentStore
    if (store.success) {
      next()
    } else {
      next('/NotFound.vue')
    }
  },
  components: {
    PageHeader
  },
  mounted () {}
}
</script>

<template>
  <PageHeader />
  <section class="section-Complete bg-darkTwo py-8">
    <div class="container">
      <div class="row bg-dark">
        <div class="col-lg-8">
          <div class="py-4 information">
            <div
              class="complete bg-darkTwo py-8"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="2000"
            >
              <img src="@/assets/image/gift.svg" alt="" class="mx-auto" />
              <ul class="text-center pt-4">
                <li>訂單完成，感謝購買！</li>
                <li>還有更多優質商品，歡迎繼續選購！</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="py-4">
            <h2 class="py-2 border-bottom border-3">注意事項</h2>
            <div class="mt-4">
              <p class="note">
                <i class="bi bi-info-square"></i>購入後請盡快食用。
              </p>
              <p class="note">
                <i class="bi bi-info-square"></i
                >注意：本商品含有蟹、蝦、魚類、大豆、麩質之穀物(小麥)及其製品可能導致過敏症狀。
              </p>
              <p class="note">
                <i class="bi bi-info-square"></i>圖片僅供參考。
              </p>
              <p class="note">
                <i class="bi bi-info-square"></i>TACHIBANA SUSHI
                保留隨時修改或終止活動內容與最終解釋權。
              </p>
            </div>
            <RouterLink to="/products" type="button" class="btn btn-lg btn-primary text-white w-100 mt-1">繼續購物</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.note {
  text-indent: -36px;
  padding: 8px 8px 8px 48px;
  .bi {
    margin: 0;
    padding: 0 16px 0 0;
    text-indent: 0px;
  }
}

</style>
