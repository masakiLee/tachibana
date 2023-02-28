<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      articles: {},
    };
  },
  methods: {
    getNews() {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles`)
        .then((res) => {
          console.log("取得最新消息：", res.data.articles);
          this.articles = res.data.articles[0];
        });
    },
  },
  components: {
    RouterLink,
  },
  mounted() {
    this.getNews();
  },
};
</script>

<template>
  <section class="section-articles bg-dark">
    <div class="container">
      <div class="row justify-content-center py-10 py-md-9">
        <div
          class="col-10 border border-3 border-white d-flex py-9 ps-8 ps-lg-10 pe-8 position-relative"
        >
          <h2
            class="articles-tips translate-middle border border-3 border-primary p-3 bg-dark"
          >
            最新消息
          </h2>
          <RouterLink class="row" :to="`News/${articles.id}`">
            <div class="col-md-4">
              <div class="articles-header h-100">
                <img
                  :src="articles.image"
                  :alt="articles.title"
                  class="articles-image img-fluid"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="articles-body d-flex flex-column h-100">
                <div class="articles-tag d-flex mt-3">
                  <div
                    class="tag p-2 border border-2 border-primary text-white me-2 font-monospace"
                    v-for="tags in articles.tag"
                    :key="tags.id"
                  >
                    {{ tags }}
                  </div>
                </div>
                <span class="time font-monospace my-3">{{
                  articles.time
                }}</span>
                <h3 class="articles-title">{{ articles.title }}</h3>
                <p class="articles-description my-2">
                  {{ articles.description }}
                </p>
                <div class="more ms-auto font-monospace d-flex">
                  <div class="point"></div>
                  <div class="point"></div>
                  <div class="point"></div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.articles-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
}
.tag,
.time,
.more {
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
}
.point {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 4px;
  margin-right: 4px;
}

.point {
  animation: point 6s ease-out infinite;
}
@keyframes point {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
}
.point:nth-child(1) {
  animation-delay: 0s;
}
.point:nth-child(2) {
  animation-delay: 1.5s;
}
.point:nth-child(3) {
  animation-delay: 3s;
}

.articles-description {
  font-size: 20px;
}
.articles-tips {
  position: absolute;
  top: 50%;
  left: 0;
  writing-mode: vertical-lr;
  @media (max-width: 992px) {
    top: 0;
    left: 50%;
    writing-mode: horizontal-tb;
  }
}
</style>
