<template>
  <div class="media">
    <div class="filters">
      <div class="btn-group">

        <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
                data-bs-auto-close="true" aria-expanded="false">
          <!--            <img :src="require('@/assets/images/filter.svg')" alt="" width="30" height="24" class="d-inline-block align-text-top">-->
          Сортировка
        </button>
        <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
          <li><a class="dropdown-item" href="#">По популярности</a></li>
          <li><a class="dropdown-item" href="#">По дате</a></li>
          <li><a class="dropdown-item" href="#">Названию</a></li>
        </ul>
      </div>
      <div class="btn-group">

        <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown2" data-bs-toggle="dropdown"
                data-bs-auto-close="true" aria-expanded="false">
          <!--            <img :src="require('@/assets/images/filter.svg')" alt="" width="30" height="24" class="d-inline-block align-text-top">-->
          Источники
        </button>
        <ul class="dropdown-menu" aria-labelledby="defaultDropdown2">
          <li><a class="dropdown-item" href="#">vk.com</a></li>
          <li><a class="dropdown-item" href="#">facebook.com</a></li>
          <li><a class="dropdown-item" href="#">instagram.com</a></li>
        </ul>
      </div>
    </div>
    <div class="media__container  justify-content-between d-flex flex-wrap">
      <div class="media_block" v-for="image in images">
        <media-content-card :image-link="image" title="https://www.instagram.com/p/CW_-iSvtxgX/"></media-content-card>
      </div>
    </div>


  </div>
</template>
<script>
import MediaContentCard from "@/apps/simple_user/user_media/MediaContentCard";

export default {
  components: {MediaContentCard},
  name: "UserMedia",
  data() {
    return {
      images: [
        "-19-05-2021-174332.jpg",
        "83fdfbfd1cddb68119527831ad2d2bb7.png",
        "scale_1200.png",
        "1502518352_tin01.jpg",
        "850549-tinkov-prodaet-banka.jpg",
        "tin'kov.jpg",
        "21ec85b23773b1b680352a1cf0074de9.jpeg ",
        "a8c787a7c6e2af0636f22e98837e9413_ce_2046x1364x66x144_cropped_1332x888.jpg trg46h4.jpg",
        "755078329004371.jpg ", "eyItMjJduHFr.jpg",
        "7556198793984281.jpeg", " scale_1200 (1).png"
      ]
    }
  }
}
</script>

<style scoped>

</style>