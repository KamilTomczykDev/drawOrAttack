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
};

state.deck = [...data.defaultDeckArray];
