<template lang="pug">
  main.result
    .result__container
      h1.result__container__title {{ title }}
      .result__container__content
        h2.result__container__content__point {{ resultPoint + ' ' + point }}
        table.result__table
          tr
            th.result__table__id
            th.result__table__name {{ name }}
            th.result__table__correct {{ correct }}
            th.result__table__judge {{ judge }}
          tr(v-for="data in inputtedCharacterData" :key="data.id" :class="{correct: data.erratum===1, incorrect: data.erratum===2}")
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
    title (): string { return this.$tc('RESULT_TITLE').toUpperCase() },
    point (): string { return this.$tc('RESULT_POINT').toUpperCase() },
    name (): string { return this.$tc('RESULT_NAME').toUpperCase() },
    correct (): string { return this.$tc('RESULT_CORRECT').toUpperCase() },
    judge (): string { return this.$tc('RESULT_JUDGE').toUpperCase() },
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
        return Math.round(denominator / this.judgedCharacterData.length * 100)
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
      .result__table {
        width: 100%;
        margin: 0 0 60px;
        tr {
          width: 100%;
          th {
            text-align: center;
            width: 30%;
            padding: 0 0 30px;
            font-size: 30px;
            @media screen and (max-width: 600px) {
              font-size: 20px;
              padding: 0 0 20px;
            }
          }
          th.result__table__id {
            width: 10%;
          }
          td {
            text-align: center;
            padding: 10px 0;
            font-weight: bold;
            font-size: 25px;
            @media screen and (max-width: 600px) {
              font-size: 18px;
            }
          }
          td.result__table__judge {
            @media screen and (max-width: 600px) {
              font-size: 25px
            }
          }
        }
        tr.correct {
          &>td {
            color: #098487;
          }
        }
        tr.incorrect {
          &>td {
            color: #BC243C;
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
