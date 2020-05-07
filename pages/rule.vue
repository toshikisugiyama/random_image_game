<template lang="pug">
  main.rule
    .rule__container
      h1.rule__container__title {{ title }}
      p.rule__container__introduction {{ introduction }}
      ol.rule__container__list
        li.rule__container__list__item(v-for="(list) in lists" :key="list.id") {{ list.text }}
          .rule__container__list__item__image
            img(:src="list.src" height="400px")
</template>

<script lang="ts">
import Vue from 'vue'
interface Lists {
  id: number,
  text: string,
  src: string
}
export default Vue.extend({
  computed: {
    title (): string { return this.$tc('RULE_TITLE').toUpperCase() },
    introduction (): string { return this.$tc('RULE_INTRODUCTION') },
    lists (): Lists[] {
      return [
        { id: 1, text: this.$tc('RULE_LIST1'), src: require('@/static/images/rule1.svg') },
        { id: 2, text: this.$tc('RULE_LIST2'), src: require('@/static/images/rule2.svg') },
        { id: 3, text: this.$tc('RULE_LIST3'), src: require('@/static/images/rule3.svg') },
        { id: 4, text: this.$tc('RULE_LIST4'), src: require('@/static/images/rule4.svg') }
      ]
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
  overflow-y: scroll;
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
    &__introduction {
      margin: 0 0 40px 0;
      text-align: justify;
    }
    &__list {
      margin: 0 0 60px 0;
      list-style-position: inside;
      padding: 0;
      &__item {
        margin: 0 0 30px;
        &__image {
          width: 100%;
          display: flex;
          justify-content: center;
          &>img {
            object-fit: contain;
            margin: 10px auto;
          }
        }
      }
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
