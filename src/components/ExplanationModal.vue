<template>
  <div>
    <div @click="changeStatus">
      {{ buttonValue }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonValue: {
      type: String,
    }
  },
  methods: {
    changeStatus() {
      this.$emit('handle-click')
    },
  },
}
</script>
