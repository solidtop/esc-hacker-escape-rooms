import loadData from "./loadData.js";
import { createChallengeCard } from "./challenge-card.js";
import renderChallenges from "./renderChallenges.js";
import filterPopularChallenges from "./filterPopularChallenges.js";

renderChallenges(loadData, filterPopularChallenges, createChallengeCard, document.querySelector(".challenge-list"));