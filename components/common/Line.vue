<template>
  <div class="line">
    <span class="icon__heart">
      <font-awesome-icon icon="fa-solid fa-heart" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'LineHeart',
}
</script>

<style lang="scss">
.line {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 2rem;

  .icon__heart {
    font-size: 3rem;
    color: #f88dbd;
    position: relative;

    &::before {
      content: '';
      border: 1px dashed #f88dbd;
      height: 1px;
      width: 200px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
}
</style>
