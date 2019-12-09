<template>
  <div>
    あと{{ clickCount }}回
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
