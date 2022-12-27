import {defineStore} from "pinia";
import _ from 'lodash'
import {useFilterStore} from "./filter.js";


export const useCatalystStore = defineStore({
    id: "catalystStore",
    state: () => ({
        catalyst: [
            {
                "id": 1,
                "name": "Ancient Creature Nucleus",
                "isEpic": "true",
                "loc": ["UH-7-4","UH-7-S6"]
            },
            {
                "id": 2,
                "name": "Black Curse Powder",
                "isEpic": "true",
                "loc": ["UH-3-7","UH-8-10","UH-9-S4","UH-10-S2"]
            },
            {
                "id": 3,
                "name": "Blazing Soul",
                "isEpic": "true",
                "loc": ["UH-4-9"]
            },
            {
                "id": 4,
                "name": "Demon Blood Gem",
                "isEpic": "true",
                "loc": ["UH-1-10","UH-2-10","UH-5-6","UH-6-10","UH-10-10"]
            },
            {
                "id": 5,
                "name": "Dragon's Wrath",
                "isEpic": true,
                "loc": ["UH-3-S3"]
            },
            {
                "id": 6,
                "name": "Fighter Medal",
                "isEpic": true,
                "loc": ["UH-4-7","UH-6-7","UH-7-S2","UH-9-2","UH-9-10","UH-10-7","UH-10-8","UH-10-S3","UH-1-S2"]
            },
            {
                "id": 7,
                "name": "Fused Nerve",
                "isEpic": true,
                "loc": ["UH-2-S3","UH-9-8","UH-9-S6"]
            },
            {
                "id": 8,
                "name": "Horn of Desire",
                "isEpic": true,
                "loc": ["UH-8-5","UH-8-7","UH-8-S3"]
            },
            {
                "id": 9,
                "name": "Mercenary's Medicine",
                "isEpic": true,
                "loc": ["UH-2S-S3","UH-2S-S5","UH-3S-4","UH-3S-5","UH-3S-S2","UH-3-S2","UH-4-4","UH-4-S3","UH-5-S6","UH-6-4","UH-7-S1"]
            },
            {
                "id": 10,
                "name": "Nightmare Mask",
                "isEpic": true,
                "loc": ["UH-8S-S3","UH-8S-S4","UH-2-S6","UH-6-9"]
            },
            {
                "id": 11,
                "name": "Reingar Student ID",
                "isEpic": true,
                "loc": ["UH-2-2","UH-2-3","UH-2-6","UH-5S-5"]
            },
            {
                "id": 12,
                "name": "The Heart of Hypocrisy",
                "isEpic": true,
                "loc": ["UH-9-3","UH-9-9","UH-9-10","UH-10-4"]
            },
            {
                "id": 20,
                "name": "Archer's Vision",
                "isEpic": false,
                "loc": ["UH-1-S3","UH-4-S6","UH-4-9","UH-6-S3","UH-7-7","UH-7-8","UH-7-9","UH-7-10","UH-10-7"]
            },
            {
                "id": 21,
                "name": "Baby Mouse Insignia",
                "isEpic": false,
                "loc": ["UH-3S-2","UH-3S-4","UH-5S-S1","UH-5S-2","UH-5S-5","UH-3-S1","UH-3-2","UH-3-3","UH-3-8","UH-4-3","UH-4-4","UH-4-S7","UH-7-S1","UH-7-S4","UH-7-S5"]
            },
            {
                "id": 22,
                "name": "Blazing Rage",
                "isEpic": false,
                "loc": ["UH-10-6","UH-7-S2","UH-7-S3","UH-7-S4","UH-7-S5","UH-6-S5","UH-5-S5","UH-5-S6","UH-5-4","UH-5-5","UH-5-6","UH-4-S8","UH-4S-9","UH-4-S10","UH-4-S12","UH-4-2","UH-4-S6","UH-4-S5","UH-4-S3","UH-3-6","UH-3-S3","UH-4-1-S5","UH-4-1S4","UH-4-1-S2","UH-5S-3","UH-3S-2","UH-2S-S5"]
            },
            {
                "id": 23,
                "name": "Blessing of Orbis",
                "isEpic": false,
                "loc": ["UH-7-1","UH-7-2","UH-7-3","UH-7-S1","UH-7-S2","UH-7-S3","UH-6-S2","UH-6-S4","UH-5-S1","UH-5-S2","UH-5-S5","UH-4-6","UH-4-10","UH-4-S9","UH-4-5","UH-4-S1","UH-4-S2","UH-4-S4","UH-2-1","UH-2-S2","UH-2-S3","UH-2-S4","UH-2-S5","UH-2-S6","UH-1-6","UH-1-7","UH-1-S1","UH-1-S2","UH-1-S5","UH-1-S6","UH-8S-1","UH-8S-2","UH-8S-4","UH-8S-5","UH-5S-4","UH-3S-S1","UH-2S-S1","UH-2S-S2","UH-2S-S3","UH-2S-S4","UH-2S-S6"]
            },
            {
                "id": 24,
                "name": "Blood Flaked Bone",
                "isEpic": false,
                "loc": ["UH-10-S2","UH-10-S3","UH-9-S4","UH-8-7","UH-8-9","UH-8-10","UH-3-5","UH-3-7","UH-1-9","UH-1-10","UH-8S-6,UH-8S-7"]
            },
            {
                "id": 25,
                "name": "Cold Look",
                "isEpic": false,
                "loc": ["UH-6-S6","UH-8-4","UH-8-5","UH-8-6","UH-8-7","UH-8-8","UH-8-9","UH-8-10"]
            },
            {
                "id": 26,
                "name": "Cursed Ashes",
                "isEpic": false,
                "loc": ["UH-10-S3","UH-10-S2","UH-9-S4","UH-8-7","UH-8-8","UH-8-10","UH-3-5","UH-3-7","UH-1-9","UH-1-10","UH-8S-6","UH-8S-7"]
            },
            {
                "id": 27,
                "name": "Dream Time Circuit",
                "isEpic": false,
                "loc": ["UH-2-10","UH-2-S6","UH-4-S9","UH-6-9","UH-7-4","UH-7-5","UH-3S-3","UH-3S-6","UH-8S-S1","UH-8S-S2","UH-8S-S3","UH-8S-S4"]
            },
            {
                "id": 28,
                "name": "Erikion Carapace",
                "isEpic": false,
                "loc": ["UH-8-1","UH-8-2","UH-8-3","UH-5-1","UH-5-2","UH-5-6","UH-3-2","UH-3-4","UH-3-S2","UH-3-S4","UH-5S-1","UH-5S6","UH-3S-1","UH-3S-3","UH-3S-5","UH-3S-6"]
            },
            {
                "id": 29,
                "name": "Eternal Forest Dust",
                "isEpic": false,
                "loc": ["UH-8-1","UH-8-2","UH-8-3,UH-8-S1","UH-7-1","UH-7-2","UH-7-3","UH-7-S1","UH-7-S3","UH-5-2","UH-5-3","UH-5-7","UH-5-8","UH-5-9","UH-5-10","UH-5-S4","UH-5-S5","UH-4-6","UH-4-S2","UH-2-S3","UH-2-S6","UH-2-S5","UH-1-3","UH-1-4","UH-1-5","UH-1-S2","UH-8S-1","UH-8S-2","UH-8S-3","UH-8S-4","UH-8S-5","UH-8S-6","UH-5S-4","UH-3S-S2","UH-2S-S1"]
            },
            {
                "id": 30,
                "name": "Flame of Soul",
                "isEpic": false,
                "loc": ["UH-10-4","UH-10-5","UH-10-10","UH-10-S1","UH-9-3","UH-9-6","UH-9-7","UH-9-8","UH-9-9","UH-9-S2","UH-9-S3","UH-9-S5","UH-9-S6","UH-7-6","UH-7-8","UH-7-9","UH-4-S11"]
            },
            {
                "id": 31,
                "name": "Leather Sheath",
                "isEpic": false,
                "loc": ["UH-7-6","UH-7-8","UH-7-9","UH-7-10","UH-6-S3","UH-4-7","UH-4-8","UH-4-9"]
            },
            {
                "id": 32,
                "name": "Mysterious Flash",
                "isEpic": false,
                "loc": ["UH-2-1","UH-2-S1","UH-2-S2","UH-2-S3","UH-4-S11","UH-4-S12","UH-5-S2","UH-5-S3","UH-6-2","UH-6-6","UH-6-7","UH-6-8","UH-6-10","UH-6-S5","UH-6-S6","UH-9-6","UH-5S-6","UH-5S-7"]
            },
            {
                "id": 33,
                "name": "Order of the Shield Insignia",
                "isEpic": false,
                "loc": ["UH-6-2","UH-6-3","UH-6-4","UH-6-6","UH-6-7","UH-6-8","UH-6-10"]
            },
            {
                "id": 34,
                "name": "Path Power Loop",
                "isEpic": false,
                "loc": ["UH-10-1","UH-10-8","UH-10-9","UH-9-S5","UH-9-S6","UH-6-8","UH-6-10","UH-2-2","UH-2-3","UH-2-4","UH-2-5","UH-2-6","UH-2-7","UH-2-8","UH-2-S1"]
            },
            {
                "id": 35,
                "name": "Ring of Glory",
                "isEpic": false,
                "loc": ["UH-10-1","UH-10-3","UH-10-4","UH-10-5","UH-10-7","UH-10-8","UH-10-9","UH-9-10","UH-9-1","UH-9-2","UH-9-3","UH-9-4","UH-9-5"]
            },
            {
                "id": 36,
                "name": "Sharp Spearhead",
                "isEpic": false,
                "loc": ["UH-7-6","UH-7-7","UH-7-8","UH-7-10","UH-4-7","UH-4-8","UH-4-9","UH-4-S6","UH-1-S2","UH-1-S3","UH-8S-1","UH-3S-4","UH-3S-5"]
            },
            {
                "id": 37,
                "name": "Shiny Enchantment",
                "isEpic": false,
                "loc": ["UH-7-S6","UH-6-S2","UH-5-3","UH-5-4","UH-5-9","UH-5-10","UH-5-S1","UH-5-S3","UH-5-S4","UH-5-S6","UH-4-S5","UH-4-S6","UH-1-8","UH-1-S4","UH-2S-5S"]
            },
            {
                "id": 38,
                "name": "Slime Jelly",
                "isEpic": false,
                "loc": ["UH-9-S1","UH-9-S2","UH-9-S3","UH-7-1","UH-7-2","UH-7-3","UH-7-S1","UH-7-S2","UH-6-S1","UH-6-S3","UH-6-S4","UH-5-S1","UH-5-S3","UH-4-S8","UH-4-1","UH-4-2","UH-4-S1","UH-4-S4","UH-3-6","UH-3-S1","UH-2-S4","UH-2-S5","UH-2-S6","UH-1-1","UH-1-2","UH-1-3","UH-1-6","UH-1-8","UH-1-S1","UH-1-S4","UH-1-S5","UH-1-S6","UH-8S-1","UH-8S-2","UH-8S-4","UH-8S-5","UH-3S-S2","UH-2S-3-1","UH-2S-S1","UH-2S-S4","UH-2S-S6"]
            },
            {
                "id": 39,
                "name": "Small Sun Badge",
                "isEpic": false,
                "loc": ["UH-10-1","UH-10-3","UH-10-5","UH-10-7","UH-10-9","UH-9-10","UH-9-3","UH-9-4","UH-9-5","UH-7-6","UH-4-8","UH-4-9"]
            },
            {
                "id": 40,
                "name": "Special Alarm Loop",
                "isEpic": false,
                "loc": ["UH-10-8","UH-10-9","UH-9-S5","UH-9-S6","UH-9-4","UH-6-2","UH-6-3","UH-6-4","UH-6-6","UH-6-8","UH-2-2","UH-2-3","UH-2-4","UH-2-5","UH-2-6","UH-2-7","UH-2-8"]
            },
            {
                "id": 41,
                "name": "Strange Jelly",
                "isEpic": false,
                "loc": ["UH-10-1","UH-10-2","UH-10-10","UH-10-S2","UH-9-7","UH-9-8","UH-9-S4","UH-9-S5","UH-9-S3","UH-7-9","UH-6-S6","UH-5-S2","UH-4-S12","UH-4-S11","UH-1-10","UH-8S-7","UH-8S-S1","UH-8S-S2","UH-8S-S3","UH-8S-S4","UH-5S-6","UH-5S-7","UH-82S-S6"]
            },
            {
                "id": 42,
                "name": "Twisted Fang",
                "isEpic": false,
                "loc": ["UH-8-4","UH-8-5","UH-8-6","UH-8-8","UH-8-8","UH-8-9","UH-8-10","UH-8-S2","UH-8-S3"]
            },
            {
                "id": 43,
                "name": "Ultra Fang",
                "isEpic": false,
                "loc": ["UH-7-S6","UH-6-1","UH-6-5","UH-6-S1","UH-6-S2","UH-6-S3","UH-6-S5","UH-5-7","UH-5-8","UH-4-S10","UH-4-S12","UH-4-S3","UH-4-S5","UH-4-S6","UH-2-S2","UH-1-4","UH-1-5","UH-1-S1","UH-1-S6","UH-8S-3","UH-8S-4","UH-8S-5","UH-5S-2","UH-5S-4","UH-5S-5","UH-3S-2","UH-2S-S2","UH-2S-S3"]
            }
        ]

    }),
    getters: {
        getCatalystList (state) {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'name']))
        },
        getCatalystLoc (state) {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'loc']))
        },

        getFirstCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.firstCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.firstCatalyst})).name
            } else {
                return 'Awakening Catalyst (Epic)'
            }
        },
        getSecondCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.secondCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.secondCatalyst})).name
            } else {
                return 'Awakening Catalyst'
            }
        },
        getThirdCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.thirdCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.thirdCatalyst})).name
            } else {
                return 'Skill Catalyst'
            }
        },

    }

})