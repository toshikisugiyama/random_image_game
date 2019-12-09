<template>
  <div>
    <ul>
      <li
        v-for="image in maxNum"
        :key="image"
      >
        <img
          :src="`./img/${image-1}.png`"
          :alt="`character${image-1}`"
          v-show="image===(randomNumber+1)"
          height="100px"
          width="100px"
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    randomNumber: {
      type: Number,
    },
    maxNum: {
      type: Number,
    }
  },
}
</script>

<style lang="scss" scoped>
ul{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  position: relative;
  li{
    position: absolute;
  }
}
</style>
