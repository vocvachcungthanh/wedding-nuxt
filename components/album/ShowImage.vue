<template>
  <div class="album__show">
    <div class="ant-modal-mask" @click="handleClone"></div>

    <div class="module">
      <button
        v-if="dataItem.index > 0"
        class="btn btn__prev"
        @click="handlePrev"
      >
        <a-icon type="left-circle" />
      </button>

      <img :src="dataItem.image" alt="" />
      <button
        v-if="dataItem.index < dataItem.indexMax"
        class="btn btn__next"
        @click="handleNext"
      >
        <a-icon type="right-circle" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    handleClone() {
      this.$emit("toggleShow", false);
    },

    handlePrev() {
      if (this.dataItem.index > 0) {
        this.$emit("showIndex", this.dataItem.index - 1);
      }
    },

    handleNext() {
      if (this.dataItem.index < this.dataItem.indexMax) {
        this.$emit("showIndex", this.dataItem.index + 1);
      }
    },
  },
};
</script>
