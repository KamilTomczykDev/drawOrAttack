export const renderCementaryNum = (data) => {
  const cementaryNum = document.querySelector(".skull-number");

  cementaryNum.textContent = data.length;
};

export const renderDeckNum = (data) => {
  const deckNum = document.querySelector(".deck-number");

  deckNum.textContent = data.length;
};

export const renderTimer = function (data) {
  const timer = document.querySelector(".timer");
  timer.textContent = `${data}s`;
};

export const renderHand = async function (data) {
  const parentElement = document.querySelector(".hand");
  parentElement.innerHTML = "";
  data.forEach(function (card) {
    const markup = `
    <div class="card" id="${card.id}">
        <div class="card--cost">${card.cost}</div>
        <img alt="Hand card image" src="${card.img}" class="card--img" />
        <p class="card--name">${card.name}</p>
        <p class="card--ability"><br />${card.ability}</p>
        <div class="card--stat-container">
          <div class="card--action-stat ${card.healing ? "healer" : ""}">${
      !card.attack ? card.healing : card.attack
    }</div>
          <div class="card--turn-stat">${card.turns}</div>
        </div>
    </div>
    `;
    parentElement.insertAdjacentHTML("beforeend", markup);
  });
};

export const renderBoard = function (data) {
  const board = document.querySelector(".board");

  const parentElement = board;
  parentElement.innerHTML = "";
  data.forEach(function (card) {
    const markup = `
    <div class="board--card" data-id="${card.id}00">
      <img class="board--card--img" alt="Board card image" src="${card.img}" />
      <div class="board--card--stat-container">
        <div class="board--card--action-stat  ${
          card.healing ? "healer" : ""
        }">${!card.attack ? card.healing : card.attack}</div>
        <div class="board--card--turn-stat">${card.turns}</div>
      </div>
      
      <div class="card hover-view" id="${card.id}00">
        <div class="card--cost">${card.cost}</div>
        <img src="${card.img}" alt="Board card image" class="card--img" />
        <p class="card--name">${card.name}</p>
        <p class="card--ability"><br />${card.ability}</p>
        <div class="card--stat-container">
          <div class="card--action-stat ${card.healing ? "healer" : ""}">${
      !card.attack ? card.healing : card.defaultAttack
    }</div>
          <div class="card--turn-stat">${card.defaultTurns}</div>
        </div>
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
  const turnCounter = document.querySelector(".turn-counter");

  let rest = "th";
  if (data === 1) rest = "st";
  if (data === 2) rest = "nd";
  if (data === 3) rest = "rd";
  turnCounter.textContent = `${data}${rest} turn`;
};

export const renderPlayer = (data) => {
  const playerHp = document.querySelector(".hero--health");
  playerHp.textContent = data;
};

export const renderEnemy = (data) => {
  const parentElement = document.querySelector(".enemy-section");
  parentElement.innerHTML = "";
  const markup = `
  <div class="enemy-section--hero">
  <img
    class="enemy-section--hero--img"
    alt="Enemy hero image"
    src="${data.img}"
  />
  <span class="enemy-section--hero--health">${data.hp}</span>
  <div class="enemy-section--discription">
    ${data.name}<br/><br/>${data.discription}
  </div>
</div>
  `;
  parentElement.insertAdjacentHTML("beforeend", markup);
};

export const renderEndgame = function (data) {
  const game = document.querySelector(".game");

  game.style.opacity = "0";

  const playerWins =
    "Congratulations! 🏆<br/>Dark force has been destroyed.. but is It really over?";
  const enemyWins = "Oh no!<br/>Reign of dark forces will last forever..";
  const markup = `
    <div class="end-game">
      <div class = "end-game--message">${
        data === "enemy" ? enemyWins : playerWins
      }</div>
      <div class="end-game--refresh">Press F5 or other refresh button to play again</div>
      <div class="footer--icons">
            <a
              href="https://github.com/KamilTomczykDev/drawOrAttack"
              class="link"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kamil-tomczyk-a118952b3"
              class="link"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
      </div>
    </div>
    
    `;
  setTimeout(() => {
    game.innerHTML = "";
    game.insertAdjacentHTML("beforeend", markup);
    game.style.opacity = "1";
  }, 4000);
};
