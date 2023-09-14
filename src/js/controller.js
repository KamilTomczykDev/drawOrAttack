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

  console.log(model.state.cementary);
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
  }, 1000);
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
const turnNumberUp = () => (model.state.turn += 1);

const manaNumberUp = () => {
  model.state.maxMana += 1;
  model.state.currentMana = model.state.maxMana;
};
const nextTurn = function () {
  const player = document.querySelector(".hero");
  const playerImg = document.querySelector(".hero--img");
  const playerHpElement = document.querySelector(".hero--health");
  setTimer();
  turnNumberUp();
  manaNumberUp();
  setTimeout(function () {
    model.state.playerHp -= model.state.enemy.attack;
    view.giveShakeAnimation(playerHpElement);
    view.giveDamageAnimation(playerHpElement);
    view.nextTurnAnimation();
    subtractTurn(model.state.board);
    killUnits();
    renderUI();
    setTimer();
  }, 2000);
};

const drawBtnClick = function () {
  nextTurn();
  setTimeout(() => {
    draw();
    // setTimer();
  }, 2500);
};

const renderUI = function () {
  view.renderCementaryNum(model.state.cementary);
  view.renderDeckNum(model.state.deck);
  view.renderHand(model.state.hand);
  view.renderBoard(model.state.board);
  view.renderMana(model.state.currentMana, model.state.maxMana);
  view.renderTurn(model.state.turn);
  view.renderPlayer(model.state.playerHp);
};

const gameInit = function () {
  draw();
  draw();
  draw();
  model.state.playerHp = 30;
  renderUI();
  startTimer();
};

hand.addEventListener("click", function (e) {
  const clicked = e.target.closest(".hand--card");
  if (!clicked) return;
  console.log(clicked.id);
  const foundCard = model.state.hand.find((el) => el.id === +clicked.id);
  if (foundCard.cost <= model.state.currentMana) {
    const boardArr = model.state.hand.filter((el) => el.id === foundCard.id);
    model.state.board.push(...boardArr);
    console.log(model.state.board);

    console.log(foundCard);
    const newArr = model.state.hand.filter((el) => el.id !== foundCard.id);
    console.log(newArr);
    model.state.hand = newArr;
    console.log(model.state.hand);
    model.state.currentMana -= foundCard.cost;
    if (foundCard.ability === "rage")
      model.board.forEach((card) => (card.attack += 1));
    renderUI();
  }
});
view.addHandlerGameInit(gameInit);
view.addHandlerDraw(drawBtnClick);
