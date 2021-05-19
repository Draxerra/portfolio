<template>
  <nav class="mt-nav">
    <a class="mt-nav__item">Home</a>
    <a class="mt-nav__item">About</a>
    <a class="mt-nav__item">Work</a>
    <a class="mt-nav__item">Contact</a>
  </nav>
</template>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-nav__item {
  display: flex;
  padding: 0 spacing.$space / 2;
  place-items: center;
  height: 100%;
  font-size: 2rem;
  text-decoration: none;
  color: var(--white-color);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--secondary-color);
  }
}
</style>
