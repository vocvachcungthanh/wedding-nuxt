<template>
  <div class="page_music">
    <a-card title="Quản lý nhạc">
      <a-row :gutter="30">
        <a-col :xl="8" :xxl="6">
          <FormMusic
            :result="result"
            :data-item="items"
            @submit="handleSubmit"
          />
        </a-col>
        <a-col :xl="16" :xxl="18">
          <MusicGroup @update="handleUpdate" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import MusicGroup from '~/components/admin/music'
import FormMusic from '~/components/admin/music/FormMusic.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'PageMusic',

  components: {
    MusicGroup,
    FormMusic,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      result: false,
      items: {},
    }
  },

  head() {
    return {
      title: 'Nhạc',
    }
  },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.update(params)
      } else {
        this.create(params)
      }
    },

    async create(params) {
      await this.$store
        .dispatch('ACT_CREATE_MUSIC', params)
        .then((res) => {
          this.result = true

          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          this.result = false

          MwHandle.handleError({
            context: error,
          })
        })
    },

    async update(params) {
      await this.$store
        .dispatch('ACT_UPDATE_MUSIC', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    handleUpdate(item) {
      this.items = item
    },
  },
}
</script>
