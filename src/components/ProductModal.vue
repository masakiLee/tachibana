<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['isNew', 'product', 'createImages'],
  emit: ['create-images', 'update-product'],
  data () {
    return {
      status: {},
      tempProduct: ''
    }
  },
  methods: {
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/upload`
      this.status.fileUploading = true
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          this.status.fileUploading = false
          if (response.data.success) {
            this.tempProduct.imageUrl = response.data.imageUrl
            this.$refs.fileInput.value = ''
            alert('圖片上傳成功')
          } else {
            this.$refs.fileInput.value = ''
            alert('圖片上傳失敗')
          }
        })
        .catch((error) => {
          this.status.fileUploading = false
          alert(error.response, '圖片失敗')
        })
    }
  },
  mounted () {
    this.productModal = new bootstrap.Modal(
      this.$refs.productModal,
      {
        keyboard: false
      }
    )
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  }
}
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="productModal">
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <span v-if="isNew">新增商品</span>
          <span v-else>編輯商品</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-dark">
          <div class="row gx-2 mb-3">
            <div class="col-md-6">
              <img class="img-fluid" :src="tempProduct.imageUrl" :alt="tempProduct.title"/>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="tempProduct.category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    v-model="tempProduct.unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    min="0"
                    v-model.number="tempProduct.origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model.number="tempProduct.price"
                    min="0"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">主商品圖片網址</label>
            <input
              type="text"
              class="form-control"
              id="image"
              v-model="tempProduct.imageUrl"
              placeholder="請輸入圖片連結"
            />
          </div>
          <div class="mb-3">
            <label for="customFile" class="form-label">或 上傳圖片 </label>
            <input
              type="file"
              id="customFile"
              class="form-control"
              ref="fileInput"
              @change="uploadFile"
            />
          </div>
          <div class="mt-5">
            <p>內頁商品圖</p>
            <div v-if="Array.isArray(tempProduct.imagesUrl)">
              <div
                class="mb-1"
                v-for="(image, key) in tempProduct.imagesUrl"
                :key="key"
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imagesUrl[key]"
                  />
                </div>
                <img class="img-fluid" :src="image" :alt="tempProduct.title"/>
              </div>
              <div
                v-if="
                  tempProduct.imagesUrl.length ||
                  tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                "
              >
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.push('')"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <div v-else>
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="$emit('create-images', tempProduct)"
              >
                新增圖片
              </button>
            </div>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">產品描述</label>
            <textarea
              type="text"
              class="form-control"
              id="description"
              v-model="tempProduct.description"
              placeholder="請輸入產品描述"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">說明內容</label>
            <textarea
              type="text"
              class="form-control"
              id="content"
              v-model="tempProduct.content"
              placeholder="請輸入產品說明內容"
            ></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="tempProduct.is_enabled"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
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
            @click="$emit('update-product', tempProduct)"
          >
            {{ isNew ? "新增商品" : "更新商品" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
