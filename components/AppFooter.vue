<template lang="pug">
  footer.footer
    input.footer__input_name(v-model="inputtedName" autofocus)
    button.footer__button.next(@click="moveOnNext") つぎへ
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
import { Character } from '~/models/Character'
interface Data {
  inputtedName: string
}
export default Vue.extend({
  data (): Data {
    return {
      inputtedName: ''
    }
  },
  computed: {
    maxNumber () {
      return charactersStore.characters.length
    },
    counter (): number {
      return charactersStore.counter
    },
    currentNumber (): number {
      return charactersStore.currentNumber
    },
    currentCharacter (): Character | undefined {
      return charactersStore.characters.find((character: Character) => character.id - 1 === this.currentNumber)
    }
  },
  methods: {
    moveOnNext (): void {
      this.addName()
      this.commitRandomNumber()
      this.incrementCounter()
      this.inputtedName = ''
    },
    commitRandomNumber (): void {
      const min: number = 0
      const max: number = this.maxNumber
      const randomNum = Math.floor(Math.random() * (max - min)) + min
      charactersStore.commitRandomNumber(randomNum)
    },
    addName (): void {
      charactersStore.addName({
        id: this.counter,
        imageId: this.currentNumber,
        name: this.inputtedName
      })
    },
    incrementCounter (): void {
      charactersStore.incrementCounter()
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 100px;
.footer {
  width: 100%;
  height: $height;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  &__input_name {
    margin: 0 5px 0 0;
    height: $height*2/3;
    font-size: 18px;
    padding: 0 15px;
  }
  &__button.next {
    background-color: #333;
    color: #fff;
  }
  &__button {
    height: $height*2/3;
    font-size: 16px;
    padding: 0 15px;
    border: #000 1px solid;
    border-radius: 5px;
  }
  &__button:hover {
    cursor: pointer;
  }
}
</style>
