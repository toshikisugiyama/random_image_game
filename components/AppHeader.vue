<template lang="pug">
  header.header
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
$height: 100px;
$space: 15px;
.header {
  width: 100%;
  height: $height;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 $space;
}
</style>
