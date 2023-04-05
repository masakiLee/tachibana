<script>
import PageHeader from '@/components/PageHeader.vue'
import PaginationType from '@/components/PaginationType.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      page: {},
      isLoading: false,
      fullPage: false
    }
  },
  methods: {
    getNews () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          this.articles = res.data.articles
          this.page = res.data.pagination
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
          setTimeout(() => {
            this.isLoading = false
          }, 600)
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">獲取最新消息失敗</span>',
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
  components: {
    PageHeader,
    PaginationType,
    Loading
  },
  mounted () {
    this.isLoading = true
    this.getNews()
  }
}
</script>

<template>
  <PageHeader />
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
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active text-primary" aria-current="page">
              最新消息
            </li>
          </ol>
        </nav>
      </div>
      <div class="row align-content-start flex-wrap my-9 vl-parent">
        <loading
          v-model:active="isLoading"
          :background-color="'#222222'"
          :is-full-page="fullPage"
          :opacity="1"
        >
          <div class="sushi">
            <div class="circular"></div>
          </div>
        </loading>
        <div
          class="col-sm-6 col-lg-4"
          v-for="article in articles"
          :key="article.id"
        >
          <div>
            <RouterLink :to="`news/${article.id}`">
              <div
                class="newsCard"
                data-aos="fade-zoom"
                data-aos-easing="ease-in"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="600"
              >
                <div>
                  <img
                    :src="article.image"
                    class="card-img-top card-img"
                    alt="newsOne"
                  />
                </div>
                <div class="card-body bg-darkTwo p-4">
                  <h2 class="card-title mb-3">
                    {{ article.title }}
                  </h2>
                  <h3 class="card-text mb-3">
                    {{ article.description }}
                  </h3>
                  <p class="card-time text-primary text-end">
                    {{ article.dateString }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <PaginationType :pages="page" @change-page="getNews"></PaginationType>
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
.newsCard {
  margin-bottom: 24px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);

  .card-img-top {
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  .card-body {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .card-title {
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

.sushi {
  width: 100px;
  height: 100px;
  border: 8px solid #1b1b1b;
  border-radius: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: bottom right;
  animation: roll 1s linear infinite;
  .circular {
    height: 50px;
    width: 50px;
    background-color: #f25c05;
    border-radius: 50%;
  }
}

@keyframes roll {
  100% {
    transform: translateX(-100%) rotateZ(90deg);
  }
}
</style>
