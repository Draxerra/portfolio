<template>
  <div class="mt-progress">
    <label :for="id">{{ label }}</label>
    <progress
      :id="id"
      :value="value"
      :max="max"
      class="mt-progress__bar"
    ></progress>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    max: Number,
    value: Number,
  },
};
</script>

<style lang="scss" scoped>
.mt-progress {
  display: flex;
  place-content: space-between;
  progress {
    background-color: var(--primary-color-darken);
    width: 10em;
    height: auto;
    border: 0;
    &::-webkit-progress-bar {
      background-color: var(--primary-color-darken);
    }
    &::-moz-progress-bar {
      background-color: var(--primary-color);
    }
    &::-webkit-progress-value {
      background-color: var(--primary-color);
    }
  }
}
</style>
