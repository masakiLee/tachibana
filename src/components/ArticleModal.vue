<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  props: ['isNew', 'article'],
  emits: ['update-article'],
  data () {
    return {
      tempArticle: {
        tag: ['']
      },
      create_at: 0,
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link']
      }
    }
  },
  methods: {},
  mounted () {
    this.articleModal = new bootstrap.Modal(
      this.$refs.articleModal,
      {
        keyboard: false
      }
    )
  },
  watch: {
    article () {
      this.tempArticle = this.article;
      [this.create_at] = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T')
    },
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  }
}
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="articleModal">
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
    >
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <span v-if="isNew">新增文章</span>
          <span v-else>編輯文章</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 d-flex flex-column justify-content-between">
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
              <div v-if="tempArticle.image">
                <img
                  class="img-fluid mb-3 articleImg"
                  :src="tempArticle.image"
                  :alt="tempArticle.title"
                />
              </div>
              <div v-else><img alt="" /></div>
              <div class="mb-3">
                <label for="image" class="form-label">文章圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.image"
                  placeholder="請輸入圖片連結"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempArticle.title"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control mt-3"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div class="col" v-if="tempArticle.tag.length < 2">
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    type="button"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">文章描述</label>
            <textarea
              type="text"
              class="form-control"
              id="description"
              v-model="tempArticle.description"
              placeholder="請輸入文章描述"
            ></textarea>
          </div>
          <div class="mb-3">
            <ckeditor
              :editor="editor"
              :config="editorConfig"
              v-model="tempArticle.content"
            ></ckeditor>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary text-white"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary text-white"
            @click="$emit('update-article', tempArticle)"
          >
            {{ isNew ? "新增文章" : "更新文章" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articleImg {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

textarea {
  resize: none;
}
</style>
