export default async function renderChallenges(loadData, filterFunction=function(data){return data}, createCardFunction, challengeContainer) {
    let data = await loadData();
    data = filterFunction(data);
    data.forEach((challenge) => {
      const card = createCardFunction(challenge);
      challengeContainer.append(card);
    });
    return data;
  }