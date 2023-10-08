<template>
  <div class="slider__item">
    <div class="slider__frame" @click="() => handleEdit(dataItem)">
      <img
        class="slider__img"
        :class="getClassImage"
        :src="dataItem.image"
        :alt="dataItem.title"
      />
    </div>

    <div class="slider__footer">
      <ButtonDelete :data-item="dataItem" />

      <ButtonStatus :id="dataItem.id" :status="dataItem.status" />
    </div>
  </div>
</template>

<script>
import ButtonStatus from './ButtonStatus.vue'
import ButtonDelete from './ButtonDelete.vue'

export default {
  name: 'ItemSlider',

  components: {
    ButtonStatus,
    ButtonDelete,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    getClassImage() {
      return `${this.dataItem.status === 0 ? 'hidden__img' : ''}`
    },
  },

  methods: {
    handleEdit(dataItem) {
      this.$emit('edit', dataItem)
    },
  },
}
</script>
