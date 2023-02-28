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
    uploadImg() {
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/upload`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    PageHeader,
  },
  mounted() {
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
            美味菜單
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
              美味菜單
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <form
    action="/api/thisismycourse2/admin/upload"
    enctype="multipart/form-data"
    method="post"
  >
    <input type="file" name="file-to-upload" />
    <input type="submit" value="Upload" @click="uploadImg" />
  </form>
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
</style>
