<template>
  <div class="mobile__menu">
    <div class="container">
      <div class="row">
        <div class="mobile__menu--group">
          <h2 class="mobile__title">T & T</h2>
          <button class="mobile__menu--icon" @click="handleVisible">
            <a-icon type="menu" />
          </button>
        </div>
      </div>
    </div>
    <a-drawer class="mobile__drawer" :visible="visible" @close="onClose">
      <MenuItem />
    </a-drawer>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  components: {
    MenuItem,
  },

  data() {
    return {
      visible: false,
    }
  },

  methods: {
    handleVisible(e) {
      return (this.visible = e)
    },

    onClose() {
      this.visible = false
    },
  },
}
</script>
