<template lang="pug">
  footer.footer
    .footer__container.footer_otherpage(v-if="!$route.name.includes('index')")
      .footer_aftergame__button.footer__button(@click="resetAll") {{ back }}
    .footer__container.footer_beforegame(v-else-if="counter<=0")
      .footer_beforegame__button.footer__button(@click="showRule") {{ rule }}
      .footer_beforegame__button.footer__button(@click="startGame") {{ start }}
    .footer__container.footer_aftergame(v-else-if="remainingCount<=0")
      .footer_aftergame__button.footer__button(@click="showResult") {{ result }}
    .footer__container.footer_game(v-else)
      input.footer_game__input_name(v-model="inputtedName" @keydown.self.prevent.enter="moveOnNext" :placeholder="enterName" autofocus)
      .footer_game__button.footer__button(@click="moveOnNext" :class="{unenable: !validateName}") {{ next }}
    p.footer__copyright &#169;sugiyamatoshiki
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
import { Character } from '~/models/Character'
import { InputtedCharacterData } from '~/models/InputtedCharacterData'
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
    back (): string { return this.$tc('APP_FOOTER_BACK').toUpperCase() },
    rule (): string { return this.$tc('APP_FOOTER_RULE').toUpperCase() },
    start (): string { return this.$tc('APP_FOOTER_START').toUpperCase() },
    result (): string { return this.$tc('APP_FOOTER_RESULT').toUpperCase() },
    enterName (): string { return this.$tc('APP_FOOTER_ENTERNAME') },
    next (): string { return this.$tc('APP_FOOTER_NEXT').toUpperCase() },
    maxNumber (): number {
      return charactersStore.characters.length
    },
    remainingCount (): number {
      return charactersStore.remainingCount
    },
    counter (): number {
      return charactersStore.counter
    },
    currentNumber (): number {
      return charactersStore.currentNumber
    },
    currentCharacter (): Character | undefined {
      return charactersStore.characters.find((character: Character) => character.id - 1 === this.currentNumber)
    },
    erratumStatus (): number {
      if (this.namedCharacter) {
        if (this.namedCharacter.name === this.inputtedName) {
          return 1
        }
        return 2
      }
      return 0
    },
    inputtedCharacterData (): InputtedCharacterData[] {
      return charactersStore.inputtedCharacterData
    },
    namedCharacter (): InputtedCharacterData | undefined {
      return this.inputtedCharacterData.find(item => item.imageId === this.currentNumber)
    },
    validateName (): boolean {
      const isValid = /^.{1,10}$/.test(this.inputtedName)
      return isValid
    }
  },
  methods: {
    resetAll () {
      if (this.$i18n.locale === 'en') {
        this.$router.push('/en/')
      } else {
        this.$router.push('/')
      }
      charactersStore.resetCounter()
      charactersStore.resetRemainingCount()
      setTimeout(charactersStore.resetName, 800)
    },
    showResult (): void {
      if (this.$i18n.locale === 'en') {
        this.$router.push('/en/result')
      } else {
        this.$router.push('/result')
      }
    },
    showRule (): void {
      if (this.$i18n.locale === 'en') {
        this.$router.push('/en/rule')
      } else {
        this.$router.push('/rule')
      }
    },
    startGame (): void {
      this.commitRandomNumber()
      this.incrementCounter()
      this.inputtedName = ''
    },
    moveOnNext (): void {
      if (this.validateName) {
        this.addCharacterData()
        this.judgeResult()
        setTimeout(this.resetResult, 1000)
        if (charactersStore.judgment !== 0) {
          setTimeout(this.calculateCount, 1000)
          setTimeout(this.incrementCounter, 1000)
          setTimeout(this.commitRandomNumber, 1000)
        } else {
          this.calculateCount()
          this.incrementCounter()
          this.commitRandomNumber()
        }
        this.inputtedName = ''
      }
    },
    commitRandomNumber (): void {
      const min: number = 0
      const max: number = this.maxNumber
      const randomNum = Math.floor(Math.random() * (max - min)) + min
      charactersStore.commitRandomNumber(randomNum)
    },
    addCharacterData (): void {
      charactersStore.addCharacterData({
        id: this.counter,
        imageId: this.currentNumber,
        name: this.inputtedName,
        erratum: this.erratumStatus
      })
    },
    judgeResult (): void {
      charactersStore.judgeResult()
    },
    resetResult (): void {
      charactersStore.resetJudgment()
    },
    incrementCounter (): void {
      charactersStore.incrementCounter()
    },
    calculateCount (): void {
      charactersStore.calculateCount()
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
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 2;
  background-color: #fff;
  transition: background-color 1s;
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
  &_otherpage {
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
      @media screen and (max-width: 600px) {
        width: 80%;
      }
    }
    &__button {
      width: 20%;
      @media screen and (max-width: 600px) {
        width: 30%;
      }
    }
    &__button.unenable {
      opacity: 0.3;
    }
    &__button.unenable:hover {
      cursor: default;
    }
  }
  &_aftergame {
    &__button {
      width: 100%;
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
    user-select: none;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
  &__button:hover {
    background-color: #333;
  }
  &__copyright {
    font-size: 12px;
    color: #000;
    padding: 10px 0 0;
    @media screen and (max-width: 600px) {
      font-size: 8px;
      padding: 5px 0 0;
    }
  }
}
.container.dark {
  .footer {
    background-color: #000;
    &__button {
      border: #fff 1px solid;
    }
    &__copyright {
      color: #fff;
    }
  }
}
</style>
