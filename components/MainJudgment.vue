<template lang="pug">
    .judgment
      .judgment__correct(v-show="judgment===1") 正解
      .judgment__incorrect(v-show="judgment===2") 不正解
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  computed: {
    judgment (): number { return charactersStore.judgment }
  }
})
</script>

<style lang="scss" scoped>
.judgment {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  text-shadow: 2px 2px 0 #000;
  color: red;
  font-size: 150px;
  @media screen and (max-width: 600px) {
    font-size: 80px;
  }
  &__correct,
  &__incorrect {
    animation: showMessage 5s linear 0s;
  }
  @keyframes showMessage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
