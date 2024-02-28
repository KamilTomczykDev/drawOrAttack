"use strict";
import * as model from "./model.js";
import * as view from "./view.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}
const hand = document.querySelector(".hand");

////////////////////////

const { state } = model;

const setTimer = () => (state.timer = 25);
const subtractTurn = (data) => data.forEach((card) => (card.turns -= 1));
const killUnits = () => {
  if (state.board.length > 0)
    state.cementary.push(...state.board.filter((card) => +card.turns === 0));
  state.board = state.board.filter((card) => +card.turns !== 0);
};

const startTimer = function () {
  setTimer();
  const countdown = setInterval(function () {
    --state.timer;
    view.renderTimer(state.timer);
    if (state.timer < 1) {
      clearInterval(countdown);
      startTimer();
      nextTurn();
      setTimeout(() => draw(), 2000);
    }
    if (state.winner !== null) clearInterval(countdown);
  }, 1000);
};
const giveHandlersBack = () => {
  view.addHandlerAttack(attackBtnClick);
  view.addHandlerDraw(drawBtnClick);
};

const draw = function () {
  const number = Math.trunc(Math.random() * state.deck.length);
  if (state.deck.length === 0) return;
  if (state.hand.length === 5) {
    state.cementary.push(state.deck[number]);
    const cementaryNum = document.querySelector(".skull-number");
    view.giveShakeAnimation(cementaryNum);
  } else {
    state.hand.push(state.deck[number]);
  }
  const x = state.deck.splice(number, 1);
  renderUI();
};
const turnNumberUp = () => {
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

const nazgrammUltimate = () => {
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
const lookForWinner = function () {
  if (state.playerHp <= 0) {
    state.winner = "enemy";
    view.renderEndgame(state.winner);
  }
  if (state.enemy.hp <= 0) {
    state.winner = "player";
    view.renderEndgame(state.winner);
  }
};
const manaNumberUp = () => {
  if (state.maxMana !== 10) state.maxMana += 1;
  state.currentMana = state.maxMana;
};
const nextTurn = function () {
  const playerHpElement = document.querySelector(".hero--health");
  view.changeCursorAttack();
  view.changeCursorDraw();
  setTimer();
  applyHealing();

  manaNumberUp();
  view.removeHandlerDraw(drawBtnClick);
  view.removeHandlerAttack(attackBtnClick);
  console.log(state.board);
  setTimeout(function () {
    state.playerHp -= state.enemy.attack;
    nazgrammUltimate();
    lookForWinner();
    view.giveShakeAnimation(playerHpElement);
    view.giveDamageAnimation(playerHpElement);
    view.nextTurnAnimation();
    subtractTurn(state.board);
    killUnits();
    setTimer();
    giveHandlersBack();
    turnNumberUp();
    renderUI();
  }, 2000);
};

const drawBtnClick = function () {
  const clickAudio = new Audio("/btnClick.mp3");

  clickAudio.play();

  nextTurn();
  setTimeout(() => {
    if (state.turn >= 12) {
      draw();
      draw();
    } else {
      draw();
    }
  }, 2500);
};
const applyHealing = () => {
  state.board.forEach((card) => {
    if (card.healing) state.playerHp += card.healing;
  });
};
const attackBtnClick = function () {
  const enemyHpElement = document.querySelector(".enemy-section--hero--health");
  const clickAudio = new Audio("/btnClick.mp3");

  clickAudio.play();
  state.board.forEach((card) => {
    if (card.attack) state.enemy.hp -= card.attack;
  });
  nextTurn();
  setTimeout(function () {
    view.giveShakeAnimation(enemyHpElement);
    view.giveDamageAnimation(enemyHpElement);
    if (state.turn >= 12) {
      draw();
    }
  }, 2000);
};

const renderUI = function () {
  view.renderCementaryNum(state.cementary);
  view.renderDeckNum(state.deck);
  view.renderHand(state.hand);
  view.renderBoard(state.board);
  view.renderMana(state.currentMana, state.maxMana);
  view.renderTurn(state.turn);
  view.renderPlayer(state.playerHp);
  view.renderEnemy(state.enemy);
};

const gameInit = function () {
  draw();
  draw();
  draw();
  state.playerHp = 30;
  renderUI();
  startTimer();
};

const handHandler = function (e) {
  const clickAudio = new Audio("/handClick.mp3");

  const clicked = e.target.closest(".card");
  if (!clicked) return;
  const foundCard = state.hand.find((el) => el.id === +clicked.id);
  if (foundCard.cost <= state.currentMana) {
    clickAudio.play();
    checkForRage(foundCard);
    checkForBlessing(foundCard);
    checkForHourglass(foundCard);
    const boardArr = state.hand.filter((el) => el.id === foundCard.id);
    state.board.push(...boardArr);
    const newArr = state.hand.filter((el) => el.id !== foundCard.id);
    state.hand = newArr;
    state.currentMana -= foundCard.cost;

    renderUI();
  }
};
const checkForRage = function (card) {
  if (card.ability === "Rage" && state.board.length > 0)
    state.board.forEach((card) => {
      if (card.attack > 0) card.attack += 1;
    });
};

const checkForBlessing = function (card) {
  if (card.ability === "Blessing" && state.board.length > 0)
    state.board.forEach((card) => {
      if (card.healing > 0) card.healing += 1;
    });
};

const checkForHourglass = function (card) {
  if (card.ability === "Hourglass" && state.board.length > 0)
    state.board.forEach((card) => {
      card.turns += 1;
    });
};

hand.addEventListener("click", handHandler);
view.addHandlerAttack(attackBtnClick);
view.addHandlerGameInit(gameInit);
view.addHandlerDraw(drawBtnClick);
