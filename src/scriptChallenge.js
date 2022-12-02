import loadData from "./js/loadData.js";
import {
  filterByTypeOnLoad,
  getQueryParams,
  renderChallenges,
} from "./js/filterByTypeOnLoad.js";
import { filterAndUpdateCards } from "./js/renderChallenges.js";
import createChallengeCard from "./js/challengeCard.js";
import { filterByTypes } from "./js/filterType.js";
import { getTags, displayTags, filterByTags } from "./js/tag-filter.js";
import filterText from "./js/filterText.js";
import { handleStarInput, filterByRating } from "./js/filterRating.js";

const challengeContainer = document.querySelector(".challenge-list");
const textFilter = document.querySelector("#text-filter");
const onlineTypeInput = document.querySelector(
  "input[name='online-challenge']"
);
const onsiteTypeInput = document.querySelector(
  "input[name='on-site-challenge']"
);
const tagParent = document.querySelector("#btn-container");

async function run() {
  handleStarInput([])
  const challenges = await loadData();
  const queryParams = getQueryParams();
  renderChallenges(
    queryParams,
    challengeContainer,
    challenges,
    filterByTypeOnLoad,
    createChallengeCard
  );

  const tags = getTags(challenges);
  const buttons = displayTags(tags, challenges, tagParent);
  console.log(buttons);
  (await buttons).forEach((button) => {
    console.log(button);
    button.addEventListener("click", async (event) => {
      const currentButton = event.target;
      currentButton.classList.toggle("active");
      let selectedTags = tagParent.querySelectorAll(".active");
      selectedTags = Array.from(selectedTags);
      selectedTags = selectedTags.map((tag) => {
        return tag.textContent;
      });
      let data = challenges;
      console.log(data)
      data = await filterByTags(selectedTags, data);
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

  textFilter.addEventListener("keyup", async () => {
    let selectedTags = tagParent.querySelectorAll(".active");
    selectedTags = Array.from(selectedTags);
    selectedTags = selectedTags.map((tag) => {
      return tag.textContent;
    });
    let data = challenges;
    console.log(data)
    data = await filterByTags(selectedTags, data);
    filterAndUpdateCards(
      data,
      createChallengeCard,
      challengeContainer,
      filterText,
      filterByTypes,
      filterByRating
    );
  });

  onlineTypeInput.addEventListener("click", async () => {
    let selectedTags = tagParent.querySelectorAll(".active");
    selectedTags = Array.from(selectedTags);
    selectedTags = selectedTags.map((tag) => {
      return tag.textContent;
    });
    let data = challenges;
    console.log(data)
    data = await filterByTags(selectedTags, data);
    filterAndUpdateCards(
      data,
      createChallengeCard,
      challengeContainer,
      filterText,
      filterByTypes,
      filterByRating
    );
  });

  onsiteTypeInput.addEventListener("click", async () => {
    let selectedTags = tagParent.querySelectorAll(".active");
    selectedTags = Array.from(selectedTags);
    selectedTags = selectedTags.map((tag) => {
      return tag.textContent;
    });
    let data = challenges;
    console.log(data)
    data = await filterByTags(selectedTags, data);
    filterAndUpdateCards(
      data,
      createChallengeCard,
      challengeContainer,
      filterText,
      filterByTypes,
      filterByRating
    );
  });
}

run();
