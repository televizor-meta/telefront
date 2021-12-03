<template>
  <div class="avatar d-flex justify-content-around align-items-center">
    <div class="avatar__container d-flex justify-content-between">
      <div class="avatar__point">

      </div>
      <div class="avatar__comments">
        <div class="avatar__comments__bg d-flex align-items-center">
          <ul>
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
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Avatar"
}
</script>

<style scoped>

</style>