<script>
import AdminNav from '@/components/AdminNav.vue'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {}
  },
  components: {
    AdminNav
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      // defaults 每次都會帶入
      this.$http.defaults.headers.common.Authorization = token

      this.$http
        .post(`${VITE_APP_URL}/v2/api/user/check`)
        .then(() => {})
        .catch((err) => {
          if (!err.response.data.success) {
            this.$router.push('/logIn')
          }
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<template>
  <AdminNav></AdminNav>
  <RouterView />
</template>

<style lang="scss" scoped>
.navbar-toggler {
  border-color: white;
}
.navbar-toggler:focus {
  box-shadow: none;
}
</style>
