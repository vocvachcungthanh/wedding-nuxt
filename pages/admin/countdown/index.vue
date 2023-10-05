<template>
  <div class="count-dow">
    <a-row>
      <a-col :lg="7" :xxl="6">
        <a-card
          title="Ngày chung ta về chung một nhà"
          :head-style="customHeadStyle"
        >
          <CountDown />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { CountDown } from '~/components/admin/countdowns'

export default {
  components: { CountDown },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      customHeadStyle: {
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    }
  },

  head() {
    return {
      title: 'Về một nhà',
    }
  },
}
</script>
