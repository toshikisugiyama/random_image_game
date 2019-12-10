<template>
  <div class="reset-container">
    <div
      @click="resetAll"
      class="reset"
    >
      <div class="reset-button"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetAll(){
      this.$emit('reset-all')
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 22px;
.container {
  .reset {
    position: relative;
    width: $size + 6px;
    height: $size + 6px;
    border-radius: 50%;
    border: 1px solid #333;
    margin: 0;
    opacity: 0.8;
    cursor: pointer;
    &-button {
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
}
.container.dark {
  .reset {
    border: #fff solid 1px;;
    &-button {
      background-color: #fff;
    }
  }
}
</style>
