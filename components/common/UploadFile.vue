<template>
  <a-form-item label="Tải ảnh">
    <div class="upload_file">
      <input id="file" type="file" multiple @change="uploadFile" />
      <label for="file" class="label__file">
        <a-icon type="upload" /> Chọn ảnh</label
      >
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: 'UploadFile',

  methods: {
    uploadFile(event) {
      this.$emit('file', event.target.files[0])
    },
  },
}
</script>
