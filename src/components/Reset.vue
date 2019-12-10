<template>
  <div
    @click="resetAll"
    class="reset"
  >
    <div class="reset-button"></div>
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
$size: 40px;
.reset {
  position: relative;
  width: $size + 6px;
  height: $size + 6px;
  border-radius: 50%;
  border: 1px solid #333;
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
</style>
