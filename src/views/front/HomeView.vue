<script>
import HomeBanner from "../../components/HomeBanner.vue";
import HomeArticles from "../../components/HomeArticles.vue";
import HomeAbout from "../../components/HomeAbout.vue";
import HomeMenu from "../../components/HomeMenu.vue";
import HomeFQA from "../../components/HomeFQA.vue";

export default {
  data() {
    return {};
  },
  components: {
    HomeBanner,
    HomeArticles,
    HomeAbout,
    HomeMenu,
    HomeFQA,
  },
  mounted() {},
};
</script>

<template>
  <HomeBanner></HomeBanner>
  <main>
    <HomeArticles></HomeArticles>
    <HomeAbout></HomeAbout>
    <HomeMenu></HomeMenu>
    <HomeFQA></HomeFQA>
  </main>
</template>
