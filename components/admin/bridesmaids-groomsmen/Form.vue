<template>
  <div id="components-form-demo-vuex">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <PreviewAlbumForm
          class-view="view__couple"
          :image="viewImage"
          :loading="loading"
          @file="handleFile"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'name',
            {
              initialValue: items.name,
              rules: [
                {
                  required: true,
                  message: 'Nhập tên !',
                },
              ],
            },
          ]"
          placeholder="Nhập tên ... "
          @change="handleChange"
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
          placeholder="Nhập link avatar ..."
          @change="handleChange"
        />
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
  </div>
</template>

<script>
import { PreviewAlbumForm } from "~/components/common/forms/index.js";
import { MwHandle, keyGoogle } from "~/libraries/helpers";

const intiState = {
  avatar: "",
  name: "",

  google_id: "",
  source_id: 1,
};
export default {
  name: "FormCouple",

  components: {
    PreviewAlbumForm,
  },

  props: {
    items: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, intiState),
      loading: false,
      linkImage: "",
    };
  },

  computed: {
    viewImage() {
      return this.linkImage || this.items.avatar;
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
