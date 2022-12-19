import {defineStore} from "pinia";
import _ from "lodash";

export const useHeroStore = defineStore({
        id: "heroStore",
        state: () => ({
            hero: [
                {id: 1, name: 'Lionheart Cermia', cat1: 1, cat2: 2, cat3: 3},
                {id: 2, name: 'Mediator Kawerik', cat1: 1, cat2: 2, cat3: 3}
            ],

            zodiac: [
                {
                    "name": "Aquarius",
                    "primary": "6",
                    "secondary": "33",
                    "skillup": "31"
                },
                {
                    "name": "Aries",
                    "primary": "10",
                    "secondary": "23",
                    "skillup": "34"
                },
                {
                    "name": "Cancer",
                    "primary": "12",
                    "secondary": "40",
                    "skillup": "21"
                },
                {
                    "name": "Capricorn",
                    "primary": "5",
                    "secondary": "26",
                    "skillup": "38"
                },
                {
                    "name": "Gemini",
                    "primary": "7",
                    "secondary": "39",
                    "skillup": "35"
                },
                {
                    "name": "Leo",
                    "primary": "3",
                    "secondary": "43",
                    "skillup": "42"
                },
                {
                    "name": "Libra",
                    "primary": "11",
                    "secondary": "27",
                    "skillup": "32"
                },
                {
                    "name": "Pisces",
                    "primary": "1",
                    "secondary": "24",
                    "skillup": "38"
                },
                {
                    "name": "Sagittarius",
                    "primary": "9",
                    "secondary": "25",
                    "skillup": "20"
                },
                {
                    "name": "Scorpio",
                    "primary": "2",
                    "secondary": "28",
                    "skillup": "36"
                },
                {
                    "name": "Taurus",
                    "primary": "8",
                    "secondary": "22",
                    "skillup": "37"
                },
                {
                    "name": "Virgo",
                    "primary": "4",
                    "secondary": "29",
                    "skillup": "30"
                }
            ]

    }),
    getters: {
        getHeroList: (state) => {
            return state.hero
        },

    }

})