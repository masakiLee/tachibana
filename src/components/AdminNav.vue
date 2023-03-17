<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {},
};
</script>

<template>
  <div class="bg-dark">
    <nav class="navbar navbar-expand-lg navbar-light bg-darkTwo">
      <div class="container-fluid">
        <routerLink to="/admin/index" class="py-2">TACHIBANA SUSHI</routerLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <routerLink to="/admin/products" class="text-white nav-link"
                >商品</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/article" class="text-white nav-link"
                >文章</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/order" class="text-white nav-link"
                >訂單</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/coupon" class="text-white nav-link"
                >優惠券</routerLink
              >
            </li>
            <RouterLink to="/logIn" class="my-auto">
              <button class="btn btn-primary text-white">
                退出後台
              </button></RouterLink
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar-toggler {
  border-color: white;
}
.navbar-toggler:focus {
  box-shadow: none;
}
</style>
