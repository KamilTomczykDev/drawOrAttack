export const addHandlerGameInit = function (handler) {
  const gameMenuStart = document.querySelector(".game-menu--start");

  gameMenuStart.addEventListener("click", (e) => handler());
};

export const addHandlerDraw = function (handler) {
  const drawBtn = document.querySelector(".button--draw");

  drawBtn.addEventListener("click", handler);
};

export const addHandlerAttack = function (handler) {
  const attackBtn = document.querySelector(".button--attack");

  attackBtn.addEventListener("click", handler);
};
