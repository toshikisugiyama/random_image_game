<template lang="pug">
  footer.footer
    .footer__container.footer_rule(v-if="$route.name==='rule'")
      .footer_rule__button.footer__button(@click="goToFront") もどる
    .footer__container.footer_beforegame(v-else-if="counter<=0")
      .footer_beforegame__button.footer__button(@click="showRule") あそびかた
      .footer_beforegame__button.footer__button(@click="startGame") スタート
    .footer__container.footer_game(v-else)
      input.footer_game__input_name(v-model="inputtedName" autofocus)
      .footer_game__button.footer__button(@click="moveOnNext") つぎへ
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
    goToFront (): void {
      this.$router.push('/')
      charactersStore.resetCounter()
    },
    showRule (): void {
      this.$router.push('/rule')
    },
    startGame (): void {
      this.commitRandomNumber()
      this.incrementCounter()
      this.inputtedName = ''
    },
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
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    max-width: 1264px;
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
  }
  &_rule {
    &__button {
      width: 100%;
    }
  }
  &_beforegame {
    justify-content: space-between;
    &__button {
      width: 48%;
    }
  }
  &_game {
    &__input_name {
      margin: 0 5px 0 0;
      height: $height*2/3;
      font-size: 18px;
      padding: 0 15px;
      width: 80%;
    }
    &__button {
      width: 20%;
    }
  }
  &__button {
    height: $height*2/3;
    color: #fff;
    background-color: #000;
    font-size: 20px;
    padding: 0 15px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 1s;
  }
  &__button:hover {
    cursor: pointer;
    background-color: #333;
  }
}
.container.dark {
  .footer {
    &__button {
      border: #fff 1px solid;
    }
  }
}
</style>
