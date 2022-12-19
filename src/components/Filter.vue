<script setup>
import {NSpace, NCard, NSelect, NDivider, NButton} from 'naive-ui'
import {useCatalystStore} from "../stores/catalyst.js";
import {useHeroStore} from "../stores/hero.js";
import {useFilterStore} from "../stores/filter.js";
import {ref} from "vue";
import _ from "lodash";

//Stores
const catalystStore = useCatalystStore()
const heroStore = useHeroStore()
const filterStore = useFilterStore()

//Getters

const catalysts = catalystStore.getCatalystList
const heroes = heroStore.getHeroList
const zodiacs = heroStore.getZodiacList

//refs
const selectedValue0 = ref(null)
const selectedValue1 = ref(null)
const selectedValue2 = ref(null)
const selectedHero = ref(null)


//Filter update
function setCatalystFilter0() {
  filterStore.$patch({firstCatalyst: selectedValue0})
}

function setCatalystFilter1() {
  filterStore.$patch({secondCatalyst: selectedValue1})
}

function setCatalystFilter2() {
  filterStore.$patch({thirdCatalyst: selectedValue2})
}

function setHeroFilter() {

  let zodiac = (_.find(heroes, {"id": this.selectedHero}).zodiac)
  filterStore.$patch({selectedZodiac: zodiac})

  filterStore.$patch({
    firstCatalyst: (_.find(zodiacs, {"name": filterStore.selectedZodiac}).primary),
    secondCatalyst: (_.find(zodiacs, {"name": filterStore.selectedZodiac}).secondary),
    thirdCatalyst: (_.find(zodiacs, {"name": filterStore.selectedZodiac}).skillup)
  })

  selectedValue0.value = filterStore.firstCatalyst
  selectedValue1.value = filterStore.secondCatalyst
  selectedValue2.value = filterStore.thirdCatalyst

}

//Search Button Handler
function handleSearch() {
  filterStore.searchLocations()
}

function handleClear() {
  filterStore.$reset()
  selectedValue0.value = null
  selectedValue1.value = null
  selectedValue2.value = null
  selectedHero.value = null

}

</script>

<template>
  <n-space vertical size="large">
    <n-card style="height: 20vh">
      <h2>Choose a Hero</h2>
      <n-divider/>
      <n-select
          clearable
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
    <n-space justify="center">
      <n-button @click="handleClear">
        Clear filter
      </n-button>
      <n-button @click="handleSearch">
        Search locations
      </n-button>
    </n-space>

  </n-space>

</template>

<style scoped>
.n-button {
  margin-top: 20px
}
</style>
