<template>
  <a-table
    bordered
    :data-source="albums.map((record) => ({ ...record, key: record.id }))"
    :columns="columns"
    :pagination="{ total: TotalPage, pageSize: initPage.limit }"
    :loading="loading"
    :scroll="{ x: 1610 }"
    @change="handleTableChange"
  >
    <template slot="keyGoogle" slot-scope="text, record">
      <ThumbnailAlbumTable
        :data-item="{ image: record.image, title: record.title }"
      />
    </template>
    <template slot="status" slot-scope="tex, record">
      <StatusAlbumTable :data-item="record" />
    </template>
    <template slot="delete" slot-scope="text, record">
      <DeleteAlbumTable :data-item="record" />

      <EditAlbumTable :data-item="record" />
    </template>
  </a-table>
</template>
<script>
import { mapGetters } from "vuex";
import {
  StatusAlbumTable,
  ThumbnailAlbumTable,
  DeleteAlbumTable,
  EditAlbumTable,
} from "./tables/index.js";

export default {
  name: "TableAlbum",
  components: {
    StatusAlbumTable,
    ThumbnailAlbumTable,
    DeleteAlbumTable,
    EditAlbumTable,
  },

  data() {
    return {
      dataSource: [],
      columns: [
        {
          title: "Ảnh",
          dataIndex: "image",
          width: "8%",
          scopedSlots: { customRender: "keyGoogle" },
          align: "center",
          key: "image",
        },
        {
          title: "Tên",
          dataIndex: "title",
          align: "left",
          key: "title",
        },
        {
          title: "link",
          dataIndex: "url",
          align: "left",
          key: "url",
        },
        {
          title: "Key google",
          dataIndex: "google_id",
          align: "left",
          key: "google_id",
        },
        {
          title: "Mô  tả",
          dataIndex: "desc",
          align: "left",
          key: "desc",
        },
        {
          title: "Trạng thái",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          align: "left",
          key: "status",
        },
        {
          title: "Ngày khởi tạo",
          dataIndex: "created_at",
          align: "left",
          key: "created_at",
        },
        {
          title: "Ngày cập nhật",
          dataIndex: "updated_at",
          align: "left",
          key: "updated_at",
        },
        {
          title: "Hành động",
          align: "left",
          dataItem: "delete",
          scopedSlots: { customRender: "delete" },
          key: "action",
        },
      ],
      initPage: {
        limit: 10,
        page: 1,
      },
      loading: false,
    };
  },

  computed: {
    TotalPage() {
      return this.getAlbums.total || 0;
    },

    albums() {
      return this.getAlbums.data || [];
    },
    ...mapGetters({
      getAlbums: "GET_LIST_ALBUM_ADMIN",
    }),
  },

  async created() {
    this.loading = true;
    await this.$store.dispatch("ACT_GET_ALBUM_ADMIN", this.initPage);
    this.loading = false;
  },

  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find((item) => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },

    async handleTableChange(pagination) {
      this.loading = true;
      await this.$store.dispatch("ACT_GET_ALBUM_ADMIN", {
        limit: this.initPage.limit,
        page: pagination.current,
        total: pagination.total,
      });
      this.loading = false;
    },
  },
};
</script>
