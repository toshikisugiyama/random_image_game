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
          height="300px"
          width="300px"
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
  width: 300px;
  height: 300px;
  margin: 25px auto;
  padding: 0;
  list-style: none;
  position: relative;
  li{
    position: absolute;
  }
}
</style>
