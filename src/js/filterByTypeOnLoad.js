import loadData from "./loadData.js";
import { createChallengeCard } from "./challenge-card.js";

const challengeContainer = document.querySelector(".challenge-list");

function filterByType(data, type) {
    let filteredData = data.filter((challenge)=> {
        return challenge.type === type;
    });
    return filteredData;
}

function getQueryParams() {
  const params = window.location.search;
  const paramSearch = new URLSearchParams(params);
  const type = paramSearch.get("type");
  
  return type;
}

async function renderChallenges(getQueryParams, container) {
  const type =  getQueryParams();
  let data = await loadData();

  if(type === "online") {
    data = filterByType(data, "online");
  }
  else if(type === "onsite") {
    data = filterByType(data, "onsite");
  }
  data.forEach((challenge) => {
    const card = createChallengeCard(challenge);
    container.append(card);
  });
}

renderChallenges(getQueryParams, challengeContainer);


