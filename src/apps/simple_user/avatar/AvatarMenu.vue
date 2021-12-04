<template>
  <div class="avatar d-flex justify-content-around align-items-center">
      <div class="wheel_menu wheel_menu__1">
        <router-link to="/comments">Комментарии о тебе</router-link>
      </div>
      <div class="wheel_menu wheel_menu__2">
        <router-link to="/empty/wheel">Твои комментарии</router-link>
      </div>
      <div class="wheel_menu wheel_menu__3">
        <router-link to="/empty/wheel" class="gold">Мероприятия</router-link>
      </div>
      <avatar size="xl"></avatar>
      <div class="wheel_menu wheel_menu__4">
        <router-link to="/empty/wheel">Мероприятия</router-link>
      </div>
      <div class="wheel_menu wheel_menu__5">
        <router-link to="/empty/wheel">Публикации</router-link>
      </div>
      <div class="wheel_menu wheel_menu__6">
        <router-link to="/empty/wheel" class="gold">Круг общения</router-link>
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