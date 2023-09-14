const board = document.querySelector(".board");
const hoverView = document.querySelector(".hover-view");
const enemySide = document.querySelector(".enemy-section");
const enemyDiscription = document.querySelector(".enemy-section--discription");
const enemyHealth = document.querySelector(".enemy-section--hero--health");
const gameMenu = document.querySelector(".game-menu");
const gameMenuCntnr = document.querySelector(".game-menu--container");
const game = document.querySelector(".game");
const footer = document.querySelector(".footer");
const deckNum = document.querySelector(".deck-number");
const cementaryNum = document.querySelector(".skull-number");
const drawBtn = document.querySelector(".button--draw");
const hand = document.querySelector(".hand");
const turnCounter = document.querySelector(".turn-counter");
const playerHp = document.querySelector(".hero--health");
const nextTurnText = document.querySelector(".next-turn--container");
const btns = document.querySelector("#btn");

/////////////////////////////////////////////////////
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

export const renderCementaryNum = (data) =>
  (cementaryNum.textContent = data.length);

export const renderDeckNum = (data) => (deckNum.textContent = data.length);

export const renderTimer = function (data) {
  const timer = document.querySelector(".timer");
  timer.textContent = `${data}s`;
};

export const stopCursor = () => {
  btns.style.cursor = "not-allowed";
  console.log(btns);
  setTimeout(() => (btns.style.cursor = "pointer"), 2500);
};

export const renderHand = async function (data) {
  const parentElement = document.querySelector(".hand");
  parentElement.innerHTML = "";
  data.forEach(function (card) {
    const markup = `
    <div class="hand--card" id="${card.id}">
        <div class="hand--card--cost">${card.cost}</div>
        <img src="${card.img}" class="hand--card--img" />
        <p class="hand--card--name">${card.name}</p>
        <p class="hand--card--ability"><br />${card.ability}</p>
        <div class="hand--card--left-stat ${
          card.healing > 0 ? "healer" : ""
        }">${card.attack === 0 ? card.healing : card.attack}</div>
        <div class="hand--card--turn-stat">${card.turns}</div>
    </div>
    `;
    parentElement.insertAdjacentHTML("beforeend", markup);
  });
};

export const renderBoard = function (data) {
  const parentElement = board;
  parentElement.innerHTML = "";
  data.forEach(function (card) {
    const markup = `
    <div class="board--card" data-id="${card.id}00">
      <img class="board--card--img" src="${card.img}" />
      <div class="board--card--left-stat  ${
        card.healing > 0 ? "healer" : ""
      }">${card.attack === 0 ? card.healing : card.attack}</div>
      <div class="board--card--turn-stat">${card.turns}</div>
      <div class="hover-view" id="${card.id}00">
        <div class="hover-view--cost">${card.cost}</div>
        <img src="${card.img}" class="hover-view--img" />
        <p class="hover-view--name">${card.name}</p>
        <p class="hover-view--ability"><br />${card.ability}</p>
        <div class="hover-view--left-stat ${
          card.healing > 0 ? "healer" : ""
        }">${card.attack === 0 ? card.healing : card.defaultAttack}</div>
        <div class="hover-view--turn-stat">${card.defaultTurns}</div>
      </div>
    </div>
    `;
    parentElement.insertAdjacentHTML("beforeend", markup);
  });
};

export const renderMana = function (currentData, maxData) {
  const manaCounter = document.querySelector(".mana--counter");
  const manaContainer = document.querySelector(".mana--container");
  manaCounter.textContent = `${currentData}/${maxData}`;
  const markup = `
    <p class="mana"></p>
  `;
  manaContainer.innerHTML = "";
  for (let i = 1; i <= currentData; i++) {
    manaContainer.insertAdjacentHTML("beforeend", markup);
  }
};
export const renderTurn = function (data) {
  let rest;
  if (data === 1) rest = "st";
  if (data === 2) rest = "nd";
  if (data === 3) rest = "rd";
  if (data > 3) rest = "th";
  turnCounter.textContent = `${data}${rest} turn`;
};

export const renderPlayer = (data) => (playerHp.textContent = data);

// event handlers //

export const addHandlerGameInit = function (handler) {
  gameMenuCntnr.addEventListener("click", (e) => handler());
};

export const addHandlerDraw = function (handler) {
  drawBtn.addEventListener("click", function (e) {
    handler();
  });
};

// game animation events //

enemySide.addEventListener(
  "mouseover",
  () => (enemyDiscription.style.opacity = "1")
);
enemySide.addEventListener(
  "mouseout",
  () => (enemyDiscription.style.opacity = "0")
);

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

gameMenuCntnr.addEventListener("click", function (e) {
  gameMenu.style.display = "none";
  footer.style.display = "none";
  game.style.opacity = "1";
});
