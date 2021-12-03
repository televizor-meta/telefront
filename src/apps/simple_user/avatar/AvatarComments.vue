<template>

  <div class="d-flex justify-content-around align-items-center gappy">
    <div class="back_button">
        <router-link to="/">
          <img :src="require('@/assets/images/back.svg')" alt="back">
        </router-link>
      </div>
      <avatar size="m"></avatar>
      <div class="ugly_border comments" >
        <div class="ugly_border__bg d-flex align-items-center">
          <ul v-if="reportType === 'text'">
            <li>
                Позитивные упоминания 90%
            </li>
            <li>Негативные упоминания 5%</li>
            <li>Нейтральные упоминания 5%</li>
            <br>
            <li>Позитивные ответы 50%</li>
            <li>Негативные ответы 0%</li>
            <li>Нейтральные ответы 50%</li>
          </ul>
          <div class="comments__report" v-else-if="reportType === 'report'">
            <img :src="require('@/assets/images/report.svg')" alt="report">
          </div>
        </div>
        <div class="stats_type_icon text">
          <input type="radio" value="text" id="stats_type_text" v-model="reportType">
          <label class="text" for="stats_type_text" ></label>
        </div>
        <div class="stats_type_icon report">
          <input type="radio" v-model="reportType" value="report" id="stats_type_report" >
          <label  class="stats" for="stats_type_report"></label>
        </div>
      </div>
  </div>
</template>

<script>
import Avatar from "@/apps/simple_user/avatar/Avatar";

export default {
  name: "AvatarComments",
  components: {Avatar},
  data(){
    return {
      reportType: 'text'
    }
  }
}
</script>

<style scoped>

</style>