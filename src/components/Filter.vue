<script setup>
import {NSpace, NCard, NSelect, NDivider, NButton} from 'naive-ui'
import {useCatalystStore} from "../stores/catalyst.js";
import {useHeroStore} from "../stores/hero.js";
import {useFilterStore} from "../stores/filter.js";
import {ref, toRaw} from "vue";
import _ from "lodash";

//Stores
const catalystStore = useCatalystStore()
const heroStore = useHeroStore()
const filterStore = useFilterStore()

//Getters

const catalysts = catalystStore.getCatalystList
const heroes = heroStore.getHeroList

//refs
const selectedValue0 = ref(null)
const selectedValue1 = ref(null)
const selectedValue2 = ref(null)
const selectedHero = ref(null)



//Filter update
function setCatalystFilter0 () {
  filterStore.$patch({firstCatalyst: selectedValue0.value})
}
function setCatalystFilter1 () {
  filterStore.$patch({secondCatalyst: selectedValue1.value})
}
function setCatalystFilter2 () {
  filterStore.$patch({thirdCatalyst: selectedValue2.value})
}

function setHeroFilter () {
  let first = 1
  let second = 2
  let third = 3
  filterStore.$patch({
    firstCatalyst: first,
    secondCatalyst: second,
    thirdCatalyst: third
  })
  selectedValue0.value = first
  selectedValue1.value = second
  selectedValue2.value = third

}

//Search Button Handler
function handleSearch() {
  filterStore.searchLocations()
}

</script>

<template>
  <n-space vertical size="large">
    <n-card style="height: 20vh">
      <h2>Choose a Hero</h2>
      <n-divider/>
      <n-select
          style="margin-top: 10px"
          filterable
          placeholder="Please select a hero"
          v-model:value="selectedHero"
          :options="heroes"
          label-field="name"
          value-field="id"
          @update:value="setHeroFilter()"
      >
      </n-select>
    </n-card>
    <n-card style="height: 30vh">
      <h2>or choose catalysts</h2>
      <n-divider/>
      <n-select
          clearable
          style="margin-top: 10px"
          filterable
          placeholder="Please select a catalyst"
          v-model:value="selectedValue0"
          :options="catalysts"
          label-field="name"
          value-field="id"
          @update:value="setCatalystFilter0()"
      >
      </n-select>
      <n-select
          clearable
          style="margin-top: 20px"
          filterable
          placeholder="Please select a catalyst"
          :options="catalysts"
          v-model:value="selectedValue1"
          label-field="name"
          value-field="id"
          @update:value="setCatalystFilter1()"
      >
      </n-select>
      <n-select
          clearable
          style="margin-top: 20px"
          filterable
          placeholder="Please select a catalyst"
          :options="catalysts"
          v-model:value="selectedValue2"
          label-field="name"
          value-field="id"
          @update:value="setCatalystFilter2()"
      >
      </n-select>
    </n-card>
    <n-button @click="handleSearch">
      Search locations
    </n-button>

  </n-space>

</template>

<style scoped>
.n-button {
  margin-top: 20px
}
</style>
