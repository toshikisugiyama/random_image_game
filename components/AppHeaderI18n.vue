<template lang="pug">
  .i18n
    nuxt-link.i18n__link(v-if="$i18n.locale !== 'ja'" :to="switchLocalePath('ja')") {{ $i18n.locales.find(i => i.code === 'ja').name }}
    nuxt-link.i18n__link(v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')") {{ $i18n.locales.find(i => i.code === 'en').name }}
</template>

<style lang="scss" scoped>
.i18n {
  margin: 0 20px;
  &__link {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 1s;
  }
  &__link:hover {
    opacity: 1;
  }
}
.container.dark {
  .i18n {
    &__link {
      color: #fff;
    }
  }
}
</style>
