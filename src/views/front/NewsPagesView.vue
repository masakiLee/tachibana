<script>
import PageHeader from '@/components/PageHeader.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      article: {},
      isLoading: false,
      fullPage: false,
      coupons: []
    }
  },
  methods: {
    getNewsPage () {
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${id}`)
        .then((res) => {
          this.article = res.data.article
          const time = res.data.article.create_at
          const date = new Date(time * 1000)
          const dateString = date.toLocaleDateString()
          this.article.dateString = dateString
          this.isLoading = false
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
    },
    getCoupon () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupons`)
        .then((res) => {
          this.coupons = res.data.coupons
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '<span style="color: #ff0000">獲取優惠券失敗</span>',
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
    Loading
  },
  mounted () {
    this.isLoading = true
    this.getNewsPage()
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
          <ol class="breadcrumb text-nowrap">
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
      <div class="row justify-content-center vl-parent">
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
        <div class="col-md-8">
          <div class="newsPages-main text-white mt-9">
            <div class="newsPages-body">
              <h3 class="newsPages-text mb-4 text-start">
                {{ article.description }}
              </h3>
              <p class="card-time text-primary mb-3 text-end">
                {{ article.dateString }}
              </p>
              <img
                :src="article.image"
                alt="newsImg"
                class="newsPagesImg mx-auto"
              />

              <div class="text-start my-6" v-html="article.content"></div>
              <div
                class="coupon-card border border-dark border-3 text-center row g-0"
              >
                <div
                  class="col-md-4 d-flex justify-content-center align-items-center"
                >
                <img
                    src="@/assets/image/confetti.svg"
                    alt="confetti"
                    class="confetti d-none d-md-block"
                  />
                </div>
                <div class="body col-md-8">
                  <p class="py-2 bg-primary text-white">歡慶開幕</p>
                  <p class="title pt-3 bg-dark">OPENSUSHI</p>
                  <p class="py-3 bg-dark">
                    折扣
                    <span class="percent text-primary">80</span>
                    %
                  </p>
                  <p class="pb-3 bg-dark">2023-03-26 ~ 2023-04-26</p>
                </div>
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

.newsPages-body {
  padding: 0 12px;

  @media (max-width: 768px) {
    padding: 24px 8px 0 8px;
  }
}

.card-time {
  font-size: 12px;
}

.percent {
  font-size: 32px;
  line-height: 1;
}

.newsPages-text {
  font-size: 24px;
  letter-spacing: 4px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.newsPagesImg {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
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
