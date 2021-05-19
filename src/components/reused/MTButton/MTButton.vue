<template>
  <component
    class="mt-button"
    :class="{ 'mt-button--outline': outline, 'mt-button--icon': icon }"
    :is="tag"
    :type="type"
    :disabled="disabled"
    :href="href"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    href: String,
  },
};
</script>

<style lang="scss" scoped>
.mt-button {
  display: inline-block;

  background-color: var(--white-color);
  color: var(--black-color);
  font-size: var(--extra-small-text);
  letter-spacing: 0.125em;
  font-family: inherit;
  text-align: center;

  padding: 0.625em 1.25em;
  border: 0.0625em solid var(--white-color);

  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  box-sizing: content-box;

  &:focus-visible {
    outline: none;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not([disabled]) {
    &:hover,
    &:focus {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }

  &--outline,
  &--icon {
    background-color: transparent;
    border-color: var(--white-color);
    color: var(--white-color);
  }

  &--outline {
    &:not([disabled]) {
      &:hover,
      &:focus {
        color: var(--black-color);
      }
    }
  }

  &--icon {
    border: none !important;
    &:not([disabled]) {
      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--white-color);
        ::v-deep path {
          fill: var(--secondary-color);
        }
      }
    }
  }
}
</style>
