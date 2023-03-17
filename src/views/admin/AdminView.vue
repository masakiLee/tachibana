<script>
import AdminNav from "../../components/AdminNav.vue";
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {};
  },
  components: {
    AdminNav,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)LoginToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.$http
      .post(`${VITE_APP_URL}v2/api/user/check`)
      .then(() => {})
      .catch(() => {});
  },
};
</script>

<template>
  <AdminNav></AdminNav>
  <RouterView></RouterView>
</template>

<style lang="scss" scoped>
.navbar-toggler {
  border-color: white;
}
.navbar-toggler:focus {
  box-shadow: none;
}
</style>
