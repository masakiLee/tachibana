<script>
import { RouterLink } from 'vue-router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: [],
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getNews () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          this.articles = res.data.articles
          this.isLoading = false
          // 時間搓轉換時間
          this.articles = res.data.articles.map((item) => {
            const time = item.create_at
            const date = new Date(time * 1000)
            const dateString = date.toLocaleDateString()
            return {
              ...item,
              dateString // 新增 dateString 屬性
            }
          })
          this.articles = this.articles[0]
        })
    }
  },
  components: {
    Loading,
    RouterLink
  },
  mounted () {
    this.isLoading = true
    this.getNews()
  }
}
</script>

<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :color="'#fff'"
    :is-full-page="fullPage"
    :background-color="'#1b1b1b'"
    :opacity="1"
  >
    <div class="loading">
      <p class="loadingName text-center">TACHIBANA</p>
      <p class="loadingLesp text-center">SUSHI</p>
    </div></loading
  >
  <section class="section-articles bg-dark py-8 py-md-10">
    <div class="container">
      <div class="orangeBorder mx-auto">
        <h2 class="articles-tips p-3 bg-darkTwo position-absolute">最新消息</h2>
      </div>
      <div class="card mt-8" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <RouterLink to="`News/${articles.id}`" class="row g-0">
          <div class="col-md-4">
            <img :src="articles.image" :alt="articles.title" class="articles-image img-fluid"/>
          </div>
          <div class="col-md-8">
            <div class="card-body bg-darkTwo h-100 d-flex flex-column justify-content-around">
              <div class="articles-tag d-flex align-items-center">
                <span class="time pe-3">{{ articles.dateString }}</span>
                <div class="tag py-1 px-2 bg-danger text-white me-3"
                    v-for="tags in articles.tag" :key="tags.id">
                    {{ tags }}
                </div>
              </div>
              <h3 class="card-title my-3 my-md-0 mb-0">{{ articles.title }}</h3>
              <p class="card-text mt-3 mt-md-0">
                {{ articles.description }}
              </p>
              <p class="more text-end">
                <i class="bi bi-subtract"></i>
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.loading {
  animation: animate 1.3s ease;
}

@keyframes animate {
  to {
    opacity: 0.08;
    filter: blur(4px);
    letter-spacing: 16px;
  }
}
.loadingName {
  font-family: "Permanent Marker";
  font-size: 80px;
  line-height: 92px;
  @media (max-width: 576px) {
    font-size: 48px;
    line-height: 1;
  }
}
.loadingLesp {
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 16px;
  font-size: 24px;
  @media (max-width: 576px) {
    font-size: 24px;
    line-height: 1;
  }
}
.articles-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.tag,
.time,
.more {
  font-size: 16px;
  line-height: 1;
}
.orangeBorder {
  position: relative;
  width: 125px;
  height: 48px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    left: -8px;
    z-index: 5;
    width: 24px;
    height: 24px;
    border: 3px solid #f25c05;
  }
}

.articles-tips {
  z-index: 9;
  position: relative;
}
.card {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    border-width: 0;
    transition: 0.6s;
    &:hover{
      transform: translateY(-4px);
    }
}
</style>
