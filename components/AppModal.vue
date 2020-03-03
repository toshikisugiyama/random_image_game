<template lang="pug">
transition(name="modal")
  .modal(v-if="isSetting")
    .modal__wrapper
      .modal__wrapper__container
        .modal__wrapper__container__item.title
          h1.title {{ title }}
        .modal__wrapper__container__item
          input(@blur="settedDefaultCount=$event.target.value" :value="defaultCount" :min="min" :max="max" type="number" autofocus)
          span {{ unit }}
        .modal__wrapper__container__item.buttons
          .modal__wrapper__container__item__button(@click="toggleSetting") {{ cancel }}
          .modal__wrapper__container__item__button(@click="validateDefaultCount(settedDefaultCount)") {{ okay }}
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
interface Data {
  title: string,
  settedDefaultCount: number,
  min: number,
  max: number,
  unit: string,
  cancel: string,
  okay: string
}
export default Vue.extend({
  data (): Data {
    return {
      title: '何回あそぶ？',
      settedDefaultCount: 10,
      min: 3,
      max: 100,
      unit: '回',
      cancel: 'キャンセル',
      okay: 'けってい'
    }
  },
  computed: {
    defaultCount (): number {
      return charactersStore.defaultCount
    },
    isSetting (): boolean {
      return charactersStore.isSetting
    }
  },
  methods: {
    toggleSetting (): void {
      charactersStore.toggleSetting()
    },
    setDefaultCount (num: number): void {
      charactersStore.setDefaultCount(num)
      charactersStore.resetRemainingCount()
      charactersStore.toggleSetting()
    },
    validateDefaultCount (num: number): void {
      const isValid = /^[1-9][0-9]*/.test(String(num)) && num >= this.min && num <= this.max
      if (isValid) {
        this.setDefaultCount(num)
        return
      }
      if (num < this.min) {
        this.setDefaultCount(this.min)
        return
      }
      this.setDefaultCount(this.max)
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 80px;
.modal {
  position: fixed;
  top: -100px;
  right: -100px;
  bottom: -100px;
  left: -100px;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  transition: opacity .3s ease;
  &__wrapper {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    width: 500px;
    height: 300px;
    @media screen and (max-width: 600px) {
      width: 300px;
      height: 200px;
    }
    &__container {
      position: relative;
      height: inherit;
      width: 80%;
      max-width: 1264px;
      margin: 0 auto;
      padding: 10px 0;
      display: flex;
      align-items: center;
      @media screen and (max-width: 600px) {
        width: 100%;
        padding: 10px;
      }
      &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: $height;
        &>.title {
          width: 100%;
          text-align: center;
          font-size: 25px;
          @media screen and (max-width: 600px) {
            font-size: 20px;
          }
        }
        &>input {
          width: 90%;
          height: $height*2/3;
          text-align: center;
          font-size: 30px;
        }
        &>span {
          width: 10%;
          display: inline-block;
          text-align: center;
        }
        &__button {
          width: 48%;
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
      }
      &__item.title {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }
      &__item.buttons {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        @media screen and (max-width: 600px) {
          padding: 0 10px;
        }
      }
    }
  }
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
