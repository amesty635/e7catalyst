import {defineStore} from "pinia";


export const useHeroStore = defineStore({
    id: "heroStore",
    state: () => ({

        hero: [
            {
                "id": "1",
                "name": "ae-Giselle",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "2",
                "name": "ae-Ningning",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "3",
                "name": "ae-Winter",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "4",
                "name": "Alencia",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "5",
                "name": "Ambitious Tywin",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "6",
                "name": "Apocalypse Ravi",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "7",
                "name": "Aramintha",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "8",
                "name": "Arbiter Vildred",
                "zodiac": "Leo",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "9",
                "name": "Archdemon's Shadow",
                "zodiac": "Aquarius",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "10",
                "name": "Aria",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "11",
                "name": "Arunka",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "12",
                "name": "Astromancer Elena",
                "zodiac": "Libra",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "13",
                "name": "Baal & Sezan",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "14",
                "name": "Baiken",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "15",
                "name": "Basar",
                "zodiac": "Aquarius",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "16",
                "name": "Belian",
                "zodiac": "Aries",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "17",
                "name": "Bellona",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "18",
                "name": "Blood Moon Haste",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "19",
                "name": "Bomb Model Kanna",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "20",
                "name": "Briar Witch Iseria",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "21",
                "name": "Cecilia",
                "zodiac": "Aries",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "22",
                "name": "Celine",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "23",
                "name": "Cerise",
                "zodiac": "Aquarius",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "24",
                "name": "Cermia",
                "zodiac": "Leo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "25",
                "name": "Charles",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "26",
                "name": "Charlotte",
                "zodiac": "Leo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "27",
                "name": "Chloe",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "28",
                "name": "Choux",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "29",
                "name": "Closer Charles",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "30",
                "name": "Command Model Laika",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "31",
                "name": "Commander Pavel",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "32",
                "name": "Conqueror Lilias",
                "zodiac": "Aquarius",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "33",
                "name": "Dark Corvus",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "34",
                "name": "Desert Jewel Basar",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "35",
                "name": "Designer Lilibet",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "36",
                "name": "Destina",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "37",
                "name": "Diene",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "38",
                "name": "Dizzy",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "39",
                "name": "Eda",
                "zodiac": "Aries",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "40",
                "name": "Edward Elric",
                "zodiac": "Aries",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "41",
                "name": "Elena",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "42",
                "name": "Elphelt",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "43",
                "name": "Emilia",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "44",
                "name": "Ervalen",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "45",
                "name": "Fairytale Tenebria",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "46",
                "name": "Faithless Lidica",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "47",
                "name": "Fallen Cecilia",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "48",
                "name": "Flan",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "49",
                "name": "Haste",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "50",
                "name": "Holiday Yufine",
                "zodiac": "Libra",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "51",
                "name": "Hwayoung",
                "zodiac": "Libra",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "52",
                "name": "Ilynav",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "53",
                "name": "Iseria",
                "zodiac": "Leo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "54",
                "name": "Jack-o",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "55",
                "name": "Judge Kise",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "56",
                "name": "Kawerik",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "57",
                "name": "Kayron",
                "zodiac": "Aries",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "58",
                "name": "Ken",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "59",
                "name": "Kise",
                "zodiac": "Leo",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "60",
                "name": "Krau",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "61",
                "name": "Landy",
                "zodiac": "Leo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "62",
                "name": "Last Rider Krau",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "63",
                "name": "Lidica",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "64",
                "name": "Lilias",
                "zodiac": "Aries",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "65",
                "name": "Lilibet",
                "zodiac": "Libra",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "66",
                "name": "Lionheart Cermia",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "light",
                "class": "warrior"
            },
            {
                "id": "67",
                "name": "Little Queen Charlotte",
                "zodiac": "Libra",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "68",
                "name": "Lua",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "69",
                "name": "Ludwig",
                "zodiac": "Leo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "70",
                "name": "Luluca",
                "zodiac": "Aquarius",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "71",
                "name": "Luna",
                "zodiac": "Libra",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "72",
                "name": "Maid Chloe",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "73",
                "name": "Martial Artist Ken",
                "zodiac": "Leo",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "74",
                "name": "Mediator Kawerik",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "75",
                "name": "Melissa",
                "zodiac": "Leo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "76",
                "name": "Milim",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "77",
                "name": "Mort",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "78",
                "name": "Mui",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "79",
                "name": "Operator Sigret",
                "zodiac": "Libra",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "80",
                "name": "Pavel",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "81",
                "name": "Peira",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "82",
                "name": "Pirate Captain Flan",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "83",
                "name": "Politis",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "84",
                "name": "Ram",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "85",
                "name": "Ran",
                "zodiac": "Aries",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "86",
                "name": "Ravi",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "87",
                "name": "Ray",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "88",
                "name": "Rem",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "89",
                "name": "Remnant Violet",
                "zodiac": "Leo",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "90",
                "name": "Rimuru",
                "zodiac": "Libra",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "91",
                "name": "Riza Hawkeye",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "92",
                "name": "Roana",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "93",
                "name": "Roy Mustang",
                "zodiac": "Leo",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "94",
                "name": "Ruele of Light",
                "zodiac": "Pisces",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "95",
                "name": "Sage Baal & Sezan",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "96",
                "name": "ae-Karina",
                "zodiac": "Aries",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "97",
                "name": "Seaside Bellona",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "98",
                "name": "Senya",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "99",
                "name": "Sez",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "100",
                "name": "Sharun",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "101",
                "name": "Shuna",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "102",
                "name": "Sigret",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "103",
                "name": "Silver Blade Aramintha",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "104",
                "name": "Sol",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "105",
                "name": "Solitaria of the Snow",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "106",
                "name": "Specimen Sez",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "107",
                "name": "Specter Tenebria",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "108",
                "name": "Spirit Eye Celine",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "109",
                "name": "Straze",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "110",
                "name": "Summer Break Charlotte",
                "zodiac": "Gemini",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "111",
                "name": "Summertime Iseria",
                "zodiac": "Capricorn",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "112",
                "name": "Sylvan Sage Vivian",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "light"
            },
            {
                "id": "113",
                "name": "Taeyou",
                "zodiac": "Virgo",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "114",
                "name": "Tamarinne",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "115",
                "name": "Tenebria",
                "zodiac": "Cancer",
                "grade": "5",
                "element": "fire"
            },
            {
                "id": "116",
                "name": "Top Model Luluca",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "dark"
            },
            {
                "id": "117",
                "name": "Tywin",
                "zodiac": "Aries",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "118",
                "name": "Vildred",
                "zodiac": "Leo",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "119",
                "name": "Violet",
                "zodiac": "Scorpio",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "120",
                "name": "Vivian",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "121",
                "name": "Yufine",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "122",
                "name": "Yulha",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "123",
                "name": "Yuna",
                "zodiac": "Leo",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "124",
                "name": "Zahhak",
                "zodiac": "Sagittarius",
                "grade": "5",
                "element": "earth"
            },
            {
                "id": "125",
                "name": "Zeno",
                "zodiac": "Taurus",
                "grade": "5",
                "element": "ice"
            },
            {
                "id": "126",
                "name": "Zio",
                "zodiac": "Aries",
                "grade": "5",
                "element": "dark"
            },
            // {
            //     "id": "127",
            //     "name": "a-A",
            //     "zodiac": "Test",
            // }
        ],

        zodiac: [
            // {
            //     "name": "Test",
            //     "primary": 10,
            //     "secondary": 27,
            //     "skillup": 41
            // },
            {
                "name": "Aquarius",
                "primary": 6,
                "secondary": 33,
                "skillup": 31
            },
            {
                "name": "Aries",
                "primary": 10,
                "secondary": 23,
                "skillup": 34
            },
            {
                "name": "Cancer",
                "primary": 12,
                "secondary": 40,
                "skillup": 21
            },
            {
                "name": "Capricorn",
                "primary": 5,
                "secondary": 26,
                "skillup": 38
            },
            {
                "name": "Gemini",
                "primary": 7,
                "secondary": 39,
                "skillup": 35
            },
            {
                "name": "Leo",
                "primary": 3,
                "secondary": 43,
                "skillup": 42
            },
            {
                "name": "Libra",
                "primary": 11,
                "secondary": 27,
                "skillup": 32
            },
            {
                "name": "Pisces",
                "primary": 1,
                "secondary": 24,
                "skillup": 38
            },
            {
                "name": "Sagittarius",
                "primary": 9,
                "secondary": 25,
                "skillup": 20
            },
            {
                "name": "Scorpio",
                "primary": 2,
                "secondary": 28,
                "skillup": 36
            },
            {
                "name": "Taurus",
                "primary": 8,
                "secondary": 22,
                "skillup": 37
            },
            {
                "name": "Virgo",
                "primary": 4,
                "secondary": 29,
                "skillup": 30
            }
        ],
        grade: [
            {
                "id": "5",
                "primary": 10,
                "regular": 15,
                "skillupPrimary": 6,
                "skillupRegular": 36
            },
            {
                "id": "4",
                "primary": 8,
                "regular": 12,
                "skillupPrimary": 6,
                "skillupRegular": 12
            },
            {
                "id": "3",
                "primary": 6,
                "regular": 9,
                "skillupPrimary": 0,
                "skillupRegular": 36
            }
        ],

    }),
    getters: {
        getHeroList(state) {
            return (state.hero).sort((a, b) => a.name.localeCompare(b.name))
        },
        getZodiacList(state) {
            return (state.zodiac)
        }

    }

})