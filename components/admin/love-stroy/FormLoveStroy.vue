<template>
  <Drawer :title="title">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <PreviewLoverStory
          :image="viewImage"
          :loading="loading"
          class-view="view__event"
          @file="handleFile"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'avatar',
            {
              initialValue: items.avatar,
              rules: [
                {
                  validator: validateImageURL,
                },
              ],
            },
          ]"
          placeholder="Nhập link ảnh ..."
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'title',
            {
              initialValue: items.title,
              rules: [
                {
                  required: true,
                  message: 'Nhập tiêu đề !',
                },
              ],
            },
          ]"
          placeholder="Nhập tiêu đề ... "
          @change="handleChange"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'date',
            {
              initialValue: items.date,
              rules: [
                {
                  required: true,
                  message: 'Nhập thời điểm câu chuyện !',
                },
              ],
            },
          ]"
          placeholder="Thời điểm câu chuyện ..."
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-textarea
          v-decorator="[
            'desc',
            {
              initialValue: items.desc,
              rules: [{ required: true, message: 'Nhập mô tả câu chuyện!' }],
            },
          ]"
          placeholder="Mô tả câu chuyện ..."
          :auto-size="{ minRows: 4 }"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-radio-group
          v-decorator="[
            'status',
            {
              initialValue: items.status,
            },
          ]"
          name="radioGroup"
        >
          <a-radio :value="1"> Hiển thị </a-radio>
          <a-radio :value="0"> Ẩn</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item class="hidden">
        <a-input
          v-decorator="[
            'google_id',
            {
              initialValue: items.google_id,
            },
          ]"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item class="hidden">
        <a-input
          v-decorator="[
            'id',
            {
              initialValue: items.id,
            },
          ]"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item class="hidden">
        <a-input
          v-decorator="[
            'source_id',
            {
              initialValue: items.source_id,
            },
          ]"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="w-full">
          Cập nhật
        </a-button>
      </a-form-item>
    </a-form>
  </Drawer>
</template>

<script>
import { mapState } from "vuex";

import Drawer from "~/components/common/Drawer.vue";
import { PreviewAlbumForm } from "~/components/common/forms/index.js";
import { MwHandle, keyGoogle } from "~/libraries/helpers";

const initState = {
  avatar: "",
  title: "",
  desc: "",
  date: "",
  google_id: "",
  source_id: 1,
  status: 1,
};
export default {
  components: {
    PreviewLoverStory: PreviewAlbumForm,
    Drawer,
  },

  props: {
    result: {
      type: Boolean,
      default: Boolean,
    },
  },

  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, initState),
      loading: false,
      linkImage: "",

      title: "Thêm mới câu chuyện",
    };
  },

  computed: {
    viewImage() {
      return this.linkImage || this.items.avatar;
    },

    ...mapState({
      items: (state) => state.storeLoveStory.dataFromLoveStory,
    }),
  },

  watch: {
    result() {
      if (this.result) {
        this.linkImage = "";
        this.form.resetFields();

        this.$emit("result", false);
      }
    },

    items() {
      if (this.items.id) {
        return (this.title = "Sửa câu chuyện");
      } else {
        return (this.title = "Thêm mới câu chuyện");
      }
    },
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit("submit", values);
        }
      });
    },

    async handleFile(file) {
      this.loading = true;

      // eslint-disable-next-line prefer-const
      let formData = new FormData();

      formData.append("file", file);

      formData.append("google_id", this.items.google_id);

      await this.$store
        .dispatch("ACT_UPLOAD_FILES", formData)
        .then((res) => {
          this.linkImage = res;
          this.form.setFieldsValue({
            avatar: res,
            source_id: 2,
            google_id: keyGoogle(res),
          });
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          });
        });

      this.loading = false;
    },

    handleChange(e) {
      const filedName = e.target.id;

      const googleId = this.items.google_id;

      if (filedName === "avatar") {
        if (googleId) {
          this.handleDeleteImage(googleId);
        }

        this.linkImage = e.target.value;

        this.form.setFieldsValue({
          source_id: 1,
          google_id: "",
        });
      }
    },

    async handleDeleteImage(googleId) {
      this.loading = true;

      await this.$store
        .dispatch("ACT_DELETE_IMAGE", googleId)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          });
        });

      this.loading = false;
    },

    validateImageURL(rule, value, callback) {
      if (!value) {
        callback(new Error("Link ảnh đại diện không được để trống"));
      } else {
        const img = new Image();
        img.onload = () => {
          // Hình ảnh hợp lệ
          callback();
        };
        img.onerror = () => {
          // Hình ảnh không hợp lệ
          callback(new Error("Link ảnh đại diện không hợp lệ"));
        };
        img.src = value;
      }
    },
  },
};
</script>
