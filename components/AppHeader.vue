<template lang="pug">
  header.header
    .header__container
      app-header-mode-switch
      .header__container__item
        app-header-i18n
        app-header-reset(v-if="counter!==0 && $route.name.includes('index')")
        app-header-set(v-if="counter===0 && $route.name.includes('index')")
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeaderModeSwitch from '@/components/AppHeaderModeSwitch.vue'
import AppHeaderReset from '@/components/AppHeaderReset.vue'
import AppHeaderSet from '@/components/AppHeaderSet.vue'
import AppHeaderI18n from '@/components/AppHeaderI18n.vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  components: {
    AppHeaderModeSwitch,
    AppHeaderReset,
    AppHeaderSet,
    AppHeaderI18n
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
    &__item {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
