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
                "loc": ["UH-24",]
            },
            {
                "id": 2,
                "name": "Black Curse Powder",
                "isEpic": "true",
                "loc": ["UH-22", ]
            },
            {
                "id": 3,
                "name": "Blazing Soul",
                "isEpic": "true",
                "loc": ["UH-13"]
            },
            {
                "id": 4,
                "name": "Demon Blood Gem",
                "isEpic": "true",
                "loc": ["UH-33",]
            },
            {
                "id": 5,
                "name": "Dragon's Wrath",
                "isEpic": true,
                "loc": ["UH-15", ]
            },
            {
                "id": 6,
                "name": "Fighter Medal",
                "isEpic": true,
                "loc": ["UH-26",]
            },
            {
                "id": 7,
                "name": "Fused Nerve",
                "isEpic": true,
                "loc": ["UH-23",]
            },
            {
                "id": 8,
                "name": "Horn of Desire",
                "isEpic": true,
                "loc": ["UH-25",]
            },
            {
                "id": 9,
                "name": "Mercenary's Medicine",
                "isEpic": true,
                "loc": ["UH-11"]
            },
            {
                "id": 10,
                "name": "Nightmare Mask",
                "isEpic": true,
                "loc": ["UH-7"]
            },
            {
                "id": 11,
                "name": "Reingar Student ID",
                "isEpic": true,
                "loc": ["UH-5"]
            },
            {
                "id": 12,
                "name": "The Heart of Hypocrisy",
                "isEpic": true,
                "loc": ["UH-27",]
            },
            {
                "id": 20,
                "name": "Archer's Vision",
                "isEpic": false,
                "loc": ["UH-13", "UH-22", "UH-32",]
            },
            {
                "id": 21,
                "name": "Baby Mouse Insignia",
                "isEpic": false,
                "loc": ["UH-11"]
            },
            {
                "id": 22,
                "name": "Blazing Rage",
                "isEpic": false,
                "loc": ["UH-15", "UH-16",]
            },
            {
                "id": 23,
                "name": "Blessing of Orbis",
                "isEpic": false,
                "loc": ["UH-4", "UH-21",]
            },
            {
                "id": 24,
                "name": "Blood Flaked Bone",
                "isEpic": false,
                "loc": ["UH-3", "UH-25", ]
            },
            {
                "id": 25,
                "name": "Cold Look",
                "isEpic": false,
                "loc": ["UH-25",]
            },
            {
                "id": 26,
                "name": "Cursed Ashes",
                "isEpic": false,
                "loc": ["UH-3", "UH-25", ]
            },
            {
                "id": 27,
                "name": "Dream Time Circuit",
                "isEpic": false,
                "loc": ["UH-7"]
            },
            {
                "id": 28,
                "name": "Erikion Carapace",
                "isEpic": false,
                "loc": ["UH-14", "UH-16", "UH-23", "UH-24", ]
            },
            {
                "id": 29,
                "name": "Eternal Forest Dust",
                "isEpic": false,
                "loc": ["UH-17", "UH-21", "UH-23", "UH-24",]
            },
            {
                "id": 30,
                "name": "Flame of Soul",
                "isEpic": false,
                "loc": ["UH-22", "UH-27", "UH-28", "UH-31", "UH-33",]
            },
            {
                "id": 31,
                "name": "Leather Sheath",
                "isEpic": false,
                "loc": ["UH-12", "UH-13", "UH-22",]
            },
            {
                "id": 32,
                "name": "Mysterious Flash",
                "isEpic": false,
                "loc": ["UH-4", "UH-19", "UH-20",]
            },
            {
                "id": 33,
                "name": "Order of the Shield Insignia",
                "isEpic": false,
                "loc": ["UH-18", "UH-19", "UH-20",]
            },
            {
                "id": 34,
                "name": "Path Power Loop",
                "isEpic": false,
                "loc": ["UH-5", "UH-6", "UH-20",]
            },
            {
                "id": 35,
                "name": "Ring of Glory",
                "isEpic": false,
                "loc": ["UH-26", "UH-27", "UH-29", "UH-30", "UH-31", "UH-32",]
            },
            {
                "id": 36,
                "name": "Sharp Spearhead",
                "isEpic": false,
                "loc": ["UH-12", "UH-13"]
            },
            {
                "id": 37,
                "name": "Shiny Enchantment",
                "isEpic": false,
                "loc": ["UH-15",]
            },
            {
                "id": 38,
                "name": "Slime Jelly",
                "isEpic": false,
                "loc": ["UH-1", "UH-2", "UH-8", "UH-10", "UH-21",]
            },
            {
                "id": 39,
                "name": "Small Sun Badge",
                "isEpic": false,
                "loc": ["UH-13", "UH-27", "UH-29", "UH-30", "UH-32",]
            },
            {
                "id": 40,
                "name": "Special Alarm Loop",
                "isEpic": false,
                "loc": ["UH-5", "UH-6", "UH-18",]
            },
            {
                "id": 41,
                "name": "Strange Jelly",
                "isEpic": false,
                "loc": ["UH-3", "UH-33",]
            },
            {
                "id": 42,
                "name": "Twisted Fang",
                "isEpic": false,
                "loc": ["UH-25"]
            },
            {
                "id": 43,
                "name": "Ultra Fang",
                "isEpic": false,
                "loc": ["UH-17",]
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
