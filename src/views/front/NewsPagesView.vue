<script>
import PageHeader from "../../components/PageHeader.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      article: {},
    };
  },
  methods: {
    getNewsPage() {
      // console.log(this.$route.params); // 拿出 id值
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          console.log("取得單一最新消息頁面：", res.data.article);
          this.article = res.data.article;
        });
    },
  },
  components: {
    PageHeader,
  },
  mounted() {
    this.getNewsPage();
  },
};
</script>

<template>
  <PageHeader></PageHeader>
  <section class="section-news bg-darkTwo py-8">
    <div class="container">
      <div class="d-flex">
        <div
          class="square bg-darkTwo border border-primary border-3 mx-auto mx-md-0"
        >
          <h2
            class="news-tips position-absolute bottom-0 end-0 text-nowrap p-3 bg-dark align-self-start mx-auto"
          >
            最新消息
          </h2>
        </div>
        <nav
          aria-label="breadcrumb"
          class="ms-8 align-self-end d-none d-md-block"
        >
          <ol class="breadcrumb font-monospace text-nowrap">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/news">最新消息</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              {{ article.title }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="newsPages-main text-center text-white mt-10 mb-8">
            <img
              :src="article.image"
              alt="newsImg"
              class="newsPagesImg mx-auto"
            />
            <div class="newsPages-body">
              <h2 class="newsPages-title my-3">{{ article.title }}</h2>
              <p class="card-time text-primary mb-3">{{ article.time }}</p>
              <h3 class="newsPages-text mb-4">
                {{ article.description }}
              </h3>
              <div
                class="newsPages-coupon bg-dark w-75 p-4 mx-auto"
                v-if="article.title === '慶開幕輸入折扣碼享折扣'"
              >
                <p class="coupon-title mb-2">歡慶開幕</p>
                <span class="bg-primary text-white px-4 coupon">OPENSUSHI</span>
                <p class="coupon-text my-2">結帳時輸入優惠碼單筆折扣50元</p>
                <p class="coupon-time">
                  使用期限：<span>2023-03-26~2023/04/26</span>
                </p>
              </div>
              <p class="text-end text-white mt-8">{{ article.author }}</p>
            </div>
          </div>
        </div>
      </div>
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
.breadcrumb-item:nth-child(2) {
  margin-right: 16px;
}
.newsCard {
  margin-bottom: 24px;
  box-shadow: 0 3px 3px rgba($color: #000000, $alpha: 0.4);
}

.newsPages-body {
  padding: 24px 12px 0 12px;

  @media (max-width: 768px) {
    padding: 24px 8px 0 8px;
  }
}

.card-time {
  font-size: 12px;
}

.newsPages-title {
  font-size: 24px;
}

.newsPages-text {
  font-size: 24px;
  letter-spacing: 4px;
}

.newsPagesImg {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.coupon {
  cursor: pointer;
}

.couponImg {
  object-fit: cover;
  width: 30%;
  aspect-ratio: 1/1;
}

.coupon-text,
.coupon-time {
  font-size: 16px;
}
</style>
