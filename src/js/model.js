//prettier-ignore
import { BLESSING_AMOUNT, HOURGLASS_AMOUNT, MAX_CARDS_IN_HAND, MAX_MANA, RAGE_AMOUNT, SECOND_STAGE, SECOND_STAGE_START, THIRD_STAGE, THIRD_STAGE_START, TURN_TIME_IN_SECONDS } from "./config.js";
import { cards } from "./cards.js";
import nazgrammFirstStage from "../img/nazgrammFirst.png";

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
  get winner() {
    return this.#winner;
  }
  resetTimer() {
    return (this.#timer = TURN_TIME_IN_SECONDS);
  }
  decrementTimer() {
    this.#timer -= 1;
  }
  #decrementCardTurnNumber() {
    return this.#board.forEach((card) => (card.turns -= 1));
  }
  #deleteCards() {
    if (this.#board.length > 0) {
      const deletedCards = this.#board.filter((card) => card.turns === 0);
      this.#cementary = [...this.#cementary, ...deletedCards];
    }
    this.#board = this.#board.filter((card) => card.turns !== 0);
  }
  draw() {
    const randomCard = Math.trunc(Math.random() * this.#deck.length);
    if (!this.#deck.length) return;
    if (this.#hand.length === MAX_CARDS_IN_HAND) {
      this.#cementary = [...this.#cementary, this.#deck[randomCard]];
    } else {
      this.#hand = [...this.#hand, this.#deck[randomCard]];
      this.#deck.splice(randomCard, 1);
    }
  }
  attack() {
    this.#board.forEach((card) => {
      if (card.attack) this.#enemy.hp -= card.attack;
    });
  }
  #createSecondStage() {
    this.#enemy = SECOND_STAGE;
  }
  #createThirdStage() {
    this.#enemy = THIRD_STAGE;
  }
  #incrementTurn() {
    this.#turn += 1;
    if (this.#turn === SECOND_STAGE_START && this.#enemy.hp > 0)
      this.#createSecondStage();
    if (this.#turn === THIRD_STAGE_START && this.#enemy.hp > 0)
      this.#createThirdStage();
  }

  #enemyAction() {
    this.#playerHp -= this.#enemy.attack;

    if (this.#turn >= SECOND_STAGE_START && this.#enemy.hp < 40)
      this.#enemy.hp += 5;

    if (this.#turn >= THIRD_STAGE_START && this.#board.length > 0) {
      const randomCard = Math.trunc(Math.random() * this.#board.length);
      this.#cementary = [...this.#cementary, randomCard];
      this.#board.splice(randomCard, 1);
    }
  }

  #increaseMana() {
    if (this.#maxMana !== MAX_MANA) this.#maxMana += 1;
    this.#currentMana = this.#maxMana;
  }

  #healPlayer() {
    this.#board.forEach((card) => {
      card.healing && (this.#playerHp += card.healing);
    });
  }

  #applyRage() {
    this.#board.forEach((card) => {
      card.attack && (card.attack += RAGE_AMOUNT);
    });
  }
  #applyBlessing() {
    this.#board.forEach((card) => {
      card.healing && (card.healing += BLESSING_AMOUNT);
    });
  }
  #applyHourglass() {
    this.#board.forEach((card) => {
      card.turns += HOURGLASS_AMOUNT;
    });
  }
  lookForWinner() {
    if (this.#playerHp > 0 && this.#enemy.hp > 0) return;
    if (this.#playerHp <= 0) this.#winner = "enemy";
    if (this.#enemy.hp <= 0) this.#winner = "player";
  }
  #checkCardsAbility(card) {
    if (!this.#board.length) return;

    if (card.ability === "Rage") this.#applyRage();
    if (card.ability === "Blessing") this.#applyBlessing();
    if (card.ability === "Hourglass") this.#applyHourglass();
  }
  #substractMana(cost) {
    this.#currentMana -= cost;
  }
  playCard(e) {
    const clicked = e.target.closest(".card");
    if (!clicked) return;
    const cardToPlay = this.#hand.find((card) => card.id === +clicked.id);
    if (cardToPlay.cost <= this.#currentMana) {
      this.#checkCardsAbility(cardToPlay);
      this.#board = [...this.#board, cardToPlay];
      this.#hand = this.#hand.filter(
        (handCard) => handCard.id !== cardToPlay.id
      );
      this.#substractMana(cardToPlay.cost);
    }
  }
  nextTurn() {
    this.resetTimer();
    this.#healPlayer();
    this.#increaseMana();
    this.#incrementTurn();
    this.#enemyAction();
    this.lookForWinner();
    this.#decrementCardTurnNumber();
    this.#deleteCards();
    setTimeout(() => {
      this.resetTimer();
    }, 2000);
  }
}

export const GameState = new State();
