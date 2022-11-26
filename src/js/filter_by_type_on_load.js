import loadData from "./loadData.js";
import createChallengeCard from "./create_cards.js";

function filterByType(data, type) {
    let filteredData = data.filter((challenge)=> {
        return challenge.type === type;
    });
    return filteredData;
}

async function getQueryParams() {
  const params = window.location.search;
  const paramSearch = new URLSearchParams(params);
  const type = paramSearch.get("type");

  //Call function to get API data
  let data = await loadData();

  // if type === online || type === onsite Call function for filtering cards via type
  if(type === "online") {
    data = filterByType(data, "online");
  }

  else if(type === "onsite") {
    data = filterByType(data, "onsite");
  }
  //Call function for rendering cards
  createChallengeCard(data, document.querySelector(".challenges-list"));
}

getQueryParams();