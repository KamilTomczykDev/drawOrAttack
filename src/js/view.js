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

/////////////////////////////////////////////////////
export const giveAnimation = function (parentEl) {
  parentEl.classList.add("shake-animation");
  setTimeout(function () {
    parentEl.classList.remove("shake-animation");
  }, 1000);
};
export const renderCementaryNum = (data) =>
  (cementaryNum.textContent = data.length);

export const renderDeckNum = (data) => (deckNum.textContent = data.length);

export const renderTimer = function (data) {
  const timer = document.querySelector(".timer");
  timer.textContent = `${data}s`;
};

export const renderHand = async function (data) {
  const parentElement = document.querySelector(".hand");
  parentElement.innerHTML = "";
  data.forEach(function (card) {
    const markup = `
    <div class="hand--card">
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
