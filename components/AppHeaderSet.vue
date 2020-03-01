<template lang="pug">
  .header__set(@click="toggleSet")
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  methods: {
    toggleSet (): void {
      charactersStore.toggleSetting()
    }
  }
})
</script>

<style lang="scss" scoped>
$size: 25px;
.header__set {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $size;
  height: $size;
  border: 3px dotted #fff;
  border-radius: 100%;
  box-sizing: border-box;
  background-color: #000;
  transition: all 1s;
  &:before {
    top: 50%;
    left: 50%;
    content: "";
    width: $size*3/5;
    height: $size*3/5;
    border-radius: 100%;
    background-color: #fff;
    transition: all 1s;
  }
}
.container.dark {
  .header__set {
    background-color: #fff;
    border: 3px dotted #000;
    &:before {
      background-color: #000;
    }
  }
}
</style>
