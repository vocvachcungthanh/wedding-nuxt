<template>
  <div>
    <label class="view" :class="classView">
      <span v-if="loading" class="loading">
        <a-spin />
      </span>
      <img v-if="image" :src="image" :alt="image" />
      <input type="file" multiple @change="uploadFile" />
      <div :class="getClass">
        <a-icon type="camera" />
        <span class="view__camera--title"> Tải ảnh </span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PreviewAlbum',

  props: {
    image: {
      type: String,
      default: String,
    },

    classView: {
      type: String,
      default: String,
    },

    loading: Boolean,
  },

  data() {
    return {
      cropperOptions: null,
      cropImage: null,
    }
  },

  computed: {
    getClass() {
      return `view__camera ${
        this.image.length > 0 ? 'view__camera--active' : ''
      }`
    },

    getClassView() {
      return this.classView || ''
    },
  },

  methods: {
    uploadFile(event) {
      const file = event.target.files[0]
      // this.handleViewImage(file)

      this.$emit('file', file)
    },

    handleViewImage(file) {
      const refViewImage = this.$refs.viewImg

      const theReader = new FileReader()
      theReader.onload = function () {
        refViewImage.src = theReader.result
      }

      theReader.readAsDataURL(file)
    },
  },
}
</script>
