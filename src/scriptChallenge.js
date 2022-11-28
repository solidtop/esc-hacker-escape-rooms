import loadData from "./js/loadData.js"
import {filterByTypeOnLoad, getQueryParams, renderChallenges} from "./js/filterByTypeOnLoad.js"
import { filterAndUpdateCards } from "./js/renderChallenges.js";
import { createChallengeCard } from "./js/challenge-card.js";
import { filterByType } from "./js/filter-type.js";
import filterText from "./js/filterText.js";

const challengeContainer = document.querySelector(".challenge-list");
const textFilter = document.querySelector("#text-filter");

async function run() {
    const challenges = await loadData();
    const queryParams = getQueryParams();
    renderChallenges(queryParams, challengeContainer, challenges, filterByTypeOnLoad, createChallengeCard);

    textFilter.addEventListener("keyup" ,()=> {
        filterAndUpdateCards(challenges, createChallengeCard, challengeContainer, filterText);
    })
}

run();