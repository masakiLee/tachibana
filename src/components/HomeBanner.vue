<script>
export default {
  data () {
    return {
      banner: [
        {
          images:
            'https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678510198469.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GF0x6Xi2trLIvORUJtOaGK8mdUlrMZF9KOdUl9MD21x28hTNYX8fu4CfPFK3KPtRT3B4eRljwcHDBH7VkTN7Xjpa%2Fmaos%2Fxk4Ir0MPbNQKLxVciwPh%2BbRqOQO5MTr%2FvzyfkK%2FjfuWmXMT3AaeWvC2FfJ4Aqw6NghWrPSvQTYiapFNUYgjw6ORQac9SMUrwWxnvBpQIhe3qBksBTlFJmkR3xSWcQiazeWE5wQdFCAgzqF%2BK8PTUhLU13bQffLNIzvZjgY%2BlK4HYOoBc9%2B75ZV0eyQrpLF7ypMOpOmAvvVFh2wcFg11rDvv%2B0dIO7LC%2FFSciMllE%2BjCl9eHv6Z7%2Fkhzw%3D%3D'
        },
        {
          images:
            'https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678510202850.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bR%2FHdxlPwfALjxgSoLT143%2BBEiRObHj0D1tyFYVRtG6YvpT4PY3SYTozWIJAEh%2Fh0n78H21xB%2FrU9x84sBJN9muoTksYaZfUmTsF0X2BDEme5T9uspy2Q1rTP1hBR2Lzr8mBE0Hsi7ZgTUOdkdG8OGs98ZvoCPhlpTV7F%2FaIoXJxYA4vtJCMTwFYivQwZOd346RfaKdyEgsYeMleZWvgoaISKCyAxgiDxcgu5OzMqOl2GJqI9E6M9iuS2F8e3UwKfv%2FgzBOD0uJYbBWryMSYApfgG%2Bl8iZ7BA8pyVWDQje%2FUTJqcI2J95MDJhivNsqdFHIVt42xQw9I9lZsE2XwGdA%3D%3D'
        },
        {
          images:
            'https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678510207252.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KUVme5uVwBk%2BmotgRtdT7d3lmBmtCcdtcT%2BD8hlIpsTjjBT5nljKsW4C3rv8F4samFbyZ0xSjlL%2BV693%2FNUypH9tbgD6zc8a4xm9693Doi4FR7zHHPTKMJi2kltDyNLDF2odZbodq6GumK%2F6resnl6eFWAe5czlSRosFlW6QxUi0how5KfuNn4PzUkf%2BZhVMdRjIbxCWt1ujH%2FWa7CWdc0RQhNqB%2Fxq8AlMQFHFDPQCbVLAnJ54EJDhx%2F7fFEKWFGPc2Pk5aWt0n%2BLpbCeFxhDqeQ45ic9wkL4eZFJAWgsHGyqfLIlEdalwLwh8U1AZZqDdCgWHeKCv7jyRRJ6aDHQ%3D%3D'
        },
        {
          images:
            'https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678510210705.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Hc2%2Fj4G68qEoPvqMvJuKYv%2F4McAh3VbUQcl6e6JUlp3sYHcTlYTD6Bwsxv4AEzQSt1B1vVRr5kbimcEVzEB2P78SYZDIQ6%2BXnBd0GPd8N%2BMchnohbk3v0fxcyKN3G3r2padAWPvaGMSJ6KlLZFqsDy9S2p6jdTNsIX9dzKrlpzGhE56SM5qRLOFhDYQe0Xb0NVmNt%2F3vJVCpHdV7UBnDw3lNTediz43dsyR5nv2t5rsvd1gQNt8a%2Bae9TNfnLUjp2W0gbM3PjrZtrNId21jE%2BbtU21dtv%2FBFtjUqB%2FGsL%2B7Rp%2BA%2Bwk5i2Kaxn60zlY5NWvaPXI4Ol5Kh2nSER4yj1A%3D%3D'
        }
      ]
    }
  },
  mounted () {}
}
</script>

<template>
  <div id="banner" class="banner">
    <div class="banner-logo" data-aos="fade-up" data-aos-duration="3000">
      <img
        src="../assets/image/logo.svg"
        alt="logo"
        class="logo-img mx-auto d-none d-md-block"
      />
      <img
        src="../assets/image/logo-sm.svg"
        alt="logo"
        class="logo-img mx-auto d-block d-md-none"
      />
      <h1>TACHIBANA</h1>
      <p class="logo-name">SUSHI</p>
      <RouterLink to="/products" type="button" class="click d-flex align-items-center justify-content-evenly border border-white border-3 p-2 mt-2">
        <img src="../assets/image/click.svg" alt="click">
        <p class="clickMenu">快來尋味，食指動</p>
      </RouterLink>
    </div>
    <div class="position-relative">
      <ul>
        <li
          class="position-absolute"
          v-for="banner in banner"
          :key="banner.images"
        >
          <img :src="banner.images" alt="bannerImg" class="banner-img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner,
.banner-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 768px) {
    aspect-ratio: 3/4;
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
  @media (max-width: 992px) {
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
  letter-spacing: 16px;
  padding-left: 16px;
  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 12px;
    letter-spacing: 8px;
    padding-left: 8px;
  }
}

ul > li{
  width: 100%;
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
.click {
  position: relative;
  transition: 0.5s;
  overflow: hidden;
}

.click > img {
  transition: transform 0.3s ease-in-out;
    @media (max-width: 992px) {
      width: 24px;
      height: 24px;
  }
}
.click:hover {
  color: white;
  transform: translateY(-4px);
}
.click::after {
  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 100%;
  background-color: rgba(255,255,255,0.1);
  transform: skewX(45deg) translateX(-135px);
  transition: 1s;
}
.click:hover::after{
  transform: skewX(45deg) translateX(320px)
}
.click:hover > img {
    transform: translateY(-4px);
}

.clickMenu {
  font-size: 24px;
    @media (max-width: 992px) {
    font-size: 12px;
  }
}
</style>
