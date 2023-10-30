<template>
  <a-tooltip :placement="placement">
    <template slot="title">
      <span>
        {{ title }}
      </span>
    </template>
    <button :type="type" :class="getClass">
      <slot></slot>
    </button>
  </a-tooltip>
</template>

<script>
export default {
  name: 'VueButton',

  props: {
    className: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'button',
    },

    title: {
      type: String,
      default: '',
    },

    placement: {
      type: String,
      default: 'top',
    },
  },

  computed: {
    getClass() {
      return `btn ${this.className}`
    },
  },
}
</script>
