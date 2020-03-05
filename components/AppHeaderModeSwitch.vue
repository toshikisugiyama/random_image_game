<template lang="pug">
  .header__switch(@click="toggleMode")
    .header__switch__frame
      .header__switch__button
      span.mode {{ modeStatus.toUpperCase() }}
</template>

<script lang="ts">
import Vue from 'vue'
import { charactersStore } from '@/store'
export default Vue.extend({
  computed: {
    isDark (): boolean {
      return charactersStore.isDark
    },
    modeStatus (): string {
      if (this.isDark) {
        return this.$tc('APP_HEADER_MODE_SWITCH_LIGHT')
      }
      return this.$tc('APP_HEADER_MODE_SWITCH_DARK')
    }
  },
  methods: {
    toggleMode (): void {
      charactersStore.toggleMode()
    }
  }
})
</script>

<style lang="scss" scoped>
$height: 30px;
.header__switch {
  &__frame {
    background-color: #333;
    border-radius: 50px;
    width: 70px;
    height: $height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1px;
    cursor: pointer;
    .mode {
      color: #fff;
      margin: 0 5px;
      font-size: 8px;
    }
  }
  &__button {
    height: $height - 2px;
    width: $height - 2px;
    border-radius: 50%;
    background-color: #fff;
  }
}
.container.dark {
  .header__switch {
    &__frame {
      background-color: rgb(186, 221, 31);
      .mode {
        color: #333;
        user-select: none;
      }
    }
    &__button {
      order: 2;
    }
  }
}
</style>
