import { GameState } from "../model.js";
//prettier-ignore
import { renderBoard, renderCementaryNum, renderEnemy, renderHand, renderPlayer, renderMana, renderTurn, renderDeckNum,renderTimer } from "../view/renders.js";
//prettier-ignore
export const renderUI = () => {
  renderCementaryNum(GameState.cementary);
  renderDeckNum(GameState.deck);
  renderHand(GameState.hand);
  renderBoard(GameState.board);
  renderMana(GameState.currentMana, GameState.maxMana);
  renderTurn(GameState.turn);
  renderPlayer(GameState.playerHp);
  renderEnemy(GameState.enemy);
};
