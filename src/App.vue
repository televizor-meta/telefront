<template>
  <div id="app" class="bg-dark">
    <navbar v-if="isAuth"/>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/apps/navbar/Navbar";
import store from "@/store";
export default {
  components: {
    Navbar,
  },
  computed:{
   isAuth(){
     return store.getters.isAuthenticated
   }
  }
};
</script>

<style lang="scss">
  @import 'assets/styles/custom';

</style>
<style lang="sass">
    @import "assets/styles/main.sass"
</style>
