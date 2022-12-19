import {defineStore} from "pinia";
import _ from 'lodash'
import {useFilterStore} from "./filter.js";


export const useCatalystStore = defineStore({
    id: "catalystStore",
    state: () => ({
        catalyst: [
            {
                "id": "1",
                "name": "Ancient Creature Nucleus",
                "isEpic": true
            },
            {
                "id": "2",
                "name": "Black Curse Powder",
                "isEpic": true
            },
            {
                "id": "3",
                "name": "Blazing Soul",
                "isEpic": true
            },
            {
                "id": "4",
                "name": "Demon Blood Gem",
                "isEpic": true
            },
            {
                "id": "5",
                "name": "Dragon's Wrath",
                "isEpic": true
            },
            {
                "id": "6",
                "name": "Fighter Medal",
                "isEpic": true
            },
            {
                "id": "7",
                "name": "Fused Nerve",
                "isEpic": true
            },
            {
                "id": "8",
                "name": "Horn of Desire",
                "isEpic": true
            },
            {
                "id": "9",
                "name": "Mercenary's Medicine",
                "isEpic": true
            },
            {
                "id": "10",
                "name": "Nightmare Mask",
                "isEpic": true
            },
            {
                "id": "11",
                "name": "Reingar Student ID",
                "isEpic": true
            },
            {
                "id": "12",
                "name": "The Heart of Hypocrisy",
                "isEpic": true
            },
            {
                "id": "20",
                "name": "Archer's Vision",
                "isEpic": false
            },
            {
                "id": "21",
                "name": "Baby Mouse Insignia",
                "isEpic": false
            },
            {
                "id": "22",
                "name": "Blazing Rage",
                "isEpic": false
            },
            {
                "id": "23",
                "name": "Blessing of Orbis",
                "isEpic": false
            },
            {
                "id": "24",
                "name": "Blood Flaked Bone",
                "isEpic": false
            },
            {
                "id": "25",
                "name": "Cold Look",
                "isEpic": false
            },
            {
                "id": "26",
                "name": "Cursed Ashes",
                "isEpic": false
            },
            {
                "id": "27",
                "name": "Dream Time Circuit",
                "isEpic": false
            },
            {
                "id": "28",
                "name": "Erikion Carapace",
                "isEpic": false
            },
            {
                "id": "29",
                "name": "Eternal Forest Dust",
                "isEpic": false
            },
            {
                "id": "30",
                "name": "Flame of Soul",
                "isEpic": false
            },
            {
                "id": "31",
                "name": "Leather Sheath",
                "isEpic": false
            },
            {
                "id": "32",
                "name": "Mysterious Flash",
                "isEpic": false
            },
            {
                "id": "33",
                "name": "Order of the Shield Insignia",
                "isEpic": false
            },
            {
                "id": "34",
                "name": "Path Power Loop",
                "isEpic": false
            },
            {
                "id": "35",
                "name": "Ring of Glory",
                "isEpic": false
            },
            {
                "id": "36",
                "name": "Sharp Spearhead",
                "isEpic": false
            },
            {
                "id": "37",
                "name": "Shiny Enchantment",
                "isEpic": false
            },
            {
                "id": "38",
                "name": "Slime Jelly",
                "isEpic": false
            },
            {
                "id": "39",
                "name": "Small Sun Badge",
                "isEpic": false
            },
            {
                "id": "40",
                "name": "Special Alarm Loop",
                "isEpic": false
            },
            {
                "id": "41",
                "name": "Strange Jelly",
                "isEpic": false
            },
            {
                "id": "42",
                "name": "Twisted Fang",
                "isEpic": false
            },
            {
                "id": "43",
                "name": "Ultra Fang",
                "isEpic": false
            }
        ]
    }),
    getters: {
        getCatalystList: (state) => {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'name']))
        },
        getCatalystLoc: (state) => {
            return _.map(state.catalyst, _.partialRight(_.pick, ['id', 'loc']))
        },
        // getFirstCatalyst (state) {
        //     const heroStore = useHeroStore()
        //     const filterStore = useFilterStore()
        //     if (filterStore.selectedHero !==null) {
        //
        //     }
        // },
        // getSecondCatalyst (state) {
        //
        // },
        // getThirdCatalyst (state) {
        //
        // },
        getFirstCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.firstCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.firstCatalyst})).name
            } else {
                return 'First Catalyst'
            }
        },
        getSecondCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.secondCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.secondCatalyst})).name
            } else {
                return 'Second Catalyst'
            }
        },
        getThirdCatalystName (state) {
            const filterStore = useFilterStore()
            if(filterStore.thirdCatalyst) {
                return (_.find(state.catalyst, {'id': filterStore.thirdCatalyst})).name
            } else {
                return 'Third Catalyst'
            }
        },

    }

})