<script setup>
import Main from './components/Main.vue'
import Filter from './components/Filter.vue'
import {NLayoutSider, NLayoutContent, NSpace, NLayout, NConfigProvider, NLayoutHeader} from 'naive-ui'
import { darkTheme } from 'naive-ui'

</script>

<template>
  <n-config-provider :theme="darkTheme">
  <n-space vertical size="large">
    <n-layout has-sider position="absolute">
      <n-layout-sider
          collapse-mode="width"
          :collapsed-width="120"
          :show-collapsed-content="false"
          :width="480"
          show-trigger="bar"
          content-style="padding: 24px;"
          bordered
      >
        <Filter/>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <Main/>
      </n-layout-content>
    </n-layout>
    </n-space>
  </n-config-provider>
</template>

<style scoped>

</style>
