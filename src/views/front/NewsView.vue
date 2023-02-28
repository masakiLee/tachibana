<script>
import PageHeader from "../../components/PageHeader.vue";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getNews() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          console.log("取得最新消息頁面：", res.data.articles);
          this.articles = res.data.articles;
        });
    },
  },
  components: {
    PageHeader,
  },
  mounted() {
    this.getNews();
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
          <ol class="breadcrumb font-monospace">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              最新消息
            </li>
          </ol>
        </nav>
      </div>
      <div class="row align-content-start flex-wrap font-monospace mt-9">
        <div
          class="col-sm-6 col-lg-4"
          v-for="article in articles"
          :key="article.id"
        >
          <div>
            <RouterLink :to="`news/${article.id}`">
              <div class="newsCard">
                <img :src="article.image" class="card-img-top" alt="newsOne" />
                <div class="card-body bg-darkTwo p-3">
                  <h2 class="card-title mb-3">
                    {{ article.title }}
                  </h2>
                  <h3 class="card-text mb-3">
                    {{ article.description }}
                  </h3>
                  <p class="card-time text-primary text-end">
                    {{ article.time }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.square {
  width: 200px;
  aspect-ratio: 1/1;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    right: -20px;
    width: 200px;
    height: 200px;
    background-color: #1b1b1b;
  }
}
.news-tips {
  writing-mode: vertical-lr;
  z-index: 3;
}
.newsCard {
  margin-bottom: 24px;
  box-shadow: 0 3px 3px rgba($color: #000000, $alpha: 0.4);

  .card-img-top {
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  .card-body {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .card-title {
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-text {
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .card-time {
    font-size: 12px;
  }
}
</style>
