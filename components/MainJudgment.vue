<template lang="pug">
  transition(:duration="500")
    .judgment
      .judgment__correct(v-if="judgment===1") 正解
      .judgment__incorrect(v-if="judgment===2") 不正解
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  computed: {
    judgment (): number {
      const data = charactersStore.inputtedCharacterData
      if (data[data.length - 1]) {
        return data[data.length - 1].erratum
      }
      return 0
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
