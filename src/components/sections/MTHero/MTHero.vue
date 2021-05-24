<template>
  <main class="mt-hero">
    <div class="mt-hero__container">
      <h1 class="mt-hero__header">Hi, I'm <strong>Michael Tugby.</strong></h1>
      <h3 class="mt-hero__subheader">
        A creative front-end web developer and designer from Birmingham.
      </h3>
    </div>
    <button class="mt-hero__scroll-btn" @click="scroll">
      <span>See my work</span>
      <div class="caret"></div>
    </button>
  </main>
</template>

<script>
import gsap from "gsap";

export default {
  methods: {
    scroll() {
      this.$emit("scroll");
    },
  },
  mounted() {
    gsap
      .timeline()
      .from(".mt-hero__header", { y: "-6em", opacity: 0 })
      .from(".mt-hero__subheader", { x: "-6em", opacity: 0 })
      .from(".mt-hero__scroll-btn", {
        y: "6em",
        opacity: 0,
      });
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-hero {
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: spacing.$space * 2;
  @include spacing.createSpace();
  &__header {
    font-weight: normal;
    margin-bottom: 0.1em;
  }
  &__subheader {
    font-weight: normal;
  }
  &__scroll-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    > span:first-child {
      display: block;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin: 0.5em 0;
    }
    > .caret {
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 0.1em solid var(--white-color);
      border-top: none;
      border-left: none;
      border-color: var(--white-color);
      transform: translateY(0em) scaleX(0.8) rotate(45deg);
      transition: transform 0.3s;
    }
    &:hover {
      > .caret {
        transform: translateY(0.5em) scaleX(0.8) rotate(45deg);
      }
    }
  }
}
</style>
