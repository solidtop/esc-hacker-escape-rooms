async function renderChallenges(data, filterFunction=function(data){return data}, createCardFunction, challengeContainer) {
    let challenges = await data;
    challenges = await filterFunction(challenges);
    challenges.forEach((challenge) => {
      const card = createCardFunction(challenge);
      challengeContainer.append(card);
    });
  }

  async function filterAndUpdateCards(data, renderFunction, challengeContainer, ...filterFunctions) {
    let challenges = await data;
    challengeContainer.innerHTML = "";
    challengeContainer.nextElementSibling.classList.add("hidden");
    filterFunctions.forEach((filter)=> {
      challenges = filter(challenges);
      console.log(challenges)
    });
    if(challenges.length === 0) {
      console.log("h")
      console.log(challengeContainer.nextSibling)
      challengeContainer.nextElementSibling.classList.remove("hidden");
    } else {
      challenges.forEach((challenge)=> {
        const currentCard = renderFunction(challenge);
        console.log(currentCard)
        challengeContainer.append(currentCard);
      });
    }
   
  }

  export {renderChallenges, filterAndUpdateCards}