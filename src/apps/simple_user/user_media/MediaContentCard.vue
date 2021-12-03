<template>
  <div class="media__card">
    <div class="media__card__image">
      <img :src="require(`@/assets/images/photos/${imageLink}`)" :alt="title">
    </div>
    <div class="media__card__title">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaContentCard",
  props: {
    imageLink: {
      type: String,
    },
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>