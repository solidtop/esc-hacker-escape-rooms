import loadData from "./js/loadData.js";
import filterPopularChallenges from "./js/filterPopularChallenges.js";
import createChallengeCard from "./js/challengeCard.js";
import { renderChallenges } from "./js/renderChallenges.js";
import { listeners }  from "./js/modal.js";

let challengesArray = await loadData();

await renderChallenges(challengesArray, filterPopularChallenges, createChallengeCard, document.querySelector(".challenge-list"));

listeners();

document.querySelector('.main-nav-toggle').addEventListener('click', () => {
document.querySelector('.main-nav').classList.toggle('open');})