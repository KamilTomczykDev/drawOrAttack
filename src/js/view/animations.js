import { ENEMY_TURN_TIME } from "../config";

const board = document.querySelector(".board");
const gameMenuStart = document.querySelector(".game-menu--start");

export const giveShakeAnimation = function (parentEl) {
  setTimeout(() => {
    console.log(parentEl);
    parentEl.classList.add("shake-animation");
    setTimeout(() => parentEl.classList.remove("shake-animation"), 1000);
  }, ENEMY_TURN_TIME);
};

export const giveDamageAnimation = function (parentEl) {
  setTimeout(() => {
    parentEl.style.backgroundColor = "red";
    setTimeout(() => (parentEl.style.backgroundColor = "white"), 1000);
  }, ENEMY_TURN_TIME);
};

export const nextTurnAnimation = () => {
  const nextTurnText = document.querySelector(".next-turn--container");
  setTimeout(() => {
    nextTurnText.style.display = "flex";

    setTimeout(function () {
      nextTurnText.style.opacity = 1;
    }, 500);
    setTimeout(function () {
      nextTurnText.style.opacity = 0;
    }, 1500);
    setTimeout(function () {
      nextTurnText.style.display = "none";
    }, 2300);
  }, ENEMY_TURN_TIME);
};

export const disableButtons = () => {
  const attackBtn = document.querySelector(".button--attack");
  const drawBtn = document.querySelector(".button--draw");
  const hand = document.querySelector(".hand");

  hand.classList.add("disabled");
  attackBtn.disabled = true;
  drawBtn.disabled = true;
  setTimeout(() => {
    hand.classList.remove("disabled");
    attackBtn.disabled = false;
    drawBtn.disabled = false;
  }, ENEMY_TURN_TIME);
};

board.addEventListener("mouseover", function (e) {
  const clicked = e.target.closest(".board--card");
  if (!clicked) return;
  const elementFound = document.getElementById(`${clicked.dataset.id}`);
  elementFound.style.opacity = "1";
});

board.addEventListener("mouseout", function (e) {
  const clicked = e.target.closest(".board--card");
  if (!clicked) return;
  const elementFound = document.getElementById(`${clicked.dataset.id}`);
  elementFound.style.opacity = "0";
});

gameMenuStart.addEventListener("click", function (e) {
  const gameMenu = document.querySelector(".game-menu");
  const footer = document.querySelector(".footer");
  const game = document.querySelector(".game");

  gameMenu.style.display = "none";
  footer.style.display = "none";
  game.style.opacity = "1";
});
