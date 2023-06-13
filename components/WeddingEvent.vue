<template>
  <section id="wedding" class="wedding__event">
    <div class="container">
      <div class="wedding__event--header">
        <h3 class="wedding__event--title font__dancing">Sự Kiện Cưới</h3>
        <p class="wedding__event--info">
          Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm
          về cùng một hướng...
        </p>
      </div>

      <div class="wedding__event--content">
        <div
          v-for="item in getListWeddings"
          :key="item.wedding_id"
          class="wedding__event--product"
        >
          <h3 class="wedding__event-title">
            {{ item.wedding_title }}
          </h3>

          <div class="wedding__event--avatar">
            <img :src="item.wedding_avatar" alt="" />
          </div>

          <div class="wedding__event--time">
            {{ item.wedding_time }}
          </div>
          <p class="wedding__event--desc">
            {{ item.wedding_address }}
          </p>
          <a
            :href="item.wedding_map"
            target="_blank"
            class="link__map"
            title="click đễ xem địa chỉ trển google map"
          >
            Xem bản đồ
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import '~/assets/scss/components/CM_WeddingEvent.scss'

export default {
  name: 'WeddingEvent',

  computed: {
    ...mapGetters({
      getListWeddings: 'GET_LIST_WEDDINGS',
    }),
  },

  created() {
    this.actGetWeddings()
  },

  methods: {
    ...mapActions({
      actGetWeddings: 'ACT_GET_WEDDINGS',
    }),
  },
}
</script>
