"use strict";
import { GameState } from "../model.js";
//prettier-ignore
import {addHandlerAttack, addHandlerDraw,addHandlerGameInit, addHandlerHand} from "../view/events.js";
//prettier-ignore
import { nextTurn, renderUI, setTimer } from "./gameLogic.js";

import {
  giveShakeAnimation,
  giveDamageAnimation,
  disableButtons,
  nextTurnAnimation,
} from "../view/animations.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  renderBoard,
  renderEndgame,
  renderHand,
  renderMana,
  renderTimer,
} from "../view/renders.js";

if (module.hot) {
  module.hot.accept();
}
const skipTurn = () => {
  GameState.nextTurn();
  disableButtons();
  nextTurnAnimation();
  setTimeout(() => {
    renderUI();
    if (GameState.winner) renderEndgame(GameState.winner);
  }, 2500);
};
export const startTimer = () => {
  GameState.resetTimer();
  const countdown = setInterval(function () {
    GameState.decrementTimer();
    renderTimer(GameState.timer);
    if (GameState.timer < 1) {
      clearInterval(countdown);
      startTimer();
      skipTurn();
      setTimeout(() => GameState.draw(), 2000);
    }
    if (GameState.winner) {
      clearInterval(countdown);
    }
  }, 1000);
};
////////////////////////
const controlGameInit = function () {
  GameState.draw();
  GameState.draw();
  GameState.draw();
  renderUI();
  startTimer();
};

const controlHand = function (e) {
  GameState.playCard(e);
  renderUI();
};

const controlDrawButton = function () {
  skipTurn();
  GameState.draw();
};

const controlAttackButton = function () {
  const enemyHpElement = document.querySelector(".enemy-section--hero--health");
  skipTurn();
  GameState.attack();
  giveShakeAnimation(enemyHpElement);
  giveDamageAnimation(enemyHpElement);
};

function init() {
  addHandlerHand(controlHand);
  addHandlerAttack(controlAttackButton);
  addHandlerGameInit(controlGameInit);
  addHandlerDraw(controlDrawButton);
}

init();
