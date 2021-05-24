<template>
  <section class="mt-about">
    <div class="mt-about__container">
      <div class="mt-about__info">
        <div class="mt-about__info__text">
          <h1>Let's get better acquainted.</h1>
          <p>
            I have been creating web experiences for 2 years, having
            collaborated with various developers to create the perfect user
            experience for clients. Passionate about technology, with a thirst
            for learning something new everyday.
          </p>
        </div>
        <img src="~/assets/Avatar.png" />
      </div>
      <div class="mt-about__skills">
        <mt-skills
          class="mt-about__skill"
          :skills="skills.designer"
          title="Designer"
        >
          I like to design websites and graphics, and strongly value a good user
          experience.
        </mt-skills>
        <mt-skills
          class="mt-about__skill"
          :skills="skills.developer"
          title="Developer"
        >
          I like to turn my designs into reality, with a preference for the MEVN
          and MERN stack.
        </mt-skills>
      </div>
    </div>
  </section>
</template>

<script>
import MTSkills from "./MTSkills";
import skills from "./skills";

import scrollTrigger from "~/utils/scrollTrigger";

export default {
  components: {
    "mt-skills": MTSkills,
  },
  data: () => ({
    skills,
  }),
  mounted() {
    scrollTrigger(".mt-about__info")
      .from(".mt-about__info__text", { y: "-6em", opacity: 0 })
      .from(".mt-about__info > img", { x: "6em", opacity: 0 });

    scrollTrigger(".mt-about__skills")
      .from(".mt-about__skill:first-child", { x: "-6em", opacity: 0 })
      .from(".mt-about__skill:last-child", { x: "6em", opacity: 0 });
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/breakpoints" as breakpoints;
@use "src/styles/spacing" as spacing;
.mt-about {
  background: linear-gradient(
    var(--primary-color) 0%,
    var(--primary-color-darken) 50%,
    transparent 50% 100%
  );
  display: flex;
  place-content: center;

  &__container {
    display: flex;
    flex-direction: column;
    gap: spacing.$space;
    @include spacing.createSpace();
    max-width: spacing.$container;
  }
  &__info {
    display: flex;
    flex-wrap: wrap-reverse;
    place-content: center;
    place-items: center;
    gap: spacing.$space / 2;
    img {
      max-width: 25em;
    }
    &__text {
      flex: 1 1 100ch;
      display: flex;
      flex-direction: column;
      gap: spacing.$space / 3;
    }
  }
  &__skills {
    display: grid;
    gap: spacing.$space;
    @include breakpoints.md() {
      grid-template-columns: 1fr 1fr;
      gap: 0;
      .mt-about__skill:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .mt-about__skill:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>
