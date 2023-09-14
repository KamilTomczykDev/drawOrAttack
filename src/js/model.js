import * as data from "./API.js";

export const state = {
  deck: [],
  board: [],
  hand: [],
  cementary: [],
  currentTurn: 1,
  timer: 25,
  enemy: {
    attack: 5,
    hp: 30,
  },
  playerHp: 30,
  currentMana: 1,
  maxMana: 1,
  turn: 1,
};

state.deck = [...data.defaultDeckArray];
