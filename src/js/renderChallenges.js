async function renderChallenges(data, filterFunction=function(data){return data}, createCardFunction, challengeContainer) {
    let challenges = data;
    challenges = filterFunction(challenges);
    challenges.forEach((challenge) => {
      const card = createCardFunction(challenge);
      challengeContainer.append(card);
    });
  }

  function filterAndUpdateCards(data, renderFunction, challengeContainer, ...filterFunctions) {
    let challenges = data;
    console.log(challenges)
    filterFunctions.forEach((filter)=> {
      challenges = filter(challenges);
      
    });

    challengeContainer.innerHTML = "";
    challenges.forEach((challenge)=> {
      const currentCard = renderFunction(challenge);
      console.log(currentCard)
      challengeContainer.append(currentCard);
    })
  }

  export {renderChallenges, filterAndUpdateCards}