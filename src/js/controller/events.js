"use strict";
import { state } from "../model.js";
//prettier-ignore
import {addHandlerAttack, addHandlerDraw,addHandlerGameInit} from "../view/events.js";
//prettier-ignore
import { nextTurn, draw, nextTurn, renderUI, startTimer, checkForAbility } from "./gameLogic.js";

import { giveShakeAnimation, giveDamageAnimation } from "../view/animations.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

const hand = document.querySelector(".hand");

////////////////////////
const handleGameInit = function () {
  state.playerHp = 30;

  draw();
  draw();
  draw();
  renderUI();
  startTimer();
};

const handleHand = function (e) {
  const clicked = e.target.closest(".card");
  if (!clicked) return;
  const foundCard = state.hand.find((el) => el.id === +clicked.id);
  if (foundCard.cost <= state.currentMana) {
    checkForAbility(foundCard);
    const boardArr = state.hand.filter((el) => el.id === foundCard.id);
    state.board.push(...boardArr);
    const newArr = state.hand.filter((el) => el.id !== foundCard.id);
    state.hand = newArr;
    state.currentMana -= foundCard.cost;

    renderUI();
  }
};

const handleDrawButton = function () {
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

const handleAttackButton = function () {
  const enemyHpElement = document.querySelector(".enemy-section--hero--health");

  state.board.forEach((card) => {
    if (card.attack) state.enemy.hp -= card.attack;
  });
  nextTurn();
  setTimeout(function () {
    giveShakeAnimation(enemyHpElement);
    giveDamageAnimation(enemyHpElement);
    if (state.turn >= 12) {
      draw();
    }
  }, 2000);
};

hand.addEventListener("click", handleHand);
addHandlerAttack(handleAttackButton);
addHandlerGameInit(handleGameInit);
addHandlerDraw(handleDrawButton);
