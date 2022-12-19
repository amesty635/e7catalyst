import {defineStore} from "pinia";
import _ from 'lodash'
import {useCatalystStore} from "./catalyst.js";
import {toRaw} from "vue";


export const useFilterStore = defineStore({
    id: "filterStore",
    state: () => ({

        firstCatalyst: null,
        secondCatalyst: null,
        thirdCatalyst: null,

        firstLocation: null,
        secondLocation: null,
        thirdLocation: null,

        selectedZodiac: null,


    }),

    getters: {
        getOptimal: (state) => {
            if (!state.thirdLocation) {
                let intersectOfTwo = _.intersection(state.firstLocation, state.secondLocation)
                if (_.isEmpty(intersectOfTwo)) {
                    return ('No optimal place to farm, farm separately')
                } else {
                    return intersectOfTwo
                }
            } else {
                let intersectOfTwo = _.intersection(state.firstLocation, state.secondLocation)
                let intersectOfThree = _.intersection(intersectOfTwo, state.thirdLocation)
                if (_.isEmpty(intersectOfThree)) {
                    return intersectOfTwo
                } else {
                    return intersectOfThree
                }
            }
        },


    },

    actions: {

        searchLocations() {
            this.firstLocation = null
            this.secondLocation = null
            this.thirdLocation = null
            const catalysts = useCatalystStore()
            let locations = catalysts.getCatalystLoc
            if (this.firstCatalyst) {
                this.firstLocation = toRaw((_.find(locations, {"id": this.firstCatalyst})).loc)
            }
            if (this.secondCatalyst) {
                this.secondLocation = toRaw((_.find(locations, {"id": this.secondCatalyst})).loc)
            }
            if (this.thirdCatalyst) {
                this.thirdLocation = toRaw((_.find(locations, {"id": this.thirdCatalyst})).loc)
            }
        },


    },



})