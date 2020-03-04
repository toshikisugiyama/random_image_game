<template lang="pug">
    .judgment
      .judgment__correct(v-show="judgment===1") {{ correct }}
      .judgment__incorrect(v-show="judgment===2") {{ incorrect }}
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
interface Data {
  correct: string,
  incorrect: string
}
export default Vue.extend({
  data (): Data {
    return {
      correct: 'Nice',
      incorrect: 'No Good'
    }
  },
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
  text-shadow: #000 1px 0 10px ;
  font-size: 150px;
  text-align: center;
  line-height: 1;
  @media screen and (max-width: 600px) {
    font-size: 110px;
  }
  &__correct {
    transform: rotate(-20deg);
    color: #098487;
    animation: showMessage 0.2s linear 0s;
  }
  &__incorrect {
    transform: rotate(-20deg);
    color: #BC243C;
    animation: showMessage 0.2s linear 0s;
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
