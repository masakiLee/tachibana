<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="header bg-dark">
    <RouterLink to="/" class="logo text-center py-1 py-md-3">
      <h1 class="logoName">TACHIBANA</h1>
      <p class="lesp">SUSHI</p>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.logoName {
  font-family: "Permanent Marker";
  font-size: 24px;
  line-height: 26px;
  @media (max-width: 576px) {
    font-size: 24px;
    line-height: 1.5;
  }
}
.lesp {
  letter-spacing: 4px;
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 1;
  }
}
</style>
