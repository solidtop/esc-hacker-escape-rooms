import { listeners } from "./modal.js"

 async function renderChallenges(data, filterFunction=function(data){return data}, createCardFunction, challengeContainer) {
  let challenges = await data;
    challenges = await filterFunction(challenges);
    challenges.forEach((challenge) => {
      const card = createCardFunction(challenge);
      challengeContainer.append(card);
    });
  }

  async function filterAndUpdateCards(data, renderFunction, challengeContainer, ...filterFunctions) {
    const sortByInputs = document.querySelectorAll("input[name='sort-by']");
    sortByInputs.forEach((input) => {
      input.checked = false;
    });
    let challenges = await data;
    challengeContainer.innerHTML = "";
    challengeContainer.nextElementSibling.classList.add("hidden");
    filterFunctions.forEach((filter)=> {
      challenges = filter(challenges);
    });
    if(challenges.length === 0) {
      challengeContainer.nextElementSibling.classList.remove("hidden");
    } else {
      challenges.forEach((challenge)=> {
        const currentCard = renderFunction(challenge);
        challengeContainer.append(currentCard);
      });
    }
    listeners();
  }

  export {renderChallenges, filterAndUpdateCards}