<template>
  <div class="avatar d-flex justify-content-around align-items-center">
      <div class="wheel_menu wheel_menu__1">
        <router-link to="/comments">Комментарии о тебе</router-link>
      </div>
      <div class="wheel_menu wheel_menu__2">
        <a href="">Твои комментарии</a>
      </div>
      <div class="wheel_menu wheel_menu__3">
        <a href="" class="gold">Мероприятия</a>
      </div>
      <avatar size="xl"></avatar>
      <div class="wheel_menu wheel_menu__4">
        <a href="">Мероприятия</a>
      </div>
      <div class="wheel_menu wheel_menu__5">
        <a href="">Публикации</a>
      </div>
      <div class="wheel_menu wheel_menu__6">
        <a href="" class="gold">Круг общения</a>
      </div>


  </div>
</template>

<script>
import Avatar from "./Avatar";

export default {
  name: "AvatarMenu",
  components: {Avatar}
}
</script>

<style scoped>

</style>