<template lang="pug">
  main.rule
    .rule__container
      h1.rule__container__title あそびかた
      p.rule__container__text {{ text }}
</template>

<script lang="ts">
import Vue from 'vue'
interface Data {
  text: string
}
export default Vue.extend({
  data (): Data {
    return {
      text: 'これは、現れるキャラクターに、その人のセンスで特徴を捉えた名前を付け、全員で共有し、以降もし同じものが現れたらその名前をいち早く叫んでし、以降もし同じものが現れたらその、いち早く名前を叫んだキャラクターの数を競うゲームです。おかしな名前を付けたり、最初のうちに「簡単」と侮っていたら途中でまったく思い出せなくなったりと、笑いが絶えずに盛り上がります。'
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 568px;
$header-height: 100px;
.rule {
  padding: $header-height 0;
  min-height: $height;
  height: 100vh;
  background-color: #fff;
  transition: background-color 1s;
  &__container {
    margin: 0 auto;
    width: 80%;
    max-width: 1264px;
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
    &__title {
      text-align: center;
      margin: 0 0 60px 0;
    }
  }
}
.container.dark {
  .rule {
    background-color: #000;
    color: #fff;
  }
}
</style>
