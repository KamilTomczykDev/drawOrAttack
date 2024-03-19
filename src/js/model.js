import { cards } from "./cards.js";
import {
  MAX_CARDS_IN_HAND,
  SECOND_STAGE,
  SECOND_STAGE_START,
  THIRD_STAGE_START,
  TURN_TIME_IN_SECONDS,
} from "./config.js";

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

let instance;

class State {
  #timer = TURN_TIME_IN_SECONDS;
  #deck = [...cards];
  #board = [];
  #hand = [];
  #cementary = [];
  #enemy = {
    name: "Mysterious Creature",
    attack: 5,
    hp: 30,
    img: nazgrammFirstStage,
    discription: "Deal 5 dmg each round.",
  };
  #playerHp = 30;
  #currentMana = 1;
  #maxMana = 1;
  #turn = 1;
  #winner = null;
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!");
    }
    instance = this;
  }

  get cementary() {
    return this.#cementary;
  }
  get deck() {
    return this.#deck;
  }
  get hand() {
    return this.#hand;
  }
  get board() {
    return this.#board;
  }
  get currentMana() {
    return this.#currentMana;
  }
  get maxMana() {
    return this.#maxMana;
  }
  get turn() {
    return this.#turn;
  }
  get playerHp() {
    return this.#playerHp;
  }
  get enemy() {
    return this.#enemy;
  }

  get timer() {
    return this.#timer;
  }

  // set timer(seconds) {
  //   this.#timer = seconds;
  // }

  resetTimer() {
    return (this.#timer = TURN_TIME_IN_SECONDS);
  }

  decrementCardTurnNumber() {
    return this.#board.forEach((card) => (card.turns -= 1));
  }

  deleteCards() {
    if (this.#board.length > 0) {
      const deletedCards = this.#board.filter((card) => card.turns === 0);
      this.#cementary = [...this.#cementary, deletedCards];
    }
    this.#board = this.#board.filter((card) => card.turns !== 0);
  }

  draw() {
    const number = Math.trunc(Math.random() * this.#deck.length);
    if (!this.#deck.length) return;

    if (this.#hand.length === MAX_CARDS_IN_HAND) {
      this.#cementary = [...this.#cementary, this.#deck[number]];
      //giveshakeAnimation
    } else {
      this.#hand = [...this.#hand, this.#deck[number]];
    }
    //renderUI
  }

  #createSecondStage() {
    this.#enemy = SECOND_STAGE;
  }
  #createThirdStage() {
    this.#enemy = THIRD_STAGE;
  }
  incrementTurn() {
    this.#turn += 1;
    if (this.#turn === SECOND_STAGE_START && this.#enemy.hp > 0)
      this.#createSecondStage();
    if (this.#turn === THIRD_STAGE_START && this.#enemy.hp > 0)
      this.#createThirdStage();
  }

  enemyAction() {
    if (this.#turn >= SECOND_STAGE_START && this.#enemy.hp < 40) {
      this.#enemy.hp += 5;
    }
  }
}

export const GameState = new State();

console.log(GameState);
console.log(GameState.deck);
console.log((GameState.timer = 30));
console.log(GameState);
