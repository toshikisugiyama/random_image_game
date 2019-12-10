<template>
  <div
    class="switch_button"
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
  .switch_button {
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
.container.dark {
  .switch_button {
    background-color: #fff;
    color: #333;
  }
}
</style>
