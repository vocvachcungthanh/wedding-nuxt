<template>
  <div v-if="loading" class="loading-page">
    <div class="loader loader-13">
      <div class="css-heart heart1"></div>
      <div class="css-heart heart2"></div>
      <div class="css-heart heart3"></div>
      <div class="css-heart heart4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBar',

  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.loading-page {
  background: #fff;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 99999;

  .loader {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 40%;

    &.loader-13 {
      .css-heart {
        position: absolute;
        background-color: red;
        -webkit-animation: star-fly-out 1s ease alternate infinite;
        animation: star-fly-out 1s ease alternate infinite;
        -webkit-transform: scale(0.2);
        transform: scale(0.2);

        &::before,
        &::after {
          position: absolute;
          content: '';
          left: 50px;
          top: 0;
          width: 50px;
          height: 80px;
          background: #ec2328;
          border-radius: 50px 50px 0 0;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
        }

        &:after {
          left: 0;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
        }
      }

      .heart1 {
        top: 0;
        left: 30px;
      }

      .heart2 {
        left: 60px;
        top: 30px;
      }

      .heart3 {
        top: 60px;
        left: 30px;
      }

      .heart4 {
        left: 0;
        top: 30px;
      }
    }
  }
}
</style>
