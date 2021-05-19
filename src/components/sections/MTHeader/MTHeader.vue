<template>
  <header class="mt-header">
    <mt-logo class="mt-header__logo"></mt-logo>
    <mt-nav class="mt-header__nav"></mt-nav>
  </header>
</template>

<script>
import MTLogo from "./MTLogo";
import MTNav from "./MTNav";
export default {
  components: {
    "mt-logo": MTLogo,
    "mt-nav": MTNav,
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/breakpoints" as breakpoints;
@use "src/styles/spacing" as spacing;

.mt-header {
  box-sizing: border-box;

  display: flex;
  place-content: space-between;
  padding: (spacing.$space / 2) 0;

  position: sticky;
  top: 0;
  background: var(--black-color);
  z-index: 1;

  @include spacing.createSpace(padding);

  &__logo {
    height: 100%;
  }

  &__nav {
    display: none;
    @include breakpoints.md {
      display: flex;
    }
  }
}
</style>
