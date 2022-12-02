import loadData from "./js/loadData.js";
import filterPopularChallenges from "./js/filterPopularChallenges.js";
import createChallengeCard from "./js/challengeCard.js";
import { renderChallenges } from "./js/renderChallenges.js";

(async () => {
  let challengesArray = await loadData();
  renderChallenges(challengesArray, filterPopularChallenges, createChallengeCard, document.querySelector(".challenge-list"));
})();
