<template>
  <section class="mt-projects">
    <h1>Recent Works</h1>
    <div class="mt-projects__container">
      <mt-project class="mt-skills-portal" name="Skills Portal">
        An application created to be used in-house to collate data on all of the
        skills in a business. Designed for employees to enter in skill
        information, and for managers to view later on in an easy-to-read
        starburst chart.
        <template slot="actions">
          <mt-button tag="a" href="https://www.skillsportaldemo.co.uk">
            View Website
          </mt-button>
          <mt-button outline @click="setModal('skills-portal')">
            Watch a Video
          </mt-button>
          <mt-modal v-if="isModal('skills-portal')" @close="resetModal">
            <source src="~/assets/Skills Portal.mp4" type="video/mp4" />
          </mt-modal>
        </template>
        <template slot="image">
          <img src="~/assets/Skills Portal.png" />
        </template>
      </mt-project>

      <mt-project class="mt-discord-composer-bot" name="Discord Composer Bot">
        A bot developed during a week-long Discord bot competition. Allows users
        to create music with chat commands. Music can be listened to in a voice
        channel. Optionally may be exported as a MIDI or as sheet music in PDF.
        <template slot="actions">
          <mt-button
            tag="a"
            href="https://github.com/MichaelTugby/discord-composer-bot"
          >
            View Code
          </mt-button>
          <mt-button outline @click="setModal('discord-composer-bot')">
            Watch a Video
          </mt-button>
          <mt-modal v-if="isModal('discord-composer-bot')" @close="resetModal">
            <source src="~/assets/Discord Composer Bot.mp4" type="video/mp4" />
          </mt-modal>
        </template>
        <template slot="image">
          <img src="~/assets/Discord Composer Bot.png" />
        </template>
      </mt-project>
      <mt-project class="mt-id3-tag-editor" name="ID3 Tag Editor">
        An application created to edit music tags using a Material Design UI.
        Music files can be dragged into the application, and its tags can be
        edited. Multiple files can be edited at once, and regex's can be used to
        speed up the process.
        <template slot="actions">
          <mt-button
            tag="a"
            href="https://github.com/MichaelTugby/id3-tag-editor"
          >
            View Code
          </mt-button>
          <mt-button outline @click="setModal('id3-tag-editor')">
            Watch a Video
          </mt-button>
          <mt-modal v-if="isModal('id3-tag-editor')" @close="resetModal">
            <source src="~/assets/ID3 Tag Editor.mp4" type="video/mp4" />
          </mt-modal>
        </template>
        <template slot="image">
          <img src="~/assets/ID3 Tag Editor.png" />
        </template>
      </mt-project>
    </div>
  </section>
</template>

<script>
import MTProject from "./MTProject";
import MTButton from "~/components/reused/MTButton";
import MTModal from "~/components/reused/MTModal";

export default {
  components: {
    "mt-project": MTProject,
    "mt-button": MTButton,
    "mt-modal": MTModal,
  },
  data: () => ({
    modal: "",
  }),
  methods: {
    setModal(name) {
      this.modal = name;
    },
    resetModal() {
      this.modal = "";
    },
    isModal(name) {
      return this.modal === name;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/spacing" as spacing;
.mt-projects {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: spacing.$space;
  @include spacing.createSpace();
  &__container {
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    gap: spacing.$space;
  }
}
</style>
