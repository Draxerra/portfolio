<template>
  <div class="mt-project">
    <div class="mt-project__container">
      <div class="mt-project__info">
        <div class="mt-project__info__container">
          <h2>{{ name }}</h2>
          <p>
            <slot />
          </p>
        </div>
        <div class="mt-project__actions">
          <slot name="actions" />
        </div>
      </div>
      <slot name="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/breakpoints" as breakpoints;
@use "src/styles/spacing" as spacing;
.mt-project {
  background: linear-gradient(
    var(--primary-color),
    var(--primary-color-darken)
  );
  padding: spacing.$space;

  flex-basis: 70em;

  &__container {
    height: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    gap: spacing.$space / 2;
  }

  h2 {
    margin-bottom: 5px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: spacing.$space;
    place-content: space-between;
    flex: 1 1 40ch;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    gap: spacing.$space / 5;
  }

  img {
    max-width: 25em;
    object-fit: cover;
    object-position: left;
    margin: 0 auto;
  }
}
</style>
