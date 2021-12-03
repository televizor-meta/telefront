<template>
      <div :class="{
            'avatar__bg': true,
            'avatar__bg__m': size === 'm',
            'avatar__bg__xl': size === 'xl'
           }">
        <img :src="require('../../../assets/images/Ellipse 1.svg')" alt="">
        <div id="avatar"></div>
      </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    size: {
      type: String,
      default: 'm'
    },
  },
}
</script>

<style scoped>

</style>