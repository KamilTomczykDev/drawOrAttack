import { state } from "../model.js";
//prettier-ignore
import { renderBoard, renderCementaryNum,renderEndgame, renderEnemy, renderHand, renderPlayer, renderMana, renderTurn, renderDeckNum,renderTimer } from "../view/renders.js";
//prettier-ignore
import { disableButtons, giveDamageAnimation, giveShakeAnimation,nextTurnAnimation } from "../view/animations.js";

export const renderUI = () => {
  renderCementaryNum(state.cementary);
  renderDeckNum(state.deck);
  renderHand(state.hand);
  renderBoard(state.board);
  renderMana(state.currentMana, state.maxMana);
  renderTurn(state.turn);
  renderPlayer(state.playerHp);
  renderEnemy(state.enemy);
};

export const setTimer = () => (state.timer = 25);

export const subtractTurn = (data) => data.forEach((card) => (card.turns -= 1));

export const killUnits = () => {
  if (state.board.length > 0)
    state.cementary.push(...state.board.filter((card) => +card.turns === 0));
  state.board = state.board.filter((card) => +card.turns !== 0);
};

export const startTimer = () => {
  setTimer();
  const countdown = setInterval(function () {
    --state.timer;
    renderTimer(state.timer);
    if (state.timer < 1) {
      clearInterval(countdown);
      startTimer();
      nextTurn();
      setTimeout(() => draw(), 2000);
    }
    if (state.winner) {
      clearInterval(countdown);
      console.log(state.winner);
    }
  }, 1000);
};

export const draw = () => {
  const number = Math.trunc(Math.random() * state.deck.length);
  if (state.deck.length === 0) return;
  if (state.hand.length === 5) {
    state.cementary.push(state.deck[number]);
    const cementaryNum = document.querySelector(".skull-number");
    giveShakeAnimation(cementaryNum);
  } else {
    state.hand.push(state.deck[number]);
  }
  const x = state.deck.splice(number, 1);
  renderUI();
};

export const turnNumberUp = () => {
  state.turn += 1;
  if (state.turn === 7 && state.enemy.hp > 0) {
    state.enemy.hp = 35;
    state.enemy.attack = 8;
    state.enemy.name = "Nazgramm the Bloodlord";
    state.enemy.discription = "Deal 8 dmg and heal 5 hp each round";
    state.enemy.img = "/nazgrammSecond.png";
  }
  if (state.turn === 12 && state.enemy.hp > 0) {
    state.enemy.hp = 40;
    state.enemy.attack = 10;
    state.enemy.name = "Nazgramm (Demon form)";
    state.enemy.discription =
      "Deal 10 dmg, heal 5 hp and kill random unit each round";
    state.enemy.img = "/nazgrammThird.png";
  }
};

export const nazgrammUltimate = () => {
  if (state.turn >= 7 && state.enemy.hp < 40) {
    state.enemy.hp += 5;
  }
  if (state.turn >= 12 && state.board.length > 0) {
    const number = Math.trunc(Math.random() * state.board.length);
    state.cementary.push(state.board[number]);
    const x = state.board.splice(number, 1);

    renderUI();
  }
};

export const lookForWinner = () => {
  if (state.playerHp <= 0) {
    state.winner = "enemy";
    renderEndgame(state.winner);
  }
  if (state.enemy.hp <= 0) {
    state.winner = "player";
    renderEndgame(state.winner);
  }
};

export const manaNumberUp = () => {
  if (state.maxMana !== 10) state.maxMana += 1;
  state.currentMana = state.maxMana;
};

export const applyHealing = () => {
  state.board.forEach((card) => {
    if (card.healing) state.playerHp += card.healing;
  });
};

export const nextTurn = () => {
  const playerHpElement = document.querySelector(".hero--health");
  disableButtons();
  setTimer();
  applyHealing();

  manaNumberUp();
  console.log(state.board);
  setTimeout(function () {
    state.playerHp -= state.enemy.attack;
    nazgrammUltimate();
    lookForWinner();
    giveShakeAnimation(playerHpElement);
    giveDamageAnimation(playerHpElement);
    nextTurnAnimation();
    subtractTurn(state.board);
    killUnits();
    setTimer();
    turnNumberUp();
    renderUI();
  }, 2000);
};

export const checkForAbility = (card) => {
  if (!state.board.length) return;

  if (card.ability === "Rage")
    state.board.forEach((card) => {
      if (card.attack > 0) card.attack += 1;
    });

  if (card.ability === "Blessing")
    state.board.forEach((card) => {
      if (card.healing > 0) card.healing += 1;
    });

  if (card.ability === "Hourglass")
    state.board.forEach((card) => {
      card.turns += 1;
    });
};
