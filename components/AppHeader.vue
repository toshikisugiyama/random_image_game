<template lang="pug">
  header.header
    .header__container
      app-header-mode-switch
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeaderModeSwitch from '@/components/AppHeaderModeSwitch.vue'
export default Vue.extend({
  components: {
    AppHeaderModeSwitch
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
    width: 80%;
    max-width: 1264px;
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
  }
}
</style>
