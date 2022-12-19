import {defineStore} from "pinia";
import _ from 'lodash'

export const useCatalystStore = defineStore({
    id: "catalystStore",
    state: () => ({
        catalyst: [
            {id: 1, name: "Mercenary's Medicine", loc: ["1-2", "1-3", "1-7"]},
            {id: 2, name: "Fighter Medal", loc: ["1-3", "1-5", "1-9"]},
            {id: 3, name: "Horn of Desire", loc: ["1-5", "1-7", "1-10", "1-3"]},
            {id: 4, name: "empty", loc: []},
        ]
    }),
    getters: {
        getCatalystList: (state) => {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'name']))
        },
        getCatalystLoc: (state) => {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'loc']))
        },
    }

})