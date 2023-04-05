<script>
import PaginationType from '@/components/PaginationType.vue'
import ArticleModal from '@/components/ArticleModal.vue'
import ArticleDelModal from '@/components/ArticleDelModal.vue'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      page: {},
      tempArticle: {},
      isNew: false
    }
  },
  components: {
    ArticleModal,
    ArticleDelModal,
    PaginationType
  },
  methods: {
    getArticles (page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/articles/?page=${page}`
        )
        .then((res) => {
          this.articles = res.data.articles
          this.page = res.data.pagination
          if (res.data.success) {
            Swal.fire({
              toast: true,
              title: '取得文章成功',
              icon: 'success',
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              background: '#F2ECDD',
              color: '#F25C05'
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `${err.response.data.message}`,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    // 打開
    openModal (type, item) {
      if (type === 'new') {
        // 新增優惠券
        this.isNew = true
        this.tempArticle = { create_at: new Date().getTime() / 1000, tag: [] }
        this.$refs.modal.articleModal.show()
      } else if (type === 'edit') {
        // 修改
        this.isNew = false
        this.tempArticle = { ...item }
        this.$refs.modal.articleModal.show()
      } else if (type === 'delete') {
        // 刪除
        this.tempArticle = { ...item }
        this.$refs.delModal.articleDelModal.show()
      }
    },
    // get有 id 的 api
    getArticle (id) {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${id}`)
        .then((res) => {
          this.openModal('edit', res.data.article)
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `${err.response.data.message}`,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    // 修改文章
    updateArticle (item) {
      this.tempArticle = item
      // 先預設為新增商品
      let newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article`
      let http = 'post'
      // 如果是修改則更改url & http
      if (!this.isNew) {
        newurl = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        http = 'put'
      }
      // 帶入不同的api
      this.$http[http](newurl, { data: this.tempArticle })
        .then((res) => {
          this.$refs.modal.articleModal.hide()
          this.getArticles()
          Swal.fire({
            toast: true,
            title: `${res.data.message}`,
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
        })
        .catch(() => {
          Swal.fire({
            toast: true,
            title: '全部為必填',
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    },
    // 刪除訂單
    delArticle () {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.$http
        .delete(url)
        .then((res) => {
          this.$refs.delModal.articleDelModal.hide()
          this.getArticles()
          Swal.fire({
            toast: true,
            title: `${res.data.message}`,
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `${err.response.data.message}`,
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
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    this.getArticles()
  }
}
</script>

<template>
  <div class="article text-dark">
    <div class="container">
      <h2 class="py-8">
        <i class="bi bi-chat-square-text-fill pe-3"></i>文章管理頁面
      </h2>
      <button type="button"
        class="btn btn-dark text-white d-block ms-auto btn-lg mb-4"
        @click="openModal('new')"
      >
        新增文章
      </button>
      <div class="row">
        <div
          class="col-md-6 col-xl-4 mb-4"
          v-for="article in articles"
          :key="article.id"
        >
          <div class="article-card border border-3 border-dark">
            <div class="body p-3">
              <div
                class="title d-flex align-items-center justify-content-between"
              >
                <span>{{ article.title }}</span>
                <span
                  v-if="article.isPublic"
                  class="py-1 px-2 bg-dark text-white"
                  >已公開</span
                >
                <span
                  v-else
                  class="bg-darkTwo text-white py-1 px-2 bg-opacity-50"
                  >未公開</span
                >
              </div>
              <p class="mt-3 description">{{ article.description }}</p>
            </div>
            <button type="button"
              class="btn btn-primary text-white w-50 btn-lg"
              @click="getArticle(article.id)"
            >
              修改</button
            ><button type="button"
              class="btn btn-danger text-white w-50 btn-lg"
              @click="openModal('delete', article)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
      <ArticleModal
        ref="modal"
        :is-new="isNew"
        :article="tempArticle"
        @update-article="updateArticle"
      ></ArticleModal>
      <ArticleDelModal
        ref="delModal"
        :article-data="tempArticle"
        @del-item="delArticle"
      ></ArticleDelModal>
      <PaginationType :pages="page" @change-page="getArticles"></PaginationType>
    </div>
  </div>
</template>

<style scoped>
.tag,
.description {
  font-size: 16px;
}
</style>
