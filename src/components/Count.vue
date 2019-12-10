<template>
  <div id="count">
    <span class="sub">あと </span>
    <span class="count">{{ clickCount }}</span>
    <span class="sub"> 回</span>
  </div>
</template>

<script>
export default {
  props: {
    clickCount: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
#count{
  .sub {
    font-size: 1rem;
  }
  .count {
    font-size: 1.6rem;
  }
}
</style>
