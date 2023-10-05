<template>
  <div>
    <a-comment v-for="item in data" :key="item.id" class="ant-comment">
      <span
        v-if="!item.toggle"
        slot="actions"
        key="comment-nested-reply-to"
        @click="handleToggle(item.id)"
        ><a-icon type="message" /> Gửi lời cảm ơn</span
      >
      <a slot="author" href="#">
        {{ item.name }}
      </a>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <p slot="content">
        {{ item.desc }}
      </p>

      <ReplyToGuestkbook v-if="item.toggle" />
    </a-comment>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

import ReplyToGuestkbook from './ReplyToGuestkbook.vue'

import './scss/Commentguestkbook.scss'

export default {
  name: 'CommentGuestkbook',

  components: {
    ReplyToGuestkbook,
  },

  data() {
    return {
      data: [],
    }
  },

  computed: {
    ...mapGetters({
      comments: 'GET_GUESTKBOOKS',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_GUESTKBOOK')

    this.data = this.comments
  },

  methods: {
    handleToggle(id) {
      this.data.forEach((item) => {
        if (item.id === id) {
          // eslint-disable-next-line import/no-named-as-default-member
          Vue.set(item, 'toggle', true)
        } else {
          // eslint-disable-next-line import/no-named-as-default-member
          Vue.set(item, 'toggle', false)
        }
      })
    },
  },
}
</script>
