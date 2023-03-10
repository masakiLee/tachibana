<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="header bg-dark">
    <RouterLink to="/" class="logo text-center">
      <h1 class="logoName">TACHIBANA</h1>
      <p class="lesp">SUSHI</p>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  padding: 10px 0;
}
.logoName {
  font-family: "Permanent Marker";
  font-size: 28px;
  line-height: 36px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
}
.lesp {
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 4px;
  line-height: 24px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1;
  }
}
</style>
