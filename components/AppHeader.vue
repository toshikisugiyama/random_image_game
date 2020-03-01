<template lang="pug">
  header.header
    .header__container
      app-header-mode-switch
      app-header-reset(v-if="counter!==0 && $route.name==='index'")
      app-header-set(v-if="counter===0 && $route.name==='index'")
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeaderModeSwitch from '@/components/AppHeaderModeSwitch.vue'
import AppHeaderReset from '@/components/AppHeaderReset.vue'
import AppHeaderSet from '@/components/AppHeaderSet.vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  components: {
    AppHeaderModeSwitch,
    AppHeaderReset,
    AppHeaderSet
  },
  computed: {
    counter (): number {
      return charactersStore.counter
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 80px;
.header {
  width: 100%;
  height: $height;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  &__container {
    margin: 0 auto;
    height: $height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 1264px;
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
  }
}
</style>
