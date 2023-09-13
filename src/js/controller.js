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
const startTimer = function () {
  model.state.timer = 25;
  const countdown = setInterval(function () {
    --model.state.timer;
    // console.log(model.state.timer);
    view.renderTimer(model.state.timer);
    if (model.state.timer < 1) {
      clearInterval(countdown);
      startTimer();
    }
  }, 1000);
};

const draw = function () {
  const number = Math.trunc(Math.random() * model.state.deck.length);
  if (model.state.deck.length === 0) return;
  if (model.state.hand.length === 6) {
    model.state.cementary.push(model.state.deck[number]);
    const cementaryNum = document.querySelector(".skull-number");
    view.giveAnimation(cementaryNum);
  } else {
    model.state.hand.push(model.state.deck[number]);
  }
  const x = model.state.deck.splice(number, 1);
  // console.log(model.state.hand);
  // console.log(model.state.deck);
  // console.log(number);
  // console.log(data.defaultDeckArray);

  renderUI();
};

const renderUI = function () {
  view.renderCementaryNum(model.state.cementary);
  view.renderDeckNum(model.state.deck);
  view.renderHand(model.state.hand);
};

const gameInit = function () {
  renderUI();
  startTimer();
};

hand.addEventListener("click", function (e) {
  const clicked = e.target.closest(".hand--card");
  if (!clicked) return;
  console.log(clicked.id);
  const boardArr = model.state.hand.filter((el) => el.id === +clicked.id);
  model.state.board.push(...boardArr);
  console.log(model.state.board);
  const newArr = model.state.hand.filter((el) => el.id !== +clicked.id);
  console.log(newArr);
  model.state.hand = newArr;
  console.log(model.state.hand);
  renderUI();
});
view.addHandlerGameInit(gameInit);
view.addHandlerDraw(draw);
