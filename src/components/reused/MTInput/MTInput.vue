<template>
  <validation-provider
    class="mt-input__container"
    tag="div"
    :rules="rules"
    :name="label"
    v-slot="{ errors, validate }"
  >
    <div class="mt-input">
      <component
        class="mt-input__value"
        :class="{
          'mt-input--textarea': tag === 'textarea',
          'mt-input--error': errors[0],
        }"
        :id="id"
        :name="id"
        placeholder=" "
        :is="tag"
        :rows="rows"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="validate"
      >
        <slot />
      </component>
      <label class="mt-input__label" :for="id">
        {{ label }}
      </label>
      <fieldset class="mt-input__overlay" aria-hidden="true">
        <legend>
          <span>{{ label }}</span>
        </legend>
      </fieldset>
    </div>
    <div class="mt-errors">
      <span>{{ errors[0] }}</span>
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    "validation-provider": ValidationProvider,
  },
  props: {
    id: String,
    label: String,
    rows: Number,
    tag: {
      default: "input",
      type: String,
    },
    value: String,

    rules: String,
  },
};
</script>

<style lang="scss" scoped>
$input-padding: 0.5em;
$border-width: 1px;
$transition: 0.3s ease-in-out;

.mt-input {
  position: relative;
  color: var(--white-color);

  // Change positioning for textarea
  &--textarea {
    + .mt-input__label {
      top: 0;
      transform: translateY(50%);
    }
  }

  // No placeholder shown (e.g. input value exists)
  // or input is focused
  &:focus-within .mt-input__label,
  &__value:not(:placeholder-shown) + &__label {
    top: 0;
    font-size: var(--extra-small-text);
    margin-left: $input-padding;
    padding: 0 ($input-padding);
    transform: translateY(-50%);
    + .mt-input__overlay > legend {
      transform: scaleX(0);
    }
  }

  // Change border color on focus
  &:focus-within .mt-input__overlay {
    border-color: var(--secondary-color);
  }
  &--error {
    ~ .mt-input__overlay {
      border-color: var(--error-color);
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    pointer-events: none;

    border: $border-width solid var(--white-color);
    transition: border-color $transition;
    > legend {
      line-height: 0;
      height: 0;
      font-size: var(--extra-small-text);

      border-top: $border-width solid var(--white-color);
      border-color: inherit;
      margin-left: $input-padding;
      padding: 0 $input-padding;

      transform: scaleX(1);
      transform-origin: left;
      transition: transform $transition;

      span {
        font-size: inherit;
        visibility: hidden;
      }
    }
  }

  &__label {
    position: absolute;
    left: 0;
    top: calc(50% - 2px);
    right: 0;
    transform: translateY(-50%);

    margin-left: $input-padding * 2;
    transition: all $transition;

    pointer-events: none;
  }
  &__value {
    font-family: inherit;
    font-size: var(--extra-small-text);
    color: inherit;

    border: none;
    padding: $input-padding * 2;
    padding-top: 0;
    margin-top: $input-padding * 2;

    width: 100%;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
}

.mt-errors {
  padding-left: $input-padding * 2;
  span {
    color: var(--error-color);
  }
}
</style>
