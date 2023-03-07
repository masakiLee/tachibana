<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          title: "有推薦的壽司？",
          content:
            "壽司師傅精心挑選新鮮食材，可以嘗試不同的組合，品嘗我們的美味饗宴。",
          isOpen: true,
        },
        {
          id: 2,
          title: "有什麼素食選擇？",
          content: "可選擇稻荷壽司，酪梨壽司，蛋奶素者可以選擇蛋壽司。",
          isOpen: false,
        },
        {
          id: 3,
          title: "有無小孩的餐點？",
          content: "多種適合小孩口味的壽司，例如：甜蝦壽司、蛋壽司、茶碗蒸等。",
          isOpen: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <section class="section-fqa bg-darkTwo py-8 py-md-10">
    <div class="container">
      <h2 class="fqa-tips border border-3 border-primary p-3 bg-dark mx-auto">
        常見問題
      </h2>
      <div class="row justify-content-center mt-8">
        <div class="col-12 col-md-8">
          <div class="accordion" id="accordionExampleOne">
            <div
              class="accordion-item border border-3 border-white mb-6"
              v-for="question in questions"
              :key="question.id"
            >
              <h3
                :class="{
                  'accordion-button': true,
                  'not-collapsed': question.isOpen,
                }"
                class="accordion-button bg-dark text-white font-monospace"
                type="button"
                @click="question.isOpen = !question.isOpen"
              >
                <span class="fqa-list me-4">0{{ question.id }}</span>
                {{ question.title }}
              </h3>

              <p
                class="accordion-body text-white bg-darkTwo font-monospace fz-16"
                v-if="question.isOpen"
              >
                {{ question.content }}
              </p>
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
    padding: 16px 20px;
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
.fz-16 {
  font-size: 16px;
}
.accordion {
  --bs-accordion-btn-focus-box-shadow: none;
}

.accordion-button::after {
  background-image: url(../assets/image/plus.svg);
  transform: rotate(0);
}

.accordion-button.not-collapsed::after {
  background-image: url(../assets/image/minus.svg);
  transform: rotate(180deg);
}
</style>
