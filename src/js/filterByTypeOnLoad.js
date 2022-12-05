function filterByTypeOnLoad(data, type) {
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

async function renderChallenges(queryParams, container, data, filterFunction, renderFunction) {
  const type =  queryParams;
  let challenges = data;

  if(type === "online") {
    challenges = filterFunction(challenges, "online");
  }
  else if(type === "onsite") {
    challenges = filterFunction(challenges, "onsite");
  }
  challenges.forEach((challenge) => {
    const card = renderFunction(challenge);
    container.append(card);
  });
}

export {filterByTypeOnLoad, getQueryParams, renderChallenges}