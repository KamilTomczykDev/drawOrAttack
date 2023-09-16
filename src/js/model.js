import * as data from "./API.js";

export const state = {
  deck: [],
  board: [],
  hand: [],
  cementary: [],
  currentTurn: 1,
  timer: 25,
  enemy: {
    name: "Mysterious Creature",
    attack: 5,
    hp: 30,
    img: "/nazgrammFirst.c1deeb17.png",
    discription: "Deal 5 dmg each round.",
  },
  playerHp: 30,
  currentMana: 1,
  maxMana: 1,
  turn: 1,
  winner: null,
};

state.deck = [...data.defaultDeckArray];
