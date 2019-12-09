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

<style lang="scss" scoped>
.container {
  #switch_buttons {
    padding: 15px 10px;
    background-color: #333;
    color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;
  }
  main {
    width: 100%;
  }
}
</style>
