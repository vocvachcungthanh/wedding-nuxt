<template>
  <div class="countdown">
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ days | twoDigits }}</div>
      <div class="countdown__text">Ngày</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ hours | twoDigits }}</div>
      <div class="countdown__text">Giờ</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ minutes | twoDigits }}</div>
      <div class="countdown__text">Phút</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ seconds | twoDigits }}</div>
      <div class="countdown__text">Giây</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    date: null,
  },

  data() {
    return {
      now: Math.trunc(new Date(this.date).getTime() / 1000),
      event: this.date,
      finish: false,
    };
  },

  computed: {
    secondCount() {
      return this.calculatedDate - this.now;
    },

    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000);
    },

    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },

    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },

    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },

    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },

  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true;
        _self.$emit("onFinish");
      }
    }, 1000);
  },
};
</script>
