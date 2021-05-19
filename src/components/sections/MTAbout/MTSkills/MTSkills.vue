<template>
  <div class="mt-skills">
    <h2>{{ title }}</h2>
    <p>
      <slot />
    </p>
    <div
      class="mt-skills__container"
      v-for="skillSection in skills"
      :key="skillSection.id"
    >
      <mt-progress
        v-for="skill in skillSection.skills"
        :key="skill.id"
        :id="skill.id"
        :label="skill.label"
        :max="10"
        :value="skill.value"
        class="mt-skills__skill"
      ></mt-progress>
    </div>
  </div>
</template>

<script>
import MTProgress from "~/components/reused/MTProgress";
export default {
  components: {
    "mt-progress": MTProgress,
  },
  props: {
    title: String,
    skills: Array,
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-skills {
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: spacing.$space;
  gap: spacing.$space / 3;
  border: 0.1em solid var(--white-color);
  border-radius: 2em;
  background-color: var(--black-color);

  p {
    margin-bottom: spacing.$space / 2;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: spacing.$space / 5;
  }

  &__skill {
    color: white;
  }
}
</style>
