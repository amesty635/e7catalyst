<script setup>
import {useCatalystStore} from "../stores/catalyst.js";
import {useHeroStore} from "../stores/hero.js";
import {useFilterStore} from "../stores/filter.js";
import {NLayout, NLayoutSider, NLayoutContent, NCard} from "naive-ui";
import {computed} from "vue";
import _ from "lodash";


const catalystStore = useCatalystStore()
const heroStore = useHeroStore()
const filterStore = useFilterStore()

const noCatalysts = computed(() => {
  return ((!filterStore.getIntersection123 && !filterStore.getIntersection12 && !filterStore.getIntersection13 && !filterStore.getIntersection23
  ) && (
      !_.isNil(filterStore.firstCatalyst) || !_.isNil(filterStore.secondCatalyst) || !_.isNil(filterStore.thirdCatalyst)
  ))
})

const noHeroSelected = computed(() => {
  return !filterStore.firstCatalyst && !filterStore.secondCatalyst && !filterStore.thirdCatalyst
})



</script>

<template>
  <n-layout v-if="noHeroSelected === true"  h-screen  embedded content-style="padding: 24px;">
    <n-card >
      Please consider to select Hero or Catalyst
    </n-card>
  </n-layout>
  <n-layout  v-if="noHeroSelected === false" has-sider>
    <n-layout-sider content-style="padding: 24px;">
      Locations with two or more Catalysts
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <div table-empty-cells-hidden>
        <div table-row>
          <div table-cell p-2 v-if="filterStore.getIntersection123">
            <div>
              {{ filterStore.getIntersection123.catalysts }}
            </div>
            <hr>
            <div>
              {{ filterStore.getIntersection123.locations }}
            </div>
          </div>
          <div table-cell p-2 v-if="filterStore.getIntersection12">
            <div>
              {{ filterStore.getIntersection12.catalysts }}
            </div>
            <hr>
            <div>
              {{ filterStore.getIntersection12.locations }}
            </div>
          </div>
          <div table-cell p-2 v-if="filterStore.getIntersection13">
            <div>
              {{ filterStore.getIntersection13.catalysts }}
            </div>
            <hr>
            <div>
              {{ filterStore.getIntersection13.locations }}
            </div>
          </div>
          <div table-cell p-2 v-if="filterStore.getIntersection23">
            <div>
              {{ filterStore.getIntersection23.catalysts }}
            </div>
            <hr>
            <div>
              {{ filterStore.getIntersection23.locations }}
            </div>
          </div>
          <div v-if="noCatalysts === true" w-screen table-cell p-2 text-left >
            No matches found
          </div>

        </div>
      </div>
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{ catalystStore.getFirstCatalystName }}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;" text-left>
      {{ filterStore.getFirstLocation }}
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{ catalystStore.getSecondCatalystName }}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;" text-left>
      {{ filterStore.getSecondLocation }}
    </n-layout-content>
  </n-layout>
  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">
      {{ catalystStore.getThirdCatalystName }}
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;" text-left>
      {{ filterStore.getThirdLocation }}
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
