<template lang="pug">
  client-only
    .character
      img(v-for="(image, index) in images" v-show="image===randomImg" :key="image" :src="image" :alt="'character' + index" width="300" height="300")
</template>

<script lang="ts">
import Vue from 'vue'
type Data = {
  images: string[]
}
export default Vue.extend({
  data (): Data {
    return {
      images: [
        require('@/assets/images/0.png'), require('@/assets/images/1.png'), require('@/assets/images/2.png'), require('@/assets/images/3.png'), require('@/assets/images/4.png'), require('@/assets/images/5.png'), require('@/assets/images/6.png'), require('@/assets/images/7.png'), require('@/assets/images/8.png'), require('@/assets/images/9.png')
      ]
    }
  },
  computed: {
    randomImg (): string {
      return this.images[this.getRandomNum(0, this.images.length - 1)]
    }
  },
  methods: {
    getRandomNum (min: number, max: number): number {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
})
</script>

<style lang="scss" scoped>
@keyframes showCharacter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.character {
  &>img {
    object-fit: contain;
    animation: showCharacter .5s linear 0s;
  }
}
</style>
