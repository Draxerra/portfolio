<template>
  <div class="mt-main">
    <div class="mt-main__hero__container">
      <mt-header class="mt-main__header"></mt-header>
      <mt-hero @scroll="scrollTo" class="mt-main__hero"></mt-hero>
    </div>
    <mt-about class="mt-main__about"></mt-about>
    <mt-projects class="mt-main__projects"></mt-projects>
    <mt-contact class="mt-main__contact"></mt-contact>
    <mt-footer class="mt-main__footer"></mt-footer>
  </div>
</template>

<script>
import MTHeader from "~/components/sections/MTHeader";
import MTHero from "~/components/sections/MTHero";

import MTAbout from "~/components/sections/MTAbout";
import MTProjects from "~/components/sections/MTProjects";
import MTContact from "~/components/sections/MTContact";
import MTFooter from "~/components/sections/MTFooter";

import gsap from "gsap";

export default {
  components: {
    "mt-header": MTHeader,
    "mt-hero": MTHero,
    "mt-about": MTAbout,
    "mt-projects": MTProjects,
    "mt-contact": MTContact,
    "mt-footer": MTFooter,
  },
  methods: {
    scrollTo() {
      gsap.to(window, { duration: 1, scrollTo: ".mt-main__about" });
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/breakpoints" as breakpoints;
:root {
  font-size: 10px;
  font-family: "sofia-pro", sans-serif;

  --black-color: hsl(240, 85%, 5%);
  --white-color: hsl(0, 0%, 96%);
  --primary-color: hsl(250, 78%, 35%);
  --primary-color-darken: hsl(250, 78%, 18%);
  --secondary-color: hsl(46, 88%, 49%);
  --secondary-color-lighten: hsl(46, 88%, 79%);
  --error-color: hsl(0, 100%, 60%);

  --extra-large-text: clamp(3.2rem, 4.5vw, 4rem);
  --large-text: clamp(2.8rem, 3.9375vw, 3.5rem);
  --medium-text: clamp(2.2rem, 3.09375vw, 2.75rem);
  --small-text: clamp(1.6rem, 2.25vw, 2rem);
  --extra-small-text: clamp(1.28rem, 1.8vw, 1.6rem);
  --attribution-text: clamp(1rem, 1.5vw, 1.28rem);
}

body {
  background-color: var(--black-color);
  margin: 0;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  margin: 0;
  color: var(--white-color);
}

h1 {
  font-size: var(--extra-large-text);
  line-height: 1.25em;
}

h2 {
  font-size: var(--large-text);
  line-height: 1.25em;
}

h3 {
  font-size: var(--medium-text);
  line-height: 1.5em;
}

h4 {
  font-size: var(--small-text);
  line-height: 1.5em;
}

h5 {
  font-size: var(--small-text);
  line-height: 1.5em;
}

h6,
p,
span,
label {
  font-size: var(--extra-small-text);
  line-height: 1.5em;
}

strong {
  font-weight: 600;
  color: var(--secondary-color);
}
</style>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &__header {
    height: clamp(12em, 20vh, 15em);
  }
  &__hero {
    flex: 1;
    &__container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }
  &__about {
    padding-top: spacing.$space;
  }
  &__projects,
  &__contact,
  &__footer {
    margin-top: spacing.$space;
  }
  &__footer {
    padding-bottom: spacing.$space;
  }
}
</style>
