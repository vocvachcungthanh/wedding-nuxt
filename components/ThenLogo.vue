<template>
  <div class="container">
    <div class="row">
      <nuxt-link
        tag="h1"
        class="header__logo"
        to="/"
        title="Hữu Thành & Thủy tiên"
      >
        <div class="header__logo--group font__dancing">
          <small> Hữu Thành </small>
          <span class="icon_heart">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </span>
          <small> Thủy Tiên </small>
        </div>

        <span class="just-married"> Mèo con & Gà Già</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CMLogo',
}
</script>
