<template>
  <div class="media">
    <div class="filters">
        <div class="btn-group">

          <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
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

          <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown2" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
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
        <div v-for="image in images">
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
  data(){
    return {
      images: [
        'image1.png',
        'image 2.png',
        'image 3.png',
        'image 4.png',
        'image 5.png',
        'image1.png',
        'image 2.png',
        'image 3.png',
        'image 4.png',
        'image 5.png',
        'image 5.png',
      ]
    }
  }
}
</script>

<style scoped>

</style>