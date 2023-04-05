<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default {
  data () {
    return {
      navbarList: ''
    }
  },
  methods: {
    logout () {
      document.cookie = `LoginToken=;expires=${new Date()};`
      this.$router.push('/logIn')
    },
    navChange () {
      this.navbarList.toggle()
    },
    closeNav () {
      this.navbarList.hide()
    }
  },
  components: {},
  mounted () {
    this.navbarList = new bootstrap.Collapse(this.$refs.navbarList, {
      toggle: false
    })
  }
}
</script>

<template>
  <div class="bg-dark">
    <nav class="navbar navbar-expand-lg navbar-light bg-darkTwo">
      <div class="container-fluid">
        <routerLink to="/admin/index" class="py-2">TACHIBANA SUSHI</routerLink>
        <button
          class="navbar-toggler collapsed"
          type="button"
          @click="navChange ()"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" ref="navbarList">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <routerLink to="/admin/products" class="text-white nav-link" @click="closeNav () "
                >商品</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/article" class="text-white nav-link" @click="closeNav () "
                >文章</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/order" class="text-white nav-link" @click="closeNav () "
                >訂單</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink to="/admin/coupon" class="text-white nav-link" @click="closeNav () "
                >優惠券</routerLink
              >
            </li>
            <button
              type="button"
              class="btn btn-danger text-white"
              @click="logout"
            >
              退出後台
            </button>
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
