const board = document.querySelector(".board");
const gameMenuStart = document.querySelector(".game-menu--start");

export const giveShakeAnimation = function (parentEl) {
  parentEl.classList.add("shake-animation");
  setTimeout(function () {
    parentEl.classList.remove("shake-animation");
  }, 1000);
};

export const giveDamageAnimation = function (parentEl) {
  parentEl.style.backgroundColor = "red";
  setTimeout(function () {
    parentEl.style.backgroundColor = "white";
  }, 1000);
};

export const nextTurnAnimation = () => {
  const nextTurnText = document.querySelector(".next-turn--container");
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
};

export const disableButtons = () => {
  const attackBtn = document.querySelector(".button--attack");
  const drawBtn = document.querySelector(".button--draw");

  attackBtn.disabled = true;
  drawBtn.disabled = true;
  setTimeout(() => {
    attackBtn.disabled = false;
    drawBtn.disabled = false;
  }, 2500);
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
