import {defineStore} from "pinia";
import _ from 'lodash'
import {useCatalystStore} from "./catalyst.js";



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
        getIntersection123(state) {
            let catalysts = [state.firstCatalyst, state.secondCatalyst, state.thirdCatalyst]
            let locations = [state.firstLocation, state.secondLocation, state.thirdLocation]

            let intersection = _.intersection(locations[0], locations[1])
            locations = _.intersection(intersection, locations[2])

            const catalyst = useCatalystStore()
            catalysts = [catalyst.getFirstCatalystName, catalyst.getSecondCatalystName, catalyst.getThirdCatalystName]

            if (_.isEmpty(locations)) {
                return null
            } else {
                return {"catalysts": _.join(catalysts, ' + '), "locations": _.join(locations, ', ')}
            }
        },
        getIntersection12(state) {
            let catalysts = [state.firstCatalyst, state.secondCatalyst]
            let locations = [state.firstLocation, state.secondLocation]

            const catalyst = useCatalystStore()
            catalysts = [catalyst.getFirstCatalystName, catalyst.getSecondCatalystName]

            locations = _.intersection(locations[0], locations[1])
            if (_.isEmpty(locations)) {
                return null
            } else {
                return {"catalysts": _.join(catalysts, ' + '), "locations": _.join(locations, ', ')}
            }
        },
        getIntersection13(state) {
            let catalysts = [state.firstCatalyst, state.thirdCatalyst]
            let locations = [state.firstLocation, state.thirdLocation]

            const catalyst = useCatalystStore()
            catalysts = [catalyst.getFirstCatalystName, catalyst.getThirdCatalystName]

            locations = _.intersection(locations[0], locations[1])
            if (_.isEmpty(locations)) {
                return null
            } else {
                return {"catalysts": _.join(catalysts, ' + '), "locations": _.join(locations, ', ')}
            }
        },
        getIntersection23(state) {
            let catalysts = [state.secondCatalyst, state.thirdCatalyst]
            let locations = [state.secondLocation, state.thirdLocation]

            const catalyst = useCatalystStore()
            catalysts = [catalyst.getSecondCatalystName, catalyst.getThirdCatalystName]

            locations = _.intersection(locations[0], locations[1])
            if (_.isEmpty(locations)) {
                return null
            } else {
                return {"catalysts": _.join(catalysts, ' + '), "locations": _.join(locations, ', ')}
            }
        },

        getFirstLocation(state) {
            return _.join(state.firstLocation, ', ')
        },
        getSecondLocation(state) {
            return _.join(state.secondLocation, ', ')
        },
        getThirdLocation(state) {
            return _.join(state.thirdLocation, ', ')
        },
    },

    actions: {

        searchLocations() {
            this.firstLocation = null
            this.secondLocation = null
            this.thirdLocation = null
            const catalysts = useCatalystStore()
            const collator = new Intl.Collator('en', {numeric: true, sensitivity: 'base'})
            let locations = catalysts.getCatalystLoc
            if (this.firstCatalyst) {
                this.firstLocation = (_.find(locations, {"id": this.firstCatalyst}).loc).sort((a, b) => {
                    return collator.compare(a, b)
                })
            }
            if (this.secondCatalyst) {
                this.secondLocation = (_.find(locations, {"id": this.secondCatalyst}).loc).sort((a, b) => {
                    return collator.compare(a, b)
                })
            }
            if (this.thirdCatalyst) {
                this.thirdLocation = (_.find(locations, {"id": this.thirdCatalyst}).loc).sort((a, b) => {
                    return collator.compare(a, b)
                })
            }
        },


    },



})