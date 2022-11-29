import loadData from "./js/loadData.js"
import {filterByTypeOnLoad, getQueryParams, renderChallenges} from "./js/filterByTypeOnLoad.js"
import { filterAndUpdateCards } from "./js/renderChallenges.js";
import { createChallengeCard } from "./js/challenge-card.js";
import { filterByType } from "./js/filter-type.js";
import { getTags, displayTags, filterByTags } from "./js/tag-filter.js";
import filterText from "./js/filterText.js";

const challengeContainer = document.querySelector(".challenge-list");
const textFilter = document.querySelector("#text-filter");
const onlineTypeInput = document.querySelector("input[name='online-challenge']");
const onsiteTypeInput = document.querySelector("input[name='on-site-challenge']");
const tagParent = document.querySelector("#btn-container");

async function run() {
    const challenges = await loadData();
    const queryParams = getQueryParams();
    renderChallenges(queryParams, challengeContainer, challenges, filterByTypeOnLoad, createChallengeCard);

    const tags = getTags(challenges);
    const buttons = displayTags(tags, challenges, tagParent);
    console.log(buttons)

    textFilter.addEventListener("keyup" ,()=> {
        filterAndUpdateCards(challenges, createChallengeCard, challengeContainer, filterText, filterByType);
    });

    onlineTypeInput.addEventListener("click", ()=> {
        filterAndUpdateCards(challenges, createChallengeCard, challengeContainer, filterText, filterByType);
    });

    onsiteTypeInput.addEventListener("click", ()=> {
        filterAndUpdateCards(challenges, createChallengeCard, challengeContainer, filterText, filterByType);
    })

}

run();