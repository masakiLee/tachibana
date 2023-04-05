<script>
import Swal from 'sweetalert2'
import { Field, Form, ErrorMessage } from 'vee-validate'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      this.$http
        .post(`${VITE_APP_URL}v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `LoginToken=${token};expires=${new Date(expired)};`
          Swal.fire({
            toast: true,
            title: '成功登入',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#F25C05'
          })
          this.$router.push('/admin/index')
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            title: `<span style="color: #ff0000"> ${err.response.data.message} </span> 帳號或密碼錯誤，請在重新輸入`,
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            background: '#F2ECDD',
            color: '#000000'
          })
        })
    }
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage
  },
  mounted () {

  }
}
</script>

<template>
  <div
    class="bg-dark dashBorad d-flex justify-content-center align-items-center"
  >
    <div class="logInBox container">
      <div class="row justify-content-center">
        <div class="col col-md-8 col-xl-6">
          <div class="logo text-center">
            <img
              src="../assets/image/logo.svg"
              alt=""
              class="mx-auto d-none d-lg-block"
            />
            <img
              src="../assets/image/logo-sm.svg"
              alt=""
              class="mx-auto d-block d-lg-none"
            />
            <h1>TACHIBANA</h1>
            <p class="subtitle">SUSHI</p>
          </div>
          <p class="back text-center bg-dark">後台管理系統</p>
          <VForm
            v-slot="{ errors }"
            @submit="logIn"
            class="row text-white py-3 justify-content-center"
          >
            <div class="col-12">
              <label for="email" class="form-label">信箱 </label>
              <VField
                id="email"
                name="email"
                type="email"
                v-model="user.username"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
              ></VField>
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="col-12 mt-4">
              <label for="password" class="form-label">密碼 </label>
              <VField
                id="password"
                name="password"
                type="password"
                v-model="user.password"
                class="form-control"
                :class="{ 'is-invalid': errors['password'] }"
                placeholder="請輸入密碼"
                rules="required|min:8"
              ></VField>
              <ErrorMessage
                name="password"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="col-12 mt-4">
              <button
                type="submit"
                class="btn btn-primary text-white d-block btn-lg w-100"
              >
                送出
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashBorad {
  background: url("../assets/image/bgImg.jpg") no-repeat center center;
  background-size: cover;
  min-height: 100vh;
}
.bgImg {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.back {
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.subtitle {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  letter-spacing: 1rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.form-control:focus{
  box-shadow: none;
}
</style>
