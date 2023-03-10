<script>
import PageHeader from "../../components/PageHeader.vue";
export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {},
  components: {
    PageHeader,
  },
  mounted() {},
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-Complete bg-darkTwo py-8">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="bg-dark p-4 information">
            <ul class="step d-flex justify-content-around mb-4">
              <li
                class="step-list text-white flex-fill p-2 text-center bg-primary"
              >
                訂單完成
              </li>
            </ul>
            <div
              class="complete bg-darkTwo py-8"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="2000"
            >
              <img src="../../assets/image/gift.svg" alt="" class="mx-auto" />
              <p class="text-center pt-4 thanks">
                感謝購買，商品問題請聯絡客服，也可以關注我們獲得第一手消息。
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="bg-dark mt-4 mt-md-0 p-4">
            <p class="pb-2 border-bottom border-3">注意事項</p>
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
    font-size: 20px;
  }
}

.thanks {
  word-break: keep-all;
}
</style>
