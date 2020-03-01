<template lang="pug">
  main.result
    .result__container
      h1.result__container__title 結果発表
      .result__container__content
        h2.result__container__content__point {{ resultPoint }} 点
        table.result__table
          tr
            th.result__table__id
            th.result__table__name 名前
            th.result__table__correct 正解
            th.result__table__judge 判定
          tr(v-for="data in inputtedCharacterData" :key="data.id")
            td.result__table__id {{ data.id }}
            td.result__table__name {{ data.name }}
            td.result__table__correct {{ data.erratum === 0 ? '' : showCorrectName(data.imageId) }}
            td.result__table__judge {{ data.erratum === 0 ? '' : data.erratum === 1 ? '○' : '×' }}
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
import { InputtedCharacterData } from '~/models/InputtedCharacterData'
export default Vue.extend({
  computed: {
    inputtedCharacterData (): InputtedCharacterData[] {
      return charactersStore.inputtedCharacterData
    },
    judgedCharacterData (): InputtedCharacterData[] {
      return this.inputtedCharacterData.filter((item) => {
        return item.erratum === 1 || item.erratum === 2
      })
    },
    resultPoint (): number {
      if (this.judgedCharacterData.length) {
        const denominator: number = this.judgedCharacterData.filter(item => item.erratum === 1).length
        return denominator / this.judgedCharacterData.length * 100
      }
      return 0
    }
  },
  methods: {
    showCorrectName (imageId: number): string {
      const data: InputtedCharacterData | undefined = this.inputtedCharacterData.find(item => item.imageId === imageId)
      if (data !== undefined) {
        return data.name
      }
      return ''
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 568px;
$header-height: 100px;
.result {
  padding: $header-height 0;
  min-height: $height;
  height: 100vh;
  background-color: #fff;
  transition: background-color 1s;
  overflow-y: scroll;
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
    &__content {
      &__point {
        text-align: center;
        font-size: 50px;
        margin: 0 0 80px;
      }
      table {
        width: 100%;
        tr {
          width: 100%;
          th {
            text-align: center;
            width: 30%;
            padding: 0 0 30px;
            font-size: 20px;
          }
          th.result__table__id {
            width: 10%;
          }
          td {
            text-align: center;
            padding: 10px 0;
            font-size: 18px;
          }
        }
      }
    }
  }
}
.container.dark {
  .result {
    background-color: #000;
    color: #fff;
  }
}
</style>
