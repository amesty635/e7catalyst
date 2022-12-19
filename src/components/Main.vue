<script setup>
import {useCatalystStore} from "../stores/catalyst.js";
import {useHeroStore} from "../stores/hero.js";
import {useFilterStore} from "../stores/filter.js";
import {NLayout, NLayoutSider, NLayoutContent} from "naive-ui";

const catalystStore = useCatalystStore()
const heroStore = useHeroStore()
const filterStore = useFilterStore()

</script>

<template>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      Optimal
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      {{filterStore.getOptimal}}
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{catalystStore.getFirstCatalystName}}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      {{filterStore.firstLocation}}
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{catalystStore.getSecondCatalystName}}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      {{ filterStore.secondLocation }}
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{catalystStore.getThirdCatalystName}}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      {{ filterStore.thirdLocation }}
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
