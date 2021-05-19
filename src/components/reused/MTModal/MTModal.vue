<template>
  <portal selector="#mt-modal">
    <div class="mt-modal__container">
      <div class="mt-modal" v-click-outside="close">
        <video class="mt-modal__video" controls>
          <slot />
        </video>
        <mt-button class="mt-modal__close-button" icon @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 30 30"
            class="close"
          >
            <path
              id="Icon_material-close"
              data-name="Icon material-close"
              d="M37.5,10.521,34.479,7.5,22.5,19.479,10.521,7.5,7.5,10.521,19.479,22.5,7.5,34.479,10.521,37.5,22.5,25.521,34.479,37.5,37.5,34.479,25.521,22.5Z"
              transform="translate(-7.5 -7.5)"
              fill="#f5f5f5"
            />
          </svg>
        </mt-button>
      </div>
    </div>
  </portal>
</template>

<script>
import MTButton from "~/components/reused/MTButton";
import vClickOutside from "v-click-outside";
import { Portal } from "@linusborg/vue-simple-portal";
export default {
  components: {
    Portal,
    "mt-button": MTButton,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-modal {
  width: min(90vw, 100em);
  position: relative;
  &__container {
    position: fixed;
    background: rgb(0 0 0 / 0.3);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    place-items: center;
    place-content: center;
  }

  &__video {
    width: 100%;
  }
  &__close-button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
