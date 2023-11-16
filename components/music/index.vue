<template>
  <div v-if="music.length > 0" class="audio">
    <audio ref="audio" class="ad" controls>
      <source :src="link" type="audio/mpeg" />
    </audio>

    <PrevMusic :data-item="music[order - 1]" @click.native="handlePrev" />
    <PlayMusic
      :play="play"
      :data-item="music[order]"
      @click.native="handleAudio"
    />
    <NextMusic :data-item="music[order + 1]" @click.native="handleNext" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import PlayMusic from "./PlayMusic.vue";
import NextMusic from "./NextMusic.vue";
import PrevMusic from "./PrevMusic.vue";

export default {
  name: "MusicAudio",

  components: { PlayMusic, NextMusic, PrevMusic },

  data() {
    return {
      link: null,
      play: false,
      order: 0,
    };
  },

  computed: {
    ...mapState({
      music: (state) => state.storeMusic.music,
    }),
  },

  watch: {
    order() {
      if (this.order < this.music.length) {
        this.link = this.music[this.order]?.link;
      }
    },

    play() {
      if (this.play) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },

    link(newLink) {
      if (newLink) {
        this.$refs.audio.src = newLink;
        this.$refs.audio.load();
        if (this.play) {
          this.$refs.audio.play();
        }

        this.$refs.audio.addEventListener("ended", () => {
          this.play = false;
        });
      }
    },
  },

  async created() {
    await this.$store.dispatch("ACT_GET_MUSIC");

    this.link = this.music[this.order]?.link;
  },

  methods: {
    handleAudio() {
      this.play = !this.play;
    },

    handleNext() {
      this.play = true;
      if (!(this.order === this.music.length)) {
        this.order++;
      }
    },

    handlePrev() {
      this.play = true;
      if (this.order > 0) {
        this.order--;
      }
    },
  },
};
</script>
