import loadData from "./js/loadData.js";
import { filterByTypeOnLoad, getQueryParams, renderChallenges } from "./js/filterByTypeOnLoad.js";
import { filterAndUpdateCards } from "./js/renderChallenges.js";
import createChallengeCard from "./js/challengeCard.js";
import { filterByTypes } from "./js/filterType.js";
import { getTags, displayTags, filterByTags } from "./js/tagFilter.js";
import filterText from "./js/filterText.js";
import { handleStarInput, filterByRating } from "./js/filterRating.js";
import { listeners } from "./js/modal.js";
import handeFilterMenu from "./js/filterMenu.js";
import { removeModal } from "./js/modal.js";
import { sortCards } from "./js/sortBy.js";

const challengeContainer = document.querySelector(".challenge-list");
const textFilter = document.querySelector("#text-filter");
const onlineTypeInput = document.querySelector(
  "input[name='online-challenge']"
);
const onsiteTypeInput = document.querySelector(
  "input[name='on-site-challenge']"
);
const typeInputs = [onlineTypeInput, onsiteTypeInput];
const tagParent = document.querySelector("#btn-container");
const ratingStars = document.querySelectorAll(".rating-star");

async function run() {
  const challenges = await loadData();
  const queryParams = getQueryParams();

  sortCards();

  if (queryParams.type === "online") {
    onlineTypeInput.setAttribute("checked", "true");
  } else if (queryParams.type === "onsite") {
    onsiteTypeInput.setAttribute("checked", "true");
  } else {
    onlineTypeInput.setAttribute("checked", "true");
    onsiteTypeInput.setAttribute("checked", "true");
  }

  //Add eventlistener for stars
  handleStarInput();

  ratingStars.forEach((star) => {
    star.addEventListener("click", async () => {
      let selectedTags = tagParent.querySelectorAll(".active");
      selectedTags = Array.from(selectedTags);
      selectedTags = selectedTags.map((tag) => {
        return tag.textContent;
      });
      
      let data = challenges;
      data = await filterByTags(selectedTags, data);
      await filterAndUpdateCards(
        data,
        createChallengeCard,
        challengeContainer,
        filterText,
        filterByTypes,
        filterByRating
      );
    });
  });
  
 
  const tags = getTags(challenges);
  const buttons = displayTags(tags, challenges, tagParent);

  //Add eventlistener for tag buttons
  (await buttons).forEach((button) => {
    button.addEventListener("click", async (event) => {
      const currentButton = event.target;
      currentButton.classList.toggle("active");
      let selectedTags = tagParent.querySelectorAll(".active");
      selectedTags = Array.from(selectedTags);
      selectedTags = selectedTags.map((tag) => {
        return tag.textContent;
      });
      let data = challenges;
      data = filterByTags(selectedTags, data);
       filterAndUpdateCards(
        data,
        createChallengeCard,
        challengeContainer,
        filterText,
        filterByTypes,
        filterByRating
      ); 
    });
  });

  
  // Add eventlistener for text filter
  textFilter.addEventListener("keyup", async () => {
    let selectedTags = tagParent.querySelectorAll(".active");
    selectedTags = Array.from(selectedTags);
    selectedTags = selectedTags.map((tag) => {
      return tag.textContent;
    });
    let data = challenges;
    data = await filterByTags(selectedTags, data);
    await filterAndUpdateCards(
      data,
      createChallengeCard,
      challengeContainer,
      filterText,
      filterByTypes,
      filterByRating
    );
  });

  // Add eventlistener for type input
  typeInputs.forEach((input) => {
    input.addEventListener("click", async () => {
      let selectedTags = tagParent.querySelectorAll(".active");
      selectedTags = Array.from(selectedTags);
      selectedTags = selectedTags.map((tag) => {
        return tag.textContent;
      });
      let data = challenges;
      data = await filterByTags(selectedTags, data);
      await filterAndUpdateCards(
        data,
        createChallengeCard,
        challengeContainer,
        filterText,
        filterByTypes,
        filterByRating
      );
    });
  });
  await renderChallenges(
    queryParams,
    challengeContainer,
    challenges,
    filterByTypeOnLoad,
    createChallengeCard
  );
  listeners();
}

run();

handeFilterMenu();
