<script>
export default {
  data() {
    return {};
  },
  methods: {
    openShow() {},
  },
  mounted() {},
};
</script>
<template>
  <section class="section-fqa bg-darkTwo py-10">
    <div class="container">
      <h2 class="fqa-tips border border-3 border-primary p-3 bg-dark mx-auto">
        常見問題
      </h2>
      <div class="row justify-content-center mt-8">
        <div class="col-10 col-lg-6">
          <div class="accordion mb-4" id="accordionExampleOne">
            <div class="accordion-item border border-3 border-white">
              <h3 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed text-nowrap bg-dark text-white font-monospace"
                  type="button"
                  @click="openShow()"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <span class="fqa-list me-4">01</span> 有推薦的壽司？
                </button>
              </h3>
              <div
                id="collapse"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExampleOne"
              >
                <div
                  class="accordion-body bg-darkTwo text-white font-monospace"
                >
                  壽司師傅精心挑選新鮮食材，可以嘗試不同的組合，品嘗我們的美味饗宴。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fqa-tips {
  writing-mode: vertical-lr;
}
.fqa {
  .accordion-body {
    font-size: 20px;
    letter-spacing: 8px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .accordion-button {
    letter-spacing: 4px;
    font-size: 20px;
    background-color: #1b1b1b;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  &-list {
    color: #f25c05;
    font-weight: 700;
  }
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-btn-icon: url(../assets/image/plus.svg);
  --bs-accordion-btn-active-icon: url(../assets/image/minus.svg);
}
</style>
