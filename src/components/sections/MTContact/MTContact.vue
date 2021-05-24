<template>
  <section class="mt-contact">
    <validation-observer
      class="mt-contact__container"
      tag="div"
      v-slot="{ invalid, validate }"
    >
      <h1>Interested? Let's talk.</h1>
      <form
        class="mt-contact__form"
        name="contact-form"
        method="POST"
        @submit.prevent="onSubmit(validate)"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="mt-contact__form__inputs">
          <mt-input
            class="input mt-contact__form__name"
            id="name"
            label="Name"
            v-model="form.name"
            rules="required|min:2|max:30"
          ></mt-input>
          <mt-input
            class="input mt-contact__form__company"
            id="company"
            label="Company"
            v-model="form.company"
            rules="min:2|max:30"
          ></mt-input>
          <mt-input
            class="input mt-contact__form__email"
            id="email"
            label="Email"
            v-model="form.email"
            rules="required|email|min:2|max:50"
          ></mt-input>
          <mt-input
            class="input mt-contact__form__message"
            tag="textarea"
            id="message"
            label="Message"
            :rows="5"
            v-model="form.message"
            rules="required|min:10|max:1000"
          ></mt-input>
        </div>
        <mt-button
          class="mt-contact__form__submit"
          outline
          type="submit"
          :disabled="invalid"
        >
          Start a Conversation
        </mt-button>
        <span v-if="formStatus === 'success'">Received your submission.</span>
        <span v-if="formStatus === 'error'">Something went wrong.</span>
      </form>
    </validation-observer>
  </section>
</template>

<script>
import MTButton from "~/components/reused/MTButton";
import MTInput from "~/components/reused/MTInput";

import "./validation";
import { ValidationObserver } from "vee-validate";

import scrollTrigger from "~/utils/scrollTrigger";

export default {
  components: {
    "mt-button": MTButton,
    "mt-input": MTInput,
    "validation-observer": ValidationObserver,
  },
  data: () => ({
    form: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
    formStatus: "",
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    changeFormStatus(status) {
      this.formStatus = status;
      setTimeout(() => {
        this.formStatus = "";
      }, 5000);
    },
    async onSubmit(validate) {
      const valid = await validate();
      if (!valid) return;

      try {
        const res = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: this.encode({
            "form-name": "contact-form",
            ...this.form,
          }),
        });
        if (!res.ok) throw Error(res.statusText);
        this.changeFormStatus("success");
      } catch (err) {
        this.changeFormStatus("error");
      }
    },
  },
  mounted() {
    scrollTrigger(".mt-contact")
      .from(".mt-contact__form__name", {
        x: "-6em",
        opacity: 0,
      })
      .from(".mt-contact__form__company", { x: "6em", opacity: 0 }, "-=0.5")
      .from(".mt-contact__form__email", { x: "-6em", opacity: 0 }, "-=0.5")
      .from(".mt-contact__form__message", { x: "6em", opacity: 0 }, "-=0.5")
      .from(".mt-contact__form__submit", { y: "2em", opacity: 0 });
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/breakpoints" as breakpoints;
@use "src/styles/spacing" as spacing;
$gap: spacing.$space / 1.5;
.mt-contact {
  background: linear-gradient(
    var(--primary-color),
    var(--primary-color-darken)
  );
  padding: spacing.$space 0;
  display: flex;
  place-content: center;
  &__container {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    flex: 1 1 spacing.$container;
    max-width: spacing.$container;
    gap: $gap;
    @include spacing.createSpace();
  }
  &__form {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: $gap;
    width: 100%;
    &__inputs {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: $gap;
      .input {
        grid-column: 1/3;
        @include breakpoints.md {
          &:first-child {
            grid-row: 1/2;
            grid-column: 1/2;
          }
          &:nth-child(2) {
            grid-row: 1/2;
            grid-column: 2/3;
          }
        }
      }
    }
  }
}
</style>
