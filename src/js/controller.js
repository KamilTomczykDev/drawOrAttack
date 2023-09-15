"use strict";
import * as model from "./model.js";
import * as data from "./API.js";
import * as view from "./view.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}
const hand = document.querySelector(".hand");

////////////////////////

const setTimer = () => (model.state.timer = 25);
const subtractTurn = (data) => data.forEach((card) => (card.turns -= 1));
const killUnits = () => {
  if (model.state.board.length > 0)
    model.state.cementary.push(
      ...model.state.board.filter((card) => +card.turns === 0)
    );
  model.state.board = model.state.board.filter((card) => +card.turns !== 0);
};

const startTimer = function () {
  setTimer();
  const countdown = setInterval(function () {
    --model.state.timer;
    view.renderTimer(model.state.timer);
    if (model.state.timer < 1) {
      clearInterval(countdown);
      startTimer();
      nextTurn();
      setTimeout(() => draw(), 2000);
    }
    if (model.state.winner !== null) clearInterval(countdown);
  }, 1000);
};
const giveHandlersBack = () => {
  view.addHandlerAttack(attackBtnClick);
  view.addHandlerDraw(drawBtnClick);
};

const draw = function () {
  const number = Math.trunc(Math.random() * model.state.deck.length);
  if (model.state.deck.length === 0) return;
  if (model.state.hand.length === 5) {
    model.state.cementary.push(model.state.deck[number]);
    const cementaryNum = document.querySelector(".skull-number");
    view.giveShakeAnimation(cementaryNum);
  } else {
    model.state.hand.push(model.state.deck[number]);
  }
  const x = model.state.deck.splice(number, 1);
  renderUI();
};
const turnNumberUp = () => {
  model.state.turn += 1;
  if (model.state.turn === 7 && model.state.enemy.hp > 0) {
    model.state.enemy.hp = 35;
    model.state.enemy.attack = 8;
    model.state.enemy.name = "Nazgramm the Bloodlord";
    model.state.enemy.discription = "Deal 8 dmg and heal 2 hp each round";
    model.state.enemy.img = "/nazgrammSecond.0f43c395.png";
  }
  if (model.state.turn === 12 && model.state.enemy.hp > 0) {
    model.state.enemy.hp = 40;
    model.state.enemy.attack = 10;
    model.state.enemy.name = "Nazgramm (Demon form)";
    model.state.enemy.discription =
      "Deal 10 dmg, heal 2 hp and kill random unit each round";
    model.state.enemy.img = "/nazgrammThird.f4d17714.png";
  }
};

const nazgrammUltimate = () => {
  if (model.state.turn >= 7 && model.state.enemy.hp < 40) {
    model.state.enemy.hp += 2;
  }
  if (model.state.turn >= 12 && model.state.board.length > 0) {
    const number = Math.trunc(Math.random() * model.state.board.length);
    model.state.cementary.push(model.state.board[number]);
    const x = model.state.board.splice(number, 1);

    renderUI();
  }
};
const lookForWinner = function () {
  if (model.state.playerHp <= 0) {
    model.state.winner = "enemy";
    view.renderEnd(model.state.winner);
  }
  if (model.state.enemy.hp <= 0) {
    model.state.winner = "player";
    view.renderEnd(model.state.winner);
  }
};
const manaNumberUp = () => {
  if (model.state.maxMana !== 10) model.state.maxMana += 1;
  model.state.currentMana = model.state.maxMana;
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
  console.log(model.state.board);
  setTimeout(function () {
    model.state.playerHp -= model.state.enemy.attack;
    lookForWinner();
    view.giveShakeAnimation(playerHpElement);
    view.giveDamageAnimation(playerHpElement);
    view.nextTurnAnimation();
    subtractTurn(model.state.board);
    killUnits();
    setTimer();
    giveHandlersBack();
    nazgrammUltimate();
    turnNumberUp();
    renderUI();
  }, 2000);
};

const drawBtnClick = function () {
  nextTurn();
  setTimeout(() => {
    if (model.state.turn >= 12) {
      draw();
      draw();
    } else {
      draw();
    }
  }, 2500);
};
const applyHealing = () => {
  model.state.board.forEach((card) => {
    if (card.healing > 0) model.state.playerHp += card.healing;
  });
};
const attackBtnClick = function () {
  const enemyHpElement = document.querySelector(".enemy-section--hero--health");
  model.state.board.forEach((card) => {
    model.state.enemy.hp -= card.attack;
  });
  nextTurn();
  setTimeout(function () {
    view.giveShakeAnimation(enemyHpElement);
    view.giveDamageAnimation(enemyHpElement);
    if (model.state.turn >= 12) {
      draw();
    }
  }, 2000);
};

const renderUI = function () {
  view.renderCementaryNum(model.state.cementary);
  view.renderDeckNum(model.state.deck);
  view.renderHand(model.state.hand);
  view.renderBoard(model.state.board);
  view.renderMana(model.state.currentMana, model.state.maxMana);
  view.renderTurn(model.state.turn);
  view.renderPlayer(model.state.playerHp);
  view.renderEnemy(model.state.enemy);
};

const gameInit = function () {
  draw();
  draw();
  draw();
  model.state.playerHp = 30;
  renderUI();
  startTimer();
};

const handHandler = function (e) {
  const clicked = e.target.closest(".hand--card");
  if (!clicked) return;
  const foundCard = model.state.hand.find((el) => el.id === +clicked.id);
  if (foundCard.cost <= model.state.currentMana) {
    checkForRage(foundCard);
    checkForBlessing(foundCard);
    checkForHourglass(foundCard);
    const boardArr = model.state.hand.filter((el) => el.id === foundCard.id);
    model.state.board.push(...boardArr);
    const newArr = model.state.hand.filter((el) => el.id !== foundCard.id);
    model.state.hand = newArr;
    model.state.currentMana -= foundCard.cost;

    renderUI();
  }
};
const checkForRage = function (card) {
  if (card.ability === "Rage" && model.state.board.length > 0)
    model.state.board.forEach((card) => {
      if (card.attack > 0) card.attack += 1;
    });
};

const checkForBlessing = function (card) {
  if (card.ability === "Blessing" && model.state.board.length > 0)
    model.state.board.forEach((card) => {
      if (card.healing > 0) card.healing += 1;
    });
};

const checkForHourglass = function (card) {
  if (card.ability === "Hourglass" && model.state.board.length > 0)
    model.state.board.forEach((card) => {
      card.turns += 1;
    });
};

hand.addEventListener("click", handHandler);
view.addHandlerAttack(attackBtnClick);
view.addHandlerGameInit(gameInit);
view.addHandlerDraw(drawBtnClick);
