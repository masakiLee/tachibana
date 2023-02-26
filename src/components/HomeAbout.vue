<script>
import aboutOne from "../assets/image/aboutOne.jpg";
import aboutTwo from "../assets/image/aboutTwo.jpg";
import aboutThree from "../assets/image/aboutThree.jpg";
import aboutFour from "../assets/image/aboutFour.jpg";
import aboutFive from "../assets/image/aboutFive.jpg";
export default {
  data() {
    return {
      aboutPicture: [
        {
          imageUrl: aboutOne,
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl: aboutTwo,
        },
        {
          imageUrl: aboutThree,
        },
        {
          imageUrl: aboutFour,
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl: aboutFive,
          bsClass: "d-none d-md-block",
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <section class="section-about bg-darkTwo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-6 pt-md-10 pb-0 pb-md-10">
          <div class="d-flex aboutSticky">
            <h2
              class="about-tips border border-3 border-primary p-3 bg-dark align-self-start"
            >
              橘鮨理念
            </h2>
            <h3 class="about-text mt-7 mt-md-9 ms-4 ms-md-8">
              選用新鮮食材 最適合的調理方式 並以精美刀工 盛裝的器皿融合色彩
              平衡呈現於盤上 享用美食同時 欣賞到精緻的藝術品
            </h3>
          </div>
        </div>
        <div class="col-md-8">
          <ul class="aboutPictureList">
            <li
              v-for="aboutPicture in aboutPicture"
              :key="aboutPicture.imageUrl"
              :class="aboutPicture.bsClass"
            >
              <img
                :src="aboutPicture.imageUrl"
                alt="aboutPicture"
                class="aboutPicture"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.aboutSticky {
  position: sticky;
  top: 80px;
}
.about-tips {
  writing-mode: vertical-lr;
}
.about-text {
  word-break: keep-all;
  line-height: 64px;
  letter-spacing: 12px;
  @media (max-width: 768px) {
    line-height: 48px;
  }
}
.aboutPicture {
  aspect-ratio: 367/231;
  object-fit: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 6px #000000;
}
.aboutPictureList {
  position: relative;
  border-left: 3px solid #1b1b1b;
  border-right: 3px solid #1b1b1b;
  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background-color: #1b1b1b;
    position: absolute;
    top: 0;
    left: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
li {
  width: 50%;
  padding: 240px 0;
  transition: 1s ease-in;
  &:nth-child(odd) {
    margin-left: auto;
    @media (max-width: 576px) {
      padding: 0 0 24px 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 24px 0;
  }
  &:hover {
    width: 100%;
  }
}
</style>
