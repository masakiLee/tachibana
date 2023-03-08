<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <section class="section-menu bg-dark py-10 position-relative">
    <div class="menuOne position-absolute">
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677516977976.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y0FW%2FqduvRzjwrD3Z9oQG74XyfyoPw1dkSFEa51gfzw5ACaA5mYmWJA7z3LlAo7b9MZ7jGtMJAxG1N1hvAW1WmUZIziVVrNX2QJz5o3QNRjlBibWy5zFxN72clvObygyyxGDwHqH2Lo3Lug2jnPdm4APYTyrcPQnBH88LwC8%2BrmuJcMN87xeSHtKqjQUtkPU0Kw8tJLWhIqkNVpWW1tr58uBmYzkI5ldGmAwFRTpVMpsY2MUFdBOBh1X%2FzNYJLKY2uWGwmXXxlv%2FlVbrDMYDzONuIv7kyuKJV6wwlUSg1e76OI%2FFmnjXyJrvhV6n49MD0uyA7Gu08adlAeqNr0KjKg%3D%3D"
        alt=""
        class="d-none d-md-block"
      />
    </div>
    <div
      class="menuTwo position-absolute"
      data-aos="fade-left"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677516950936.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Niqaa7ap9pXMICUi0bnxZJw8q9fgUc7zvaO0xU9S%2FzvGg8sqqxNOC3aLgy6R8R7Noq0LHCjVkj6C8Nl1Ed37Y3TbsxNJwFFxRbAH8RslHGNII0BO0mnHv8uWszRni2IU4AP0SB1fWoE0yhCNz1aXUoWhlmAkApam%2Bxx9Ig2vpVo5RNjauCmCH5u9c6Nz6NISO1zdAh%2Fab%2BDE9ppIHCXzMxJOAyJdoOrqce5ubPxO8VKo1Ws3tjoBzqhSIh0ufMXXx90PuNjYC%2FhEgq1zK0aJHAFMh2P4rc89LpbsgLRjXkmlJL8jH3RImA0kYDWc1mtR6McMWDa7lKmMk9pWq95KFA%3D%3D"
        alt=""
        class=""
      />
    </div>
    <div
      class="menuThree position-absolute"
      data-aos="fade-right"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1677516920535.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3E8nc6AdWbneEj4jFt9Coczq3H10ypH2dlnZuiIzpTin09ZOHbRiORUq1v%2FMKA9DRS98%2FQjv59QQH%2Fjl2aIfdy5yX18hxIb1vjiZHmvMb3d%2Fyz%2BEajU535LQ3%2FGOU7l%2BnyOtH74MnVr%2Fl3dkQfcldE0UJKeo8SNUhWr8jNdaz1VLTccf6t%2FKLPJOeFnbAY%2FYRR%2BMejeUX0YwKZqfNyo2amhDs3RzTOqQsJrXXF1z5aaKxKWlgMM2Kh4savqrTGvAGt1QVq77ym%2B5NTBe2KP38bOYDyrbQnvfuQK%2BRCBLWXGUIOI9SCdQ5%2FAIo2U%2BI7fYHy%2B2insS419nHxE37LOyg%3D%3D"
        alt=""
        class=""
      />
    </div>
    <div class="container">
      <div class="border border-3 border-white py-10 px-6 px-md-10 bg-darkTwo">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <h2
              class="menu-tips border border-3 border-primary p-3 bg-dark mx-auto"
            >
              美味菜單
            </h2>
            <h3 class="menu-text text-center py-8">
              橘鮨提供美味的季節性魚類 搭配蔬菜和肉類 永遠都有驚喜
            </h3>
            <RouterLink
              to="/products"
              type="button"
              class="btn btn-outline-primary menu-btn d-block mx-auto btn-lg"
            >
              即刻品嘗
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-menu {
  overflow: hidden;
}
.menuOne {
  width: 124px;
  height: 124px;
  right: 16%;
  top: 120px;
}
.menuTwo {
  width: 520px;
  height: 200px;
  right: 0;
  bottom: 24%;
  @media (max-width: 1200px) {
    width: 460px;
    height: 80px;
    bottom: 32%;
  }
  @media (max-width: 992px) {
    width: 220px;
    height: 80px;
    bottom: 12%;
  }
}
.menuThree {
  width: 560px;
  height: 320px;
  left: 0;
  top: 18%;
  @media (max-width: 1200px) {
    width: 460px;
    height: 80px;
    top: 22%;
  }
  @media (max-width: 992px) {
    width: 240px;
    height: 80px;
    top: 10%;
  }
}
.menu-tips {
  writing-mode: vertical-lr;
}
.menu-text {
  word-break: keep-all;
  line-height: 36px;
}
.menu-btn {
  font-size: 24px;
  color: white;
  @media (max-width: 992px) {
    font-size: 20px;
  }
}
</style>
