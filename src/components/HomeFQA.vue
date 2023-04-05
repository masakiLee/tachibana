<script>
export default {
  data () {
    return {
      questions: [
        {
          id: 1,
          title: '有推薦的壽司？',
          content:
            '壽司師傅精心挑選新鮮食材，可以嘗試不同的組合，品嘗我們的美味饗宴。',
          isOpen: true
        },
        {
          id: 2,
          title: '有什麼素食選擇？',
          content: '可選擇稻荷壽司，酪梨壽司，蛋奶素者可以選擇蛋壽司。',
          isOpen: false
        },
        {
          id: 3,
          title: '有無小孩的餐點？',
          content: '多種適合小孩口味的壽司，例如：甜蝦壽司、蛋壽司、茶碗蒸等。',
          isOpen: false
        }
      ]
    }
  }
}
</script>

<template>
  <section class="section-fqa bg-darkTwo py-8 py-md-10">
    <div class="container">
      <div class="orangeBorder mx-auto">
        <h2 class="fqa-tips p-3 bg-dark position-absolute">
          常見問題
        </h2>
      </div>
      <div class="row justify-content-center mt-8">
        <div class="col-12 col-md-8">
          <div class="accordion" id="accordionExampleOne">
            <div
              class="accordion-item border border-2 border-dark"
              v-for="question in questions"
              :key="question.id"
            >
              <h3
                :class="{
                  'accordion-button': true,
                  'not-collapsed': question.isOpen,
                }"
                class="accordion-button bg-dark text-white"
                type="button"
                @click="question.isOpen = !question.isOpen"
              >
                <span class="fqa-list me-4">0{{ question.id }}</span>
                {{ question.title }}
              </h3>

              <p
                class="accordion-body text-white bg-darkTwo"
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
.orangeBorder {
  position: relative;
  width: 125px;
  height: 48px;

  @media (max-width: 576px) {
    width: 104px;
  }

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
.fqa-tips {
  // writing-mode: vertical-lr;
  z-index: 9;
}
.fqa-list {
  color: #f25c05;
  font-weight: 700;
}
.accordion {
  &-body,
  &-button {
    font-size: 16px;
    letter-spacing: 4px;
  }
  &-button {
    background-color: #1b1b1b;
  }
  &-button::after {
    background-image: url(../assets/image/plus.svg);
    transform: rotate(0);
  }
  &-button:not(.collapsed) {
    box-shadow: none;
  }
  &-button.not-collapsed::after {
    background-image: url(../assets/image/minus.svg);
    transform: rotate(180deg);
  }

  &-item {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-body {
    font-size: 16px;
  }
}
</style>
