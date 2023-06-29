<template>
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
    <a-menu-item key="1">
      <nuxt-link to="/admin/sliders">
        <a-icon type="sliders" />
        <span>Sliders</span>
      </nuxt-link>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop" />
      <span> Albums </span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="user" /><span>User</span></span>
      <a-menu-item key="3"> Tom </a-menu-item>
      <a-menu-item key="4"> Bill </a-menu-item>
      <a-menu-item key="5"> Alex </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="team" /><span>Team</span></span>
      <a-menu-item key="6"> Team 1 </a-menu-item>
      <a-menu-item key="8"> Team 2 </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="9">
      <a-icon type="file" />
      <span>File</span>
    </a-menu-item>

    <a-menu-item key="10">
      <nuxt-link to="/admin/menus">
        <a-icon type="menu-unfold" />
        <span> Menu </span>
      </nuxt-link>
    </a-menu-item>
  </a-menu>
</template>
