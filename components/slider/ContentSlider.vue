<template>
  <div class="slide__content">
    <div class="container">
      <div class="text-center">
        <h2 class="slide__title font__dancing">
          <small>{{ getRoom }} </small>
          <span class="icon__heart">
            <font-awesome-icon icon="fa-solid fa-heart-pulse" />
          </span>
          <small>
            {{ getBride }}
          </small>
        </h2>

        <span class="date">
          {{ date }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Hữu Thành - Thủy Tiên',
    },

    date: {
      type: String,
      default: String,
    },
  },

  data() {
    return {
      groom: 'Chú rể',
      bride: 'Tên cô dâu',
    }
  },

  computed: {
    getRoom() {
      const parts = this.title.split(' - ')

      return parts[0] || this.groom
    },

    getBride() {
      const parts = this.title.split(' - ')

      return parts[1] || this.groom
    },
  },
}
</script>
