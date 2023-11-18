<template>
  <div class="page_album">
    <a-row type="flex">
      <a-col :xs="24" :sm="16" :md="14" :lg="12" :xl="10" :xxl="7">
        <a-card title="Quản lý Album" class="col">
          <a-button slot="extra" type="primary">
            <nuxt-link :to="{ name: 'admin-albums' }">
              <a-icon type="unordered-list" /> danh sách slider
            </nuxt-link>
          </a-button>

          <slot></slot>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
