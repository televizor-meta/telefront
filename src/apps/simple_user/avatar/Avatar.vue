<template>
      <div :class="{
            'avatar__bg': true,
            'avatar__bg__m': size === 'm',
            'avatar__bg__xl': size === 'xl',
           }">
        <img class="rotate ghost" :src="require('../../../assets/images/Ellipse 1.svg')" alt="">
        <div id="avatar">
          <img :src="require(`../../../assets/images/avatars/boy/sprite${this.animationState}.png`)"  alt="ghost">
        </div>
      </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    size: {
      type: String,
      default: 'm',
    },
  },
  data(){
    return{
      polling: null,
      animationState: 2,
    }
  },
  methods: {
        tickAnimation () {

            this.polling = setInterval(() => {
                if (this.animationState < 20){
                  if (this.animationState === 12){
                    this.animationState += 2
                    clearInterval(this.polling)
                    setTimeout(this.tickAnimation, 1600)
                  }else if (this.animationState === 19){
                    this.animationState += 1
                    clearInterval(this.polling)
                    setTimeout(this.tickAnimation, 400)
                  }
                  else {
                    this.animationState += 1
                  }
                } else {
                  this.animationState = 2
                }
            }, 150)
        }
    },
  beforeDestroy () {
      clearInterval(this.polling)
  },
  created () {
      this.tickAnimation()
  }
}
</script>

<style >
</style>