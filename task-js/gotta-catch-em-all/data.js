const pokemons = [
  {
    types: ["grass", "poison"],
    id: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    types: ["grass", "poison"],
    id: 2,
    name: "Ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    types: ["grass", "poison"],
    id: 3,
    name: "Venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    types: ["fire", "flying"],
    id: 6,
    name: "Charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    types: ["fire"],
    id: 4,
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    types: ["fire"],
    id: 5,
    name: "Charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    types: ["bug"],
    id: 10,
    name: "Caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    types: ["water"],
    id: 8,
    name: "Wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    types: ["water"],
    id: 7,
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    types: ["water"],
    id: 9,
    name: "Blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    types: ["bug", "flying"],
    id: 12,
    name: "Butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    types: ["normal", "flying"],
    id: 17,
    name: "Pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    types: ["normal", "flying"],
    id: 22,
    name: "Fearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    types: ["ground"],
    id: 27,
    name: "Sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    types: ["bug", "poison"],
    id: 13,
    name: "Weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    types: ["poison"],
    id: 32,
    name: "Nidoran♂",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    types: ["bug", "poison"],
    id: 15,
    name: "Beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    types: ["bug"],
    id: 11,
    name: "Metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    types: ["normal"],
    id: 20,
    name: "Raticate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    types: ["bug", "poison"],
    id: 14,
    name: "Kakuna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    types: ["fire"],
    id: 37,
    name: "Vulpix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    types: ["normal", "flying"],
    id: 16,
    name: "Pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    types: ["electric"],
    id: 25,
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    types: ["normal", "flying"],
    id: 18,
    name: "Pidgeot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    types: ["normal", "flying"],
    id: 21,
    name: "Spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    types: ["poison"],
    id: 30,
    name: "Nidorina",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    types: ["poison"],
    id: 23,
    name: "Ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    types: ["electric"],
    id: 26,
    name: "Raichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    types: ["fairy"],
    id: 35,
    name: "Clefairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    types: ["ground"],
    id: 28,
    name: "Sandslash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    types: ["poison", "ground"],
    id: 31,
    name: "Nidoqueen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    types: ["normal", "fairy"],
    id: 40,
    name: "Wigglytuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    types: ["poison"],
    id: 33,
    name: "Nidorino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    types: ["fairy"],
    id: 36,
    name: "Clefable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    types: ["fire"],
    id: 38,
    name: "Ninetales",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    types: ["poison", "flying"],
    id: 41,
    name: "Zubat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    types: ["poison", "flying"],
    id: 42,
    name: "Golbat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    types: ["normal"],
    id: 19,
    name: "Rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    types: ["poison"],
    id: 24,
    name: "Arbok",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    types: ["poison"],
    id: 29,
    name: "Nidoran♀",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    types: ["bug", "grass"],
    id: 47,
    name: "Parasect",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    types: ["poison", "ground"],
    id: 34,
    name: "Nidoking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    types: ["normal", "fairy"],
    id: 39,
    name: "Jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    types: ["normal"],
    id: 52,
    name: "Meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    types: ["grass", "poison"],
    id: 45,
    name: "Vileplume",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    types: ["grass", "poison"],
    id: 44,
    name: "Gloom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    types: ["fighting"],
    id: 57,
    name: "Primeape",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
    types: ["ground"],
    id: 50,
    name: "Diglett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    types: ["bug", "poison"],
    id: 49,
    name: "Venomoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    types: ["grass", "poison"],
    id: 43,
    name: "Oddish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    types: ["bug", "grass"],
    id: 46,
    name: "Paras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    types: ["bug", "poison"],
    id: 48,
    name: "Venonat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    types: ["water", "fighting"],
    id: 62,
    name: "Poliwrath",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
    types: ["fighting"],
    id: 67,
    name: "Machoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
    types: ["normal"],
    id: 53,
    name: "Persian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    types: ["ground"],
    id: 51,
    name: "Dugtrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    types: ["water"],
    id: 55,
    name: "Golduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
    types: ["water"],
    id: 60,
    name: "Poliwag",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
    types: ["psychic"],
    id: 65,
    name: "Alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
    types: ["fighting"],
    id: 56,
    name: "Mankey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
    types: ["fire"],
    id: 58,
    name: "Growlithe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
    types: ["water"],
    id: 61,
    name: "Poliwhirl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
    types: ["psychic"],
    id: 63,
    name: "Abra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
    types: ["fighting"],
    id: 66,
    name: "Machop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
    types: ["fighting"],
    id: 68,
    name: "Machamp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    types: ["grass", "poison"],
    id: 70,
    name: "Weepinbell",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
    types: ["water", "poison"],
    id: 72,
    name: "Tentacool",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
    types: ["rock", "ground"],
    id: 75,
    name: "Graveler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
    types: ["fire"],
    id: 77,
    name: "Ponyta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
    types: ["water", "poison"],
    id: 73,
    name: "Tentacruel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
    types: ["grass", "poison"],
    id: 71,
    name: "Victreebel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
    types: ["fire"],
    id: 78,
    name: "Rapidash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
    types: ["rock", "ground"],
    id: 76,
    name: "Golem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
    types: ["electric", "steal"],
    id: 82,
    name: "Magneton",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
    types: ["water", "psychic"],
    id: 80,
    name: "Slowbro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
    types: ["water", "ice"],
    id: 87,
    name: "Dewgong",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
    types: ["normal", "flying"],
    id: 85,
    name: "Dodrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
    types: ["ghost", "poison"],
    id: 92,
    name: "Gastly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    types: ["psychic"],
    id: 97,
    name: "Hypno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
    types: ["grass", "psychic"],
    id: 102,
    name: "Exeggcute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },
  {
    types: ["normal", "flying"],
    id: 83,
    name: "Farfetch'd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
    types: ["water"],
    id: 90,
    name: "Shellder",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
    types: ["poison"],
    id: 88,
    name: "Grimer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
    types: ["electric", "steal"],
    id: 81,
    name: "Magnemite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
    types: ["water"],
    id: 86,
    name: "Seel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
    types: ["water", "ice"],
    id: 91,
    name: "Cloyster",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
    types: ["ghost", "poison"],
    id: 93,
    name: "Haunter",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
    types: ["rock", "ground"],
    id: 95,
    name: "Onix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
    types: ["fighting"],
    id: 107,
    name: "Hitmonchan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },
  {
    types: ["water"],
    id: 54,
    name: "Psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    types: ["psychic"],
    id: 96,
    name: "Drowzee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
    types: ["water"],
    id: 98,
    name: "Krabby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
    types: ["electric"],
    id: 101,
    name: "Electrode",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },
  {
    types: ["fighting"],
    id: 106,
    name: "Hitmonlee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },
  {
    types: ["grass", "psychic"],
    id: 103,
    name: "Exeggutor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },
  {
    types: ["ground", "rock"],
    id: 111,
    name: "Rhyhorn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },
  {
    types: ["fire"],
    id: 59,
    name: "Arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
    types: ["water"],
    id: 116,
    name: "Horsea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },
  {
    types: ["ground", "rock"],
    id: 112,
    name: "Rhydon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },
  {
    types: ["water"],
    id: 117,
    name: "Seadra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },
  {
    types: ["psychic", "fairy"],
    id: 122,
    name: "Mr. Mime",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },
  {
    types: ["bug"],
    id: 127,
    name: "Pinsir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },
  {
    types: ["normal"],
    id: 132,
    name: "Ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    types: ["normal"],
    id: 137,
    name: "Porygon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },
  {
    types: ["rock", "flying"],
    id: 142,
    name: "Aerodactyl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },
  {
    types: ["dragon"],
    id: 147,
    name: "Dratini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },
  {
    types: ["water", "psychic"],
    id: 121,
    name: "Starmie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },
  {
    types: ["fire"],
    id: 126,
    name: "Magmar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },
  {
    types: ["water", "ice"],
    id: 131,
    name: "Lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
    types: ["fire"],
    id: 136,
    name: "Flareon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
    types: ["electric"],
    id: 100,
    name: "Voltorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },
  {
    types: ["ground"],
    id: 105,
    name: "Marowak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },
  {
    types: ["poison"],
    id: 110,
    name: "Weezing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },
  {
    types: ["normal"],
    id: 115,
    name: "Kangaskhan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },
  {
    types: ["psychic"],
    id: 64,
    name: "Kadabra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
    types: ["water"],
    id: 120,
    name: "Staryu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
    types: ["grass", "poison"],
    id: 69,
    name: "Bellsprout",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
    types: ["rock", "water"],
    id: 141,
    name: "Kabutops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },
  {
    types: ["electric"],
    id: 125,
    name: "Electabuzz",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },
  {
    types: ["rock", "ground"],
    id: 74,
    name: "Geodude",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
    types: ["fire", "flying"],
    id: 146,
    name: "Moltres",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
  },
  {
    types: ["water", "flying"],
    id: 130,
    name: "Gyarados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
  },
  {
    types: ["normal"],
    id: 108,
    name: "Lickitung",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },
  {
    types: ["psychic"],
    id: 151,
    name: "Mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  },
  {
    types: ["water", "psychic"],
    id: 79,
    name: "Slowpoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
    types: ["electric"],
    id: 135,
    name: "Jolteon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
    types: ["normal"],
    id: 113,
    name: "Chansey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },
  {
    types: ["normal", "flying"],
    id: 84,
    name: "Doduo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
    types: ["rock", "water"],
    id: 140,
    name: "Kabuto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
    types: ["water"],
    id: 118,
    name: "Goldeen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },
  {
    types: ["electric", "flying"],
    id: 145,
    name: "Zapdos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  },
  {
    types: ["bug", "flying"],
    id: 123,
    name: "Scyther",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },
  {
    types: ["poison"],
    id: 89,
    name: "Muk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
    types: ["psychic"],
    id: 150,
    name: "Mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    types: ["normal"],
    id: 128,
    name: "Tauros",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    types: ["normal"],
    id: 133,
    name: "Eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    types: ["rock", "water"],
    id: 138,
    name: "Omanyte",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
    types: ["normal"],
    id: 143,
    name: "Snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    types: ["dragon"],
    id: 148,
    name: "Dragonair",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },
  {
    types: ["ghost", "poison"],
    id: 94,
    name: "Gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    types: ["water"],
    id: 99,
    name: "Kingler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
    types: ["ground"],
    id: 104,
    name: "Cubone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },
  {
    types: ["poison"],
    id: 109,
    name: "Koffing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },
  {
    types: ["grass"],
    id: 114,
    name: "Tangela",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },
  {
    types: ["water"],
    id: 119,
    name: "Seaking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },
  {
    types: ["ice", "psychic"],
    id: 124,
    name: "Jynx",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },
  {
    types: ["water"],
    id: 129,
    name: "Magikarp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },
  {
    types: ["water"],
    id: 134,
    name: "Vaporeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
    types: ["rock", "water"],
    id: 139,
    name: "Omastar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },
  {
    types: ["ice", "flying"],
    id: 144,
    name: "Articuno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },
  {
    types: ["dragon", "flying"],
    id: 149,
    name: "Dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
  }
];
