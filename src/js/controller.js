"use strict";
//prettier-ignore
import {addHandlerAttack, addHandlerDraw,addHandlerGameInit, addHandlerHand} from "./view/events.js";
//prettier-ignore
import { giveShakeAnimation, giveDamageAnimation, disableButtons, animateNextTurn} from "./view/animations.js";
import { renderUI } from "./helpers.js";
import { GameState } from "./model.js";
import { renderEndgame, renderEnemy, renderTimer } from "./view/renders.js";
import { ENEMY_TURN_TIME } from "./config.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}
const skipTurn = () => {
  GameState.nextTurn();
  disableButtons();
  animateNextTurn();
  setTimeout(() => {
    if (GameState.winner) {
      disableButtons();
      renderEndgame(GameState.winner);
    }
    renderUI();
    const playerHealthElement = document.querySelector(".hero--health");
    giveDamageAnimation(playerHealthElement);
    giveShakeAnimation(playerHealthElement);
  }, ENEMY_TURN_TIME);
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
  GameState.attack();
  skipTurn();
  renderEnemy(GameState.enemy);
  const enemyHpElement = document.querySelector(".enemy-section--hero--health");
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
