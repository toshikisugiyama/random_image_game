<template>
  <div
    class="switch-mode"
    @click="changeMode"
  >
    <div class="switch-mode-frame">
      <div class="switch-mode-button"></div>
      <span class="mode">{{ isDark?'Light':'Dark' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
    }
  },
  methods: {
    changeMode(){
      this.$emit('change-mode')
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 30px;
.switch-mode {
  &-frame {
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
      margin: 0 10px;
    }
  }
  &-button {
    height: $height - 2px;
    width: $height - 2px;
    border-radius: 50%;
    background-color: #fff;
  }
}
.container.dark {
  .switch-mode {
    &-frame {
      background-color: rgb(186, 221, 31);
      .mode {
        color: #333;
      }
    }
    &-button {
      order: 2;
    }
  }
}
</style>
