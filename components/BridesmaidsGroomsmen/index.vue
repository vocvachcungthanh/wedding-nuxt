<template>
  <div id="bridesmaids-groomsmen" class="bridesmaids-groomsmen">
    <div class="container">
      <div class="bridesmaids-groomsmen__group font__dancing">
        <template v-if="!isLoadding">
          <ItemsVue :data-item="{ ...data.Bridesmaids, title: 'Phù dâu' }" />
          <ItemsVue :data-item="{ ...data.Groomsmen, title: 'Phù rể' }" />
        </template>

        <template v-if="isLoadding">
          <SkeletonItems v-for="(_item, index) in [1, 2]" :key="index" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemsVue from "./Items.vue";
import SkeletonItems from "./SkeletonItems.vue";

export default {
  name: "BridesmaidsGroomsmen",

  components: {
    ItemsVue,
    SkeletonItems,
  },

  data() {
    return {
      isLoadding: false,
    };
  },

  computed: {
    ...mapGetters({
      data: "GET_BRIDESMAIDS_GROOMSMEN",
    }),
  },

  async created() {
    this.isLoadding = true;
    await this.$store.dispatch("ACT_GET_BRIDESMAIDS_GROOMSMEN");
    this.isLoadding = false;
  },
};
</script>
