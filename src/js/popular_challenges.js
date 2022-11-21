import loadData from "./loadData.js";
import createChallengeCard from "./create_cards.js"
import renderChallenges from "./render_challenges.js";
import filterPopularChallenges from "./filter_popular_challenges.js";

renderChallenges(loadData, filterPopularChallenges, createChallengeCard);