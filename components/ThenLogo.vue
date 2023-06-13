<template>
  <div class="container">
    <div class="row">
      <nuxt-link to="/" title="Hữu Thành & Thủy tiên">
        <h1 class="Logo font__dancing">
          <small> Hữu Thành </small>
          <span class="icon_heart">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </span>
          <small> Thủy Tiên </small>
        </h1>

        <span class="just-married"> Just Married </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import '~/assets/scss/components/CM_ThenLogo.scss'

export default {
  name: 'CMLogo',
}
</script>
