"use strict";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

////////////////////////

const board = document.querySelector(".board");
const hoverView = document.querySelector(".hover-view");
const enemySide = document.querySelector(".enemy-section");
const enemyDisc = document.querySelector(".enemy-section--discription");
const enemyHealth = document.querySelector(".enemy-section--hero--health");

const createHover = function (firstEl, secondEl) {
  firstEl.addEventListener("mouseover", () => (secondEl.style.opacity = "1"));
  firstEl.addEventListener("mouseout", () => (secondEl.style.opacity = "0"));
};
console.log(board);
createHover(enemySide, enemyDisc);

board.addEventListener("mouseover", function (e) {
  const clicked = e.target.closest(".board--card");
  if (!clicked) return;
  console.log(clicked);
  const elementFound = document.getElementById(`${clicked.dataset.id}`);
  elementFound.style.opacity = "1";

  // console.log(clicked.dataset.id);
  // console.log(clicked.closest(clicked));
});

board.addEventListener("mouseout", function (e) {
  const clicked = e.target.closest(".board--card");
  if (!clicked) return;
  console.log(clicked);
  const elementFound = document.getElementById(`${clicked.dataset.id}`);
  elementFound.style.opacity = "0";
});
