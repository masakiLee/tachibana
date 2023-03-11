<script>
export default {
  data() {
    return {
      aboutPicture: [
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678511041956.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=U0GDqGv%2FVwuckKDo1eL06P3iWRAzh8wzK995vqorx2KEi0AJM2NTxpyYWDY%2FiSH%2B%2F%2FW1HR%2B4%2FSaGlYbWWxd4mWMTI79xs%2BiW2dzS3F6vA88A7BRBnv8HYds7dOgF8ZSIrl3f8DsU0bB0Sb9PlNlzQOzbPdn2FdMO5FWpBbyvJbbFBGFH%2BQ1XJsTzjyFikDCn5UFmwGeSNwSO7aB0pDDX2trYlVm65vmuAaMxz425qactnwfAtiob9nR%2BSxezo9oRwxnzzv5tyPaJkan73XS3ogGAnNwFrhwsMNRJ%2BAmscA%2BggkRbdqD5OSmuIJwLarLRHAyNv%2B1q2k3zSKFkJSjRGw%3D%3D",
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678511044684.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qVosoYDCUamePTFfJMGejQTeVBg%2Bv8qte90Y7Rk716Xuwn%2F0GB9fWT%2BsX7evuu7Y8iJDK9sRVH%2BbYM2xHXOmoIJpkwWNeKAPmRyShH3szPFPskyJX9zF4Znqd63snYZQy83qVuKgXHDqa%2BdBTodszf27%2BFw%2FeGkVALdEM9EqL6%2FotbOX8lNAm0POgK1CpGMeqCcWFEHoJGyBbl%2F7wjgyG5d%2FIGn1VRSBza2gpG4uBz2WqRsr0LUPaNyquod5jkhMmHgPu332bdhakpmjVFo3aQFDY9L3vqOABVd3dYKjaVCuB8nZKDoPdwfoNGH4gl36%2FzgxsCZmi%2F6HeQ9XSjcmkw%3D%3D",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678511047327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NUTsUtibFOiiWx486hNT82GmiRMMV3GNNIUTkf33IGaswNki6k6j83shyvVheWgYtKfpCG%2FX3jP13Xt92FA5DR9%2BPxJZjDKi0hqmyTfa9ae0Eh13z%2BeiUQqHb%2BP84PXbvFMgeMz%2F7vHVBjXIV4u9%2BxTSOJMJc0Mbd%2F%2F7AKGHUiNMeHd9rspMKD1O8t6CsV2CAqa8esAgyr1KUuxZ9K%2BCXzP06GapNlZEWadbNK2iCweO%2BjH5Ov3ZRMt6JObV7v4LxI6HxFK7Gyct6NZw0wzXK08g3wWEa5Oa854C6pJ6%2BymW0qhfZ1L1J2R8rl6DVrd5IXIYqKu6MGv5CboETMmktA%3D%3D",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678511050016.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KxdNhgY%2BwN2XXpLBxPZNxFULTXAq%2BB5UVOMrNlcE7j5oAdm4KOXqaw2tDQejQTb45cAjKCb6sAPeomIgfPbwVNfqcfDYzs42DzXic0gpmX4ro7QneTv4Ce6qXk6FPjbKAJipFGnHlszVX7pHYliyB3zsFP1cxFvCG%2BU0ylfznVlIsBy8VyZ3L9tvjiNpzK0i4TQozo2i5hFnEZ%2BrL38aQgqP3WBoNJNd3wRC5z1Ut%2BEdZeFwQ%2BX2tNtF1NKxNVo3HPwvsakcuRzua6BMNC3hZwvwdWJalOoX1xJvYQoz%2BmT%2BZbi0CeOJS5YXDAkZCcdqDqgHyyBTUHt7yR3LcATuwg%3D%3D",
          bsClass: "d-none d-md-block",
        },
        {
          imageUrl:
            "https://storage.googleapis.com/vue-course-api.appspot.com/tachibanazushi/1678511053197.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nRUaDCMg%2B%2Fhdv2aHOQUmFcPMhqhwgxRlCyEzlWVDMK5p3ENV%2Byz10E9vFi9dqEjLYIJ%2Bbfw3kDAWknF8d2RhH3dDoefpWE0IZyNsPKg2PEbIcJoG6%2FsXh88ayyYUqMWi5RzoXyPzAVYY%2FKRtRT%2BPT8y1poS2rAyVgp6BHPo%2FqEn50xKAQ8hf1LEzWDmxeC0SDvMANzYjiNZRN%2B5PPk8L37%2FqGEta0dHU0Nj34xhUEIxxf5U%2B04upxrrpwiPf%2Fk9RPJd0Sr5WwmxiXaCOZ3YYVpON103nOBrGM72KAv9X3a4FlBYqsh57OsG%2F3S77QJHynumaWZILZlhLyaJLClVZEA%3D%3D",
          bsClass: "d-none d-md-block",
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <section class="section-about bg-darkTwo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-8 pt-md-10 pb-0 pb-md-10">
          <div class="d-flex aboutSticky">
            <h2
              class="about-tips border border-3 border-primary p-3 bg-dark align-self-start"
            >
              橘鮨理念
            </h2>
            <h3 class="about-text mt-7 mt-md-9 ms-4 ms-md-8">
              選用新鮮食材 最適合的調理方式 並以精美刀工 盛裝的器皿融合色彩
              平衡呈現於盤上 享用美食同時 欣賞到精緻的藝術品
            </h3>
          </div>
        </div>
        <div class="col-md-8 pb-6 pb-md-0">
          <ul class="aboutPictureList">
            <li
              v-for="aboutPicture in aboutPicture"
              :key="aboutPicture.imageUrl"
              :class="aboutPicture.bsClass"
            >
              <img
                :src="aboutPicture.imageUrl"
                alt="aboutPicture"
                class="aboutPicture"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.aboutSticky {
  position: sticky;
  top: 80px;
}
.about-tips {
  writing-mode: vertical-lr;
}
.about-text {
  word-break: keep-all;
  line-height: 64px;
  letter-spacing: 12px;
  @media (max-width: 768px) {
    line-height: 48px;
    letter-spacing: 8px;
  }
}
.aboutPicture {
  aspect-ratio: 367/231;
  object-fit: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 3px 6px #000000;
}
.aboutPictureList {
  position: relative;
  border-left: 3px solid #1b1b1b;
  border-right: 3px solid #1b1b1b;
  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background-color: #1b1b1b;
    position: absolute;
    top: 0;
    left: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }
}
li {
  width: 50%;
  padding: 240px 0;
  transition: 1s ease-in;
  &:nth-child(odd) {
    margin-left: auto;
    @media (max-width: 576px) {
      padding: 0 0 24px 0;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 24px 0;
  }
  &:hover {
    width: 100%;
  }
}
</style>
