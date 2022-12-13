function filterByTypeOnLoad(data, type) {
    let filteredData = data.filter((challenge)=> {
        return challenge.type === type;
    });
    return filteredData;
}

function getQueryParams() {
  const queryParams = {};
  const params = window.location.search;
  const paramSearch = new URLSearchParams(params);
  queryParams.type = paramSearch.get("type");
  queryParams.minRating = paramSearch.get("min-rating");
  queryParams.maxRating = paramSearch.get("max-rating");
  queryParams.text = paramSearch.get("text");
  queryParams.tags = paramSearch.get("tags");
  if(queryParams.tags != null) {
    queryParams.tags = queryParams.tags.split(",");
  }
  return queryParams;
}

async function renderChallenges(queryParams, container, data, filterFunction, renderFunction) {
  const params =  queryParams;
  let challenges = data;

  if(params.type === "online") {
    challenges = filterFunction(challenges, "online");
  }
  else if(params.type === "onsite") {
    challenges = filterFunction(challenges, "onsite");
  }
  if(params.minRating != null && params.minRating > 0 && params.minRating < 5) {
    const starsFrom = document.querySelectorAll(".starsFrom li");
    starsFrom[parseInt(params.minRating)-1].click();
  }
  challenges.forEach((challenge) => {
    const card = renderFunction(challenge);
    container.append(card);
  });
}

export {filterByTypeOnLoad, getQueryParams, renderChallenges}