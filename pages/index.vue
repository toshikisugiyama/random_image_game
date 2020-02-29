<template lang="pug">
  main.main
    h1.main__title {{ mainTitle }}
    .main__symbol(v-if="counter<=0") ?
    main-character(v-else)
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
import MainCharacter from '@/components/MainCharacter.vue'
export default Vue.extend({
  components: {
    MainCharacter
  },
  computed: {
    counter (): number {
      return charactersStore.counter
    },
    mainTitle (): string {
      if (this.counter <= 0) {
        return '名前を早く呼ぶゲーム'
      }
      return '今' + this.counter + '回'
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
  &__symbol {
    height: 300px;
    width: 300px;
    font-size: 300px;
    line-height: 300px;
    content: '?';
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
