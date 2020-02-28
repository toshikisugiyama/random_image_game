<template lang="pug">
  client-only
    .character
      img(v-for="character in characters" v-show="character.image===currentCharacter" :key="character.id" :src="character.image" :alt="'character' + character.id" width="300" height="300")
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  computed: {
    characters () {
      return charactersStore.characters
    },
    currentNumber (): number {
      return charactersStore.currentNumber
    },
    currentCharacter (): string {
      return this.characters[this.currentNumber].image
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
