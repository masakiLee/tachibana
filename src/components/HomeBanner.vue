<script>
export default {
  data() {
    return {
      banner: [
        {
          images:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677516652103.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eyMt5OJIjm2h2wDKQ3%2FbgCe4MN2dbWQSQI9uz6UWpf9qLZIp8M4Q2Nqy6UGpim%2B3G7uCee2D8OYk6aHG%2BQoSNzrS5KUXDog%2FY12R9rLzS9uqeB5SF%2Bj%2FHolZo%2BQ%2FWFrrQfas%2B79U5ozHAPCq3HpWJjni44YpztmXiAjOT1f53cMludZxfSS9vwC0bUlQnwFF4fc7eIGMRq6513BNmVHaIlyLrUWOtzO5fM6vfr9PWOBOGA%2BUbxS%2FBW1qd0ZFCRnUEkW3FxQRaO4APZ%2B4i3DcrE4MVIX%2Bw1ZcOdvf0XboPlzYP5obv%2FrjjVzHBSeMvaqbC4OumvXH%2BeSMINEODzDlTQ%3D%3D",
        },
        {
          images:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677516674429.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g647Xh3zxsBbc5K3KneQAwA3ls9kgVrNkP7c0k%2BmtNYWQnbYPTGnkQYCKw4z8JAzBXtVk%2FihI1qeP0%2Fy09aw%2ByUMwr%2By4TTmKhA%2F7QCANM2HKv9HHN09Zvov2Y0t412KQ3zwFpSS4%2FZ4dJ7eMP8AHMAH08i8vDovJBSaf2QbFwzdArll05OejEigKKzSo7vFrE5Z%2B10mdRqmJWb9utK4n6r%2Bm4mp5vw6Em4c1O07TknRnDZrGe93r0OMI67dElGnBhy5e7IMvxQq0OV6euIkqv9Ns3v2q38eaZoiZ2J12ZqZmx4Fm7Vpc%2Fa3hfDC8B%2Fp2BpBqsdNOUemi3YpJVMFZw%3D%3D",
        },
        {
          images:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677517901190.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=E4MBtonwDWr%2BLFrYalrOIwKvWhmBvLXa%2FNNCkAjsllj1QVULdPuclc3xkc5Ph9ySracn2T6CQHccAbDZIWM%2BE1Gk%2By28%2BEaZ%2BPUawxkrc%2FaiAhXWkKQMqE9IFrEGP7MUTx1xspaV%2FiTRyHX1SQUnPh86cED779nTKOpSE3q%2B1EGy21xWQHWDlRJvjPJ3WhcBaE9fyfGwkWCK%2FGGB2EfOgldfZy948VTdfz8EMNs2znctEr0tkXu%2Fl%2BNDnHUz6%2FghcjY8V02RhWpyUd5pvjh%2FilZZA5USlXmWH15LA7gQS8Haw%2BV0bqcg9LC%2F1CvQG9yk5%2FaqlcBEllfbMXkpwH3Zuw%3D%3D",
        },
        {
          images:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677557752891.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Rhk6cJItl07jyTq7IsGDuE9%2BkUmRt90bkbUCZRxYdkHOpm5isxwzMUFyCDNHJYlH7ENZdQfgCZwZl84bal%2Fyrx8AW99LMFcWsBV%2Bw7vbuF3v1wWc8i9EUFUnoiYBOnHe4qYPj4vIvTUSm7Vvl9GcY6cAamNfveHKhJav%2FtbcMVPQpQIpeb%2Bai6PLWndDwe%2FvGr4q9bzYanz6CQyBItbGLAdNg3ZeyObaa1fftp7eBZKkiBj0oqmBEovFGa8%2FW9UrHf0h6bq%2FX2rP%2BBmGBiLO7kr5CHIbfSaV4wM2oFVN3tkQUQSJpVy3LL98Zc3lpu%2FpISmhrrrrMJPt4PYTW3MApA%3D%3D",
        },
      ],
    };
  },
  mounted() {
    this.banner;
  },
};
</script>

<template>
  <div id="banner" class="banner">
    <div class="banner-logo" data-aos="fade-up" data-aos-duration="3000">
      <img
        src="../assets/image/logo.svg"
        alt="logo"
        class="logo-img mx-auto d-none d-lg-block"
      />
      <img
        src="../assets/image/logo-sm.svg"
        alt="logo"
        class="logo-img mx-auto d-block d-lg-none"
      />
      <h1>TACHIBANA</h1>
      <p class="logo-name">SUSHI</p>
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
.banner,
.banner-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  @media (max-width: 768px) {
    aspect-ratio: 3/4;
    height: 100%;
  }
}
.banner {
  position: relative;
}

.banner-logo {
  width: 282px;
  height: 288px;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -141px;
  margin-top: -144px;
  @media (max-width: 768px) {
    width: 160px;
    height: 175px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -80px;
    margin-top: -88px;
  }
}

.logo-name {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  text-align: center;
  letter-spacing: 1rem;
  @media (max-width: 992px) {
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
  background: rgba(0, 0, 0, 0.4);
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

// .banner-img {
//   width: 100%;
//   object-fit: cover;
//   aspect-ratio: 16/9;
//   @media (max-width: 768px) {
//     aspect-ratio: 3/4;
//     object-fit: cover;
//     height: 100%;
//   }
// }
</style>
