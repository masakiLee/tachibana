<script>
import bannerOne from "../assets/image/bannerOne.jpg";
import bannerTwo from "../assets/image/bannerOne.jpg";
import bannerThree from "../assets/image/bannerThree.jpg";
import bannerFour from "../assets/image/bannerFour.jpg";

export default {
  data() {
    return {
      banner: [
        { images: bannerOne },
        { images: bannerTwo },
        { images: bannerThree },
        { images: bannerFour },
      ],
    };
  },
};
</script>

<template>
  <div id="banner" class="banner">
    <div class="banner-logo">
      <img
        src="../assets/image/logo.svg"
        alt="logo"
        class="logo-img mx-auto d-none d-sm-block"
      />
      <img
        src="../assets/image/logo-sm.svg"
        alt="logo"
        class="logo-img mx-auto d-block d-sm-none"
      />
      <h1>
        TACHIBANA
        <p class="logo-name">SUSHI</p>
      </h1>
    </div>
    <div class="position-relative">
      <ul>
        <li
          class="position-absolute"
          v-for="banner in banner"
          :key="banner.images"
        >
          <img :src="banner.images" alt="banner" class="banner-img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
}
@media (max-width: 768px) {
  .banner {
    aspect-ratio: 3/4;
  }
}
.banner-logo {
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-name {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  text-align: center;
  letter-spacing: 1rem;
}
@media (max-width: 768px) {
  .logo-name {
    font-size: 16px;
    letter-spacing: 8px;
  }
}

ul > li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

ul > li:nth-child(4) {
  animation: li4 20s infinite;
}
ul > li:nth-child(3) {
  animation: li3 20s infinite;
}
ul > li:nth-child(2) {
  animation: li2 20s infinite;
}
ul > li:nth-child(1) {
  animation: li1 20s infinite;
}

/* 動畫 */

@keyframes li4 {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
}
@keyframes li3 {
  25% {
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
}
@keyframes li2 {
  50% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
}
@keyframes li1 {
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.banner-img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
}
@media (max-width: 768px) {
  .banner-img {
    aspect-ratio: 3/4;
  }
}
</style>
