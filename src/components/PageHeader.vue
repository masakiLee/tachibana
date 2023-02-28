<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="header bg-dark">
    <RouterLink to="/" class="logo text-center py-3">
      <h1 class="logoName">
        TACHIBANA
        <p class="lesp font-monospace">SUSHI</p>
      </h1>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.logoName {
  font-family: "Permanent Marker";
  font-size: 24px;
}
.lesp {
  letter-spacing: 4px;
}
</style>
