<template>
  <a-comment class="ant-comment">
    <span
      v-if="!toggle"
      slot="actions"
      key="comment-nested-reply-to"
      @click="handleToggle"
      ><a-icon type="message" /> Gửi lời cảm ơn</span
    >
    <a slot="author">Nguyễn Đăng Tân</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high
      quality design resources (Sketch and Axure). Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sit aspernatur libero amet accusamus quae
      nobis distinctio quod velit rerum. Eligendi commodi, id numquam velit
      debitis maxime earum aliquam quidem perferendis.
    </p>

    <ReplyToGuestkbook v-if="toggle" />
  </a-comment>
</template>

<script>
import ReplyToGuestkbook from './ReplyToGuestkbook.vue'

import './scss/Commentguestkbook.scss'

export default {
  name: 'CommentGuestkbook',

  components: {
    ReplyToGuestkbook,
  },

  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    handleToggle() {
      this.toggle = !this.toggle
    },
  },
}
</script>
