<template>
  <div
    id="switch_buttons"
    @click="changeStatus"
  >
    {{ buttonValue }}
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
    changeStatus(){
      this.$emit('handle-click')
    }
  }
}
</script>
