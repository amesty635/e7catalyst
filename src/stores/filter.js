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
        getOptimal(state) {
            if (!state.thirdLocation) {
                let firstLocation = _.split(state.firstLocation, ',')
                let secondLocation = _.split(state.secondLocation, ',')
                let intersectOfTwo = _.intersectionWith(firstLocation, secondLocation, _.isEqual)

                if (_.isEmpty(intersectOfTwo) || intersectOfTwo == "") {
                    return ('No optimal place to farm, farm separately')
                } else {
                    return _.toString(intersectOfTwo)
                }
            } else {
                let firstLocation = _.split(state.firstLocation, ',')
                let secondLocation = _.split(state.secondLocation, ',')
                let thirdLocation = _.split(state.thirdLocation, ',')
                let intersectOfTwo = _.intersection(firstLocation, secondLocation)
                if (_.isEmpty(intersectOfTwo)) {
                    intersectOfTwo = _.concat(firstLocation, secondLocation)
                    let intersectOfThree = _.intersection(intersectOfTwo, thirdLocation)
                    if (_.isEmpty(intersectOfThree)) {
                        return ('No optimal place to farm, farm separately')
                    } else {
                        return _.toString(intersectOfThree)
                    }
                } else {
                    let intersectOfThree = _.intersection(intersectOfTwo, thirdLocation)
                    if (_.isEmpty(intersectOfThree)) {
                        return ('No optimal place to farm, farm separately')
                    } else {
                        return _.toString(intersectOfThree)
                    }
                }
            }
        }
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