<template lang="pug">
  main.main(:class="{'screen-fixed': isSetting}")
    h1.main__title {{ mainTitle }}
    .main__symbol.main__content(v-if="counter<=0") ?
    .main__finish.main__content(v-else-if="remainingCount<=0") {{ gameover }}
    .main__character(v-else)
      main-character
      main-judgment
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
import MainCharacter from '@/components/MainCharacter.vue'
import MainJudgment from '@/components/MainJudgment.vue'
export default Vue.extend({
  components: {
    MainCharacter,
    MainJudgment
  },
  computed: {
    counter (): number {
      return charactersStore.counter
    },
    remainingCount (): number {
      return charactersStore.remainingCount
    },
    mainTitle (): string {
      if (this.counter <= 0) {
        return this.$tc('MAIN_TITLE').toUpperCase()
      }
      if (this.remainingCount === 0) {
        return ''
      }
      if (this.$i18n.locale === 'ja') {
        return this.$tc('MAIN_MORE') + ' ' + this.remainingCount + ' ' + this.$tc('MAIN_TIMES')
      }
      if (this.remainingCount > 1) {
        return this.remainingCount + ' ' + (this.$tc('MAIN_TIMES') + 's' + ' ' + this.$tc('MAIN_MORE')).toUpperCase()
      }
      return this.remainingCount + ' ' + (this.$tc('MAIN_MORE') + ' ' + this.$tc('MAIN_TIMES')).toUpperCase()
    },
    gameover (): string { return this.$tc('MAIN_FINISH').toUpperCase() },
    isSetting (): boolean {
      return charactersStore.isSetting
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 568px;
$header-height: 100px;
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: $height;
  height: 100vh;
  background-color: #fff;
  transition: background-color 1s;
  &__title {
    font-size: 30px;
    position: absolute;
    top: $header-height;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 0;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
  &__content {
    height: 300px;
    line-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__symbol {
    font-size: 300px;
    width: 300px;
  }
  &__finish {
    font-size: 80px;
    width: 80%;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      font-size: 30px;
      width: 100%;
      padding: 0 10px;
    }
  }
}
.main.screen-fixed {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.container.dark {
  .main {
    background-color: #000;
    color: #fff;
  }
}
</style>
