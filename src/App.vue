<script setup>
import Main from './components/Main.vue'
import Filter from './components/Filter.vue'
import {NLayoutSider, NLayoutContent, NSpace, NLayout, NConfigProvider} from 'naive-ui'
import { darkTheme } from 'naive-ui'


</script>

<template>
  <n-config-provider :theme="darkTheme">
  <n-space vertical size="large">
    <n-layout has-sider position="absolute">
      <n-layout-sider
          collapse-mode="width"
          :collapsed-width="40"
          :show-collapsed-content="false"
          show-trigger="bar"
          content-style="padding: 24px; max-width: 95vw"
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
