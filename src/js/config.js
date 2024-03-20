import secondStageImage from "../img/nazgrammSecond.png";
import thirdStageImage from "../img/nazgrammThird.png";

export const TURN_TIME_IN_SECONDS = 25;
export const MAX_CARDS_IN_HAND = 5;
export const MAX_MANA = 10;

//enemy
export const SECOND_STAGE_START = 7;
export const THIRD_STAGE_START = 12;
export const SECOND_STAGE = {
  hp: 35,
  attack: 8,
  name: "Nazgramm the Bloodlord",
  discription: "Deal 8 dmg and heal 5 hp each round",
  img: secondStageImage,
};
export const THIRD_STAGE = {
  hp: 40,
  attack: 10,
  name: "Nazgramm (Demon Form)",
  discription: "Deal 10 dmg, heal 5 hp and kill random unit each round",
  img: thirdStageImage,
};

//cards
export const RAGE_AMOUNT = 1;
export const BLESSING_AMOUNT = 2;
export const HOURGLASS_AMOUNT = 1;
