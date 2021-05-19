<template>
  <footer class="mt-footer">
    <div class="mt-footer__icons">
      <mt-button
        class="mt-contact-button"
        icon
        tag="a"
        href="https://www.linkedin.com/in/michael-tugby-17927652/"
      >
        <mt-linkedin-icon class="mt-contact-button__icon"></mt-linkedin-icon>
      </mt-button>
      <mt-button
        class="mt-contact-button"
        icon
        tag="a"
        href="https://github.com/MichaelTugby"
      >
        <mt-github-icon class="mt-contact-button__icon"></mt-github-icon>
      </mt-button>
      <mt-button
        class="mt-contact-button"
        icon
        tag="a"
        href="mailto:michael.tugby5@gmail.com"
      >
        <mt-email-icon class="mt-contact-button__icon"></mt-email-icon>
      </mt-button>
    </div>
    <h6>&copy; Michael Tugby, 2021</h6>
    <div class="mt-footer__attributions">
      <div class="mt-footer__attribution">
        <b>
          Music Used for Skills Portal:
        </b>
        <a href="https://soundcloud.com/sappheirosmusic">
          Lights by Sappheiros
        </a>
        <a href="https://bit.ly/LightsSappheiros">Download / Stream</a>
        <a href="https://youtu.be/-lbbHQbZNKg">
          Music promoted by Audio Library
        </a>
        <span>
          Creative Commons — Attribution 3.0 Unported — CC BY 3.0 Free
        </span>
      </div>
      <div class="mt-footer__attribution">
        <b>
          Music Used for Discord Composer Bot:
        </b>
        <a href="https://soundcloud.com/hiracutch">
          Bisiesto by Hiracutch
        </a>
        <a href="https://bit.ly/bisiesto-hiracutch">Download / Stream</a>
        <a href="https://youtu.be/3Lf7LuhwI5o">
          Music promoted by Audio Library
        </a>
        <span>
          Creative Commons — Attribution 3.0 Unported — CC BY 3.0
        </span>
      </div>
      <div class="mt-footer__attribution">
        <b>
          Music Used for ID3 Tag Editor:
        </b>
        <a href="https://soundcloud.com/musicbyaden">
          Aural Nights by MusicbyAden
        </a>
        <a href="http://bit.ly/-aural-nights">Download / Stream</a>
        <a href="https://youtu.be/L80zAPl2nZQ">
          Music promoted by Audio Library
        </a>
        <span>
          Creative Commons — Attribution-ShareAlike 3.0 Unported — CC BY-SA 3.0
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import MTButton from "~/components/reused/MTButton";
import { MTLinkedinIcon, MTGithubIcon, MTEmailIcon } from "./icons";
export default {
  components: {
    "mt-button": MTButton,
    "mt-linkedin-icon": MTLinkedinIcon,
    "mt-github-icon": MTGithubIcon,
    "mt-email-icon": MTEmailIcon,
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-footer {
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  &__icons {
    display: flex;
    flex-wrap: wrap;
  }
  &__attribution {
    text-align: center;
    font-size: var(--attribution-text);
    display: flex;
    flex-direction: column;
    margin-top: spacing.$space / 2;
    color: var(--white-color);
    span {
      font-size: inherit;
    }
    a {
      color: var(--secondary-color);
      &:visited {
        color: var(--secondary-color-lighten);
      }
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  h6 {
    font-weight: normal;
  }
}
</style>
