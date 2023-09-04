import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

////////////////////////

const boardCard = document.querySelector(".board--card--img");
const hoverView = document.querySelector(".hover-view");
const enemySide = document.querySelector(".enemy-section");
const enemyDisc = document.querySelector(".enemy-section--discription");
const enemyHealth = document.querySelector(".enemy-section--hero--health");

const createHover = function (firstEl, secondEl) {
  firstEl.addEventListener("mouseover", () => (secondEl.style.opacity = "1"));
  firstEl.addEventListener("mouseout", () => (secondEl.style.opacity = "0"));
};

createHover(boardCard, hoverView);
createHover(enemySide, enemyDisc);
