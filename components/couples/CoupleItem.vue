<template>
  <div class="couple__item">
    <div class="couple__desc">
      <p>
        {{ desc }}
      </p>

      <div class="couple__link">
        <a :href="facebook" target="_blank">
          <img src="~/assets/images/facebook.png" alt="" />
        </a>
        <a :href="instagram" target="_blank">
          <img src="~/assets/images/instagram.png" alt="" />
        </a>
      </div>
    </div>
    <div class="couple__avatar">
      <img :src="avatar" alt="" />
      <div class="couple__content">
        <h3 class="couple__name font__dancing">
          {{ name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,

      default: String,
    },

    avatar: {
      type: String,

      default: String,
    },

    desc: {
      type: String,
      default: String,
    },

    facebook: {
      type: String,

      default: 'https://facebook.com',
    },

    instagram: {
      type: String,

      default: 'https://www.instagram.com/',
    },
  },
}
</script>
