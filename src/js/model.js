import { cards } from "./cards.js";
import nazgrammFirstStage from "../img/nazgrammFirst.png";

export const state = {
  deck: [...cards],
  board: [],
  hand: [],
  cementary: [],
  timer: 25,
  enemy: {
    name: "Mysterious Creature",
    attack: 5,
    hp: 30,
    img: nazgrammFirstStage,
    discription: "Deal 5 dmg each round.",
  },
  playerHp: 30,
  currentMana: 1,
  maxMana: 1,
  turn: 1,
  winner: null,
};
