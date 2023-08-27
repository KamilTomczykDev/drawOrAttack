import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

////////////////////////

const elToHover = document.querySelector(".board-card-img");
const secondEl = document.querySelector(".board-card-fullview");

elToHover.addEventListener("mouseover", () => (secondEl.style.opacity = "1"));
elToHover.addEventListener("mouseout", () => (secondEl.style.opacity = "0"));
