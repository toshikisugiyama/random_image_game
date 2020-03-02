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
interface Data {
  title: string,
  introduction: string,
  lists: {
    id: number,
    text: string,
    src: string
  }[]
}
export default Vue.extend({
  data (): Data {
    return {
      title: 'あそびかた',
      introduction: '　これは、現れるキャラクターに特徴を捉えた名前を付け、以降同じものが現れたらその名前を答えるゲームです。おかしな名前を付けたり、最初のうちに「簡単」と侮っていたら途中でまったく思い出せなくなったりと、笑いが絶えずに盛り上がります。',
      lists: [
        {
          id: 1,
          text: 'スタートボタンをおす',
          src: require('@/assets/images/rule1.svg')
        },
        {
          id: 2,
          text: '現れるキャラクターに名前をつける',
          src: require('@/assets/images/rule2.svg')
        },
        {
          id: 3,
          text: '同じキャラクターが現れたら前につけた名前を答える',
          src: require('@/assets/images/rule3.svg')
        },
        {
          id: 4,
          text: '結果を確認！',
          src: require('@/assets/images/rule4.svg')
        }
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
