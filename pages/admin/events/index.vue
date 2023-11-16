<template>
  <div class="page-event">
    <a-card title="Sự kiện cưới">
      <a-row :gutter="[30, 30]">
        <a-col
          :sm="{ sapn: 24 }"
          :md="{ span: 24 }"
          :lg="{ span: 12 }"
          :xl="{ span: 6 }"
        >
          <GroomsFramily :grooms="events.Grooms" />
        </a-col>
        <a-col
          :sm="{ sapn: 24 }"
          :md="{ span: 24 }"
          :lg="{ span: 12 }"
          :xl="{ span: 6 }"
        >
          <BridesFramily :brides="events.Brides" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { BridesFramily, GroomsFramily } from "~/components/admin/events";

export default {
  components: {
    BridesFramily,
    GroomsFramily,
  },

  layout() {
    return "LayoutAdmin";
  },

  data() {
    return {};
  },

  head() {
    return {
      title: "Sự kiện cưới",
    };
  },

  computed: {
    ...mapGetters({
      events: "GET_EVENTS",
    }),
  },

  async created() {
    await this.$store.dispatch("ACT_SET_KEY_MENU", 5);
    await this.getEvents();
  },

  methods: {
    ...mapActions({
      getEvents: "ACT_GET_EVENTS",
    }),
  },
};
</script>
