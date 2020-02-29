<template lang="pug">
  main.rule
    .rule__container
      h1 あそびかた
</template>

<style lang="scss" scoped>
$height: 568px;
$header-height: 100px;
.rule {
  padding: $header-height 0;
  min-height: $height;
  height: 100vh;
  background-color: #fff;
  transition: background-color 1s;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    max-width: 1264px;
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
  }
}
.container.dark {
  .rule {
    background-color: #000;
    color: #fff;
  }
}
</style>
