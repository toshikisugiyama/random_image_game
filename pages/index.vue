<template lang="pug">
  main.main
    h1.main__title 名前をつけて早く呼ぶゲーム
    main-character
</template>

<script lang="ts">
import Vue from 'vue'
import MainCharacter from '@/components/MainCharacter.vue'
export default Vue.extend({
  components: {
    MainCharacter
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
    position: absolute;
    top: $header-height;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 0;
  }
}
</style>
