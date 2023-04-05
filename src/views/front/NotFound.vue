<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  data () {
    return {
      second: 5,
      intervalId: null
    }
  },
  components: {
    PageHeader
  },
  mounted () {
    this.intervalId = setInterval(() => {
      this.second--
      if (this.second === 0) {
        clearInterval(this.intervalId)
        this.$router.push('/')
      }
    }, 1000)
  }
}
</script>

<template>
  <PageHeader></PageHeader>
  <div
    class="bg-darkTwo py-10 notFount d-flex justify-content-center align-items-center"
  >
    <div class="">
      <img src="../../assets/image/404-4.svg" alt="" />
      <p class="text-center">
        畫面倒數
        <span class="text-primary second">{{ second }}</span> 秒跳回首頁
      </p>
    </div>
  </div>
</template>

<style>
.notFount {
  min-height: 100vh;
}

.second {
  font-size: 24px;
}
</style>
