<script>
export default {
  data() {
    return {
      aboutPicture: [
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677559046888.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oCDGyZowMtHSrWXT9tn66qmt8jR6Ymn49Iem0Y6FSGLGZmcD3bkER5N5v9FtlQ7MGgbTYCCl4g1mkBzahLnsSbsAdEN2Fr45gMe16VQlRhFK%2BxPjSvgT1vRhCqH5xBe%2FzpaLlSpMDCfH4kTiOpXjnUy78plD3DlHl7hgAyRA1fwMQucUgzYhxDxmP6r48P1JKLiDzLGMov74XXxPouyeyNeUXVpYNJt7qM5nMUaNR3b%2FCZy0QFvadOztnSVlFvH25mwQSeP2vKcx3jLRS3nprrkxAgTiBNI2QzALaELaGUwjA4AVMprlBcZDKVVt4WFk%2Fq3KgVPBsrrY4IaKJt4x4A%3D%3D",
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677559056827.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=K7l7rV5Phsiurvqrsq6cZA7pNRVp5dumVzQi%2BtCQw0P7k4X9hqvjBRFpnY%2F%2B7XBAJiRZYGvoif80VqISZ280OsMaZYyaF86O5cvWUWFpIa0yFpRslVmzXKzbip8%2BrmhSUv9PSlLQIVnIgHwrKYjUYrFS65Yw2pEA12rbivLQEXHmDRbmnHKLFS%2Fg21YzO%2FKf5YgYmcuPJPv1qVRv7o0Lp6h5jNJFX4uPaUJK18bNzZMzWAFwutf%2BkVqe%2BBELpEOG6BTFC2FjLN6LQq4Vh2bBnS9Las0R4o3A7RPUHBmBXDVSCx22OHNn5kMzHjsUzw4tASTtov%2BYF01242K7XCqEWA%3D%3D",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677559060948.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hTabcjdhdKzyIE5ZzeN95RlSy3%2BPzDlYMjAxcaO61Z3upRGSLjQeEuyCz4U9yX3P%2BcYltFrih7jiy%2FW3s1mmJfl7YXvGdhwj51pQ4hwTiqBByRiJ%2FpN7YhTxSh71f6oh9aeZx5DJ%2BV7OCIbZrzfR1B2tb%2BQFtnmXz4nZUX6MrkDq7BvSanSj62xYE2hrfM0hlgVrN6pvvXnseW2uADbVFXxxq%2F%2FQHLYcep0GAbv62GKcqt9O6zDZ0b9V48BvLdbod9Nc5VWgltZlrpkZsPl8Uc7kAlnQJYbiWj2uW4yOCNVAksjYGyU6k2A9FaRxrllk0%2BH9OR7d%2FWVGifJdlQ0ycA%3D%3D",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677559051827.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fhFQQWrppz8egIpLhEcce3chi4fPHa13y%2F5VT5sY162wEI%2BYGuGfzgg7tI0sOAZV1sUFVr0cCdoPHCm6YDk%2BnI%2Fe8uAj%2BrIlmYrbF47d8yqfLVqytYzZK0fvaRklb6Eiyk76uwvzpkAXAB%2FgdonZb3le9GiD%2Fhp2KpsUZPwgRQNcKzxz8YoJC%2FmHTrdozheRrsCCSRtgADeVLnNgoYpuZwSnKeYjQZbRz5HTgfLr08ZRDOMgSfhfZszG3n1JKVIRkQ8r36pBmplPUj84C0ejMSB6J%2FWFpkbihWxn8PhbGVuDp5nLp0Cp1OPRcPBFoPom7RUSE5E3r0hrFz9WeOU0zA%3D%3D",
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677559065001.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=C4VAXLyu3rlSi%2FGqgRZLt0pTL%2B2EcwyAMmjzoRcSjljpyThLiSXU54YSVkhDr4VaiOAQGRixMyTqRTd5PIaifOD1%2FihaVLXqcgNwf9gCvJLJ67iw83z1YuQBKCfgYSSQ0uQACraZiggovTx87gFdV9VjwbL528UjNRPdQj3MbqotFviWLrwJifbFh8ZsbbojtIwrWnvubLdYwHWAu%2FqyQxgpQSDHg5xuouHuSF2elQweGOAinN95fH7xyMHwvn8kUyeD3sOR9YrkUygDvT13uX%2BI%2FJgyNbm30dUQpgUfuThsdHx2tkOhAgfP5Y1CQQbi9PbZ%2BG7JL5l2Pctnmd2Otg%3D%3D",
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
