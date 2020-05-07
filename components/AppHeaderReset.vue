<template lang="pug">
  .reset__container
    .reset(@click="resetAll")
      .reset__button
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  methods: {
    resetAll (): void {
      charactersStore.resetCounter()
      charactersStore.resetRemainingCount()
      charactersStore.resetName()
    }
  }
})
</script>

<style lang="scss" scoped>
$size: 22px;
.reset {
  position: relative;
  width: $size + 6px;
  height: $size + 6px;
  border-radius: 50%;
  border: 1px solid #333;
  margin: 0;
  opacity: 0.6;
  transition: opacity 0.8s;
  cursor: pointer;
  &__button {
    width: $size;
    height: $size;
    border-radius: 50%;
    background-color: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.reset:hover {
  opacity: 1;
}
.container.dark {
  .reset {
    border: #fff solid 1px;;
    &__button {
      background-color: #fff;
    }
  }
}
</style>
